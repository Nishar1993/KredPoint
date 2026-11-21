import {useEffect, useRef} from 'react';

interface FloatingNode {
  xRatio: number;
  yRatio: number;
  radius: number;
  speedY: number;
  driftAmp: number;
  phase: number;
  alpha: number;
  tint: 'teal' | 'sage' | 'gold';
}

interface BarColumn {
  xOffset: number;
  baseHeight: number;
  amp: number;
  phase: number;
  width: number;
}

const FLOATING_NODES: FloatingNode[] = Array.from({length: 26}, (_, i) => ({
  xRatio: 0.36 + ((i * 37) % 62) / 100,
  yRatio: ((i * 53) % 100) / 100,
  radius: 1.4 + (i % 4) * 0.9,
  speedY: 0.012 + (i % 5) * 0.004,
  driftAmp: 12 + (i % 4) * 6,
  phase: i * 0.85,
  alpha: 0.22 + (i % 5) * 0.1,
  tint: i % 6 === 0 ? 'gold' : i % 2 === 0 ? 'teal' : 'sage',
}));

const BAR_COLUMNS: BarColumn[] = [
  {xOffset: -195, baseHeight: 74, amp: 14, phase: 0.0, width: 32},
  {xOffset: -145, baseHeight: 110, amp: 18, phase: 0.9, width: 32},
  {xOffset: -95, baseHeight: 146, amp: 20, phase: 1.8, width: 32},
  {xOffset: -45, baseHeight: 188, amp: 22, phase: 2.7, width: 32},
  {xOffset: 5, baseHeight: 232, amp: 24, phase: 3.6, width: 32},
];

interface DarkTealHeroCanvasProps {
  variant?: 'hero' | 'plain';
}

export function DarkTealHeroCanvas({variant = 'hero'}: DarkTealHeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = 0;
    let startTime = performance.now();

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawFrame = (elapsedSec: number) => {
      if (width === 0 || height === 0) return;

      // 1. Deep dark teal-green base gradient
      const baseGrad = ctx.createLinearGradient(0, 0, width, height);
      baseGrad.addColorStop(0, '#071B1A');
      baseGrad.addColorStop(0.5, '#0C2D2B');
      baseGrad.addColorStop(1, '#113E3A');
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Ambient aurora glow pools (slow fluid motion like a looping video)
      const glowX1 = width * (0.72 + Math.sin(elapsedSec * 0.25) * 0.05);
      const glowY1 = height * (0.38 + Math.cos(elapsedSec * 0.22) * 0.08);
      const glow1 = ctx.createRadialGradient(glowX1, glowY1, 10, glowX1, glowY1, width * 0.48);
      glow1.addColorStop(0, 'rgba(29, 148, 134, 0.34)');
      glow1.addColorStop(0.55, 'rgba(17, 94, 89, 0.16)');
      glow1.addColorStop(1, 'rgba(7, 27, 26, 0)');
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, width, height);

      const glowX2 = width * (0.86 + Math.cos(elapsedSec * 0.18) * 0.04);
      const glowY2 = height * (0.72 + Math.sin(elapsedSec * 0.27) * 0.07);
      const glow2 = ctx.createRadialGradient(glowX2, glowY2, 10, glowX2, glowY2, width * 0.36);
      glow2.addColorStop(0, 'rgba(140, 167, 123, 0.24)');
      glow2.addColorStop(0.6, 'rgba(45, 110, 96, 0.08)');
      glow2.addColorStop(1, 'rgba(7, 27, 26, 0)');
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, width, height);

      // 3. Flowing translucent wave ribbons
      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        const baseLineY = height * (0.48 + w * 0.14);
        for (let x = 0; x <= width; x += 24) {
          const wave =
            Math.sin(x * 0.0045 + elapsedSec * (0.45 + w * 0.12) + w * 1.4) * (24 + w * 8) +
            Math.cos(x * 0.0025 - elapsedSec * 0.3) * 14;
          const y = baseLineY + wave;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle =
          w === 0
            ? 'rgba(94, 234, 212, 0.14)'
            : w === 1
              ? 'rgba(140, 167, 123, 0.14)'
              : 'rgba(45, 212, 191, 0.09)';
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }

      // 4. Right-aligned translucent financial & tax motion graphics cluster (hero only)
      if (variant === 'hero') {
        const anchorX = width >= 900 ? width * 0.8 : width * 0.78;
        const anchorY = height * 0.82;
        const scale = Math.min(1, Math.max(0.62, width / 1280));

        ctx.save();
        ctx.translate(anchorX, anchorY);
        ctx.scale(scale, scale);

        // Subtle dark glass ledger frame behind bars
        const cardFloat = Math.sin(elapsedSec * 0.7) * 5;
        ctx.save();
        ctx.translate(-225, -275 + cardFloat);
        ctx.fillStyle = 'rgba(15, 58, 55, 0.42)';
        ctx.strokeStyle = 'rgba(153, 246, 228, 0.16)';
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.roundRect(0, 0, 290, 200, 18);
        ctx.fill();
        ctx.stroke();

        // Minimalist ledger lines inside glass frame
        for (let row = 0; row < 4; row++) {
          ctx.fillStyle = row === 0 ? 'rgba(153, 246, 228, 0.22)' : 'rgba(204, 251, 241, 0.1)';
          const barW = row === 0 ? 110 : row % 2 === 0 ? 185 : 140;
          ctx.beginPath();
          ctx.roundRect(24, 26 + row * 24, barW, 8, 4);
          ctx.fill();
        }
        ctx.restore();

        // Ascending animated financial bars
        BAR_COLUMNS.forEach((col, idx) => {
          const dynamicH = col.baseHeight + Math.sin(elapsedSec * 1.15 + col.phase) * col.amp;
          const barX = col.xOffset;
          const barY = -dynamicH;

          const barGrad = ctx.createLinearGradient(barX, barY, barX, 0);
          barGrad.addColorStop(0, idx >= 3 ? 'rgba(94, 234, 212, 0.62)' : 'rgba(140, 167, 123, 0.5)');
          barGrad.addColorStop(1, 'rgba(17, 94, 89, 0.15)');

          ctx.fillStyle = barGrad;
          ctx.strokeStyle = 'rgba(153, 246, 228, 0.28)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(barX, barY, col.width, dynamicH, [8, 8, 2, 2]);
          ctx.fill();
          ctx.stroke();
        });

        // Flowing growth spline & illuminated node tracking across the bars
        ctx.beginPath();
        BAR_COLUMNS.forEach((col, idx) => {
          const dynamicH = col.baseHeight + Math.sin(elapsedSec * 1.15 + col.phase) * col.amp;
          const cx = col.xOffset + col.width / 2;
          const cy = -dynamicH - 18;
          if (idx === 0) ctx.moveTo(cx, cy);
          else ctx.lineTo(cx, cy);
        });
        ctx.strokeStyle = 'rgba(167, 243, 208, 0.65)';
        ctx.lineWidth = 2;
        ctx.stroke();

        BAR_COLUMNS.forEach((col, idx) => {
          const dynamicH = col.baseHeight + Math.sin(elapsedSec * 1.15 + col.phase) * col.amp;
          const cx = col.xOffset + col.width / 2;
          const cy = -dynamicH - 18;
          const pulse = 3.5 + Math.sin(elapsedSec * 2 + idx) * 1;
          ctx.beginPath();
          ctx.arc(cx, cy, pulse + 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(94, 234, 212, 0.18)';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(cx, cy, pulse, 0, Math.PI * 2);
          ctx.fillStyle = '#99F6E4';
          ctx.fill();
        });

        ctx.restore();
      }

      // 5. Drifting light particles (cinematic depth)
      FLOATING_NODES.forEach((node) => {
        const yProgress = (node.yRatio - elapsedSec * node.speedY) % 1;
        const wrappedY = (yProgress < 0 ? yProgress + 1 : yProgress) * height;
        const spreadRatio = variant === 'plain' ? (node.xRatio - 0.36) / 0.62 : node.xRatio;
        const x = spreadRatio * width + Math.sin(elapsedSec * 0.7 + node.phase) * node.driftAmp;

        ctx.beginPath();
        ctx.arc(x, wrappedY, node.radius, 0, Math.PI * 2);
        if (node.tint === 'gold') {
          ctx.fillStyle = `rgba(232, 197, 122, ${node.alpha})`;
        } else if (node.tint === 'sage') {
          ctx.fillStyle = `rgba(140, 167, 123, ${node.alpha})`;
        } else {
          ctx.fillStyle = `rgba(94, 234, 212, ${node.alpha})`;
        }
        ctx.fill();
      });
    };

    resize();
    drawFrame(1.8);

    let isIntersecting = true;
    const stopLoop = () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const startLoop = () => {
      if (prefersReducedMotion || rafId || !isIntersecting) return;
      const render = (now: number) => {
        if (!isIntersecting) {
          rafId = 0;
          return;
        }
        const elapsedSec = (now - startTime) / 1000;
        drawFrame(elapsedSec);
        rafId = window.requestAnimationFrame(render);
      };
      rafId = window.requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (prefersReducedMotion || !isIntersecting) {
        drawFrame(1.8);
      }
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      {rootMargin: '250px 0px'},
    );
    visibilityObserver.observe(canvas);

    startLoop();

    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      stopLoop();
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
