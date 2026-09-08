"use client";

import { useEffect, useRef } from "react";

export default function AmbientCanvas() {
  const particulasRef = useRef<HTMLCanvasElement>(null);
  const grainRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Defer initialization to avoid blocking critical hydration and TBT
    const timer = setTimeout(() => {
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
        renderStaticGrain();
      }

      // Generate a lightweight 64x64 noise tile once, then pattern-fill
      function renderStaticGrain() {
        if (!c2 || !ctx2) return;
        const tile = document.createElement("canvas");
        tile.width = 64;
        tile.height = 64;
        const tCtx = tile.getContext("2d");
        if (!tCtx) return;

        const img = tCtx.createImageData(64, 64);
        const d = img.data;
        for (let i = 0; i < d.length; i += 4) {
          const v = (Math.random() * 255) | 0;
          d[i] = v;
          d[i + 1] = v;
          d[i + 2] = v;
          d[i + 3] = 255;
        }
        tCtx.putImageData(img, 0, 0);

        const pattern = ctx2.createPattern(tile, "repeat");
        if (pattern) {
          ctx2.fillStyle = pattern;
          ctx2.fillRect(0, 0, c2.width, c2.height);
        }
      }

      resize();
      window.addEventListener("resize", resize, { passive: true });

      const N = 35; // Optimized particle count for 60fps with 0 CPU strain
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
          r: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          ax: 0,
          ay: 0,
          phase: Math.random() * Math.PI * 2,
        });
      }

      function drawParticles() {
        if (!c1 || !ctx1 || document.hidden) return;
        ctx1.clearRect(0, 0, c1.width, c1.height);
        const t = Date.now() * 0.001;

        parts.forEach((p) => {
          p.ax = (Math.random() - 0.5) * 0.08;
          p.ay = (Math.random() - 0.5) * 0.08;
          p.vx = Math.max(-1.2, Math.min(1.2, p.vx + p.ax));
          p.vy = Math.max(-1.2, Math.min(1.2, p.vy + p.ay));
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = c1.width;
          if (p.x > c1.width) p.x = 0;
          if (p.y < 0) p.y = c1.height;
          if (p.y > c1.height) p.y = 0;

          const alpha = 0.2 + 0.3 * Math.abs(Math.sin(t * 1.2 + p.phase));
          ctx1.save();
          ctx1.beginPath();
          ctx1.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx1.fillStyle = `rgba(78, 131, 255, ${alpha})`;
          ctx1.shadowColor = "rgba(102, 175, 255, 0.5)";
          ctx1.shadowBlur = 6;
          ctx1.fill();
          ctx1.restore();
        });
      }

      function loop() {
        if (!document.hidden) {
          drawParticles();
        }
        animId = requestAnimationFrame(loop);
      }

      loop();

      return () => {
        window.removeEventListener("resize", resize);
        cancelAnimationFrame(animId);
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <canvas
        ref={particulasRef}
        id="particulas-canvas"
        aria-hidden="true"
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      />
      <canvas
        ref={grainRef}
        id="grain-canvas"
        aria-hidden="true"
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998] opacity-[0.025]"
      />
    </>
  );
}
