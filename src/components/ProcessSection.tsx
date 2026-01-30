import React, { useRef, useEffect, useState } from 'react';
import { Video, FileCheck, Rocket, Headphones, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: 1,
    icon: Video,
    title: 'Free Consultation',
    duration: '30 minutes',
    description: 'We analyze your business, identify repetitive processes, and define automation opportunities specific to your industry.',
    details: [
      'Video call via Zoom or Google Meet',
      'Analysis of current processes',
      'Identification of "quick wins"',
      'Potential savings estimation',
    ],
  },
  {
    number: 2,
    icon: FileCheck,
    title: 'Custom Proposal',
    duration: '48 hours',
    description: 'We design a tailored solution with transparent pricing, clear timeline, and projected ROI. You decide if we move forward.',
    details: [
      'Detailed scope document',
      'Fixed price, no surprises',
      'Implementation timeline',
      'Success KPIs and metrics',
    ],
  },
  {
    number: 3,
    icon: Rocket,
    title: 'Rapid Implementation',
    duration: '2-4 weeks',
    description: 'We configure, test, and deploy your automations. We train your team and ensure everything works perfectly.',
    details: [
      'Development and integration',
      'Exhaustive testing',
      'Team training',
      'Complete documentation',
    ],
  },
  {
    number: 4,
    icon: Headphones,
    title: 'Ongoing Support',
    duration: 'Continuous',
    description: 'We monitor, optimize, and constantly improve. Your success is our success.',
    details: [
      '24/7 support',
      'Monthly updates',
      'Continuous optimization',
      'New features included',
    ],
  },
];

interface ProcessStepProps {
  step: typeof steps[0];
  index: number;
  isLast: boolean;
}

function ProcessStep({ step, index, isLast }: ProcessStepProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline connector */}
      {!isLast && (
        <div className="hidden lg:block absolute left-1/2 top-full w-1 h-16 -translate-x-1/2 timeline-line" />
      )}

      <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 group">
        {/* Number Badge */}
        <div className="absolute -top-5 left-8 lg:left-1/2 lg:-translate-x-1/2">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-xl font-bold text-white shadow-glow">
            {step.number}
          </div>
        </div>

        <div className="pt-4">
          {/* Icon and Duration */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <step.icon className="w-6 h-6 text-accent" />
            </div>
            <span className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full">
              {step.duration}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-heading font-bold text-foreground mb-3">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-4">
            {step.description}
          </p>

          {/* Expandable Details */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-accent text-sm font-medium hover:underline"
          >
            {isExpanded ? 'Hide details' : 'View details'}
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {/* Details List */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? 'max-h-48 mt-4' : 'max-h-0'
            }`}
          >
            <ul className="space-y-2">
              {step.details.map((detail, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProcessSectionProps {
  onNavigate: (sectionId: string) => void;
}

export default function ProcessSection({ onNavigate }: ProcessSectionProps) {
  return (
    <section id="process" className="section-padding bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            Simple & Transparent Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            From Consultation to Results in 4 Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            No surprises, no technical complications
          </p>
        </div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-x-16 lg:gap-y-20 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            onClick={() => onNavigate('contact')}
            className="btn-primary"
          >
            Ready to Start? Schedule Your Consultation Now →
          </Button>
        </div>
      </div>
    </section>
  );
}
