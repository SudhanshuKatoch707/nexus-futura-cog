import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageSquare, 
  Target, 
  FileText, 
  Link, 
  BarChart3, 
  Megaphone,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'Custom AI Assistants',
    description: 'Intelligent chatbots that serve your customers 24/7 on WhatsApp, web, and social media. They answer questions, schedule appointments, and capture leads automatically.',
  },
  {
    icon: Target,
    title: 'Sales Automation',
    description: 'Connect your CRM with email, WhatsApp, and LinkedIn. Automatic lead follow-up, personalized proposals, and reminders that close more deals.',
  },
  {
    icon: FileText,
    title: 'Smart Document Management',
    description: 'Process invoices, contracts, and documents automatically. Data extraction, categorization, and filing without manual intervention.',
  },
  {
    icon: Link,
    title: 'System Integration',
    description: 'We connect all your tools (CRM, email, WhatsApp, accounting) so they work together without manual effort.',
  },
  {
    icon: BarChart3,
    title: 'AI Data Analytics',
    description: 'Automatic dashboards, intelligent reports, and predictions that help you make better business decisions.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Automation',
    description: 'Email campaigns, social media content, and audience segmentation 100% automated and personalized.',
  },
];

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />
      
      <div className="container mx-auto relative z-10" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Automations that Transform Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect solution for your needs or combine them for maximum impact
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              data-index={index}
              className={`card-elevated p-0 overflow-hidden group cursor-pointer transition-all duration-500 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-gradient-static transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
