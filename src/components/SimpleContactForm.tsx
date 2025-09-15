import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export default function SimpleContactForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.companyName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS (you'll need to set up your service ID, template ID, and public key)
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_email: 'avanzatech.co@gmail.com',
          from_company: formData.companyName,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setIsSubmitted(true);
      setFormData({ companyName: '', email: '', message: '' });
      
      toast({
        title: "Success!",
        description: "Thank you for your message! We'll get back to you soon.",
      });
    } catch (error) {
      console.error('Email send failed:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-gradient-to-t from-secondary/10 to-background">
        <div className="container mx-auto max-w-2xl">
          <Card className="service-card text-center">
            <CardContent className="pt-8 pb-6">
              <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Thank you for your message!
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                We'll get back to you soon.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
              >
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-t from-secondary/10 to-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Let's Get Started
          </h2>
          <p className="text-xl text-muted-foreground">
            Fill out the form below and we'll be in touch to discuss how AI automation can transform your business.
          </p>
        </div>
        
        <Card className="service-card">
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-primary text-center">
              Get in Touch
            </CardTitle>
            <CardDescription className="text-center">
              Tell us about your automation needs and we'll provide a customized solution.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input 
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Your Company Name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@company.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your automation needs..."
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full btn-hero"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}