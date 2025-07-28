import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  galaxy: 1 | 2;
  trail: { x: number; y: number }[];
  // Spiral properties
  armIndex: number;
  distanceFromCenter: number;
  angleInArm: number;
  brightness: number;
  originalX: number;
  originalY: number;
}

interface Galaxy {
  centerX: number;
  centerY: number;
  vx: number;
  vy: number;
  rotation: number;
  size: number;
  originalCenterX: number;
  originalCenterY: number;
}

const GalaxySimulation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const galaxiesRef = useRef<Galaxy[]>([]);
  const timeRef = useRef(0);
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
      
      if (galaxiesRef.current.length === 0) {
        initializeGalaxies();
      } else {
        // Update galaxy positions proportionally
        const oldCenterX1 = galaxiesRef.current[0].originalCenterX;
        const oldCenterX2 = galaxiesRef.current[1].originalCenterX;
        
        galaxiesRef.current[0].originalCenterX = canvas.width * 0.28;
        galaxiesRef.current[0].originalCenterY = canvas.height * 0.5;
        galaxiesRef.current[1].originalCenterX = canvas.width * 0.72;
        galaxiesRef.current[1].originalCenterY = canvas.height * 0.5;
        
        // Reset galaxies if canvas resized significantly
        if (Math.abs(oldCenterX1 - galaxiesRef.current[0].originalCenterX) > 50) {
          initializeGalaxies();
          initStars();
        }
      }
    };
    
    const initializeGalaxies = () => {
      galaxiesRef.current = [
        {
          centerX: canvas.width * 0.28,
          centerY: canvas.height * 0.5,
          vx: 0.3,
          vy: 0,
          rotation: 0,
          size: 100,
          originalCenterX: canvas.width * 0.28,
          originalCenterY: canvas.height * 0.5
        },
        {
          centerX: canvas.width * 0.72,
          centerY: canvas.height * 0.5,
          vx: -0.3,
          vy: 0,
          rotation: 0,
          size: 100,
          originalCenterX: canvas.width * 0.72,
          originalCenterY: canvas.height * 0.5
        }
      ];
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create beautiful spiral galaxies with 500 total stars
    if (starsRef.current.length === 0) {
      const initStars = () => {
        starsRef.current = [];
        
        for (let galaxyId = 1; galaxyId <= 2; galaxyId++) {
          const galaxy = galaxiesRef.current[galaxyId - 1];
          
          // Create 2 prominent spiral arms per galaxy
          for (let arm = 0; arm < 2; arm++) {
            const armStars = 100; // Increased from 50 to 100 per arm (200 per galaxy)
            
            for (let i = 0; i < armStars; i++) {
              const t = i / (armStars - 1);
              const radius = 10 + t * 80;
              
              // Perfect logarithmic spiral
              const spiralTightness = 0.35;
              const armOffset = arm * Math.PI; // 180° apart
              const baseAngle = spiralTightness * t * 6 * Math.PI + armOffset;
              
              // Add some natural variation
              const angleVariation = (Math.random() - 0.5) * 0.2;
              const radiusVariation = (Math.random() - 0.5) * 6;
              
              const finalRadius = radius + radiusVariation;
              const finalAngle = baseAngle + angleVariation;
              
              const x = galaxy.centerX + Math.cos(finalAngle) * finalRadius;
              const y = galaxy.centerY + Math.sin(finalAngle) * finalRadius * 0.2;
              
              // Rotational velocity
              const rotSpeed = 0.01 + (0.005 / Math.max(finalRadius * 0.01, 1));
              const direction = galaxyId === 1 ? 1 : -1;
              const vx = -Math.sin(finalAngle) * rotSpeed * direction;
              const vy = Math.cos(finalAngle) * rotSpeed * 0.2 * direction;
              
              starsRef.current.push({
                x, y, vx, vy,
                size: (Math.random() * 1 + 0.8) * 1.2, // Increased by 20% (multiplied by 1.2)
                opacity: Math.random() * 0.4 + 0.6,
                galaxy: galaxyId as 1 | 2,
                trail: [],
                armIndex: arm,
                distanceFromCenter: finalRadius,
                angleInArm: finalAngle,
                brightness: Math.random() * 0.5 + 0.5,
                originalX: x,
                originalY: y
              });
            }
          }
          
          // Add central bulge stars
          for (let i = 0; i < 50; i++) { // Increased from 20 to 50 per galaxy
            const radius = Math.random() * 15 + 3;
            const angle = Math.random() * 2 * Math.PI;
            const x = galaxy.centerX + Math.cos(angle) * radius;
            const y = galaxy.centerY + Math.sin(angle) * radius * 0.4;
            
            starsRef.current.push({
              x, y,
              vx: (Math.random() - 0.5) * 0.01,
              vy: (Math.random() - 0.5) * 0.01,
              size: (Math.random() * 1.2 + 1) * 1.2, // Increased by 20% (multiplied by 1.2)
              opacity: Math.random() * 0.3 + 0.7,
              galaxy: galaxyId as 1 | 2,
              trail: [],
              armIndex: -1,
              distanceFromCenter: radius,
              angleInArm: angle,
              brightness: Math.random() * 0.3 + 0.7,
              originalX: x,
              originalY: y
            });
          }
        }
      };

      initializeGalaxies();
      initStars();
    }

    // Animation loop with proper collision dynamics
    const animate = () => {
      timeRef.current += 1;
      
      const speedMultiplier = Math.max(0.4, 1 - scrollProgress * 0.6);
      const opacityMultiplier = Math.max(0.5, 1 - scrollProgress * 0.5);

      // Deep space background
      ctx.fillStyle = 'rgba(3, 0, 12, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const galaxy1 = galaxiesRef.current[0];
      const galaxy2 = galaxiesRef.current[1];
      
      // Calculate distance between galaxies
      const dx = galaxy2.centerX - galaxy1.centerX;
      const dy = galaxy2.centerY - galaxy1.centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Strong gravitational attraction between galaxies
      if (distance > 30) {
        const force = 0.00008 * speedMultiplier;
        const fx = (dx / distance) * force;
        const fy = (dy / distance) * force;
        
        galaxy1.vx += fx;
        galaxy1.vy += fy;
        galaxy2.vx -= fx;
        galaxy2.vy -= fy;
      } else {
        // When galaxies are very close, slow them down for merger
        galaxy1.vx *= 0.98;
        galaxy1.vy *= 0.98;
        galaxy2.vx *= 0.98;
        galaxy2.vy *= 0.98;
      }
      
      // Update galaxy positions
      galaxy1.centerX += galaxy1.vx * speedMultiplier;
      galaxy1.centerY += galaxy1.vy * speedMultiplier;
      galaxy2.centerX += galaxy2.vx * speedMultiplier;
      galaxy2.centerY += galaxy2.vy * speedMultiplier;
      
      // Keep galaxies roughly on screen
      const centerBuffer = 100;
      if (galaxy1.centerX < centerBuffer) galaxy1.vx = Math.abs(galaxy1.vx) * 0.5;
      if (galaxy1.centerX > canvas.width - centerBuffer) galaxy1.vx = -Math.abs(galaxy1.vx) * 0.5;
      if (galaxy1.centerY < centerBuffer) galaxy1.vy = Math.abs(galaxy1.vy) * 0.5;
      if (galaxy1.centerY > canvas.height - centerBuffer) galaxy1.vy = -Math.abs(galaxy1.vy) * 0.5;
      
      if (galaxy2.centerX < centerBuffer) galaxy2.vx = Math.abs(galaxy2.vx) * 0.5;
      if (galaxy2.centerX > canvas.width - centerBuffer) galaxy2.vx = -Math.abs(galaxy2.vx) * 0.5;
      if (galaxy2.centerY < centerBuffer) galaxy2.vy = Math.abs(galaxy2.vy) * 0.5;
      if (galaxy2.centerY > canvas.height - centerBuffer) galaxy2.vy = -Math.abs(galaxy2.vy) * 0.5;
      
      // Galaxy rotation
      galaxy1.rotation += 0.006 * speedMultiplier;
      galaxy2.rotation -= 0.006 * speedMultiplier;

      // Update stars with proper collision dynamics
      starsRef.current.forEach((star) => {
        const ownGalaxy = star.galaxy === 1 ? galaxy1 : galaxy2;
        const otherGalaxy = star.galaxy === 1 ? galaxy2 : galaxy1;
        
        // Force from own galaxy center (keeps galaxy structure)
        const dx1 = ownGalaxy.centerX - star.x;
        const dy1 = ownGalaxy.centerY - star.y;
        const r1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
        
        if (r1 > 1) {
          const force1 = 0.015 * speedMultiplier / Math.max(r1 * 0.5, 1);
          star.vx += (dx1 / r1) * force1;
          star.vy += (dy1 / r1) * force1;
        }
        
        // Tidal forces from other galaxy (creates collision effects)
        const dx2 = otherGalaxy.centerX - star.x;
        const dy2 = otherGalaxy.centerY - star.y;
        const r2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
        
        if (r2 > 1) {
          // Stronger tidal force when galaxies are closer
          const tidalStrength = distance < 100 ? 0.008 : 0.003;
          const force2 = tidalStrength * speedMultiplier / Math.max(r2 * 0.8, 5);
          star.vx += (dx2 / r2) * force2;
          star.vy += (dy2 / r2) * force2;
        }
        
        // Add stellar trails (small and tapered)
        star.trail.push({ x: star.x, y: star.y });
        if (star.trail.length > 4) { // Short trails
          star.trail.shift();
        }
        
        // Update position
        star.x += star.vx * speedMultiplier;
        star.y += star.vy * speedMultiplier;
        
        // Keep stars on screen with elastic boundaries
        const buffer = 50;
        if (star.x < buffer) {
          star.x = buffer;
          star.vx = Math.abs(star.vx) * 0.8;
        }
        if (star.x > canvas.width - buffer) {
          star.x = canvas.width - buffer;
          star.vx = -Math.abs(star.vx) * 0.8;
        }
        if (star.y < buffer) {
          star.y = buffer;
          star.vy = Math.abs(star.vy) * 0.8;
        }
        if (star.y > canvas.height - buffer) {
          star.y = canvas.height - buffer;
          star.vy = -Math.abs(star.vy) * 0.8;
        }
        
        // Beautiful diverse purple color palette
        const colors = [
          '#f3e8ff', // Very light purple
          '#e9d5ff', // Light lavender  
          '#d8b4fe', // Soft purple
          '#c084fc', // Medium light purple
          '#a855f7', // Standard purple
          '#9333ea', // Rich purple
          '#7c3aed', // Deep purple
          '#6d28d9', // Darker purple
          '#5b21b6', // Very deep purple
          '#4c1d95'  // Darkest purple
        ];
        
        // Use a combination of brightness and galaxy position for more color variety
        const colorSeed = (star.brightness * 0.6) + (star.galaxy * 0.2) + (star.armIndex * 0.2);
        const colorIndex = Math.floor(colorSeed * (colors.length - 1));
        const color = colors[Math.min(colorIndex, colors.length - 1)];
        
        // Draw small tapered trails
        if (star.trail.length > 1) {
          for (let i = 0; i < star.trail.length - 1; i++) {
            const trailPoint = star.trail[i];
            const nextPoint = star.trail[i + 1];
            
            // Tapered opacity and thickness
            const trailProgress = (i + 1) / star.trail.length;
            const trailOpacity = trailProgress * star.opacity * opacityMultiplier * 0.4;
            const trailThickness = trailProgress * star.size * 0.6;
            
            ctx.globalAlpha = trailOpacity;
            ctx.strokeStyle = color;
            ctx.lineWidth = Math.max(0.3, trailThickness);
            ctx.lineCap = 'round';
            
            ctx.beginPath();
            ctx.moveTo(trailPoint.x, trailPoint.y);
            ctx.lineTo(nextPoint.x, nextPoint.y);
            ctx.stroke();
          }
        }
        
        // Draw distinct stars
        ctx.globalAlpha = star.opacity * opacityMultiplier;
        ctx.fillStyle = color;
        
        // Small subtle glow
        ctx.shadowBlur = star.size * 0.5;
        ctx.shadowColor = color;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Scroll listener
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
      style={{ background: 'linear-gradient(135deg, #030009 0%, #180c2a 50%, #2a1b3d 100%)' }}
    />
  );
};

export default GalaxySimulation;
