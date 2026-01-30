import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need technical knowledge to use the automations?',
    answer: 'Not at all. We design all our solutions so that any team member can use them. We include complete training and the interface is as simple as using WhatsApp or email.',
  },
  {
    question: 'How long does implementation take?',
    answer: 'Most automations are running in 2-4 weeks. More complex projects can take 6-8 weeks. We give you a clear timeline from the start and meet deadlines.',
  },
  {
    question: 'What if it doesn\'t work for my business?',
    answer: 'We offer a 30-day guarantee. If you\'re not satisfied with the results, we refund your investment completely, no questions asked.',
  },
  {
    question: 'Can I cancel at any time?',
    answer: 'Yes. There are no mandatory long-term contracts. You can cancel with 30 days notice. We believe in earning your trust every month with results, not trap contracts.',
  },
  {
    question: 'Will it work with my current systems?',
    answer: 'Probably yes. We work with over 100 popular tools (Gmail, Outlook, WhatsApp, CRMs, ERPs, accounting, social media, etc.). In the initial consultation we verify compatibility.',
  },
  {
    question: 'What happens if my business grows?',
    answer: 'Our solutions scale with you. You can easily upgrade plans, add more automations, or expand capabilities as needed. Growth without technical limits.',
  },
  {
    question: 'Is it secure? What about my data?',
    answer: '100% secure. We strictly comply with GDPR regulations. Your data is hosted on secure servers within the EU. We never share client information. Confidentiality agreements available.',
  },
  {
    question: 'Does it include support after implementation?',
    answer: 'Yes, all plans include ongoing support. Plus, we constantly optimize and improve your automations based on real usage data.',
  },
  {
    question: 'How much can I really save with automation?',
    answer: 'Our clients save between 10-30 hours weekly on average on repetitive tasks. In costs, we\'re talking $1,500-$5,000 monthly depending on business size and type. Typical ROI is 3-6 months.',
  },
  {
    question: 'Do you offer a demo or free trial?',
    answer: 'We offer a free 30-minute strategic consultation where we analyze your business and show you specific examples of what we could automate and how much you\'d save. No commitment. Book your session now.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know before getting started
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/30"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can't find your question?
          </p>
          <a
            href="#contact"
            className="text-accent font-medium hover:underline"
          >
            Contact us directly →
          </a>
        </div>
      </div>
    </section>
  );
}
