import React from 'react';
import { ArrowRight, PlayCircle, CheckCircle2, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                🚀 AI Automation Specialists for SMBs
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-6">
              <span className="text-foreground block animate-fade-in">
                Automate Your Business.
              </span>
              <span className="text-gradient-static block animate-fade-in stagger-2">
                Grow Without Limits.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in stagger-3">
              Save 15-30 hours weekly and reduce costs by up to 60% with AI solutions 
              designed for small and medium businesses. No code. No complexity. 
              Just results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-in stagger-4">
              <Button
                onClick={() => onNavigate('contact')}
                className="btn-primary flex items-center justify-center gap-2 text-base"
              >
                Schedule Your Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button
                onClick={() => onNavigate('case-studies')}
                className="btn-secondary flex items-center justify-center gap-2 text-base"
              >
                <PlayCircle className="w-5 h-5" />
                View Success Stories
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-fade-in stagger-5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Results in 2-4 Weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>No Long-Term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Floating Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-48 bg-card border border-border rounded-2xl p-6 shadow-card animate-float">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Automation Active</p>
                    <p className="text-xs text-muted-foreground">Processing 247 tasks</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-3/5 bg-gradient-to-r from-accent to-primary rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute top-10 right-0 bg-card border border-border rounded-xl p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <p className="text-2xl font-bold text-gradient-static font-mono">+85%</p>
                <p className="text-xs text-muted-foreground">Efficiency</p>
              </div>

              <div className="absolute bottom-20 left-0 bg-card border border-border rounded-xl p-4 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <p className="text-2xl font-bold text-accent font-mono">24/7</p>
                <p className="text-xs text-muted-foreground">Automated</p>
              </div>

              <div className="absolute top-32 left-10 bg-card border border-accent/30 rounded-xl p-3 shadow-lg animate-float" style={{ animationDelay: '3s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <p className="text-xs text-foreground">Bot responding...</p>
                </div>
              </div>

              {/* Connection Lines (decorative) */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
                <path
                  d="M100,100 Q200,150 300,100 Q350,200 300,300 Q200,350 100,300 Q50,200 100,100"
                  stroke="url(#lineGrad)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle">
        <span className="text-sm text-muted-foreground">Discover how it works</span>
        <ChevronDown className="w-5 h-5 text-accent" />
      </div>
    </section>
  );
}
