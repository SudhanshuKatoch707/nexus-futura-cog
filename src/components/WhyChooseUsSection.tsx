import React from 'react';
import { Workflow, BarChart3, Bot, Settings, Cpu, Brain } from 'lucide-react';

const automationServices = [
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Streamline repetitive tasks and workflows to boost efficiency and reduce operational costs.",
    features: ["Workflow Optimization", "Task Automation", "Integration Solutions", "Process Mining"]
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboards",
    description: "Real-time insights and KPI tracking with beautiful, actionable business intelligence dashboards.",
    features: ["Real-time Analytics", "Custom KPIs", "Data Visualization", "Mobile Responsive"]
  },
  {
    icon: Bot,
    title: "RPA Solutions",
    description: "Robotic Process Automation to handle high-volume, rule-based tasks across your systems.",
    features: ["System Integration", "Data Migration", "Legacy System Automation", "Compliance Monitoring"]
  },
  {
    icon: Settings,
    title: "AI Consulting",
    description: "Expert guidance on AI adoption strategies and seamless integration into your business ecosystem.",
    features: ["Strategy Development", "Technology Selection", "Implementation Planning", "Change Management"]
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial from-accent/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* AI Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 opacity-5">
          <Bot className="w-32 h-32 text-primary animate-pulse" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-5">
          <Cpu className="w-24 h-24 text-accent animate-bounce" />
        </div>
        <div className="absolute top-1/2 left-10 opacity-5">
          <Brain className="w-20 h-20 text-primary animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        {/* Network connections */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
          <circle cx="200" cy="200" r="3" fill="hsl(var(--primary))" />
          <circle cx="800" cy="300" r="3" fill="hsl(var(--accent))" />
          <circle cx="400" cy="700" r="3" fill="hsl(var(--primary))" />
          <line x1="200" y1="200" x2="800" y2="300" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="800" y1="300" x2="400" y2="700" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
            Our Automation Solutions
          </h2>
          <p className="text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI and automation technologies designed for the future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {automationServices.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-background/90 backdrop-blur-xl border-2 border-primary/30 rounded-2xl p-8 hover:border-primary/60 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] shadow-2xl hover:shadow-primary/20">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <service.icon className="w-10 h-10 text-background" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed mb-6 text-lg font-medium">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3 text-base">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full flex-shrink-0 shadow-sm"></div>
                          <span className="text-foreground/90 group-hover:text-foreground transition-colors duration-300 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-hero group relative overflow-hidden">
            <span className="relative z-10">Experience the Future Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}