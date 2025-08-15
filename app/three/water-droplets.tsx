'use client';  // This tells Next.js that this component is a client-side component

import { useEffect, useRef } from "react";

interface Droplet {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

export default function WaterDroplets() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropletsRef = useRef<Droplet[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas(); // Initial resize to fit the window size
    window.addEventListener("resize", resizeCanvas);

    // Initialize droplets
    const initDroplets = () => {
      dropletsRef.current = [];
      for (let i = 0; i < 80; i++) {
        dropletsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 8 + 3,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.7 + 0.3,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
        });
      }
    };

    initDroplets();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dropletsRef.current.forEach((droplet) => {
        // Update position
        droplet.x += droplet.speedX;
        droplet.y += droplet.speedY;
        droplet.rotation += droplet.rotationSpeed;

        // Reset droplet if it goes off screen
        if (droplet.y > canvas.height + 20) {
          droplet.y = -20;
          droplet.x = Math.random() * canvas.width;
          droplet.size = Math.random() * 8 + 3;
          droplet.opacity = Math.random() * 0.7 + 0.3;
        }

        if (droplet.x > canvas.width + 20 || droplet.x < -20) {
          droplet.speedX *= -0.8;
        }

        // Draw realistic water droplet
        ctx.save();
        ctx.translate(droplet.x, droplet.y);
        ctx.rotate((droplet.rotation * Math.PI) / 180);
        ctx.globalAlpha = droplet.opacity;

        // Create gradient for 3D effect
        const gradient = ctx.createRadialGradient(
          -droplet.size * 0.3,
          -droplet.size * 0.3,
          0,
          0,
          0,
          droplet.size
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.9)");
        gradient.addColorStop(0.3, "rgba(96, 165, 250, 0.8)");
        gradient.addColorStop(0.7, "rgba(59, 130, 246, 0.6)");
        gradient.addColorStop(1, "rgba(37, 99, 235, 0.3)");

        // Draw droplet shape (teardrop)
        ctx.beginPath();
        ctx.arc(0, droplet.size * 0.2, droplet.size * 0.8, 0, Math.PI * 2);
        ctx.arc(0, -droplet.size * 0.3, droplet.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add highlight
        ctx.beginPath();
        ctx.arc(
          -droplet.size * 0.3,
          -droplet.size * 0.2,
          droplet.size * 0.2,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: "transparent" }}
      />

      {/* Additional CSS-based droplets for layers */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-1">
        <div className="advanced-droplet advanced-droplet-1"></div>
        <div className="advanced-droplet advanced-droplet-2"></div>
        <div className="advanced-droplet advanced-droplet-3"></div>
        <div className="advanced-droplet advanced-droplet-4"></div>
        <div className="advanced-droplet advanced-droplet-5"></div>
        <div className="advanced-droplet advanced-droplet-6"></div>
        <div className="advanced-droplet advanced-droplet-7"></div>
        <div className="advanced-droplet advanced-droplet-8"></div>
        <div className="ro-particle ro-particle-1"></div>
        <div className="ro-particle ro-particle-2"></div>
        <div className="ro-particle ro-particle-3"></div>
      </div>
    </>
  );
}
