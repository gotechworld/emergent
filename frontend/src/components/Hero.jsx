import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { mockData } from '../data/mock';

const Hero = () => {
  const { hero } = mockData;

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Announcement Badge */}
        <div className="hero-announcement">
          <ArrowRight className="h-3 w-3" />
          <span>New: Advanced AI Writing Engine</span>
        </div>

        {/* Main Headline */}
        <h1 className="heading-hero mb-6">
          {hero.title}
        </h1>

        {/* Subtitle */}
        <p className="body-large mb-8 max-w-2xl mx-auto text-secondary">
          {hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            className="btn-primary hover-scale"
            onClick={scrollToPricing}
          >
            {hero.primaryCTA}
          </button>
          <button 
            className="btn-secondary hover-scale flex items-center gap-2"
            onClick={scrollToDemo}
          >
            <Play className="h-4 w-4" />
            {hero.secondaryCTA}
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col items-center gap-4">
          <p className="caption text-muted">
            Trusted by 50,000+ content creators worldwide
          </p>
          <div className="flex items-center gap-8 opacity-60">
            <span className="font-mono text-sm">TechCrunch</span>
            <span className="font-mono text-sm">Product Hunt</span>
            <span className="font-mono text-sm">Forbes</span>
            <span className="font-mono text-sm">Wired</span>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-purple-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-blue-200 rounded-full opacity-20 blur-xl"></div>
      </div>
    </section>
  );
};

export default Hero;