import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    industry: 'Restaurant',
    industryIcon: '🍽️',
    challenge: 'We were losing 10+ hours weekly responding to the same questions on WhatsApp and managing chaotic reservations...',
    solution: 'WhatsApp chatbot integration with reservation system for automated booking and inquiry handling.',
    results: [
      { value: '85%', label: 'Inquiries Resolved Automatically' },
      { value: '15h/week', label: 'Time Saved' },
      { value: '$800/mo', label: 'Reduced Labor Costs' },
    ],
    testimonial: {
      quote: 'The best investment we made this year. ROI was positive in the first month.',
      author: 'Maria G.',
      role: 'Restaurant Owner',
      rating: 5,
    },
  },
  {
    id: 2,
    industry: 'E-commerce',
    industryIcon: '🛒',
    challenge: 'Maintaining 24/7 customer support was impossible with our small team. We were losing sales to unanswered questions...',
    solution: 'AI assistant on website plus automated email sequences for order updates and support.',
    results: [
      { value: '90%', label: 'Customer Satisfaction' },
      { value: '+25%', label: 'Sales Increase' },
      { value: '24/7', label: 'Support Availability' },
    ],
    testimonial: {
      quote: 'Our customers now get instant responses, and we have not hired additional staff.',
      author: 'Carlos R.',
      role: 'E-commerce Founder',
      rating: 5,
    },
  },
  {
    id: 3,
    industry: 'Legal Services',
    industryIcon: '⚖️',
    challenge: 'Manual document processing was eating up our paralegals time. Papers were getting lost and deadlines missed...',
    solution: 'OCR plus automatic categorization and intelligent filing system with deadline tracking.',
    results: [
      { value: '20h/week', label: 'Hours Saved' },
      { value: '0%', label: 'Error Rate' },
      { value: '40%', label: 'Faster Case Processing' },
    ],
    testimonial: {
      quote: 'We can now take on more cases without hiring. The system pays for itself many times over.',
      author: 'Jennifer L.',
      role: 'Law Firm Partner',
      rating: 5,
    },
  },
];

export default function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    setIsAutoPlaying(false);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    setIsAutoPlaying(false);
  };

  const activeCase = caseStudies[activeIndex];

  return (
    <section id="case-studies" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-primary rounded-full" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-accent rounded-full" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            SMBs Already Automated
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from real businesses transformed by our AI automation solutions
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <Card className="card-elevated overflow-hidden">
            <CardContent className="p-8 md:p-10">
              {/* Industry Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                  <span className="text-xl">{activeCase.industryIcon}</span>
                  <span className="text-sm font-medium text-foreground">{activeCase.industry}</span>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>

              {/* Challenge */}
              <blockquote className="text-xl md:text-2xl text-foreground/90 italic leading-relaxed mb-6 border-l-4 border-primary/30 pl-4">
                "{activeCase.challenge}"
              </blockquote>

              {/* Solution */}
              <p className="text-muted-foreground mb-8">
                <strong className="text-foreground">Solution:</strong> {activeCase.solution}
              </p>

              {/* Results */}
              <div className="bg-secondary/50 border-l-4 border-accent rounded-r-lg p-6 mb-8">
                <div className="grid grid-cols-3 gap-4">
                  {activeCase.results.map((result, i) => (
                    <div key={i} className="text-center">
                      <p className="text-2xl md:text-3xl font-bold text-gradient-static font-mono">
                        {result.value}
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">
                        {result.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                  {activeCase.testimonial.author[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: activeCase.testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-tertiary text-tertiary" />
                    ))}
                  </div>
                  <p className="text-foreground italic mb-2">
                    "{activeCase.testimonial.quote}"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>{activeCase.testimonial.author}</strong> · {activeCase.testimonial.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:border-accent hover:text-accent transition-colors"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:border-accent hover:text-accent transition-colors"
            aria-label="Next case study"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {caseStudies.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-8 bg-accent'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to case study ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
