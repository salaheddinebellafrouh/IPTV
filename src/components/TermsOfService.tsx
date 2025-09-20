import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';
import { ArrowLeft, FileText, Shield, CreditCard, Ban, AlertCircle, CheckCircle, Clock, Users } from 'lucide-react';

const TermsOfService: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <SEO 
        title="Terms of Service - StreamPro IPTV | Service Agreement & Conditions"
        description="Read StreamPro IPTV's terms of service including subscription details, acceptable use policy, refund conditions, and service availability guidelines."
        keywords="terms of service, IPTV terms, service agreement, subscription terms, streaming service conditions, user agreement, IPTV legal terms"
        canonical="/terms-of-service"
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
            <FileText className="h-8 w-8 text-blue-400 mr-3" />
            <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="prose prose-lg prose-invert max-w-none">
            
            <div className="bg-blue-600/20 p-6 rounded-lg mb-8">
              <p className="text-blue-200 text-lg mb-0">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()} | 
                <strong className="ml-4">Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>
            </div>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">1. Acceptance of Terms</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>By accessing and using our IPTV services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.</p>
                <div className="bg-green-600/20 p-4 rounded-lg">
                  <p className="text-green-200">
                    <CheckCircle className="h-5 w-5 inline mr-2" />
                    These terms constitute a legally binding agreement between you and our IPTV service.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">2. Service Description</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>Our IPTV service provides:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Live TV Streaming:</strong> Access to various television channels and content</li>
                  <li><strong>Video on Demand:</strong> Library of movies, shows, and exclusive content</li>
                  <li><strong>Multi-Device Support:</strong> Compatible with smart TVs, mobile devices, and computers</li>
                  <li><strong>HD/4K Quality:</strong> High-definition streaming based on your subscription plan</li>
                  <li><strong>Customer Support:</strong> Technical assistance and account management</li>
                </ul>
                <div className="bg-blue-600/20 p-4 rounded-lg">
                  <p className="text-blue-200">
                    <Shield className="h-5 w-5 inline mr-2" />
                    All content is provided legally and in compliance with broadcasting regulations.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">3. Subscription and Payment</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <h3 className="text-xl text-purple-300 font-semibold">Subscription Plans:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Basic Plan:</strong> $19.99/month - Standard definition, limited channels</li>
                  <li><strong>Premium Plan:</strong> $29.99/month - HD quality, expanded channel lineup</li>
                  <li><strong>Ultimate Plan:</strong> $39.99/month - 4K quality, all channels, premium features</li>
                </ul>
                
                <h3 className="text-xl text-purple-300 font-semibold mt-6">Payment Terms:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Subscriptions are billed monthly in advance</li>
                  <li>Payment is due on the same date each month</li>
                  <li>Accepted payment methods: Credit/Debit cards, PayPal, Bank transfer</li>
                  <li>Late payments may result in service suspension</li>
                  <li>Price changes will be notified 30 days in advance</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <Ban className="h-6 w-6 text-red-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">4. Acceptable Use Policy</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p className="font-semibold text-red-300">You agree NOT to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Share your account credentials with unauthorized users</li>
                  <li>Use the service for commercial purposes without permission</li>
                  <li>Attempt to hack, reverse engineer, or compromise our systems</li>
                  <li>Redistribute or rebroadcast our content</li>
                  <li>Use VPNs to circumvent geographic restrictions</li>
                  <li>Engage in illegal activities using our service</li>
                  <li>Overload our servers with excessive requests</li>
                </ul>
                <div className="bg-red-600/20 p-4 rounded-lg">
                  <p className="text-red-200">
                    <AlertCircle className="h-5 w-5 inline mr-2" />
                    Violation of these terms may result in immediate account termination without refund.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">5. Service Availability and Performance</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Uptime Target:</strong> 99.5% service availability</li>
                  <li><strong>Maintenance Windows:</strong> Scheduled during low-usage hours with advance notice</li>
                  <li><strong>Internet Requirements:</strong> Minimum 5 Mbps for HD, 25 Mbps for 4K</li>
                  <li><strong>Device Limits:</strong> Simultaneous streaming based on your subscription tier</li>
                  <li><strong>Geographic Restrictions:</strong> Content may vary by location due to licensing</li>
                </ul>
                <p className="text-yellow-300 font-semibold">
                  We are not responsible for interruptions caused by internet service provider issues or force majeure events.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">6. Privacy and Data Protection</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your privacy is important to us - see our Privacy Policy for details</li>
                  <li>We collect minimal data necessary for service operation</li>
                  <li>Usage analytics help us improve service quality</li>
                  <li>We do not sell personal information to third parties</li>
                  <li>Data is encrypted and stored securely</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-orange-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">7. Cancellation and Refunds</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <h3 className="text-xl text-orange-300 font-semibold">Cancellation Policy:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may cancel your subscription at any time</li>
                  <li>Cancellation takes effect at the end of your current billing cycle</li>
                  <li>No partial refunds for unused portions of monthly subscriptions</li>
                  <li>Account access continues until the end of the paid period</li>
                </ul>
                
                <h3 className="text-xl text-orange-300 font-semibold mt-6">Refund Policy:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>7-day money-back guarantee for new subscribers</li>
                  <li>Refunds processed within 5-7 business days</li>
                  <li>Technical issues resolved through support, not refunds</li>
                  <li>Violation of terms voids refund eligibility</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">8. Limitation of Liability</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>To the maximum extent permitted by law:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Our total liability is limited to the amount paid in the last 12 months</li>
                  <li>We do not guarantee uninterrupted or error-free service</li>
                  <li>Content availability may change due to licensing agreements</li>
                  <li>Users are responsible for their internet connection quality</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-indigo-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">9. Contact Information</h2>
              </div>
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <div className="text-gray-300 space-y-3">
                  <p><strong className="text-blue-300">For service-related inquiries:</strong></p>
                  <p>📧 Email: support@iptvservice.com</p>
                  <p>📞 Phone: +1 (555) 123-4567</p>
                  <p>💬 Live Chat: Available 24/7 on our website</p>
                  <p>📍 Address: 123 Digital Street, Tech City, TC 12345</p>
                  <p>🕐 Business Hours: Monday-Sunday, 24/7 support</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to Terms</h2>
              <div className="text-gray-300 space-y-4">
                <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of the service constitutes acceptance of modified terms.</p>
                <p className="text-blue-300 font-semibold">
                  Major changes will be communicated via email and website notifications 30 days in advance.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
