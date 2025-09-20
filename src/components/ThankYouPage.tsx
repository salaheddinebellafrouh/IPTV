import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, Phone, Mail, ArrowLeft } from 'lucide-react';

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You for Your Order!</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Your IPTV subscription order has been received successfully. We'll contact you shortly to complete the setup.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Happens Next?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1</h3>
              <p className="text-gray-700">
                Our team will review your order and contact you within <strong>1-2 hours</strong> during business hours.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2</h3>
              <p className="text-gray-700">
                We'll call you to discuss payment options and answer any questions you might have.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3</h3>
              <p className="text-gray-700">
                After payment, you'll receive your login credentials and setup instructions via email.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <span>support@streammax.com</span>
              </div>
            </div>
            <p className="mt-4 text-amber-100">
              Our support team is available 24/7 to help you with any questions or concerns.
            </p>
          </div>

          <div className="bg-white border-2 border-amber-200 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Order Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-semibold">#SM{Date.now().toString().slice(-6)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-amber-600 font-semibold">Pending Contact</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Expected Contact:</span>
                <span className="font-semibold">Within 2 hours</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="font-bold text-gray-900 mb-2">Follow us for updates and tips:</h4>
            <p className="text-gray-600">
              Stay connected with StreamMax IPTV for the latest features, channel updates, and exclusive offers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;