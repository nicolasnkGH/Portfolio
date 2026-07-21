import React, { useRef, useEffect, useCallback } from 'react';

/**
 * ParticlesBg – An interactive particle background inspired by
 * 21st.dev/@m.umairwaheedansari/particles-bg
 *
 * Features:
 *   - Floating connected particles
 *   - Mouse proximity highlighting & connection lines
 *   - Click to spawn burst particles
 *   - Smooth 60fps animation
 */
const ParticlesBg = ({
  particleCount = 80,
  particleColor = 'rgba(88, 166, 255, 0.6)',
  lineColor = 'rgba(88, 166, 255, 0.12)',
  particleRadius = 2,
  lineWidth = 0.6,
  connectionDistance = 150,
  speed = 0.4,
  mouseRadius = 200,
  className = '',
}) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animFrameRef = useRef(null);

  const createParticle = useCallback((x, y, w, h, isBurst = false) => {
    const angle = Math.random() * Math.PI * 2;
    const v = isBurst ? (Math.random() * 3 + 1) : (Math.random() * speed + 0.1);
    return {
      x: x ?? Math.random() * w,
      y: y ?? Math.random() * h,
      vx: Math.cos(angle) * v,
      vy: Math.sin(angle) * v,
      radius: isBurst
        ? Math.random() * 3 + 1
        : Math.random() * particleRadius + 0.5,
      alpha: isBurst ? 1 : Math.random() * 0.5 + 0.3,
      life: isBurst ? 1 : undefined,
    };
  }, [speed, particleRadius]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };
    resize();

    // Initialize particles
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    particlesRef.current = Array.from({ length: particleCount }, () =>
      createParticle(null, null, w, h)
    );

    const handleResize = () => {
      resize();
      // Re-initialize particles on resize
      const nw = canvas.offsetWidth;
      const nh = canvas.offsetHeight;
      particlesRef.current = Array.from({ length: particleCount }, () =>
        createParticle(null, null, nw, nh)
      );
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mouseRef.current = { x: clientX - rect.left, y: clientY - rect.top };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const mx = clientX - rect.left;
      const my = clientY - rect.top;
      
      // Update mouse position for glow effect if tapped
      mouseRef.current = { x: mx, y: my };

      const burstCount = 8 + Math.floor(Math.random() * 6);
      for (let i = 0; i < burstCount; i++) {
        particlesRef.current.push(
          createParticle(mx, my, canvas.offsetWidth, canvas.offsetHeight, true)
        );
      }
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchend', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('touchstart', handleClick, { passive: true });

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update & draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Burst particles fade out
        if (p.life !== undefined) {
          p.life -= 0.015;
          p.alpha = p.life;
          if (p.life <= 0) {
            particles.splice(i, 1);
            continue;
          }
        }

        // Wrap around edges
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;

        // Mouse proximity glow
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const glow = dist < mouseRadius ? (1 - dist / mouseRadius) * 0.6 : 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius + glow * 2, 0, Math.PI * 2);
        ctx.fillStyle = particleColor.replace(
          /[\d.]+\)$/,
          `${Math.min(p.alpha + glow, 1)})`
        );
        ctx.fill();

        // Outer glow ring on mouse proximity
        if (glow > 0.1) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius + glow * 6, 0, Math.PI * 2);
          ctx.fillStyle = particleColor.replace(/[\d.]+\)$/, `${glow * 0.15})`);
          ctx.fill();
        }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance);

            // Brighter when near mouse
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const mouseDist = Math.sqrt(
              (midX - mouse.x) ** 2 + (midY - mouse.y) ** 2
            );
            const mouseBoost = mouseDist < mouseRadius
              ? (1 - mouseDist / mouseRadius) * 0.5
              : 0;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = lineColor.replace(
              /[\d.]+\)$/,
              `${opacity * 0.2 + mouseBoost})`
            );
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        }
      }

      // Mouse attraction lines to nearby particles
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius * 0.8) {
          const opacity = (1 - dist / (mouseRadius * 0.8));
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = particleColor.replace(
            /[\d.]+\)$/,
            `${opacity * 0.15})`
          );
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchend', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('touchstart', handleClick);
    };
  }, [
    particleCount,
    particleColor,
    lineColor,
    particleRadius,
    lineWidth,
    connectionDistance,
    speed,
    mouseRadius,
    createParticle,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`particles-bg ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'auto',
      }}
    />
  );
};

export default ParticlesBg;
