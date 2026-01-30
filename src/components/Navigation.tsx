import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}

const navLinks = [
  { label: 'Services', href: 'services' },
  { label: 'Success Stories', href: 'case-studies' },
  { label: 'Process', href: 'process' },
  { label: 'Pricing', href: 'pricing' },
  { label: 'FAQ', href: 'faq' },
];

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
      
      // Determine active section
      const sections = navLinks.map(link => link.href);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-nav border-b border-accent/20 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-1 group"
            >
              <span className="text-xl md:text-2xl font-heading font-bold text-foreground group-hover:text-gradient-static transition-all duration-300">
                Avanza
              </span>
              <span className="text-xl md:text-2xl font-heading font-light text-muted-foreground">
                Automations
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`nav-link text-sm font-medium ${
                    activeSection === link.href ? 'text-foreground active' : ''
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                onClick={() => handleNavClick('contact')}
                className="btn-primary flex items-center gap-2 px-6 py-2 text-sm"
              >
                <Sparkles className="w-4 h-4" />
                Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-card border-l border-border transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 px-6 pb-8">
            <nav className="flex-1 space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left px-4 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 ${
                    activeSection === link.href
                      ? 'text-primary bg-primary/10'
                      : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="pt-6 border-t border-border">
              <Button
                onClick={() => handleNavClick('contact')}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
