import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, email, whatsapp, empresa, source = "site" } = body;

    if (!nome || !email || !whatsapp || !empresa) {
      return NextResponse.json(
        { success: false, error: "Todos os campos são obrigatórios (nome, email, whatsapp, empresa)." },
        { status: 400 }
      );
    }

    const leadData = {
      nome: String(nome).trim(),
      email: String(email).trim().toLowerCase(),
      whatsapp: String(whatsapp).trim(),
      empresa: String(empresa).trim(),
      source: String(source),
      created_at: new Date().toISOString(),
    };

    console.log("[NOVO LEAD RECEBIDO]:", leadData);

    // 1. Tentar salvar no Supabase se configurado
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

    let savedToSupabase = false;
    if (supabaseUrl && supabaseKey) {
      try {
        const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify(leadData),
        });

        if (response.ok) {
          savedToSupabase = true;
          console.log("[SUPABASE]: Lead salvo com sucesso na tabela leads.");
        } else {
          console.warn("[SUPABASE]: Resposta com erro ao salvar lead:", await response.text());
        }
      } catch (sbErr) {
        console.error("[SUPABASE]: Falha ao conectar ao Supabase:", sbErr);
      }
    }

    // 2. Fallback: Gravar em arquivo leads.json no servidor
    try {
      const filePath = path.join(process.cwd(), "leads.json");
      let leads: any[] = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        leads = JSON.parse(fileContent);
        if (!Array.isArray(leads)) leads = [];
      } catch {
        leads = [];
      }

      leads.push(leadData);
      await fs.writeFile(filePath, JSON.stringify(leads, null, 2), "utf-8");
      console.log("[LEADS.JSON]: Lead persistido com sucesso no arquivo leads.json.");
    } catch (fsErr) {
      console.warn("[LEADS.JSON]: Aviso ao persistir leads.json (ambiente somente leitura/serverless):", fsErr);
    }

    return NextResponse.json({
      success: true,
      message: "Lead recebido com sucesso!",
      savedToSupabase,
    });
  } catch (error: any) {
    console.error("[API/LEADS] Erro interno:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno ao processar requisição." },
      { status: 500 }
    );
  }
}
