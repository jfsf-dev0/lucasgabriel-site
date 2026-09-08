"use client";

import { useEffect, useRef } from "react";

export default function AmbientCanvas() {
  const particulasRef = useRef<HTMLCanvasElement>(null);
  const grainRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c1 = particulasRef.current;
    const c2 = grainRef.current;
    if (!c1 || !c2) return;

    const ctx1 = c1.getContext("2d");
    const ctx2 = c2.getContext("2d");
    if (!ctx1 || !ctx2) return;

    let animId: number;

    function resize() {
      if (!c1 || !c2) return;
      c1.width = window.innerWidth;
      c1.height = window.innerHeight;
      c2.width = window.innerWidth;
      c2.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const N = 120;
    const parts: {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      ax: number;
      ay: number;
      phase: number;
    }[] = [];

    for (let i = 0; i < N; i++) {
      parts.push({
        x: Math.random() * c1.width,
        y: Math.random() * c1.height,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        ax: 0,
        ay: 0,
        phase: Math.random() * Math.PI * 2,
      });
    }

    function drawParticles() {
      if (!c1 || !ctx1) return;
      ctx1.clearRect(0, 0, c1.width, c1.height);
      const t = Date.now() * 0.001;

      parts.forEach((p) => {
        p.ax = (Math.random() - 0.5) * 0.15;
        p.ay = (Math.random() - 0.5) * 0.15;
        p.vx = Math.max(-1.8, Math.min(1.8, p.vx + p.ax));
        p.vy = Math.max(-1.8, Math.min(1.8, p.vy + p.ay));
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = c1.width;
        if (p.x > c1.width) p.x = 0;
        if (p.y < 0) p.y = c1.height;
        if (p.y > c1.height) p.y = 0;

        const alpha = 0.22 + 0.38 * Math.abs(Math.sin(t * 1.2 + p.phase));
        ctx1.save();
        ctx1.beginPath();
        ctx1.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx1.fillStyle = `rgba(78, 131, 255, ${alpha})`;
        ctx1.shadowColor = "rgba(102, 175, 255, 0.7)";
        ctx1.shadowBlur = 9;
        ctx1.fill();
        ctx1.restore();
      });
    }

    function drawGrain() {
      if (!c2 || !ctx2) return;
      const w = c2.width;
      const h = c2.height;
      if (w === 0 || h === 0) return;
      const img = ctx2.createImageData(w, h);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        d[i] = v;
        d[i + 1] = v;
        d[i + 2] = v;
        d[i + 3] = 255;
      }
      ctx2.putImageData(img, 0, 0);
    }

    let grainCounter = 0;
    function loop() {
      drawParticles();
      // Only recompute grain every 3 frames for performance
      grainCounter++;
      if (grainCounter % 3 === 0) {
        drawGrain();
      }
      animId = requestAnimationFrame(loop);
    }

    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={particulasRef}
        id="particulas-canvas"
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      />
      <canvas
        ref={grainRef}
        id="grain-canvas"
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998] opacity-[0.03]"
      />
    </>
  );
}
