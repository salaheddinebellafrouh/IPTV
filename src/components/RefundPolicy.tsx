import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';
import { ArrowLeft, RotateCcw, CreditCard, AlertCircle, CheckCircle, Clock, Shield } from 'lucide-react';

const RefundPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <SEO 
        title="Refund Policy - StreamPro IPTV | 7-Day Money Back Guarantee"
        description="StreamPro IPTV offers a 7-day money-back guarantee for new customers. Learn about our refund eligibility, process, timelines, and terms."
        keywords="refund policy, money back guarantee, IPTV refund, streaming service refund, 7 day guarantee, refund process, cancellation policy"
        canonical="/refund-policy"
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
            <RotateCcw className="h-8 w-8 text-blue-400 mr-3" />
            <h1 className="text-4xl font-bold text-white">Refund Policy</h1>
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
                <h2 className="text-2xl font-semibold text-white mb-0">1. Money-Back Guarantee</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <div className="bg-green-600/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-300 mb-3">7-Day Trial Period</h3>
                  <p className="text-green-200">
                    We offer a <strong>7-day money-back guarantee</strong> for all new subscribers. If you're not completely satisfied with our IPTV service within the first 7 days, we'll provide a full refund.
                  </p>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Available for first-time subscribers only</li>
                  <li>Must be requested within 7 days of initial subscription</li>
                  <li>Full refund of subscription fees paid</li>
                  <li>No questions asked policy</li>
                  <li>Processed within 5-7 business days</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">2. Refund Eligibility</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <h3 className="text-xl text-green-300 font-semibold">Eligible for Refund:</h3>
                <ul className="list-disc pl-6 space-y-2 text-green-200">
                  <li>✅ Subscriptions within 7 days of sign-up</li>
                  <li>✅ Technical issues that cannot be resolved by our support team</li>
                  <li>✅ Service not meeting advertised specifications</li>
                  <li>✅ Billing errors or unauthorized charges</li>
                  <li>✅ Service unavailable in your region (if not disclosed at signup)</li>
                </ul>
                
                <h3 className="text-xl text-red-300 font-semibold mt-6">NOT Eligible for Refund:</h3>
                <ul className="list-disc pl-6 space-y-2 text-red-200">
                  <li>❌ Subscriptions older than 7 days</li>
                  <li>❌ Violation of Terms of Service</li>
                  <li>❌ Account sharing or unauthorized usage</li>
                  <li>❌ Change of mind after trial period</li>
                  <li>❌ Issues related to customer's internet connection</li>
                  <li>❌ Dissatisfaction with content availability (varies by region)</li>
                  <li>❌ Partial month refunds for cancellations</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">3. Refund Process</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-600/20 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Step 1: Request</h4>
                    <p className="text-blue-200 text-sm">Contact our support team via email, phone, or live chat to request a refund within 7 days.</p>
                  </div>
                  <div className="bg-purple-600/20 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-purple-300 mb-2">Step 2: Review</h4>
                    <p className="text-purple-200 text-sm">Our team will review your request and verify eligibility within 24-48 hours.</p>
                  </div>
                  <div className="bg-green-600/20 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-300 mb-2">Step 3: Process</h4>
                    <p className="text-green-200 text-sm">Approved refunds are processed within 5-7 business days to your original payment method.</p>
                  </div>
                </div>
                
                <h3 className="text-xl text-yellow-300 font-semibold mt-6">Required Information:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account email address</li>
                  <li>Order/subscription ID</li>
                  <li>Reason for refund request</li>
                  <li>Original payment method details</li>
                  <li>Date of subscription purchase</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-orange-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">4. Refund Timeline by Payment Method</h2>
              </div>
              <div className="text-gray-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-600/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-300 mb-2">💳 Credit/Debit Cards</h4>
                      <p className="text-blue-200 text-sm">3-5 business days (may take up to 10 days depending on your bank)</p>
                    </div>
                    <div className="bg-purple-600/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-300 mb-2">🏦 Bank Transfer</h4>
                      <p className="text-purple-200 text-sm">5-7 business days</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-green-600/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-300 mb-2">💰 PayPal</h4>
                      <p className="text-green-200 text-sm">1-3 business days</p>
                    </div>
                    <div className="bg-yellow-600/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-300 mb-2">📱 Digital Wallets</h4>
                      <p className="text-yellow-200 text-sm">1-5 business days (varies by provider)</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-indigo-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">5. Dispute Resolution</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>If your refund request is denied and you believe it was unfair:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may escalate to our senior support team</li>
                  <li>Provide additional documentation supporting your claim</li>
                  <li>We'll review disputes within 3-5 business days</li>
                  <li>Final decisions will be communicated in writing</li>
                </ul>
                <div className="bg-indigo-600/20 p-4 rounded-lg">
                  <p className="text-indigo-200">
                    <Shield className="h-5 w-5 inline mr-2" />
                    For unresolved disputes, you may contact your payment provider or relevant consumer protection agency.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">6. Cancellation vs. Refund</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-600/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-300 mb-2">🔄 Refund (7-day guarantee)</h4>
                    <ul className="text-green-200 text-sm space-y-1">
                      <li>• Get your money back</li>
                      <li>• Must be within 7 days</li>
                      <li>• Account immediately cancelled</li>
                      <li>• One-time offer for new users</li>
                    </ul>
                  </div>
                  <div className="bg-blue-600/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-300 mb-2">❌ Cancellation</h4>
                    <ul className="text-blue-200 text-sm space-y-1">
                      <li>• No refund for current month</li>
                      <li>• Service continues until period end</li>
                      <li>• Can be done anytime</li>
                      <li>• Prevents future charges</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-red-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">7. Important Notes</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <div className="bg-red-600/20 p-4 rounded-lg">
                  <ul className="text-red-200 space-y-2">
                    <li>• Refunds are processed to the original payment method only</li>
                    <li>• We cannot issue refunds to different accounts or methods</li>
                    <li>• Processing times depend on your bank/payment provider</li>
                    <li>• Refunded accounts cannot re-use the 7-day guarantee</li>
                    <li>• Free trials do not qualify for monetary refunds</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-blue-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">8. Contact for Refunds</h2>
              </div>
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <div className="text-gray-300 space-y-3">
                  <p><strong className="text-blue-300">To request a refund:</strong></p>
                  <p>📧 Email: refunds@iptvservice.com</p>
                  <p>📞 Phone: +1 (555) 123-4567</p>
                  <p>💬 Live Chat: Available 24/7 on our website</p>
                  <p>📍 Address: 123 Digital Street, Tech City, TC 12345</p>
                  <p>🕐 Response Time: Within 24-48 hours</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
