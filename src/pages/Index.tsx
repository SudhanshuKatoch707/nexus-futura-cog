import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import PricingSection from '@/components/PricingSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen scroll-smooth">
      <Navigation onNavigate={handleNavigation} />
      <HeroSection onNavigate={handleNavigation} />
      <StatsSection />
      <ServicesSection />
      <ProcessSection onNavigate={handleNavigation} />
      <CaseStudiesSection />
      <PricingSection onNavigate={handleNavigation} />
      <WhyChooseUsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
