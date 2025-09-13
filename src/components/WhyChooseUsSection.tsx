import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Scale, Lightbulb, Shield } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Cost Efficiency',
    description: 'Reduce operational costs by up to 70% through intelligent automation and streamlined processes.',
    stat: '70%',
    statLabel: 'Cost Reduction',
  },
  {
    icon: Scale,
    title: 'Scalability',
    description: 'Scale your operations seamlessly with AI solutions that grow with your business needs.',
    stat: '10x',
    statLabel: 'Faster Scaling',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Stay ahead of the competition with cutting-edge AI technologies and forward-thinking solutions.',
    stat: '99.9%',
    statLabel: 'Uptime Reliability',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Enterprise-grade security and reliability ensuring your business operations run smoothly 24/7.',
    stat: '24/7',
    statLabel: 'Support Available',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Why Choose Nexus Automations?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the advantage of partnering with industry leaders in AI automation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="service-card text-center group">
              <CardHeader className="space-y-4">
                <div className="mx-auto p-4 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading text-primary">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-accent mb-1">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {benefit.statLabel}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}