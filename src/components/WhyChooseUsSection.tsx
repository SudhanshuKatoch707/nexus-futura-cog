import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Zap, Clock, Euro, Headphones, Sparkles } from 'lucide-react';

const differentiators = [
  {
    icon: MapPin,
    title: '100% SMB Focused',
    description: 'We understand the unique challenges of small and medium businesses. Solutions tailored to your size, budget, and industry.',
  },
  {
    icon: Zap,
    title: 'No Code, No Complexity',
    description: 'Solutions your team can use without needing programmers. If you can use WhatsApp, you can use our automations.',
  },
  {
    icon: Clock,
    title: 'Results in 2-4 Weeks',
    description: 'No 6-month projects. See real value quickly with agile implementations and proven methodology.',
  },
  {
    icon: Euro,
    title: 'Transparent & Fair Pricing',
    description: 'No hidden costs or surprises. You know exactly what you pay and what you receive. Clear ROI from day 1.',
  },
  {
    icon: Headphones,
    title: '24/7 Dedicated Support',
    description: 'A team that speaks your language and understands your business. Fast response when you need it.',
  },
  {
    icon: Sparkles,
    title: 'Cutting-Edge Technology',
    description: 'We use the latest AI tools (GPT-4, Claude, Make, Zapier, n8n) for maximum efficiency and best results.',
  },
];

export default function WhyChooseUsSection() {
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
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            We're Not Just Another AI Agency
          </h2>
          <p className="text-lg text-muted-foreground">
            We're your local automation partner, specialized in helping businesses like yours thrive
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <Card
              key={index}
              data-index={index}
              className={`card-elevated p-0 transition-all duration-500 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
