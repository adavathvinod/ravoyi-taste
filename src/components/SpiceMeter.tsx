import { Flame } from 'lucide-react';

interface SpiceMeterProps {
  level: 1 | 2 | 3 | 4;
}

const SpiceMeter = ({ level }: SpiceMeterProps) => {
  const colors = [
    'text-spice-mild',
    'text-spice-medium', 
    'text-spice-hot',
    'text-spice-fire',
  ];

  return (
    <div className="flex gap-0.5 items-center">
      {[1, 2, 3, 4].map((i) => (
        <Flame 
          key={i}
          className={`w-3.5 h-3.5 transition-all duration-300 ${
            i <= level 
              ? `${colors[Math.min(i - 1, level - 1)]} spice-flame active` 
              : 'text-muted-foreground/30'
          }`}
          fill={i <= level ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
};

export default SpiceMeter;
