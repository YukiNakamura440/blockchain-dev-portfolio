import { useState, useCallback, useEffect, useRef } from 'react';
import { Star, StarConfig, DEFAULT_STAR_CONFIG } from '@/types/star';

export const useStarSystem = (config: Partial<StarConfig> = {}) => {
  const fullConfig = { ...DEFAULT_STAR_CONFIG, ...config };
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(true);
  const starIdCounter = useRef(0);
  const animationFrame = useRef<number>();

  const createStar = useCallback((x: number, y: number): Star => {
    const offsetX = (Math.random() - 0.5) * fullConfig.spread;
    const offsetY = (Math.random() - 0.5) * fullConfig.spread;
    const size = Math.random() * (fullConfig.sizes.max - fullConfig.sizes.min) + fullConfig.sizes.min;
    const color = fullConfig.colors[Math.floor(Math.random() * fullConfig.colors.length)];
    const shape = fullConfig.shapes[Math.floor(Math.random() * fullConfig.shapes.length)];
    
    return {
      id: ++starIdCounter.current,
      x: x + offsetX,
      y: y + offsetY,
      size,
      color,
      shape,
      rotation: Math.random() * 360,
      opacity: 1,
      velocityX: (Math.random() - 0.5) * 2,
      velocityY: Math.random() * -3 - 1, // Always move upward
      lifetime: fullConfig.starLifetime,
      createdAt: Date.now(),
    };
  }, [fullConfig]);

  const addStar = useCallback((x: number, y: number) => {
    if (!isActive) return;
    
    setStars(prev => {
      if (prev.length >= fullConfig.maxStars) {
        return prev;
      }
      
      if (Math.random() < fullConfig.spawnRate) {
        return [...prev, createStar(x, y)];
      }
      return prev;
    });
  }, [createStar, fullConfig.maxStars, fullConfig.spawnRate, isActive]);

  const updateStars = useCallback(() => {
    const now = Date.now();
    
    setStars(prev => 
      prev
        .map(star => {
          const age = now - star.createdAt;
          const progress = age / star.lifetime;
          
          if (progress >= 1) {
            return null; // Mark for removal
          }
          
          return {
            ...star,
            x: star.x + star.velocityX * fullConfig.animationSpeed,
            y: star.y + star.velocityY * fullConfig.animationSpeed,
            rotation: star.rotation + 2 * fullConfig.animationSpeed,
            opacity: Math.max(0, 1 - progress),
          };
        })
        .filter((star): star is Star => star !== null)
    );
  }, [fullConfig.animationSpeed]);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      updateStars();
      animationFrame.current = requestAnimationFrame(animate);
    };
    
    if (isActive) {
      animationFrame.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [updateStars, isActive]);

  const clearStars = useCallback(() => {
    setStars([]);
  }, []);

  const toggleActive = useCallback(() => {
    setIsActive(prev => !prev);
  }, []);

  return {
    stars,
    mousePosition,
    setMousePosition,
    addStar,
    clearStars,
    toggleActive,
    isActive,
    config: fullConfig,
  };
};