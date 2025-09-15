import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Target, BarChart3 } from 'lucide-react';

const results = [
  {
    icon: Clock,
    headline: 'Increased Efficiency',
    description: 'Reduce manual task time by up to 70% and free up your team to focus on strategic work.',
  },
  {
    icon: DollarSign,
    headline: 'Significant Cost Savings',
    description: 'Lower your operational costs by an average of 30% through streamlined and optimized processes.',
  },
  {
    icon: Target,
    headline: 'Improved Accuracy',
    description: 'Eliminate human error with a 99.9% data accuracy rate, ensuring reliable and consistent results.',
  },
  {
    icon: BarChart3,
    headline: 'Faster Decisions',
    description: 'Gain real-time insights with custom dashboards, enabling quicker, data-driven decisions.',
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="section-padding bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background tech elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-accent/20 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent/30 rounded-full animate-ping"></div>
      </div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            The Results You Can Get
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business operations with measurable outcomes that drive real growth and success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {results.map((result, index) => (
            <Card key={index} className="service-card text-center group hover:scale-105 transition-all duration-500 border-primary/20 bg-gradient-to-br from-card via-card/95 to-primary/5 backdrop-blur-sm">
              <CardContent className="pt-8 pb-6">
                <div className="mx-auto p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl w-fit mb-6 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 shadow-lg group-hover:shadow-primary/20">
                  <result.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  {result.headline}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {result.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}