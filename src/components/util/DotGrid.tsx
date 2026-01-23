import { useEffect, useRef, useState } from 'react';

export default function DotGrid() {
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const dotCentersRef = useRef<{ x: number; y: number }[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });
  const activeDotsRef = useRef<Set<number>>(new Set());
  const animationRef = useRef<number>(0);
  const waveTimeRef = useRef<number>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const [gridConfig, setGridConfig] = useState({
    rows: 18,
    cols: 2,
    gap: 10,
    dotSize: 6
  });

  // Reduced motion detection
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Grid calculation
  useEffect(() => {
    const calculateGrid = () => {
      const screenWidth = window.innerWidth;
      const dotSize = gridConfig.dotSize;
      const desiredCols = Math.ceil(screenWidth / (dotSize + gridConfig.gap));
      setGridConfig((prev) => ({ ...prev, cols: desiredCols }));
    };
    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, [gridConfig.gap, gridConfig.dotSize]);

  // Mouse handlers (ref instead of state)
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };
  const handleMouseLeave = () => {
    mouseRef.current = { x: -9999, y: -9999 };
    // Reset all active dots
    activeDotsRef.current.forEach((i) => {
      const dot = dotsRef.current[i];
      if (dot) {
        dot.style.transition =
          'transform 0.5s ease, background-color 1.8s ease';
        dot.style.transform = `translate(0px,0px)`;
        dot.style.backgroundColor = '#231827ff';
      }
    });
    activeDotsRef.current.clear();
  };

  // Precompute dot centers after grid render
  useEffect(() => {
    dotCentersRef.current = dotsRef.current.map((dot) => {
      if (!dot) return { x: 0, y: 0 };
      const rect = dot.getBoundingClientRect();
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    });
  }, [gridConfig.cols, gridConfig.rows]);

  // Main animation loop
  useEffect(() => {
    if (prefersReducedMotion) return;
    const repulsionRadius = 70;
    const maxPush = 10;
    // const waveDuration = 12000;

    const animate = (timestamp: number) => {
      waveTimeRef.current ||= timestamp;
      // const elapsed = timestamp - waveTimeRef.current;
      // const progress = (elapsed % waveDuration) / waveDuration;

      const newActiveDots = new Set<number>();

      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;

        // WAVE ANIMATION
        // const row = Math.floor(i / gridConfig.cols);
        // const wavePos = (row / gridConfig.rows + progress) % 1;
        // const waveIntensity = Math.sin(wavePos * Math.PI * 2) * 0.5 + 0.5;
        // dot.style.opacity = (0.3 + waveIntensity * 0.9).toString();

        // MOUSE REPULSION
        const center = dotCentersRef.current[i];
        const dx = center.x - mouseRef.current.x;
        const dy = center.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist <= repulsionRadius) {
          newActiveDots.add(i);
          const force = Math.min(maxPush, maxPush * (1 / (dist / 20)));
          const pushX = (dx / dist) * force;
          const pushY = (dy / dist) * force;
          const randomFactor = 0.2;
          const finalX = pushX + (Math.random() - 0.5) * randomFactor;
          const finalY = pushY + (Math.random() - 0.5) * randomFactor;
          dot.style.transition =
            'transform 0.4s cubic-bezier(0.34,0.56,0.64,1), background-color 0.8s ease';
          dot.style.transform = `translate(${finalX}px, ${finalY}px)`;
          dot.style.backgroundColor = 'rgb(70, 29, 83)';
        } else if (activeDotsRef.current.has(i)) {
          dot.style.transition =
            'transform 0.5s ease, background-color 1.8s ease';
          dot.style.transform = `translate(0px,0px)`;
          dot.style.backgroundColor = 'rgb(22, 35, 53)';
        }
      });

      activeDotsRef.current = newActiveDots;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [gridConfig.cols, gridConfig.rows, prefersReducedMotion]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${gridConfig.cols}, ${
          gridConfig.gap + gridConfig.dotSize
        }px)`,
        paddingBottom: '30rem'
      }}
    >
      {Array.from({ length: gridConfig.rows * gridConfig.cols }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          style={{
            width: gridConfig.dotSize,
            height: gridConfig.dotSize,
            borderRadius: '50%',
            background: 'rgb(22, 35, 53)',
            margin: gridConfig.gap
          }}
        />
      ))}
    </div>
  );
}
