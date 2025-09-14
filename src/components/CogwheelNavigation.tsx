import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface NavigationItem {
  id: string;
  label: string;
  angle: number;
}

const navigationItems: NavigationItem[] = [
  { id: 'automation', label: 'Business Process Automation', angle: 0 },
  { id: 'workflow', label: 'Workflow Optimization', angle: 51.43 },
  { id: 'analytics', label: 'Analytics Dashboards', angle: 102.86 },
  { id: 'rpa', label: 'RPA Solutions', angle: 154.29 },
  { id: 'integration', label: 'System Integration', angle: 205.71 },
  { id: 'consulting', label: 'AI Consulting', angle: 257.14 },
  { id: 'contact', label: 'Get Started', angle: 308.57 },
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
    const outerRadius = isHovered ? 180 : 170; // Made teeth bigger
    const toothWidth = 30; // Made teeth wider
    
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
    const labelRadius = 190; // Closer to teeth for better UX
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
      <div className="gear-rotating"> {/* Slow rotation added */}
        <svg width="400" height="400" className="drop-shadow-xl">
          <defs>
            <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--gear-primary))" />
              <stop offset="50%" stopColor="hsl(var(--gear-secondary))" />
              <stop offset="100%" stopColor="hsl(var(--gear-highlight) / 0.3)" />
            </linearGradient>
            <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--gear-primary))" />
              <stop offset="50%" stopColor="hsl(var(--gear-secondary))" />
              <stop offset="100%" stopColor="hsl(var(--gear-border))" />
            </linearGradient>
            <linearGradient id="toothHoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--gear-highlight))" />
              <stop offset="50%" stopColor="hsl(var(--primary-glow))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </linearGradient>
            <filter id="gearShadow">
              <feDropShadow dx="0" dy="5" stdDeviation="10" floodColor="hsl(var(--gear-shadow))" floodOpacity="0.4"/>
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
              fill={hoveredTooth === item.id ? "url(#toothHoverGradient)" : "url(#toothGradient)"}
              className={cn(
                "gear-tooth cursor-pointer transition-all duration-500",
                hoveredTooth === item.id && "drop-shadow-2xl"
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
            fill="url(#gearGradient)"
            stroke="hsl(var(--gear-highlight))"
            strokeWidth="3"
            className="drop-shadow-xl"
          />
          
          {/* Center content */}
          <text
            x="200"
            y="190"
            textAnchor="middle"
            className="fill-primary font-heading font-bold text-xl"
            style={{ filter: 'drop-shadow(0 0 10px hsl(var(--primary-glow)))' }}
          >
            NEXUS
          </text>
          <text
            x="200"
            y="210"
            textAnchor="middle"
            className="fill-accent font-heading font-medium text-sm"
            style={{ filter: 'drop-shadow(0 0 5px hsl(var(--accent-glow)))' }}
          >
            AI AUTOMATIONS
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
                ? "text-primary text-xl scale-110 text-glow" 
                : "text-gear-shadow text-base opacity-0"
            )}
            style={{
              left: position.x,
              top: position.y,
            }}
          >
            {isHovered && (
              <div className="whitespace-nowrap px-4 py-2 bg-gradient-to-r from-gear-primary/90 to-gear-secondary/90 backdrop-blur-xl rounded-lg border border-primary/70 shadow-2xl animate-fade-in">
                <span className="text-primary font-bold text-sm bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {item.label}
                </span>
                <div className="w-full h-0.5 bg-gradient-to-r from-primary to-accent mt-1 rounded-full animate-shimmer"></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}