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
    <section id="results" className="section-padding bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            The Results You Can Get
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business operations with measurable outcomes that drive real growth and success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <Card key={index} className="service-card text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="mx-auto p-4 bg-primary/10 rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                  <result.icon className="w-8 h-8 text-primary" />
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