import React from 'react';
import { Workflow, BarChart3, Bot, Settings } from 'lucide-react';

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
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
            Our Automation Solutions
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI and automation technologies designed for the future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {automationServices.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-500">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
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