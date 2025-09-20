import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones, Shield, CheckCircle } from 'lucide-react';

const ContactUs: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'support'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', inquiryType: 'support' });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <SEO 
        title="Contact StreamPro IPTV - 24/7 Customer Support & Technical Help"
        description="Contact StreamPro IPTV for technical support, billing questions, or general inquiries. 24/7 phone support, live chat, and email assistance available."
        keywords="IPTV support, customer service, technical support, contact IPTV provider, streaming help, 24/7 support, IPTV assistance, customer care"
        canonical="/contact"
      />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors mr-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
          <div className="flex items-center">
            <MessageSquare className="h-8 w-8 text-blue-400 mr-3" />
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 h-fit">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email Support</h3>
                    <p className="text-gray-300 text-sm mb-2">support@iptvservice.com</p>
                    <p className="text-gray-400 text-xs">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone Support</h3>
                    <p className="text-gray-300 text-sm mb-2">+1 (555) 123-4567</p>
                    <p className="text-gray-400 text-xs">24/7 Available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Live Chat</h3>
                    <p className="text-gray-300 text-sm mb-2">Available on website</p>
                    <p className="text-gray-400 text-xs">Instant responses</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Office Address</h3>
                    <p className="text-gray-300 text-sm mb-2">123 Digital Street<br />Tech City, TC 12345</p>
                    <p className="text-gray-400 text-xs">United States</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                    <p className="text-gray-300 text-sm mb-1">Monday - Friday: 9 AM - 6 PM EST</p>
                    <p className="text-gray-300 text-sm mb-2">Weekend: 10 AM - 4 PM EST</p>
                    <p className="text-gray-400 text-xs">Emergency support 24/7</p>
                  </div>
                </div>
              </div>

              {/* Quick Support Options */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h3 className="font-semibold text-white mb-4">Quick Support</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-blue-600/20 hover:bg-blue-600/30 p-3 rounded-lg transition-colors">
                    <Headphones className="h-5 w-5 text-blue-400 mx-auto mb-1" />
                    <span className="text-xs text-blue-300">Technical</span>
                  </button>
                  <button className="bg-green-600/20 hover:bg-green-600/30 p-3 rounded-lg transition-colors">
                    <Shield className="h-5 w-5 text-green-400 mx-auto mb-1" />
                    <span className="text-xs text-green-300">Billing</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <p className="text-green-200">Your message has been sent successfully! We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your full name"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-300 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Please provide detailed information about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">How quickly will I receive a response?</h3>
                <p className="text-gray-300 text-sm">Email inquiries are typically answered within 24 hours. Phone and live chat support provide immediate assistance.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">What information should I include?</h3>
                <p className="text-gray-300 text-sm">Include your account email, order number (if applicable), and detailed description of your issue or question.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">Do you offer phone support?</h3>
                <p className="text-gray-300 text-sm">Yes! Our phone support is available 24/7 at +1 (555) 123-4567 for all technical and billing inquiries.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">Can I schedule a callback?</h3>
                <p className="text-gray-300 text-sm">Yes, you can request a callback by mentioning your preferred time in the message form above.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
