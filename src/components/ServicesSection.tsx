import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Users, Brain } from 'lucide-react';
import workflowImage from '@/assets/workflow-automation.jpg';
import workforceImage from '@/assets/virtual-workforce.jpg';
import consultingImage from '@/assets/ai-consulting.jpg';

const services = [
  {
    icon: Zap,
    title: 'AI Workflow Automation',
    description: 'Automate repetitive tasks, streamline business processes, and enhance customer support with intelligent automation solutions.',
    image: workflowImage,
    features: ['Process Automation', 'Task Optimization', 'Customer Support AI', 'Document Processing'],
  },
  {
    icon: Users,
    title: 'AI-Powered Virtual Workforce',
    description: 'Deploy intelligent RPA agents and digital sales representatives that work 24/7 to grow your business.',
    image: workforceImage,
    features: ['Digital Sales Agents', 'Virtual Assistants', 'RPA Implementation', 'Scalable Solutions'],
  },
  {
    icon: Brain,
    title: 'Enterprise AI Consulting',
    description: 'Strategic AI integration consulting for finance, healthcare, e-commerce, and SMBs to drive digital transformation.',
    image: consultingImage,
    features: ['Strategic Planning', 'AI Integration', 'Industry Expertise', 'Custom Solutions'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Our AI Automation Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how Nexus Automations transforms businesses through cutting-edge AI solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card group">
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  src={service.image} 
                  alt={`${service.title} - Professional AI automation services`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gear-primary/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="p-3 bg-primary/20 backdrop-blur-sm rounded-lg">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full btn-secondary group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}