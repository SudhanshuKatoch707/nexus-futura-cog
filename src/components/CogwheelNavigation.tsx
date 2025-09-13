import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface NavigationItem {
  id: string;
  label: string;
  angle: number;
}

const navigationItems: NavigationItem[] = [
  { id: 'about', label: 'About Us', angle: 0 },
  { id: 'services', label: 'Services', angle: 51.43 }, // 360/7
  { id: 'portfolio', label: 'Portfolio', angle: 102.86 },
  { id: 'reviews', label: 'Reviews', angle: 154.29 },
  { id: 'blog', label: 'Blog', angle: 205.71 },
  { id: 'careers', label: 'Careers', angle: 257.14 },
  { id: 'contact', label: 'Contact Us', angle: 308.57 },
];

interface CogwheelNavigationProps {
  onNavigate: (sectionId: string) => void;
}

export default function CogwheelNavigation({ onNavigate }: CogwheelNavigationProps) {
  const [hoveredTooth, setHoveredTooth] = useState<string | null>(null);

  const createToothPath = (angle: number, isHovered: boolean) => {
    const centerX = 200;
    const centerY = 200;
    const innerRadius = 120;
    const outerRadius = isHovered ? 170 : 160;
    const toothWidth = 20;
    
    const startAngle = (angle - toothWidth / 2) * (Math.PI / 180);
    const endAngle = (angle + toothWidth / 2) * (Math.PI / 180);
    
    const innerStart = {
      x: centerX + innerRadius * Math.cos(startAngle),
      y: centerY + innerRadius * Math.sin(startAngle)
    };
    const innerEnd = {
      x: centerX + innerRadius * Math.cos(endAngle),
      y: centerY + innerRadius * Math.sin(endAngle)
    };
    const outerStart = {
      x: centerX + outerRadius * Math.cos(startAngle),
      y: centerY + outerRadius * Math.sin(startAngle)
    };
    const outerEnd = {
      x: centerX + outerRadius * Math.cos(endAngle),
      y: centerY + outerRadius * Math.sin(endAngle)
    };
    
    return `M ${innerStart.x} ${innerStart.y} 
            L ${outerStart.x} ${outerStart.y} 
            L ${outerEnd.x} ${outerEnd.y} 
            L ${innerEnd.x} ${innerEnd.y} Z`;
  };

  const createMainGearPath = () => {
    const centerX = 200;
    const centerY = 200;
    const radius = 120;
    
    return `M ${centerX + radius} ${centerY} 
            A ${radius} ${radius} 0 1 1 ${centerX - radius} ${centerY}
            A ${radius} ${radius} 0 1 1 ${centerX + radius} ${centerY} Z`;
  };

  const getLabelPosition = (angle: number) => {
    const labelRadius = 220;
    const centerX = 200;
    const centerY = 200;
    const radians = angle * (Math.PI / 180);
    
    return {
      x: centerX + labelRadius * Math.cos(radians),
      y: centerY + labelRadius * Math.sin(radians)
    };
  };

  return (
    <div className="relative flex items-center justify-center">
      <div className="gear-rotate">
        <svg width="400" height="400" className="drop-shadow-2xl">
          <defs>
            <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--gear-secondary))" />
              <stop offset="50%" stopColor="hsl(var(--gear-primary))" />
              <stop offset="100%" stopColor="hsl(var(--gear-highlight))" />
            </linearGradient>
            <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--gear-highlight))" />
              <stop offset="50%" stopColor="hsl(var(--gear-secondary))" />
              <stop offset="100%" stopColor="hsl(var(--gear-primary))" />
            </linearGradient>
            <filter id="gearShadow">
              <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="hsl(var(--gear-primary))" floodOpacity="0.3"/>
            </filter>
          </defs>
          
          {/* Main gear body */}
          <path
            d={createMainGearPath()}
            fill="url(#gearGradient)"
            filter="url(#gearShadow)"
            className="transition-all duration-300"
          />
          
          {/* Gear teeth */}
          {navigationItems.map((item) => (
            <path
              key={item.id}
              d={createToothPath(item.angle, hoveredTooth === item.id)}
              fill="url(#toothGradient)"
              className={cn(
                "gear-tooth cursor-pointer transition-all duration-500",
                hoveredTooth === item.id && "fill-primary/20"
              )}
              onMouseEnter={() => setHoveredTooth(item.id)}
              onMouseLeave={() => setHoveredTooth(null)}
              onClick={() => onNavigate(item.id)}
            />
          ))}
          
          {/* Center logo area */}
          <circle
            cx="200"
            cy="200"
            r="80"
            fill="hsl(var(--background))"
            stroke="url(#gearGradient)"
            strokeWidth="3"
            className="drop-shadow-lg"
          />
          
          {/* Center content */}
          <text
            x="200"
            y="190"
            textAnchor="middle"
            className="fill-primary font-heading font-bold text-xl"
          >
            NEXUS
          </text>
          <text
            x="200"
            y="210"
            textAnchor="middle"
            className="fill-secondary font-heading font-medium text-sm"
          >
            AUTOMATIONS
          </text>
        </svg>
      </div>
      
      {/* Navigation labels */}
      {navigationItems.map((item) => {
        const position = getLabelPosition(item.angle);
        const isHovered = hoveredTooth === item.id;
        
        return (
          <div
            key={`label-${item.id}`}
            className={cn(
              "absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none",
              "transition-all duration-300 font-heading font-semibold",
              isHovered 
                ? "text-primary text-lg scale-110 text-glow" 
                : "text-secondary text-sm opacity-70"
            )}
            style={{
              left: position.x,
              top: position.y,
            }}
          >
            {isHovered && (
              <div className="whitespace-nowrap px-3 py-1 bg-card/90 backdrop-blur-sm rounded-lg border border-primary/20">
                {item.label}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}