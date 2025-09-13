import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'hello@nexusautomations.ai',
    description: 'Get a response within 24 hours',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+1 (555) 123-4567',
    description: 'Mon-Fri 9AM-6PM EST',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: 'San Francisco, CA',
    description: 'Remote-first company',
  },
  {
    icon: Clock,
    title: 'Quick Response',
    details: '< 2 Hours',
    description: 'Average response time',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how AI automation can revolutionize your operations. Book a free consultation today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="service-card">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary">
                Book Your Free Consultation
              </CardTitle>
              <CardDescription>
                Tell us about your business challenges and discover how we can help
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@company.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Company Name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your automation needs</Label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your current challenges and how we might help..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full btn-hero">
                Book Free Consultation
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="service-card text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-primary mb-2">
                      {info.title}
                    </h3>
                    <p className="font-medium text-foreground mb-1">
                      {info.details}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="service-card">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-primary">
                  What Happens Next?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm font-semibold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Free Consultation</h4>
                      <p className="text-sm text-muted-foreground">We discuss your challenges and automation opportunities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm font-semibold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Custom Strategy</h4>
                      <p className="text-sm text-muted-foreground">We create a tailored automation roadmap for your business</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm font-semibold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Implementation</h4>
                      <p className="text-sm text-muted-foreground">We deploy and optimize your AI automation solutions</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}