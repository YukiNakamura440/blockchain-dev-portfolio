import { useEffect, useState } from 'react';
import { useStarSystem } from '@/hooks/useStarSystem';
import FlexibleStarParticle from './FlexibleStarParticle';
// import StarSystemControls from './StarSystemControls';
import { StarConfig } from '@/types/star';

interface FlexibleStarFieldProps {
  initialConfig?: Partial<StarConfig>;
  showControls?: boolean;
  className?: string;
}

const FlexibleStarField = ({ 
  initialConfig = {}, 
  showControls = true,
  className = ""
}: FlexibleStarFieldProps) => {
  const [config, setConfig] = useState<Partial<StarConfig>>(initialConfig);
  const {
    stars,
    mousePosition,
    setMousePosition,
    addStar,
    clearStars,
    toggleActive,
    isActive,
    config: fullConfig,
  } = useStarSystem(config);

  const [isMoving, setIsMoving] = useState(false);
  let moveTimeout: NodeJS.Timeout;

  const updateConfig = (newConfig: Partial<StarConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      setIsMoving(true);

      addStar(newPosition.x, newPosition.y);

      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const handleMouseLeave = () => {
      setIsMoving(false);
    };

    if (isActive) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(moveTimeout);
    };
  }, [addStar, setMousePosition, isActive]);

  return (
    <div className={className}>
      {/* Render stars */}
      {stars.map(star => (
        <FlexibleStarParticle
          key={star.id}
          star={star}
          glowIntensity={fullConfig.glowIntensity}
        />
      ))}
      
      {/* Cursor glow effect */}
      {isMoving && isActive && (
        <div
          className="fixed pointer-events-none z-40 transition-opacity duration-300"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            width: 100,
            height: 100,
            background: `radial-gradient(circle, hsl(var(--star-golden) / ${fullConfig.glowIntensity * 0.3}), transparent 70%)`,
            borderRadius: '50%',
            opacity: isMoving ? 1 : 0,
          }}
        />
      )}

      {/* Controls */}
      {/* {showControls && (
        <StarSystemControls
          config={fullConfig}
          onConfigChange={updateConfig}
          onClearStars={clearStars}
          onToggleActive={toggleActive}
          isActive={isActive}
          starCount={stars.length}
        />
      )} */}
    </div>
  );
};

export default FlexibleStarField;