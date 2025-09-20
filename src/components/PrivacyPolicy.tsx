import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';
import { ArrowLeft, Shield, Eye, Database, UserCheck, Mail, Calendar, AlertTriangle } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <SEO 
        title="Privacy Policy - StreamPro IPTV | How We Protect Your Data"
        description="Learn how StreamPro IPTV protects your privacy and personal information. Our comprehensive privacy policy explains data collection, usage, security measures, and your rights."
        keywords="privacy policy, data protection, IPTV privacy, personal information security, GDPR compliance, data collection, streaming service privacy"
        canonical="/privacy-policy"
      />
      {/* SEO Meta would be handled by React Helmet */}
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
            <Shield className="h-8 w-8 text-blue-400 mr-3" />
            <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
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
                <Eye className="h-6 w-6 text-blue-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">1. Information We Collect</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <h3 className="text-xl text-blue-300 font-semibold">Personal Information:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (processed securely)</li>
                  <li>IPTV service preferences and package selections</li>
                  <li>Customer support communications</li>
                </ul>
                
                <h3 className="text-xl text-blue-300 font-semibold mt-6">Technical Information:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Usage statistics and service performance data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">2. How We Use Your Information</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Service Delivery:</strong> Provide and maintain IPTV services, process payments, and manage subscriptions</li>
                  <li><strong>Customer Support:</strong> Respond to inquiries, troubleshoot issues, and provide technical assistance</li>
                  <li><strong>Service Improvement:</strong> Analyze usage patterns to enhance our IPTV offerings and user experience</li>
                  <li><strong>Communications:</strong> Send service updates, promotional offers, and important account notifications</li>
                  <li><strong>Legal Compliance:</strong> Meet regulatory requirements and protect against fraud or abuse</li>
                  <li><strong>Marketing:</strong> With your consent, send promotional materials about our IPTV services</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <UserCheck className="h-6 w-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">3. Information Sharing and Disclosure</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p className="font-semibold text-blue-300">We do not sell your personal information. We may share information in these circumstances:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Service Providers:</strong> Trusted third parties who help operate our IPTV services (payment processors, hosting providers)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulations</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Consent:</strong> When you explicitly agree to information sharing</li>
                  <li><strong>Protection:</strong> To protect our rights, users' safety, or prevent fraud</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-red-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">4. Data Security</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>We implement robust security measures to protect your information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases with access controls</li>
                  <li>Regular security audits and updates</li>
                  <li>Staff training on data protection practices</li>
                  <li>Incident response procedures for potential breaches</li>
                </ul>
                <div className="bg-red-600/20 p-4 rounded-lg mt-4">
                  <p className="text-red-200">
                    <AlertTriangle className="h-5 w-5 inline mr-2" />
                    While we strive to protect your data, no internet transmission is 100% secure. Use strong passwords and keep your account information confidential.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <UserCheck className="h-6 w-6 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">5. Your Privacy Rights</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request copies of your personal data</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Restriction:</strong> Limit how we process your data</li>
                </ul>
                <p className="text-blue-300 font-semibold">To exercise these rights, contact us at privacy@iptvservice.com</p>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-indigo-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">6. Data Retention</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account Data:</strong> Retained while your account is active and for 7 years after closure</li>
                  <li><strong>Payment Records:</strong> Kept for legal and tax compliance (typically 7 years)</li>
                  <li><strong>Usage Logs:</strong> Automatically deleted after 12 months</li>
                  <li><strong>Marketing Data:</strong> Deleted within 30 days of unsubscribing</li>
                  <li><strong>Support Communications:</strong> Retained for 3 years for service improvement</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white mb-0">7. Contact Information</h2>
              </div>
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <div className="text-gray-300 space-y-3">
                  <p><strong className="text-blue-300">For privacy-related inquiries:</strong></p>
                  <p>📧 Email: privacy@iptvservice.com</p>
                  <p>📞 Phone: +1 (555) 123-4567</p>
                  <p>📍 Address: 123 Digital Street, Tech City, TC 12345</p>
                  <p>🕐 Business Hours: Monday-Friday, 9 AM - 6 PM EST</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Policy Updates</h2>
              <div className="text-gray-300 space-y-4">
                <p>We may update this Privacy Policy periodically. Significant changes will be communicated via:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email notification to registered users</li>
                  <li>Website banner announcements</li>
                  <li>In-app notifications</li>
                </ul>
                <p className="text-blue-300 font-semibold">Continued use of our services after policy updates constitutes acceptance of the changes.</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
