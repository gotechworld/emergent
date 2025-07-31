import React from 'react';
import { Check, Star } from 'lucide-react';
import { mockData } from '../data/mock';

const Pricing = () => {
  const { pricing } = mockData;

  return (
    <section id="pricing" className="py-16 bg-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="body-large text-secondary max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, index) => (
            <div 
              key={index}
              className={`voice-card relative ${
                plan.popular ? 'accent-purple' : 'accent-blue'
              } hover-lift`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    <span className="caption font-medium">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="heading-2 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="heading-hero text-primary">{plan.price}</span>
                  {plan.period && (
                    <span className="body-small text-muted">{plan.period}</span>
                  )}
                </div>
                <p className="body-small text-secondary">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="body-small text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full ${
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <Check className="h-4 w-4" />
            <span className="body-small font-medium">30-day money-back guarantee</span>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center">
          <div className="voice-card accent-orange max-w-2xl mx-auto">
            <h3 className="heading-2 mb-4">Need a Custom Solution?</h3>
            <p className="body-medium text-secondary mb-6">
              For enterprises with specific requirements, we offer custom AI training, 
              dedicated support, and white-label solutions.
            </p>
            <button className="btn-primary">
              Contact Sales Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;