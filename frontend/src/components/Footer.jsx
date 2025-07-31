import React from 'react';
import { Pen, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Pen className="h-6 w-6" />
              <span className="font-mono text-lg font-semibold">WriteAI</span>
            </div>
            <p className="body-small text-white/80 mb-6">
              The most advanced AI writing assistant for content creators, marketers, and businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="heading-3 text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="body-small text-white/80 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="body-small text-white/80 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#demo" className="body-small text-white/80 hover:text-white transition-colors">Live Demo</a></li>
              <li><a href="#" className="body-small text-white/80 hover:text-white transition-colors">API Docs</a></li>
              <li><a href="#" className="body-small text-white/80 hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="heading-3 text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="body-small text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="body-small text-white/80 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="body-small text-white/80 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="body-small text-white/80 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="body-small text-white/80 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="heading-3 text-white mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="body-small text-white/80 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="body-small text-white/80 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="body-small text-white/80 hover:text-white transition-colors">System Status</a></li>
              <li><a href="#" className="body-small text-white/80 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="body-small text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto text-center">
            <h3 className="heading-3 text-white mb-2">Stay Updated</h3>
            <p className="body-small text-white/80 mb-4">
              Get the latest updates on new features, tips, and AI writing insights.
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
              />
              <button
                type="submit"
                className="bg-white text-primary px-6 py-3 rounded-full font-mono text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="body-small text-white/60">
            © 2024 WriteAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="body-small text-white/60 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="body-small text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="body-small text-white/60 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;