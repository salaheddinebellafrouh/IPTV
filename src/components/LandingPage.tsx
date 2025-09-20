import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Tv, 
  Shield, 
  Clock, 
  Star, 
  Check, 
  Menu, 
  X, 
  Play,
  Zap,
  Globe,
  Headphones
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'plans', 'faq'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleBuyNow = (plan: string) => {
    navigate(`/checkout/${plan}`);
  };

  const plans = [
    {
      name: '3 Months',
      price: '$29.99',
      originalPrice: '$39.99',
      duration: '3 months',
      popular: false,
      features: [
        '5000+ Live Channels',
        '4K & HD Quality',
        '24/7 Support',
        'All Devices Supported',
        'No Contract'
      ]
    },
    {
      name: '6 Months',
      price: '$49.99',
      originalPrice: '$69.99',
      duration: '6 months',
      popular: true,
      features: [
        '5000+ Live Channels',
        '4K & HD Quality',
        '24/7 Premium Support',
        'All Devices Supported',
        'No Contract',
        'Free Setup Assistance'
      ]
    },
    {
      name: '1 Year',
      price: '$79.99',
      originalPrice: '$119.99',
      duration: '12 months',
      popular: false,
      features: [
        '5000+ Live Channels',
        '4K & HD Quality',
        '24/7 Premium Support',
        'All Devices Supported',
        'No Contract',
        'Free Setup Assistance',
        'Priority Updates'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What is IPTV and how does it work?',
      answer: 'IPTV (Internet Protocol Television) delivers television content over the internet instead of traditional terrestrial, satellite, or cable formats. You can watch live TV channels, movies, and shows on any internet-connected device.'
    },
    {
      question: 'What devices are supported?',
      answer: 'Our service works on Smart TVs, Android devices, iOS devices, Windows, Mac, Fire Stick, MAG boxes, and most streaming devices. We provide easy setup guides for all platforms.'
    },
    {
      question: 'Is there a contract or cancellation fee?',
      answer: 'No, we don\'t require any contracts. You can cancel anytime without any cancellation fees. We believe in earning your loyalty through quality service, not binding contracts.'
    },
    {
      question: 'What internet speed do I need?',
      answer: 'We recommend a minimum of 10 Mbps for HD quality and 25 Mbps for 4K content. A stable internet connection ensures the best viewing experience.'
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Yes! We provide 24/7 customer support through multiple channels. Our technical team is always ready to help you with setup, troubleshooting, or any questions.'
    },
    {
      question: 'How quickly can I start watching?',
      answer: 'Once your order is processed and payment is confirmed, you\'ll receive your login credentials within 1-2 hours. Setup typically takes just a few minutes.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-lg">
                <Tv className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">StreamMax</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'features', 'plans', 'faq'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section
                      ? 'text-amber-600 font-semibold'
                      : 'text-gray-700 hover:text-amber-600'
                  }`}
                >
                  {section === 'home' ? 'Home' : section === 'faq' ? 'FAQ' : section}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('plans')}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-amber-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-amber-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'features', 'plans', 'faq'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 text-gray-700 hover:text-amber-600 capitalize"
                >
                  {section === 'home' ? 'Home' : section === 'faq' ? 'FAQ' : section}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('plans')}
                className="w-full text-left bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-2 rounded-lg mt-2"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Experience Premium <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">IPTV Streaming</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Access 5000+ live channels in stunning 4K quality. Sports, movies, news, and entertainment from around the world. No contracts, no setup fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('plans')}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Watching Now
                </button>
                <button className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <Play className="h-5 w-5" />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="IPTV Streaming"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose StreamMax?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We provide the ultimate IPTV experience with cutting-edge technology and unmatched service quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-12 w-12" />,
                title: '4K Ultra HD',
                description: 'Crystal clear picture quality with 4K and HD channels for the ultimate viewing experience'
              },
              {
                icon: <Globe className="h-12 w-12" />,
                title: '5000+ Channels',
                description: 'Massive channel selection from around the world including sports, movies, and news'
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: '99% Uptime',
                description: 'Reliable service with minimal downtime and consistent streaming quality'
              },
              {
                icon: <Headphones className="h-12 w-12" />,
                title: '24/7 Support',
                description: 'Round-the-clock customer support to help you with any questions or issues'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-amber-500 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Flexible pricing options to suit your needs. All plans include full access to our premium features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                  plan.popular
                    ? 'ring-4 ring-amber-500 transform scale-105'
                    : 'hover:shadow-2xl hover:transform hover:scale-105'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-2">/{plan.duration}</span>
                  </div>
                  <div className="text-sm text-gray-500 line-through">{plan.originalPrice}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBuyNow(plan.name.replace(' ', '-').toLowerCase())}
                  className={`w-full py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transform hover:scale-105'
                      : 'border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white'
                  }`}
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-700">
              Get answers to common questions about our IPTV service
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Streaming?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers and experience premium IPTV today
          </p>
          <button
            onClick={() => scrollToSection('plans')}
            className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Choose Your Plan
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-lg">
                  <Tv className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">StreamMax</span>
              </div>
              <p className="text-gray-300 mb-4">
                Premium IPTV streaming service with 5000+ channels and 4K quality.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-amber-400">Home</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-amber-400">Features</a></li>
                <li><a href="#plans" className="text-gray-300 hover:text-amber-400">Plans</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-amber-400">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">24/7 Live Chat</li>
                <li className="text-gray-300">Email: support@streammax.com</li>
                <li className="text-gray-300">Phone: +1 (555) 123-4567</li>
                <li className="text-gray-300">Setup Assistance</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Stay updated with latest features and offers</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
                />
                <button className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 rounded-r-lg hover:from-amber-600 hover:to-orange-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 StreamMax IPTV. All rights reserved. | Terms of Service | Privacy Policy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;