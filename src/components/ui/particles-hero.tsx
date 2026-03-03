import React, { useEffect, useRef } from "react";

export function ParticlesHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initialiser les dimensions sans les relire à chaque frame
    sizeRef.current = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    canvas.width = sizeRef.current.width;
    canvas.height = sizeRef.current.height;

    // Utiliser ResizeObserver pour éviter les reflows
    const resizeObserver = new ResizeObserver(() => {
      sizeRef.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      canvas.width = sizeRef.current.width;
      canvas.height = sizeRef.current.height;
    });

    resizeObserver.observe(document.body);

    const particles = Array.from({ length: 32 }, () => ({
      x: Math.random() * sizeRef.current.width,
      y: Math.random() * sizeRef.current.height,
      r: 1.5 + Math.random() * 2.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      opacity: 0.3 + Math.random() * 0.5,
    }));

    function draw() {
      if (!ctx) return;
      const { width, height } = sizeRef.current;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16,185,129,${p.opacity})`;
        ctx.shadowColor = "#10b981";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      }
      requestAnimationFrame(draw);
    }
    draw();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />;
}
