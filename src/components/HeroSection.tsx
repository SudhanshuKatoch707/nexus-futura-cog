import React from 'react';
import CogwheelNavigation from './CogwheelNavigation';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
      
      {/* Main content */}
      <div className="container mx-auto text-center z-10">
        {/* Cogwheel navigation */}
        <div className="mb-16">
          <CogwheelNavigation onNavigate={onNavigate} />
        </div>
        
        {/* Hero tagline */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold hero-text leading-tight">
            Empowering Businesses with the Future of AI Automation
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your operations with cutting-edge AI workflow automation, 
            intelligent virtual workforce, and enterprise-grade consulting solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              className="btn-hero text-lg px-8 py-6"
              onClick={() => onNavigate('contact')}
            >
              Book a Free Consultation
            </Button>
            <Button 
              variant="outline" 
              className="btn-secondary text-lg px-8 py-6"
              onClick={() => onNavigate('services')}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}