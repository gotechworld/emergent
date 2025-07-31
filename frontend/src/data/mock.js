// Mock data for AI Writing Assistant SaaS Landing Page

export const mockData = {
  // Hero Section
  hero: {
    announcement: "🚀 NEW: Advanced AI Writing Engine",
    title: "Write Better Content 10x Faster with AI",
    subtitle: "Transform your ideas into compelling content with our advanced AI writing assistant. Create blog posts, emails, social media content, and more in seconds.",
    primaryCTA: "Start Writing for Free",
    secondaryCTA: "Watch Demo"
  },

  // Live Demo Content
  demoContent: {
    prompts: [
      "Write a blog post about sustainable living",
      "Create an email campaign for a product launch",
      "Generate social media captions for a restaurant",
      "Write a product description for wireless headphones"
    ],
    sampleOutputs: {
      "Write a blog post about sustainable living": {
        title: "10 Simple Ways to Live More Sustainably in 2024",
        content: "Living sustainably doesn't have to be overwhelming. Start with these simple changes that make a real impact on both your wallet and the environment. From reducing plastic waste to choosing renewable energy, small steps lead to significant results..."
      },
      "Create an email campaign for a product launch": {
        title: "Introducing Our Revolutionary New Product",
        content: "Subject: You've been waiting for this... 🎉\n\nDear [Name],\n\nWe're thrilled to announce the launch of our most innovative product yet. After months of development and testing, we're finally ready to share something that will transform how you work..."
      },
      "Generate social media captions for a restaurant": {
        title: "Social Media Content Pack",
        content: "🍝 Fresh pasta made daily with love and tradition\n#AuthenticItalian #FreshPasta #LocalEats\n\n☕ Start your morning right with our signature blend\n#MorningCoffee #FreshBrewed #CoffeeLover\n\n🥗 Farm-to-table freshness in every bite\n#HealthyEating #LocalFarm #FreshIngredients"
      },
      "Write a product description for wireless headphones": {
        title: "Premium Wireless Headphones",
        content: "Experience crystal-clear audio with our premium wireless headphones. Featuring 40-hour battery life, active noise cancellation, and premium comfort padding. Perfect for work, travel, or relaxation. Compatible with all devices via Bluetooth 5.0..."
      }
    }
  },

  // Features
  features: [
    {
      icon: "PenTool",
      title: "AI-Powered Writing",
      description: "Advanced AI that understands context and creates human-like content tailored to your brand voice.",
      accent: "accent-purple"
    },
    {
      icon: "Zap",
      title: "10x Faster Content",
      description: "Generate high-quality content in seconds, not hours. Increase your productivity dramatically.",
      accent: "accent-blue"
    },
    {
      icon: "Target",
      title: "Brand Voice Matching",
      description: "Train the AI to write in your unique brand voice and maintain consistency across all content.",
      accent: "accent-orange"
    },
    {
      icon: "Globe",
      title: "Multi-Language Support",
      description: "Create content in 25+ languages with native-level fluency and cultural awareness.",
      accent: "accent-pink"
    },
    {
      icon: "Sparkles",
      title: "Content Optimization",
      description: "Built-in SEO optimization and readability analysis to maximize your content performance.",
      accent: "accent-green"
    },
    {
      icon: "Users",
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time collaboration and brand guideline enforcement.",
      accent: "accent-grey"
    }
  ],

  // Pricing Plans
  pricing: [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        "10,000 words/month",
        "Basic AI templates",
        "Email support",
        "Brand voice training",
        "Export to PDF/Word"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses and content teams",
      features: [
        "50,000 words/month",
        "Advanced AI templates",
        "Priority support",
        "Multiple brand voices",
        "Team collaboration",
        "SEO optimization",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited words",
        "Custom AI training",
        "Dedicated support",
        "White-label solution",
        "Advanced analytics",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ],

  // Competitor Comparison
  competitors: {
    title: "Why Choose Our AI Writing Assistant?",
    features: [
      "AI Quality",
      "Speed",
      "Brand Voice Training",
      "Multi-language",
      "SEO Optimization",
      "Team Collaboration",
      "API Access",
      "Custom Training",
      "Support Quality"
    ],
    comparison: [
      {
        name: "Our Platform",
        scores: [5, 5, 5, 5, 5, 5, 5, 5, 5],
        highlight: true
      },
      {
        name: "Jasper",
        scores: [4, 4, 3, 4, 3, 4, 4, 2, 3]
      },
      {
        name: "Copy.ai",
        scores: [4, 4, 2, 3, 2, 3, 3, 1, 3]
      },
      {
        name: "Writesonic",
        scores: [3, 4, 2, 4, 3, 2, 3, 1, 2]
      }
    ]
  },

  // Testimonials
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Content Marketing Manager",
      company: "TechStart Inc.",
      content: "This AI writing assistant has transformed our content production. We're creating 5x more content with the same team, and the quality is consistently excellent.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "Growth Labs",
      content: "The brand voice training feature is incredible. The AI writes exactly how I would write, maintaining our brand consistency across all content.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "E-commerce Pro",
      content: "From product descriptions to email campaigns, this tool handles everything. Our conversion rates have increased by 40% since we started using it.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ],

  // FAQ
  faq: [
    {
      question: "How does the AI writing assistant work?",
      answer: "Our AI analyzes your input and generates human-like content based on advanced language models. You provide the topic or brief, and the AI creates tailored content that matches your brand voice and requirements."
    },
    {
      question: "Can I train the AI to match my brand voice?",
      answer: "Yes! Our brand voice training feature learns from your existing content to replicate your unique writing style, tone, and messaging across all generated content."
    },
    {
      question: "What types of content can I create?",
      answer: "You can create blog posts, articles, social media content, email campaigns, product descriptions, ad copy, press releases, and much more. We have templates for 50+ content types."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial with access to all features. No credit card required to start your trial."
    },
    {
      question: "How accurate is the AI-generated content?",
      answer: "Our AI generates highly accurate, contextually relevant content. However, we always recommend reviewing and editing the output to ensure it meets your specific needs and standards."
    }
  ],

  // Chatbot responses
  chatbot: {
    welcomeMessage: "Hi! I'm here to help you learn about our AI writing assistant. What would you like to know?",
    quickReplies: [
      "Pricing information",
      "How it works",
      "Free trial details",
      "Feature overview"
    ],
    responses: {
      "pricing information": "We offer three plans: Starter ($29/month), Professional ($79/month), and Enterprise (custom pricing). All plans include a 14-day free trial. Would you like details about any specific plan?",
      "how it works": "Simply describe what you want to write, and our AI generates high-quality content in seconds. You can customize the tone, style, and format. The AI learns your brand voice for consistent results.",
      "free trial details": "Get 14 days free with full access to all features. No credit card required to start. You can generate up to 10,000 words during your trial period.",
      "feature overview": "Key features include: AI content generation, brand voice training, 25+ languages, SEO optimization, team collaboration, and 50+ content templates. What interests you most?"
    }
  }
};