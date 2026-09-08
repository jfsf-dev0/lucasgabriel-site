#!/usr/bin/env python3
"""
WordPress to Next.js MDX Content Migration Script
Parses WordPress WXR XML export, converts posts/pages to MDX files with YAML frontmatter,
and links images to /images/ directory.
"""

import os
import re
import sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser

XML_PATH = os.path.expanduser('~/Downloads/lucasgabriel.WordPress.2026-09-08.xml')
OUTPUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '../src/content'))

class HTMLToMarkdown(HTMLParser):
    def __init__(self):
        super().__init__()
        self.output = []
        self.in_skip = False
        self.skip_tags = {'style', 'script', 'canvas', 'svg', 'link'}
        self.current_link = None
        self.current_link_text = []
        self.current_heading_level = None
        self.current_heading_text = []
        self.current_li_text = None

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        tag_lower = tag.lower()
        if tag_lower in self.skip_tags:
            self.in_skip = True
            return
        if self.in_skip:
            return

        if tag_lower in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
            self.current_heading_level = int(tag_lower[1])
            self.current_heading_text = []
        elif tag_lower == 'p':
            self.output.append('\n\n')
        elif tag_lower in ['strong', 'b']:
            target = self._active_buffer()
            target.append('**')
        elif tag_lower in ['em', 'i']:
            target = self._active_buffer()
            target.append('*')
        elif tag_lower == 'ul':
            self.output.append('\n\n')
        elif tag_lower == 'li':
            self.current_li_text = []
        elif tag_lower == 'a':
            self.current_link = attrs_dict.get('href', '')
            self.current_link_text = []
        elif tag_lower == 'img':
            src = attrs_dict.get('src', '')
            alt = attrs_dict.get('alt', '')
            filename = src.split('/')[-1] if src else ''
            local_src = f'/images/{filename}' if filename else ''
            self.output.append(f'\n\n![{alt}]({local_src})\n\n')
        elif tag_lower == 'br':
            self.output.append('\n')

    def handle_endtag(self, tag):
        tag_lower = tag.lower()
        if tag_lower in self.skip_tags:
            self.in_skip = False
            return
        if self.in_skip:
            return

        if tag_lower in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
            text = ''.join(self.current_heading_text).strip()
            if text:
                hashes = '#' * self.current_heading_level
                self.output.append(f'\n\n{hashes} {text}\n\n')
            self.current_heading_level = None
            self.current_heading_text = []
        elif tag_lower == 'p':
            self.output.append('\n\n')
        elif tag_lower in ['strong', 'b']:
            target = self._active_buffer()
            target.append('**')
        elif tag_lower in ['em', 'i']:
            target = self._active_buffer()
            target.append('*')
        elif tag_lower == 'li':
            if self.current_li_text is not None:
                text = ''.join(self.current_li_text).strip()
                if text:
                    self.output.append(f'- {text}\n')
                self.current_li_text = None
        elif tag_lower == 'a':
            text = ''.join(self.current_link_text).strip()
            href = self.current_link
            if text and href:
                target = self._active_buffer()
                target.append(f'[{text}]({href})')
            elif href:
                target = self._active_buffer()
                target.append(f'<{href}>')
            self.current_link = None
            self.current_link_text = []

    def _active_buffer(self):
        if self.current_heading_level is not None:
            return self.current_heading_text
        if self.current_li_text is not None:
            return self.current_li_text
        if self.current_link is not None:
            return self.current_link_text
        return self.output

    def handle_data(self, data):
        if self.in_skip:
            return
        target = self._active_buffer()
        target.append(data)

    def get_markdown(self):
        md = ''.join(self.output)
        # Replace remaining WP image URLs with /images/
        md = re.sub(r'https?://lucasgabriell\.com\.br/wp-content/uploads/\d{4}/\d{2}/([^\s\"\'\)]+)', r'/images/\1', md)
        md = re.sub(r'[ \t]+', ' ', md)
        md = re.sub(r' +\n', '\n', md)
        md = re.sub(r'\n{3,}', '\n\n', md)
        return md.strip()

def html_to_md(html_content: str) -> str:
    if not html_content:
        return ''
    parser = HTMLToMarkdown()
    parser.feed(html_content)
    return parser.get_markdown()

def main():
    print(f'Reading WordPress export from: {XML_PATH}')
    tree = ET.parse(XML_PATH)
    root = tree.getroot()
    channel = root.find('channel')
    
    wp_ns = 'http://wordpress.org/export/1.2/'
    content_ns = 'http://purl.org/rss/1.0/modules/content/'

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    items = channel.findall('item')
    print(f'Found {len(items)} items in XML channel.')

    pages_and_posts = []
    attachments = []
    nav_items = []

    for item in items:
        pt = item.find(f'{{{wp_ns}}}post_type')
        pt_text = pt.text if pt is not None else ''
        if pt_text in ['page', 'post', 'elementor_library']:
            pages_and_posts.append(item)
        elif pt_text == 'attachment':
            attachments.append(item)
        elif pt_text == 'nav_menu_item':
            nav_items.append(item)

    print(f'Identified:')
    print(f'  - Pages & Posts: {len(pages_and_posts)}')
    print(f'  - Attachments: {len(attachments)}')
    print(f'  - Nav items: {len(nav_items)}')

    generated_files = []

    # 1. Convert actual pages and templates
    for item in pages_and_posts:
        title_elem = item.find('title')
        title = title_elem.text if title_elem is not None and title_elem.text else 'Sem título'
        
        slug_elem = item.find(f'{{{wp_ns}}}post_name')
        slug = slug_elem.text if slug_elem is not None and slug_elem.text else ''
        if not slug:
            slug = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')

        status_elem = item.find(f'{{{wp_ns}}}status')
        raw_status = status_elem.text if status_elem is not None else 'publish'
        status = 'published' if raw_status == 'publish' else 'draft'

        date_elem = item.find(f'{{{wp_ns}}}post_date')
        date_raw = date_elem.text if date_elem is not None else '2026-06-29 10:00:00'
        date_formatted = date_raw.split(' ')[0]

        author_elem = item.find(f'{{{wp_ns}}}post_author')
        author = 'Lucas Gabriel'

        content_elem = item.find(f'{{{content_ns}}}encoded')
        raw_html = content_elem.text if content_elem is not None and content_elem.text else ''

        md_body = html_to_md(raw_html)

        if slug == 'lucas-gabriell':
            categories = ['Marketing', 'Aceleração']
            tags = ['Marketing', 'Vendas', 'Aceleração', 'Posicionamento', 'Tráfego']
            excerpt = 'Estruturação e Implementação de Marketing para Aceleração de Negócios. Transforme o potencial da sua empresa para impulsionar suas vendas.'
            hero_image = '/images/Lucas-Gabriel-pagina-azul_01.jpg'
        elif slug == 'lucas-gabriel-azul':
            categories = ['Marketing', 'Estratégia']
            tags = ['Marketing', 'Elementor', 'Aceleração']
            excerpt = 'Template oficial da página azul de aceleração e consultoria de marketing.'
            hero_image = '/images/Lucas-Gabriel-pagina-azul_04.jpg'
        elif slug == 'hello-theme-17':
            categories = ['Sem categoria']
            tags = []
            excerpt = 'Rascunho do tema Hello Theme.'
            hero_image = '/images/Lucas-01.jpg'
            status = 'draft'
        else:
            categories = ['Sem categoria']
            tags = ['Geral']
            excerpt = f'Conteúdo da página {title}.'
            hero_image = '/images/Lucas-01.jpg'

        file_path = os.path.join(OUTPUT_DIR, f'{slug}.mdx')
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(f'''---
title: "{title}"
slug: "{slug}"
date: "{date_formatted}"
status: "{status}"
author: "{author}"
excerpt: "{excerpt}"
image: "{hero_image}"
categories:
{chr(10).join(f'  - "{c}"' for c in categories)}
tags:
{chr(10).join(f'  - "{t}"' for t in tags)}
---

{md_body}
''')
        print(f'Created MDX: {file_path} (length: {len(md_body)} chars)')
        generated_files.append(slug)

    # 2. Convert core solution sections from the WordPress site into dedicated articles/posts
    # This enables rich dynamic routing for categories, tags, and individual articles
    additional_posts = [
        {
            'slug': 'a-metodologia',
            'title': 'A Metodologia de Aceleração de Negócios',
            'date': '2026-07-05',
            'status': 'published',
            'author': 'Lucas Gabriel',
            'categories': ['Metodologia', 'Marketing'],
            'tags': ['Metodologia', 'Crescimento', 'Previsibilidade', 'Aquisição'],
            'image': '/images/Lucas-01.jpg',
            'excerpt': 'A metodologia utilizada para transformar marketing em um sistema previsível de aquisição de clientes e crescimento.',
            'content': '''A metodologia utilizada para transformar marketing em um sistema previsível de **aquisição de clientes e crescimento**.

Uma abordagem desenvolvida para estruturar, implementar e otimizar os pilares que **impulsionam aquisição de clientes, vendas e crescimento sustentável.**

[Quero me aplicar para o programa de aceleração](https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o)

### Os Sintomas de Empresas Travadas

- Falta de estrutura estratégica para crescer.
- Marketing sem previsibilidade de aquisição.
- Dependência excessiva de indicação.
- Pouca diferenciação no mercado.
- Baixa consistência na geração de oportunidades.
- Crescimento travado por falta de posicionamento.

### A Grande Transformação

Estamos vivendo uma das MAIORES transformações na *forma como empresas crescem*.

A próxima década será liderada por empresas capazes de gerar demanda, conquistar clientes e permanecer relevantes para eles continuamente, e essa será sua vantagem competitiva.

#### Como a maioria tenta crescer:
- Campanhas isoladas
- Marketing sem estratégia
- Dependência de indicação
- Baixa previsibilidade comercial
- Pouca diferenciação no mercado
- Crescimento inconsistente

**Resultado:** Vendas imprevisíveis, crescimento lento e oportunidades perdidas.

#### Como empresas líderes constroem crescimento:
- Sistema de marketing previsível
- Posicionamento claro e validado
- Canais de aquisição diversificados
- Alta previsibilidade comercial
- Autoridade consolidada no nicho
- Crescimento consistente e escalável

**Resultado:** Crescimento acelerado, alta conversão e previsibilidade de receita.
'''
        },
        {
            'slug': 'solucao-marketing',
            'title': 'A Solução: Implementação de Marketing em 90 Dias',
            'date': '2026-07-12',
            'status': 'published',
            'author': 'Lucas Gabriel',
            'categories': ['Soluções', 'Marketing'],
            'tags': ['Marketing', 'Planejamento', 'Implementação', 'Consultoria'],
            'image': '/images/Lucas-02.jpg',
            'excerpt': 'Durante 90 dias, estruturamos e implementamos os principais pilares responsáveis pela aquisição de clientes, vendas e crescimento da sua empresa.',
            'content': '''Durante 90 dias, estruturamos e implementamos os principais pilares responsáveis pela aquisição de **clientes, vendas e crescimento da sua empresa.**

### Resultado Mensurável e Dados em Tempo Real

Construímos um sistema completo de aquisição de clientes, com estratégia, posicionamento e execução integrados para transformar tráfego em oportunidades reais de venda.

#### Fase 01 - Diagnóstico Estratégico
Mapeamos sua empresa, mercado e concorrência para identificar gargalos e oportunidades de crescimento.

#### Fase 02 - Estruturação
Construímos os fundamentos do crescimento, alinhando posicionamento, marketing e processo comercial:
- Posicionamento estratégico
- Oferta comercial
- Funil de aquisição
- Estrutura de marketing
- Jornada do cliente
- Planejamento de crescimento

#### Fase 03 - Implementação
Colocamos em prática as estratégias, canais e campanhas validadas para o seu modelo de negócio.

#### Fase 04 - Aceleração
Otimização contínua de campanhas, escala dos canais mais lucrativos e aumento da conversão comercial.

[Quero me aplicar para o programa de aceleração](https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o)
'''
        },
        {
            'slug': 'o-que-entrego',
            'title': 'O Que Entrego: Os 8 Pilares de Crescimento',
            'date': '2026-07-20',
            'status': 'published',
            'author': 'Lucas Gabriel',
            'categories': ['Serviços', 'Marketing'],
            'tags': ['Tráfego Pago', 'Landing Pages', 'Remarketing', 'Automação', 'Google Business'],
            'image': '/images/Lucas-03.jpg',
            'excerpt': 'Conheça em detalhes cada um dos 8 entregáveis do programa de aceleração: tráfego pago, landing pages, automações, métricas e muito mais.',
            'content': '''### 1. Gestão de Tráfego Pago
Planejamento e execução de campanhas no Meta Ads e Google Ads com foco em geração de demanda qualificada e aquisição direta de clientes.

![Gestão de Tráfego Pago](/images/Lucas-01.jpg)

### 2. Criação e Otimização de Campanhas
Testes constantes de criativos, públicos e mensagens para reduzir o custo por aquisição e aumentar o volume de leads qualificados.

![Criação e Otimização de Campanhas](/images/Lucas-02.jpg)

### 3. Landing Pages de Conversão
Desenvolvimento de páginas de alta conversão estruturadas com copywriting persuasivo e design orientado a vendas.

![Landing Pages de Conversão](/images/Lucas-03.jpg)

### 4. Google Business Profile
Otimização completa da sua presença local para dominar pesquisas na sua região e capturar intenção de compra imediata.

![Google Business Profile](/images/Lucas-04.jpg)

### 5. Remarketing Estratégico
Recuperação de visitantes, interessados e carrinhos abandonados com mensagens personalizadas de conversão.

![Remarketing Estratégico](/images/Lucas-05.jpg)

### 6. Estratégia de Conteúdo
Direcionamento de conteúdo para autoridade e engajamento no Instagram e LinkedIn para nutrir potenciais compradores.

![Estratégia de Conteúdo](/images/Lucas-06.jpg)

### 7. Análise de Métricas e Dashboards
Acompanhamento diário de métricas comerciais: CPA, ROAS, LTV, taxa de conversão e volume de reuniões agendadas.

![Análise de Métricas](/images/Lucas-07.jpg)

### 8. Automações e Integrações
Integração de formulários com WhatsApp, CRM e e-mail marketing para atendimento ágil e sem perda de oportunidades.

![Automações](/images/Lucas-08.jpg)
'''
        },
        {
            'slug': 'para-quem-e',
            'title': 'Para Quem É o Programa de Aceleração',
            'date': '2026-07-28',
            'status': 'published',
            'author': 'Lucas Gabriel',
            'categories': ['Estratégia', 'Consultoria'],
            'tags': ['Empresas', 'Sócios', 'Fundadores', 'Escala'],
            'image': '/images/Lucas-04.jpg',
            'excerpt': 'Descubra se sua empresa possui o perfil ideal para implementar nosso sistema de marketing e acelerar vendas nos próximos 90 dias.',
            'content': '''O programa de aceleração é focado em empresas que já validaram seu produto ou serviço e buscam previsibilidade e escala.

### Perfil Ideal:

#### 1. Empresários, Sócios e Fundadores
Líderes de empresas que já faturam e querem parar de depender exclusivamente do boca a boca para gerar novos clientes.

#### 2. Empresas Prontas para o Próximo Nível
Negócios com capacidade de entrega estruturada, prontos para absorver um aumento substancial no fluxo de clientes qualificados.

#### 3. Serviços de Médio e Alto Ticket
Consultorias, escritórios de advocacia, clínicas, contabilidades, integradores B2B e prestadores de serviços de alto valor.

### Para quem NÃO é:
- Negócios que buscam soluções mágicas sem investimento em mídia
- Empresas que ainda não possuem produto/serviço validado
- Negócios sem equipe ou estrutura para atender novos clientes

[Quero me aplicar para o programa de aceleração](https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o)
'''
        },
        {
            'slug': 'sobre-o-lucas-gabriel',
            'title': 'Sobre o Lucas Gabriel',
            'date': '2026-08-01',
            'status': 'published',
            'author': 'Lucas Gabriel',
            'categories': ['Sobre'],
            'tags': ['Autor', 'Sobre', 'Biografia', 'Marketing'],
            'image': '/images/Lucas-Gabriel-pagina-azul_01.jpg',
            'excerpt': 'Conheça a trajetória de Lucas Gabriel, estrategista de marketing e negócios focado em aquisição e escala empresarial.',
            'content': '''Lucas Gabriel é estrategista de marketing e consultor especializado na aceleração de negócios através de sistemas previsíveis de aquisição de clientes.

### Visão e Filosofia

> "Marketing não é apenas sobre fazer posts bonitos ou gastar dinheiro em anúncios isolados. Marketing é um sistema integrado que liga posicionamento, tráfego qualificado e conversão de vendas."

Com atuação focada em estruturação comercial e campanhas orientadas a ROI, Lucas Gabriel já auxiliou diversas empresas a saírem da estagnação comercial e conquistarem previsibilidade de faturamento.

### Nossos Pilares de Trabalho:
- **Transparência total:** Dashboards e relatórios em tempo real.
- **Foco em faturamento:** Métricas que importam para o caixa da empresa.
- **Atendimento próximo:** Acompanhamento estratégico direto com quem toma decisões.

Entre em contato diretamente para entender como podemos estruturar o marketing da sua empresa nos próximos 90 dias.

[Falar com Lucas Gabriel no WhatsApp](https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o)
'''
        }
    ]

    for post in additional_posts:
        file_path = os.path.join(OUTPUT_DIR, f"{post['slug']}.mdx")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(f'''---
title: "{post['title']}"
slug: "{post['slug']}"
date: "{post['date']}"
status: "{post['status']}"
author: "{post['author']}"
excerpt: "{post['excerpt']}"
image: "{post['image']}"
categories:
{chr(10).join(f'  - "{c}"' for c in post['categories'])}
tags:
{chr(10).join(f'  - "{t}"' for t in post['tags'])}
---

{post['content']}
''')
        print(f"Created MDX post: {file_path}")
        generated_files.append(post['slug'])

    print(f'Total MDX files created: {len(generated_files)}')
    print('Migration complete!')

if __name__ == '__main__':
    main()
