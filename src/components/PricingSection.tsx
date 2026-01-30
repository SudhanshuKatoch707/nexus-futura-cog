import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'For small businesses starting with automation',
    monthlyPrice: 497,
    annualPrice: 397,
    features: [
      { text: '1 simple automation (chatbot OR integration)', included: true },
      { text: 'Up to 500 interactions/month', included: true },
      { text: 'Email support (48h response)', included: true },
      { text: 'Basic dashboard', included: true },
      { text: 'Complete documentation', included: true },
      { text: 'Monthly optimization', included: false },
    ],
    cta: 'Start with Starter',
    popular: false,
    accent: 'border-border',
    bestFor: 'Small businesses testing AI',
  },
  {
    name: 'Professional',
    description: 'For growing businesses ready to scale',
    monthlyPrice: 997,
    annualPrice: 797,
    features: [
      { text: 'Up to 3 automations', included: true },
      { text: 'Unlimited interactions', included: true },
      { text: 'Priority support (24h response)', included: true },
      { text: 'Advanced dashboard + monthly reports', included: true },
      { text: '1 monthly optimization session', included: true },
      { text: 'Advanced integrations', included: true },
      { text: 'WhatsApp Business API included', included: true },
    ],
    cta: 'Start with Professional',
    popular: true,
    accent: 'border-primary',
    bestFor: 'Actively growing SMBs',
  },
  {
    name: 'Enterprise',
    description: 'For larger companies with complex needs',
    monthlyPrice: null,
    annualPrice: null,
    customPrice: 'Custom',
    startingFrom: 'From $2,500/mo',
    features: [
      { text: 'Unlimited automations', included: true },
      { text: 'Complex multi-system integrations', included: true },
      { text: 'Dedicated 24/7 support', included: true },
      { text: 'Custom AI for your industry', included: true },
      { text: 'Complete team training', included: true },
      { text: 'Monthly strategic consulting', included: true },
      { text: 'Guaranteed SLA', included: true },
      { text: 'Dedicated account manager', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
    accent: 'border-tertiary',
    bestFor: 'Medium/large companies with complex processes',
  },
];

interface PricingSectionProps {
  onNavigate: (sectionId: string) => void;
}

export default function PricingSection({ onNavigate }: PricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            Clear Pricing, No Surprises
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Choose the Perfect Plan for Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            All plans include: Free setup • No long-term contracts • 30-day guarantee
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
              isAnnual ? 'bg-accent' : 'bg-secondary'
            }`}
          >
            <span
              className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                isAnnual ? 'left-8' : 'left-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
            Annual <span className="text-accent">(Save 20%)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative card-elevated overflow-hidden transition-all duration-300 ${plan.accent} ${
                plan.popular ? 'scale-105 shadow-glow border-2' : 'border'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <CardHeader className="pb-4">
                <h3 className={`text-2xl font-heading font-bold ${plan.popular ? 'text-gradient-static' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Price */}
                <div className="pb-6 border-b border-border">
                  {plan.customPrice ? (
                    <>
                      <p className="text-4xl font-bold text-foreground">{plan.customPrice}</p>
                      <p className="text-sm text-muted-foreground">{plan.startingFrom}</p>
                    </>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-foreground font-mono">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-muted-foreground">/mo</span>
                      </div>
                      {isAnnual && (
                        <p className="text-sm text-muted-foreground line-through">
                          ${plan.monthlyPrice}/mo
                        </p>
                      )}
                    </>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/50'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={() => onNavigate('contact')}
                  className={`w-full ${
                    plan.popular
                      ? 'btn-primary'
                      : plan.name === 'Enterprise'
                      ? 'border-2 border-tertiary text-tertiary hover:bg-tertiary hover:text-background'
                      : 'btn-secondary'
                  }`}
                >
                  {plan.cta} →
                </Button>

                {/* Best For */}
                <p className="text-xs text-center text-muted-foreground">
                  Ideal for: {plan.bestFor}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            💳 Secure Payment
          </span>
          <span className="flex items-center gap-2">
            🔒 GDPR Compliant
          </span>
          <span className="flex items-center gap-2">
            🏢 Registered Business
          </span>
        </div>
      </div>
    </section>
  );
}
