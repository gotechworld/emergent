import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { mockData } from '../data/mock';

const Comparison = () => {
  const { competitors } = mockData;

  const renderScore = (score) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <CheckCircle
            key={star}
            className={`h-4 w-4 ${
              star <= score 
                ? 'text-green-600 fill-current' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-page">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">
            {competitors.title}
          </h2>
          <p className="body-large text-secondary max-w-2xl mx-auto">
            See how we stack up against the competition across key features and capabilities.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="voice-card accent-grey overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-border-light">
                  <th className="text-left py-4 px-4 body-medium font-semibold">
                    Features
                  </th>
                  {competitors.comparison.map((competitor, index) => (
                    <th 
                      key={index}
                      className={`text-center py-4 px-4 body-medium font-semibold ${
                        competitor.highlight ? 'text-primary' : 'text-secondary'
                      }`}
                    >
                      {competitor.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {competitors.features.map((feature, featureIndex) => (
                  <tr 
                    key={featureIndex}
                    className="border-b border-border-light last:border-b-0"
                  >
                    <td className="py-4 px-4 body-small font-medium text-primary">
                      {feature}
                    </td>
                    {competitors.comparison.map((competitor, compIndex) => (
                      <td key={compIndex} className="py-4 px-4 text-center">
                        {renderScore(competitor.scores[featureIndex])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key Differentiators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="voice-card accent-purple text-center">
              <div className="w-12 h-12 bg-white/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="heading-3 mb-2">Superior AI Quality</h3>
              <p className="body-small text-secondary">
                Our advanced AI models produce more human-like, contextually accurate content.
              </p>
            </div>

            <div className="voice-card accent-blue text-center">
              <div className="w-12 h-12 bg-white/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="heading-3 mb-2">Advanced Brand Training</h3>
              <p className="body-small text-secondary">
                Industry-leading brand voice training ensures consistent messaging across all content.
              </p>
            </div>

            <div className="voice-card accent-green text-center">
              <div className="w-12 h-12 bg-white/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="heading-3 mb-2">Complete Solution</h3>
              <p className="body-small text-secondary">
                From content creation to team collaboration, we provide everything you need.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="btn-primary hover-scale">
              Start Your Free Trial Today
            </button>
            <p className="body-small text-muted mt-3">
              Experience the difference yourself. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;