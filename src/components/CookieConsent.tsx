import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md z-[100]"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-accent p-3 rounded-xl text-tertiary shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-display font-bold text-primary mb-1">Privacy Preference</h3>
                <p className="text-sm text-primary/60 leading-relaxed">
                  We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-primary/40 hover:text-primary transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-primary text-white py-3 px-6 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all shadow-md"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 bg-gray-50 text-primary border border-gray-200 py-3 px-6 rounded-xl font-bold text-sm hover:bg-white transition-all"
              >
                Reject Non-Essential
              </button>
            </div>
            
            <p className="mt-4 text-[11px] text-center text-primary/40 uppercase tracking-widest font-bold">
              Read our <Link to="/privacy" className="text-tertiary hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
