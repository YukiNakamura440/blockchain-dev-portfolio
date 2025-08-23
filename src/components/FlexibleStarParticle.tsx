import { Star } from '@/types/star';

interface FlexibleStarParticleProps {
  star: Star;
  glowIntensity: number;
}

const FlexibleStarParticle = ({ star, glowIntensity }: FlexibleStarParticleProps) => {
  const glowStyle = {
    filter: `drop-shadow(0 0 ${8 * glowIntensity}px ${star.color.replace('hsl(var(--', 'hsl(var(--').replace('))', ` / ${glowIntensity})`)})`,
  };

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{
        left: star.x - star.size / 2,
        top: star.y - star.size / 2,
        transform: `rotate(${star.rotation}deg)`,
        opacity: star.opacity,
      }}
    >
      <div
        className="animate-star-twinkle"
        style={{
          width: `${star.size}px`,
          height: `${star.size}px`,
          ...glowStyle,
        }}
      >
        <svg
          viewBox={star.shape.viewBox || '0 0 24 24'}
          fill="currentColor"
          className="w-full h-full"
          style={{ color: star.color }}
        >
          <path d={star.shape.path} />
        </svg>
      </div>
    </div>
  );
};

export default FlexibleStarParticle;