import React from 'react';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../data/mock';

const Testimonials = () => {
  const { testimonials } = mockData;

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating 
                ? 'text-yellow-500 fill-current' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-16 bg-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">
            Loved by Content Creators Worldwide
          </h2>
          <p className="body-large text-secondary max-w-2xl mx-auto">
            See what our customers are saying about their experience with our AI writing assistant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`voice-card ${
                index === 0 ? 'accent-purple' : 
                index === 1 ? 'accent-blue' : 'accent-orange'
              } hover-lift`}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-primary opacity-20" />
              </div>

              {/* Rating */}
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <blockquote className="body-medium text-primary mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="body-small font-semibold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="caption text-muted">
                    {testimonial.role}
                  </div>
                  <div className="caption text-muted">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Numbers */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="heading-1 text-primary mb-2">50K+</div>
            <div className="body-small text-muted">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="heading-1 text-primary mb-2">10M+</div>
            <div className="body-small text-muted">Words Generated</div>
          </div>
          <div className="text-center">
            <div className="heading-1 text-primary mb-2">4.9/5</div>
            <div className="body-small text-muted">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="heading-1 text-primary mb-2">99.9%</div>
            <div className="body-small text-muted">Customer Satisfaction</div>
          </div>
        </div>

        {/* Feature Highlight */}
        <div className="mt-16">
          <div className="voice-card accent-pink max-w-4xl mx-auto text-center">
            <h3 className="heading-2 mb-4">
              Join Thousands of Satisfied Customers
            </h3>
            <p className="body-medium text-secondary mb-6">
              Start creating amazing content today with our 14-day free trial. 
              No credit card required, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Free Trial
              </button>
              <button className="btn-secondary">
                View More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;