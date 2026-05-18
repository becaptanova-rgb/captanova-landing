"use client";
import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const colors = [
      "rgba(201,169,110,0.5)",
      "rgba(196,48,85,0.35)",
      "rgba(255,255,255,0.25)",
      "rgba(201,169,110,0.25)",
    ];
    const particles: HTMLDivElement[] = [];
    for (let i = 0; i < 45; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 3 + 1;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 15;
      p.style.cssText = `
        position:absolute;border-radius:50%;
        width:${size}px;height:${size}px;
        left:${Math.random() * 100}%;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        animation:floatUp ${duration}s ${delay}s linear infinite;
      `;
      container.appendChild(p);
      particles.push(p);
    }
    return () => particles.forEach((p) => p.remove());
  }, []);

  return (
    <>
      <style>{`
        @keyframes floatUp {
          0%   { transform:translateY(100vh) scale(0); opacity:0; }
          10%  { opacity:1; }
          90%  { opacity:0.4; }
          100% { transform:translateY(-10vh) scale(1); opacity:0; }
        }
      `}</style>
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      />
    </>
  );
}
