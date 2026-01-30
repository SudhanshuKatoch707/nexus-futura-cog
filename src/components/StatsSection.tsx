import React, { useEffect, useState, useRef } from 'react';
import { Building2, TrendingUp, Clock, Heart } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: 50,
    suffix: '+',
    label: 'Businesses Automated',
  },
  {
    icon: TrendingUp,
    value: 200,
    prefix: '$',
    suffix: 'K+',
    label: 'Cost Savings Delivered',
  },
  {
    icon: Clock,
    value: 15000,
    suffix: '+',
    label: 'Hours Recovered',
  },
  {
    icon: Heart,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
  },
];

function AnimatedCounter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <div ref={ref} className="stat-number font-mono">
      {prefix}{formatNumber(count)}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-primary/10 text-accent group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="w-6 h-6" />
              </div>
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
              <p className="text-sm text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
