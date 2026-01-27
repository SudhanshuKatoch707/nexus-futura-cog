import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Zap,
  Building2,
  Coffee,
  UtensilsCrossed,
  Store,
  Hotel,
  Calendar
} from 'lucide-react';

const problems = [
  { text: "Manual sales reporting", icon: AlertTriangle },
  { text: "No real visibility", icon: AlertTriangle },
  { text: "Data scattered in files", icon: AlertTriangle },
  { text: "Reactive decisions", icon: AlertTriangle },
  { text: "No historical structure", icon: AlertTriangle },
  { text: "Audit stress", icon: AlertTriangle },
];

const solutions = [
  { text: "Daily sales intelligence", icon: CheckCircle2 },
  { text: "Product performance tracking", icon: CheckCircle2 },
  { text: "Category insights", icon: CheckCircle2 },
  { text: "Weekly and monthly reports", icon: CheckCircle2 },
  { text: "Trend analysis", icon: CheckCircle2 },
  { text: "Missing sales alerts", icon: CheckCircle2 },
  { text: "Audit-ready records", icon: CheckCircle2 },
];

const industries = [
  { name: "Restaurants", icon: UtensilsCrossed },
  { name: "Cafés & Bars", icon: Coffee },
  { name: "Retail Stores", icon: Store },
  { name: "Hotels", icon: Hotel },
  { name: "Franchises", icon: Building2 },
  { name: "Event Venues", icon: Calendar },
];

export default function FlagshipProjectSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="flagship" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Flagship Label */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40 rounded-full backdrop-blur-sm">
            <Zap className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-bold tracking-wider text-primary uppercase">Flagship Product</span>
            <Zap className="w-5 h-5 text-primary animate-pulse" />
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Automated Sales Intelligence System
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 font-medium">
            Financial control for SMBs. <span className="text-primary">Automated.</span>
          </p>
        </div>

        {/* Short Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
            We built a system that transforms daily sales files into structured business intelligence.
            It captures sales automatically, structures product-level data, and continuously generates insights for business owners.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-foreground/90">
            No manual reports. No spreadsheets. No chaos.<br/>
            <span className="text-primary">Just clarity, control, and visibility.</span>
          </p>
        </div>

        {/* Business Value Block - Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Problems Column */}
          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-destructive">Problems SMBs Face</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0"></div>
                  <span className="text-foreground/80 text-lg">{problem.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary">What Our System Delivers</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-foreground/80 text-lg">{solution.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Message Line */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-2xl p-8 md:p-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-relaxed">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                "Know what you sell. Know what works. Stay in control."
              </span>
            </p>
          </div>
        </div>

        {/* Industry Applicability Block */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">
              Industry-Agnostic. Universally Powerful.
            </h3>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              This system works across restaurants, cafés, bars, bakeries, hotels, retail stores, dark kitchens, franchises, event venues, and any business that receives daily or periodic sales summaries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="flex flex-col items-center gap-3 p-4 bg-secondary/30 border border-primary/10 rounded-xl hover:border-primary/30 transition-colors">
                <industry.icon className="w-8 h-8 text-primary" />
                <span className="text-sm font-medium text-foreground/80 text-center">{industry.name}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-6 text-foreground/60 italic">
            The logic is universal. It focuses on products, categories, quantities, and revenue.<br/>
            Not POS systems. Not vendors. Not formats.
          </p>
        </div>

        {/* Positioning Block */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border-2 border-primary/40 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <p className="text-xl md:text-2xl font-bold text-foreground mb-4">
              This is not analytics software.<br/>
              This is not reporting software.
            </p>
            <p className="text-3xl md:text-4xl font-heading font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                This is business control.
              </span>
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToContact}
            className="btn-hero text-lg px-10 py-6 gap-3"
          >
            <BarChart3 className="w-5 h-5" />
            See Live Demo
          </Button>
          <Button 
            onClick={scrollToContact}
            variant="outline"
            className="text-lg px-10 py-6 border-2 border-primary/40 hover:bg-primary/10 hover:border-primary/60 gap-3"
          >
            <TrendingUp className="w-5 h-5" />
            Book Control Setup
          </Button>
        </div>
      </div>
    </section>
  );
}
