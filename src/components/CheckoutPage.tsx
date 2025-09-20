import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SEO } from './SEO';
import { ArrowLeft, Shield, Clock, Star, MessageSquare, CheckCircle, Users, Zap } from 'lucide-react';
import { supabase } from '../lib/supabase';

const CheckoutPage = () => {
  const { plan } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const planDetails = {
    '3-months': {
      name: '3 Months Plan',
      price: '$29.99',
      originalPrice: '$39.99',
      duration: '3 months',
      features: ['15,000+ Live Channels', '50,000+ VOD Movies', 'HD Quality Streaming', '2 Device Connections', 'Basic EPG Guide', 'Email Support']
    },
    '6-months': {
      name: '6 Months Plan',
      price: '$49.99',
      originalPrice: '$69.99',
      duration: '6 months',
      features: ['15,000+ Live Channels', '50,000+ VOD Movies', 'Full HD Quality', '5 Device Connections', 'Advanced EPG Guide', '24/7 Live Support', 'Multi-Language Support']
    },
    '1-year': {
      name: '1 Year Plan',
      price: '$79.99',
      originalPrice: '$119.99',
      duration: '12 months',
      features: ['15,000+ Live Channels', '50,000+ VOD Movies', '4K Ultra HD Quality', 'Unlimited Connections', 'Premium EPG Guide', 'Priority Support', 'All Premium Sports', 'Adult Content Available']
    }
  };

  const currentPlan = planDetails[plan as keyof typeof planDetails] || planDetails['6-months'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitOrder();
  };

  const submitOrder = async () => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // First, let's test the connection
      console.log('Testing Supabase connection...');
      console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
      console.log('Supabase Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);

      const { data, error } = await supabase
        .from('orders')
        .insert([
          {
            package_name: plan || '6-months',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            country: formData.country,
            message: formData.message,
            status: 'pending'
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error details:', error);
        throw error;
      }

      console.log('Order submitted successfully:', data);
      navigate('/thank-you');
    } catch (error: any) {
      console.error('Error submitting order:', error);
      
      // More detailed error message
      if (error?.message) {
        setSubmitError(`Failed to submit order: ${error.message}`);
      } else if (error?.details) {
        setSubmitError(`Failed to submit order: ${error.details}`);
      } else {
        setSubmitError('Failed to submit order. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = Object.values(formData).every(value => value.trim() !== '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <SEO 
        title="Checkout - StreamPro IPTV | Complete Your IPTV Subscription"
        description="Complete your StreamPro IPTV subscription. Choose from 3, 6, or 12 month plans with 15,000+ channels, 4K streaming, and 24/7 support."
        keywords="IPTV checkout, IPTV subscription, streaming service payment, IPTV plans, premium IPTV purchase"
        canonical="/checkout"
      />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Plans
          </button>
          <h1 className="text-4xl font-bold text-white">Complete Your Order</h1>
          <p className="text-xl text-gray-300 mt-2">You're just one step away from premium IPTV streaming</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Your Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-200"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">
                  Country *
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-all duration-200"
                >
                  <option value="" className="bg-gray-800">Select Country</option>
                  <option value="US" className="bg-gray-800">United States</option>
                  <option value="CA" className="bg-gray-800">Canada</option>
                  <option value="UK" className="bg-gray-800">United Kingdom</option>
                  <option value="DE" className="bg-gray-800">Germany</option>
                  <option value="FR" className="bg-gray-800">France</option>
                  <option value="AU" className="bg-gray-800">Australia</option>
                  <option value="other" className="bg-gray-800">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-200 resize-none"
                    placeholder="Any questions or special requests? Let us know how we can help you..."
                  />
                </div>
              </div>

              <div className="bg-blue-600/20 p-6 rounded-lg border border-blue-500/30">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-300 mb-2">How Payment Works</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">
                      After submitting your information, our team will contact you within 2 hours to arrange payment and activate your service. 
                      We accept multiple payment methods for your convenience.
                    </p>
                  </div>
                </div>
              </div>

              {submitError && (
                <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-200 text-sm">{submitError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-4 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  isFormValid && !isSubmitting
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 shadow-xl'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Place Order'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
            
            <div className="border border-purple-500/30 rounded-xl p-6 mb-6 bg-purple-600/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{currentPlan.name}</h3>
                  <p className="text-gray-300">{currentPlan.duration} subscription</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{currentPlan.price}</div>
                  <div className="text-sm text-gray-400 line-through">{currentPlan.originalPrice}</div>
                </div>
              </div>

              <div className="space-y-3">
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 p-4 bg-green-600/20 rounded-lg border border-green-500/30">
                <Zap className="h-5 w-5 text-green-400" />
                <span className="text-green-300 text-sm">Instant activation within 1-2 hours</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-blue-600/20 rounded-lg border border-blue-500/30">
                <Shield className="h-5 w-5 text-blue-400" />
                <span className="text-blue-300 text-sm">7-day money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-purple-600/20 rounded-lg border border-purple-500/30">
                <Users className="h-5 w-5 text-purple-400" />
                <span className="text-purple-300 text-sm">24/7 premium customer support</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-xl border border-blue-500/30">
              <h3 className="font-bold text-white mb-2">What happens next?</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• We'll review your order and contact you within 2 hours</li>
                <li>• Choose your preferred payment method</li>
                <li>• Receive login credentials and setup instructions</li>
                <li>• Start enjoying premium IPTV streaming immediately</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;