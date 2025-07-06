
import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  galaxy: 1 | 2;
}

const GalaxySimulation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars only once
    if (starsRef.current.length === 0) {
      const initStars = () => {
        starsRef.current = [];
        const numStars = 150;

        // Galaxy 1 (left side)
        for (let i = 0; i < numStars; i++) {
          const angle = (i / numStars) * Math.PI * 4;
          const radius = 50 + (i / numStars) * 200;
          const centerX = canvas.width * 0.3;
          const centerY = canvas.height * 0.5;

          starsRef.current.push({
            x: centerX + Math.cos(angle) * radius + (Math.random() - 0.5) * 50,
            y: centerY + Math.sin(angle) * radius * 0.3 + (Math.random() - 0.5) * 50,
            vx: Math.cos(angle + Math.PI/2) * 0.5 + (Math.random() - 0.5) * 0.3,
            vy: Math.sin(angle + Math.PI/2) * 0.2 + (Math.random() - 0.5) * 0.3,
            size: Math.random() * 3 + 1, // Increased star size
            opacity: Math.random() * 0.8 + 0.2,
            galaxy: 1
          });
        }

        // Galaxy 2 (right side)
        for (let i = 0; i < numStars; i++) {
          const angle = (i / numStars) * Math.PI * 4;
          const radius = 50 + (i / numStars) * 200;
          const centerX = canvas.width * 0.7;
          const centerY = canvas.height * 0.5;

          starsRef.current.push({
            x: centerX + Math.cos(-angle) * radius + (Math.random() - 0.5) * 50,
            y: centerY + Math.sin(-angle) * radius * 0.3 + (Math.random() - 0.5) * 50,
            vx: Math.cos(-angle - Math.PI/2) * 0.5 + (Math.random() - 0.5) * 0.3,
            vy: Math.sin(-angle - Math.PI/2) * 0.2 + (Math.random() - 0.5) * 0.3,
            size: Math.random() * 3 + 1, // Increased star size
            opacity: Math.random() * 0.8 + 0.2,
            galaxy: 2
          });
        }
      };

      initStars();
    }

    // Animation loop
    const animate = () => {
      // Calculate speed and opacity based on scroll
      const speedMultiplier = Math.max(0.2, 1 - scrollProgress * 0.8);
      const opacityMultiplier = Math.max(0.3, 1 - scrollProgress * 0.7);

      // Use a lighter background clear with fade effect
      ctx.fillStyle = `rgba(10, 1, 24, ${0.05 + scrollProgress * 0.05})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        // Apply gravitational effects between galaxies
        const centerX = canvas.width * 0.5;
        const centerY = canvas.height * 0.5;
        
        const dx = centerX - star.x;
        const dy = centerY - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0) {
          const force = 0.0001 * speedMultiplier;
          star.vx += (dx / distance) * force;
          star.vy += (dy / distance) * force;
        }

        // Update position
        star.x += star.vx * speedMultiplier;
        star.y += star.vy * speedMultiplier;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw star with adjusted opacity
        const colors = star.galaxy === 1 
          ? ['#c084fc', '#a855f7', '#e0e7ff'] 
          : ['#8b5cf6', '#7c3aed', '#ddd6fe'];
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        ctx.globalAlpha = star.opacity * opacityMultiplier;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Scroll listener for smooth speed control
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 0.8;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0a0118 0%, #2d1b69 50%, #6b46c1 100%)' }}
    />
  );
};

export default GalaxySimulation;
