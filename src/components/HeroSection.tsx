import React from 'react';
import CogwheelNavigation from './CogwheelNavigation';
import { Button } from '@/components/ui/button';


interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-secondary/20">
      {/* AI Automation Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating AI nodes */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-accent/40 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-primary/20 rounded-full animate-bounce" />
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-accent/30 rounded-full animate-pulse" />
        
        {/* Circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <path d="M100,100 L300,100 L300,300 L500,300" stroke="url(#circuit-gradient)" strokeWidth="1" fill="none" />
          <path d="M700,200 L900,200 L900,400 L700,400" stroke="url(#circuit-gradient)" strokeWidth="1" fill="none" />
          <path d="M200,600 L400,600 L400,800 L600,800" stroke="url(#circuit-gradient)" strokeWidth="1" fill="none" />
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Data flow particles */}
        <div className="absolute top-1/4 left-1/4 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-full h-px bg-gradient-to-l from-transparent via-accent/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Brand Logo and Opening Text */}
      <div className="text-center mb-16 px-6 z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-2">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-shimmer">
              AVANZA
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-heading font-light tracking-[0.2em] text-primary/70">
            TECH
          </p>
        </div>
        <h2 className="text-2xl md:text-4xl font-heading font-semibold mb-6">
          <span className="bg-gradient-to-r from-primary/90 to-accent/90 bg-clip-text text-transparent">
            AI Automation Solutions
          </span>
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Transform your business with intelligent automation. Streamline workflows, optimize processes, and unlock unprecedented efficiency.
        </p>
      </div>

      {/* Cogwheel Navigation - Centered in Middle */}
      <div className="flex-1 flex items-center justify-center z-10">
        <CogwheelNavigation onNavigate={onNavigate} />
      </div>

      {/* Call to Action */}
      <div className="mb-16 flex flex-col sm:flex-row gap-4 z-10">
        <Button 
          onClick={() => onNavigate('contact')}
          className="btn-hero text-lg px-8 py-4"
        >
          Get Started Today
        </Button>
        <Button 
          onClick={() => onNavigate('automation')}
          variant="outline"
          className="btn-secondary text-lg px-8 py-4 border-primary/30 hover:bg-primary/10"
        >
          Explore Solutions
        </Button>
      </div>
    </section>
  );
}