import { Routes, Route } from 'react-router-dom';
import EnhancedLandingPage from './components/EnhancedLandingPage';
import CheckoutPage from './components/CheckoutPage';
import ThankYouPage from './components/ThankYouPage';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import RefundPolicy from './components/RefundPolicy';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EnhancedLandingPage />} />
        <Route path="/checkout/:plan" element={<CheckoutPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;