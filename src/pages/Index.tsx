import React from 'react';
import HeroSection from '@/components/HeroSection';
import ResultsSection from '@/components/ResultsSection';
import FlagshipProjectSection from '@/components/FlagshipProjectSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import SimpleContactForm from '@/components/SimpleContactForm';

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
    <div className="min-h-screen">
      <HeroSection onNavigate={handleNavigation} />
      <ResultsSection />
      <FlagshipProjectSection />
      <WhyChooseUsSection />
      <SimpleContactForm />
    </div>
  );
};

export default Index;
