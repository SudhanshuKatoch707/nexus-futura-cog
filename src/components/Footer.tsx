import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: 'Workflow Automation', href: '#services' },
    { label: 'Virtual Workforce', href: '#services' },
    { label: 'AI Consulting', href: '#services' },
    { label: 'Custom Solutions', href: '#contact' },
  ],
  resources: [
    { label: 'Case Studies', href: '#portfolio' },
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Support Center', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Security', href: '#' },
  ],
};

const socialLinks = [
  { icon: Mail, href: 'mailto:hello@nexusautomations.ai', label: 'Email' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="bg-gear-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold text-primary-glow mb-2">
                NEXUS AUTOMATIONS
              </h3>
              <p className="text-gear-shine text-sm leading-relaxed">
                Empowering businesses with the future of AI automation. 
                Transform your operations with cutting-edge technology and intelligent solutions.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gear-secondary rounded-lg hover:bg-gear-highlight transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Sections */}
          <div>
            <h4 className="font-heading font-semibold text-gear-shine mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-gear-shine/80 hover:text-primary-glow transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-gear-shine mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-gear-shine/80 hover:text-primary-glow transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-gear-shine mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-gear-shine/80 hover:text-primary-glow transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-gear-shine mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-gear-shine/80 hover:text-primary-glow transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gear-secondary" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gear-shine/80">
            © 2024 Nexus Automations. All rights reserved.
          </p>
          <p className="text-sm text-gear-shine/80 mt-2 md:mt-0">
            Powered by AI • Built for the Future
          </p>
        </div>
      </div>
    </footer>
  );
}