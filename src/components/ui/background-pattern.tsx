import React, { useEffect, useRef } from "react";

export function BackgroundPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initialiser les dimensions une seule fois
    sizeRef.current = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    canvas.width = sizeRef.current.width;
    canvas.height = sizeRef.current.height;

    // Utiliser ResizeObserver au lieu de window.resize
    const resizeObserver = new ResizeObserver(() => {
      sizeRef.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      canvas.width = sizeRef.current.width;
      canvas.height = sizeRef.current.height;
    });

    resizeObserver.observe(document.body);

    // Crée des points flottants
    const points = Array.from({ length: 40 }, () => ({
      x: Math.random() * sizeRef.current.width,
      y: Math.random() * sizeRef.current.height,
      r: 3 + Math.random() * 3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      color: "#10b981",
      opacity: 0.22 + Math.random() * 0.18,
    }));

    let running = true;
    function animate() {
      if (!ctx) return;
      const { width, height } = sizeRef.current;
      ctx.clearRect(0, 0, width, height);
      for (const p of points) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (running) requestAnimationFrame(animate);
    }
    animate();
    return () => {
      running = false;
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none select-none"
      style={{
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        opacity: 0.9,
        contain: "layout style paint",
        willChange: "contents",
      }}
    />
  );
}
