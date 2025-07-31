import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { mockData } from '../data/mock';

const FAQ = () => {
  const { faq } = mockData;
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-16 bg-page">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="body-large text-secondary max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item, index) => (
            <div 
              key={index}
              className="voice-card accent-grey"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="heading-3 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItem === index ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary" />
                  )}
                </div>
              </button>
              
              {openItem === index && (
                <div className="mt-4 pt-4 border-t border-border-light">
                  <p className="body-medium text-secondary leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <div className="voice-card accent-blue max-w-xl mx-auto">
            <h3 className="heading-3 mb-4">Still Have Questions?</h3>
            <p className="body-medium text-secondary mb-6">
              Our support team is here to help you get the most out of our AI writing assistant.
            </p>
            <button className="btn-primary">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;