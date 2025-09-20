import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';
import { 
  Play, 
  Tv, 
  Smartphone, 
  Monitor, 
  Globe,
  Star,
  Shield,
  Headphones,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Zap,
  Award,
  Download,
  Wifi,
  Volume2,
  Video,
  Settings,
  Heart,
  TrendingUp,
  Target,
  Sparkles
} from 'lucide-react';

const EnhancedLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const navigate = useNavigate();

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'plans', 'testimonials', 'faq'];
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

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Amazing IPTV service! Crystal clear 4K streaming and incredible channel selection. The customer support is outstanding!",
      plan: "Ultimate"
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada", 
      rating: 5,
      text: "Best streaming service I've ever used. No buffering, great prices, and works perfectly on all my devices. Highly recommend!",
      plan: "Premium"
    },
    {
      name: "Emma Rodriguez",
      location: "London, UK",
      rating: 5,
      text: "Switched from cable and saved so much money! The variety of international channels is incredible. Installation was super easy.",
      plan: "Basic"
    },
    {
      name: "David Thompson",
      location: "Sydney, Australia",
      rating: 5,
      text: "Professional service with 24/7 support. The app works flawlessly on my smart TV. Worth every penny!",
      plan: "Premium"
    }
  ];

  // Features data
  const features = [
    {
      icon: <Tv className="h-8 w-8" />,
      title: "15,000+ Live Channels",
      description: "Access to premium channels from around the world including sports, movies, news, and entertainment.",
      color: "blue"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "50,000+ VOD Movies & Series",
      description: "Massive library of on-demand content including latest movies, popular TV series, and documentaries.",
      color: "purple"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Multi-Device Support",
      description: "Stream on Smart TV, Android, iOS, Windows, Mac, Fire TV Stick, and any device with internet.",
      color: "green"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Ultra-Fast Streaming",
      description: "Anti-freeze technology ensures smooth streaming with minimal buffering and instant channel switching.",
      color: "yellow"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "99.9% Uptime Guarantee",
      description: "Reliable service with premium servers and redundancy to ensure uninterrupted entertainment.",
      color: "red"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24/7 Premium Support",
      description: "Expert technical support available round-the-clock to help with setup and any questions.",
      color: "indigo"
    }
  ];

  const stats = [
    { number: "500K+", label: "Happy Customers", icon: <Users className="h-6 w-6" /> },
    { number: "99.9%", label: "Uptime", icon: <Shield className="h-6 w-6" /> },
    { number: "15K+", label: "Live Channels", icon: <Tv className="h-6 w-6" /> },
    { number: "24/7", label: "Support", icon: <Headphones className="h-6 w-6" /> }
  ];

  const pricingPlans = [
    {
      name: "3-months",
      displayName: "3 Months",
      price: "$29.99",
      originalPrice: "$39.99", 
      duration: "3 months",
      popular: false,
      features: [
        "15,000+ Live Channels",
        "50,000+ VOD Movies",
        "HD Quality Streaming",
        "2 Device Connections",
        "Basic EPG Guide",
        "Email Support"
      ],
      color: "blue",
      savings: "Save $10"
    },
    {
      name: "1-year",
      displayName: "1 Year",
      price: "$79.99",
      originalPrice: "$119.99",
      duration: "12 months", 
      popular: true,
      features: [
        "15,000+ Live Channels",
        "50,000+ VOD Movies",
        "4K Ultra HD Quality",
        "Unlimited Connections",
        "Premium EPG Guide",
        "Priority Support",
        "All Premium Sports",
        "Adult Content Available"
      ],
      color: "gradient",
      savings: "Save $40"
    },
    {
      name: "6-months",
      displayName: "6 Months",
      price: "$49.99", 
      originalPrice: "$69.99",
      duration: "6 months",
      popular: false,
      features: [
        "15,000+ Live Channels",
        "50,000+ VOD Movies",
        "Full HD Quality",
        "5 Device Connections",
        "Advanced EPG Guide",
        "24/7 Live Support",
        "Multi-Language Support"
      ],
      color: "purple",
      savings: "Save $20"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* SEO Meta Tags */}
      <SEO 
        title="StreamPro IPTV - Premium IPTV Streaming Service | 15,000+ Live Channels & 4K Movies"
        description="Experience premium IPTV streaming with 15,000+ live channels, 50,000+ VOD movies, ultra-fast 4K quality, and 24/7 support. No contract required. 7-day money-back guarantee. Start streaming instantly!"
        keywords="IPTV, premium IPTV service, live TV streaming, 4K streaming, IPTV subscription, cord cutting, internet TV, live channels, VOD movies, streaming service, IPTV provider, smart TV streaming, multi-device streaming, sports IPTV, international channels"
        canonical="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "StreamPro IPTV Premium Streaming Service",
          "description": "Premium IPTV streaming service offering 15,000+ live channels, 50,000+ movies, 4K quality streaming on all devices with 24/7 support.",
          "provider": {
            "@type": "Organization",
            "name": "StreamPro IPTV",
            "url": "https://streamproiptv.com"
          },
          "offers": [
            {
              "@type": "Offer",
              "name": "Basic Plan",
              "description": "5,000+ Live Channels, 15,000+ VOD Movies, HD Quality",
              "price": "19.99",
              "priceCurrency": "USD",
              "billingIncrement": "P1M"
            },
            {
              "@type": "Offer", 
              "name": "Premium Plan",
              "description": "10,000+ Live Channels, 35,000+ VOD Movies, Full HD Quality",
              "price": "29.99",
              "priceCurrency": "USD",
              "billingIncrement": "P1M"
            },
            {
              "@type": "Offer",
              "name": "Ultimate Plan", 
              "description": "15,000+ Live Channels, 50,000+ VOD Movies, 4K Ultra HD Quality",
              "price": "39.99",
              "priceCurrency": "USD",
              "billingIncrement": "P1M"
            }
          ],
          "serviceType": "IPTV Streaming Service",
          "areaServed": "Worldwide",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://streamproiptv.com",
            "servicePhone": "+1-555-123-4567",
            "serviceSmsNumber": "+1-555-123-4567"
          }
        }}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Play className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">StreamPro IPTV</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Features', 'Plans', 'Testimonials', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                {['Home', 'Features', 'Plans', 'Testimonials', 'FAQ'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold w-fit"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-500/20 backdrop-blur-lg rounded-full p-4 border border-blue-500/30">
                <Sparkles className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">IPTV</span> Streaming
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Experience the future of television with <strong>15,000+ live channels</strong>, <strong>50,000+ movies</strong>, and <strong>ultra-fast 4K streaming</strong> on all your devices.
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-center mb-2 text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('plans')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Play className="h-5 w-5" />
                <span>Start Streaming Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => navigate('/contact')}
                className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 backdrop-blur-lg hover:bg-white/10"
              >
                Free Trial Available
              </button>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              ✅ No Contract • ✅ 7-Day Money Back Guarantee • ✅ Instant Activation
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">StreamPro IPTV</span>?
            </h2>
            <p className="text-xl text-gray-300">
              We deliver the ultimate streaming experience with cutting-edge technology and premium content from around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-4 rounded-xl mb-4 bg-${feature.color}-500/20 text-${feature.color}-400`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">It Works</span>
            </h2>
            <p className="text-xl text-gray-300">
              Get started with premium IPTV streaming in just 3 simple steps. It's that easy!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Choose Your Plan",
                description: "Select from our 3, 6, or 12-month subscription plans based on your needs and budget.",
                icon: <Target className="h-8 w-8" />,
                color: "blue"
              },
              {
                step: "2", 
                title: "Complete Setup",
                description: "Fill out the simple order form and our team will contact you within 2 hours to process payment.",
                icon: <Settings className="h-8 w-8" />,
                color: "purple"
              },
              {
                step: "3",
                title: "Start Streaming",
                description: "Receive your login credentials and start enjoying 15,000+ channels instantly on all devices.",
                icon: <Video className="h-8 w-8" />,
                color: "green"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`inline-flex p-6 rounded-full mb-6 bg-${step.color}-500/20 text-${step.color}-400`}>
                    {step.icon}
                  </div>
                  <div className={`text-3xl font-bold text-${step.color}-400 mb-4`}>Step {step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Compatibility Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stream on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Any Device</span>
            </h2>
            <p className="text-xl text-gray-300">
              Enjoy your favorite content anywhere, anytime. Our IPTV service works seamlessly across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Smart TV", icon: <Monitor className="h-12 w-12" /> },
              { name: "Mobile", icon: <Smartphone className="h-12 w-12" /> },
              { name: "Tablet", icon: <Smartphone className="h-12 w-12" /> },
              { name: "Computer", icon: <Monitor className="h-12 w-12" /> },
              { name: "Fire TV", icon: <Tv className="h-12 w-12" /> },
              { name: "Roku", icon: <Tv className="h-12 w-12" /> }
            ].map((device, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-4 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-blue-400 mx-auto mb-3 flex justify-center">
                    {device.icon}
                  </div>
                </div>
                <p className="text-gray-300 font-medium">{device.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-xl border border-blue-500/30 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-2">Universal Compatibility</h3>
              <p className="text-gray-300">
                Works with Android, iOS, Windows, Mac, Linux, Smart TVs, and streaming devices. 
                If it connects to the internet, it works with our service!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Trust Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Thousands</span>
            </h2>
            <p className="text-xl text-gray-300">
              Join our growing community of satisfied customers worldwide who've made the switch to premium IPTV.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "500K+", label: "Active Users", icon: <Users className="h-8 w-8" /> },
              { number: "15K+", label: "Live Channels", icon: <Tv className="h-8 w-8" /> },
              { number: "50K+", label: "Movies & Shows", icon: <Video className="h-8 w-8" /> },
              { number: "99.9%", label: "Uptime", icon: <Shield className="h-8 w-8" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-blue-400 mx-auto mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Support",
                description: "Round-the-clock customer support via live chat, email, and phone. We're always here to help.",
                icon: <Headphones className="h-8 w-8" />,
                color: "blue"
              },
              {
                title: "99.9% Uptime",
                description: "Reliable service with premium servers and redundancy. Minimal downtime, maximum entertainment.",
                icon: <Shield className="h-8 w-8" />,
                color: "green"
              },
              {
                title: "Global Coverage", 
                description: "Serving customers worldwide with international content and multi-language support.",
                icon: <Globe className="h-8 w-8" />,
                color: "purple"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className={`inline-flex p-4 rounded-xl mb-4 bg-${feature.color}-500/20 text-${feature.color}-400`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Perfect Plan</span>
            </h2>
            <p className="text-xl text-gray-300">
              Flexible pricing options to suit every budget and viewing preference. All plans include our premium features and support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 flex flex-col ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20 md:scale-110 md:z-10' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Recommended</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.displayName}</h3>
                  <div className="text-4xl font-bold text-white mb-1">
                    {plan.price}
                    <span className="text-lg text-gray-400"> total</span>
                  </div>
                  <p className="text-gray-400 mb-2">{plan.duration} subscription</p>
                  <div className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                    {plan.savings}
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBuyNow(plan.name)}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl transform hover:scale-105'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                  }`}
                >
                  {plan.popular ? 'Get Started - Best Value!' : 'Get Started Now'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Guide Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Endless <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Entertainment</span>
            </h2>
            <p className="text-xl text-gray-300">
              Explore our vast collection of channels across every genre and category you love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                category: "Sports",
                channels: ["ESPN", "FOX Sports", "NBC Sports", "Sky Sports", "beIN Sports"],
                icon: <Award className="h-8 w-8" />,
                color: "from-green-400 to-emerald-600",
                description: "Live sports, matches, and tournaments from around the world"
              },
              {
                category: "Movies & Entertainment", 
                channels: ["HBO", "Netflix Originals", "Disney+", "Paramount+", "Showtime"],
                icon: <Video className="h-8 w-8" />,
                color: "from-red-400 to-pink-600", 
                description: "Premium movies, series, and exclusive content"
              },
              {
                category: "News & Current Affairs",
                channels: ["CNN", "BBC News", "Fox News", "Al Jazeera", "CNBC"],
                icon: <Globe className="h-8 w-8" />,
                color: "from-blue-400 to-cyan-600",
                description: "Stay informed with 24/7 global news coverage"
              },
              {
                category: "Kids & Family",
                channels: ["Cartoon Network", "Disney Channel", "Nickelodeon", "PBS Kids", "Baby TV"],
                icon: <Heart className="h-8 w-8" />,
                color: "from-purple-400 to-pink-600",
                description: "Safe, educational, and fun content for children"
              },
              {
                category: "Music & Lifestyle",
                channels: ["MTV", "VH1", "Music Choice", "Fashion TV", "Travel Channel"],
                icon: <Volume2 className="h-8 w-8" />,
                color: "from-orange-400 to-red-600",
                description: "Music videos, lifestyle shows, and cultural content"
              },
              {
                category: "International",
                channels: ["Arabic", "Spanish", "French", "Italian", "German"],
                icon: <Globe className="h-8 w-8" />,
                color: "from-indigo-400 to-purple-600",
                description: "Global content in multiple languages and cultures"
              }
            ].map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-4 bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{category.category}</h3>
                <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                <div className="space-y-2">
                  {category.channels.map((channel, channelIndex) => (
                    <div key={channelIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-xs text-gray-400">+ Many more channels</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Complete Channel Lineup</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">15,000+</div>
                  <div className="text-gray-300">Live Channels</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">50,000+</div>
                  <div className="text-gray-300">Movies & Shows</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">100+</div>
                  <div className="text-gray-300">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">40+</div>
                  <div className="text-gray-300">Languages</div>
                </div>
              </div>
              <p className="text-gray-300">
                From local favorites to international hits, discover content that matches your interests and language preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of satisfied customers who've made the switch to premium IPTV streaming.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-xl text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div>
                  <p className="text-lg font-semibold text-white">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-400">{testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].plan} Plan</p>
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-500' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our IPTV service. Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How quickly can I start streaming?",
                answer: "Instant activation! Once payment is confirmed, you'll receive your login details within minutes. Our setup guides make installation simple on any device."
              },
              {
                question: "What devices are compatible?",
                answer: "Our service works on Smart TVs (Samsung, LG, Android TV), smartphones, tablets, computers, Fire TV Stick, Roku, Apple TV, MAG boxes, and more. If it connects to the internet, it probably works!"
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes! We offer a 7-day money-back guarantee for all new customers. If you're not completely satisfied, we'll provide a full refund, no questions asked."
              },
              {
                question: "Is the service legal and safe?",
                answer: "Absolutely! We operate legally and source all content through proper licensing agreements. Your data is encrypted and secure with our premium servers."
              },
              {
                question: "What internet speed do I need?",
                answer: "For HD streaming: minimum 5 Mbps. For 4K streaming: minimum 25 Mbps. Our adaptive streaming automatically adjusts quality based on your connection."
              },
              {
                question: "Do you provide customer support?",
                answer: "Yes! We offer 24/7 premium support via live chat, email, and phone. Our expert team is always ready to help with setup and any questions."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">StreamPro IPTV</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Premium IPTV streaming service delivering the best entertainment experience with cutting-edge technology and 24/7 support.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
                <Youtube className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'Features', 'Plans', 'FAQ', 'Contact'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => item === 'Contact' ? navigate('/contact') : scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => navigate('/privacy-policy')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/terms-of-service')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/refund-policy')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Refund Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">support@streamproiptv.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-400" />
                  <span className="text-gray-400">123 Digital Street<br />Tech City, TC 12345</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 StreamPro IPTV. All rights reserved. | Premium IPTV Streaming Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedLandingPage;
