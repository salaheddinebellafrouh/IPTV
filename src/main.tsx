import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SEOProvider } from './components/SEO';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SEOProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SEOProvider>
  </StrictMode>
);