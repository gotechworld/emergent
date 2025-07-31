import React from 'react';
import { PenTool, Zap, Target, Globe, Sparkles, Users } from 'lucide-react';
import { mockData } from '../data/mock';

const iconMap = {
  PenTool,
  Zap,
  Target,
  Globe,
  Sparkles,
  Users
};

const Features = () => {
  const { features } = mockData;

  return (
    <section id="features" className="py-16 bg-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">
            Powerful Features for Content Creators
          </h2>
          <p className="body-large text-secondary max-w-2xl mx-auto">
            Everything you need to create exceptional content faster and more efficiently than ever before.
          </p>
        </div>

        <div className="ai-grid">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div 
                key={index}
                className={`voice-card ${feature.accent} hover-lift`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white/50 backdrop-blur-sm flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-3 mb-2">
                      {feature.title}
                    </h3>
                    <p className="body-small text-secondary">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="heading-1 text-primary mb-2">10x</div>
            <div className="body-small text-muted">Faster Content Creation</div>
          </div>
          <div className="text-center">
            <div className="heading-1 text-primary mb-2">50+</div>
            <div className="body-small text-muted">Content Templates</div>
          </div>
          <div className="text-center">
            <div className="heading-1 text-primary mb-2">25+</div>
            <div className="body-small text-muted">Languages Supported</div>
          </div>
          <div className="text-center">
            <div className="heading-1 text-primary mb-2">99.9%</div>
            <div className="body-small text-muted">Uptime Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;