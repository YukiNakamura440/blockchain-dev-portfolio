export interface StarConfig {
  spawnRate: number; // 0-1, chance per mouse move
  maxStars: number;
  starLifetime: number; // in milliseconds
  colors: string[];
  sizes: { min: number; max: number };
  spread: number; // radius around cursor
  animationSpeed: number;
  glowIntensity: number;
  shapes: StarShape[];
}

export interface StarShape {
  name: string;
  path: string;
  viewBox?: string;
}

export interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  shape: StarShape;
  rotation: number;
  opacity: number;
  velocityX: number;
  velocityY: number;
  lifetime: number;
  createdAt: number;
}

export const DEFAULT_STAR_CONFIG: StarConfig = {
  spawnRate: 0.3,
  maxStars: 50,
  starLifetime: 3000,
  colors: ['hsl(var(--star-golden))', 'hsl(var(--star-silver))', 'hsl(var(--star-cosmic))'],
  sizes: { min: 4, max: 12 },
  spread: 60,
  animationSpeed: 1,
  glowIntensity: 0.8,
  shapes: [
    {
      name: 'classic',
      path: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
      viewBox: '0 0 24 24'
    },
    {
      name: 'sparkle',
      path: 'M12 0l1.5 4.5L18 6l-4.5 1.5L12 12l-1.5-4.5L6 6l4.5-1.5L12 0z',
      viewBox: '0 0 24 12'
    },
    {
      name: 'diamond',
      path: 'M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z',
      viewBox: '0 0 24 24'
    }
  ]
};