import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, Phone, Mail, ArrowLeft, Play, Sparkles } from 'lucide-react';

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6 shadow-2xl">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Thank You for Your Order!</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-semibold">StreamPro IPTV</span> subscription order has been received successfully. We'll contact you shortly to complete the setup.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">What Happens Next?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4 shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Step 1</h3>
              <p className="text-gray-300">
                Our team will review your order and contact you within <strong className="text-blue-400">1-2 hours</strong> during business hours.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4 shadow-lg">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Step 2</h3>
              <p className="text-gray-300">
                We'll call you to discuss payment options and answer any questions you might have.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4 shadow-lg">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Step 3</h3>
              <p className="text-gray-300">
                After payment, you'll receive your login credentials and setup instructions via email.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-2xl border border-white/20">
            <div className="flex items-center mb-4">
              <div className="bg-white/20 p-2 rounded-lg mr-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Need Immediate Assistance?</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <span>support@streamproiptv.com</span>
              </div>
            </div>
            <p className="mt-4 text-blue-100">
              Our support team is available 24/7 to help you with any questions or concerns.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border-2 border-blue-500/30 p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-3">
                <Play className="h-5 w-5 text-white" />
              </div>
              Order Details
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Order ID:</span>
                <span className="font-semibold text-blue-400">#SP{Date.now().toString().slice(-6)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Status:</span>
                <span className="text-amber-400 font-semibold">Pending Contact</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Expected Contact:</span>
                <span className="font-semibold text-green-400">Within 2 hours</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl border border-white/20">
            <h4 className="font-bold text-white mb-2 flex items-center justify-center">
              <Sparkles className="h-5 w-5 mr-2 text-blue-400" />
              Follow us for updates and tips:
            </h4>
            <p className="text-gray-300">
              Stay connected with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-semibold">StreamPro IPTV</span> for the latest features, channel updates, and exclusive offers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;