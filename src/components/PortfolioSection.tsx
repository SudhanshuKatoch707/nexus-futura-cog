import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, TrendingUp } from 'lucide-react';

const caseStudies = [
  {
    title: 'FinTech Revolution',
    company: 'Global Bank Corp',
    industry: 'Finance',
    challenge: 'Manual loan processing taking 2-3 weeks',
    solution: 'AI-powered document processing and risk assessment automation',
    results: [
      '85% reduction in processing time',
      '40% increase in approval accuracy',
      '$2M annual cost savings'
    ],
    technologies: ['Machine Learning', 'Document AI', 'Risk Analytics'],
  },
  {
    title: 'Healthcare Transformation',
    company: 'MedTech Solutions',
    industry: 'Healthcare',
    challenge: 'Overwhelming patient inquiry volume',
    solution: 'Intelligent virtual assistants for patient support',
    results: [
      '90% reduction in response time',
      '60% increase in patient satisfaction',
      '24/7 support availability'
    ],
    technologies: ['NLP', 'Virtual Assistants', 'Healthcare AI'],
  },
  {
    title: 'E-commerce Scaling',
    company: 'RetailMax Inc',
    industry: 'E-commerce',
    challenge: 'Manual inventory and customer service bottlenecks',
    solution: 'End-to-end automation with AI-powered sales agents',
    results: [
      '300% increase in order processing',
      '50% improvement in customer satisfaction',
      '200% growth in revenue'
    ],
    technologies: ['RPA', 'Sales AI', 'Inventory Automation'],
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real businesses transformed by our AI automation solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="service-card group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {study.industry}
                  </Badge>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <CardTitle className="text-xl font-heading text-primary mb-2">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground font-medium">
                  {study.company}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm text-secondary mb-2">Challenge</h4>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm text-secondary mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm text-secondary mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}