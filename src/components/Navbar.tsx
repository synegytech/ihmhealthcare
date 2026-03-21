import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Mission', path: '/' },
  // { name: 'Programs', path: '/programs' },
  { name: 'News & Events', path: '/news' },
  { name: 'Ways to Give', path: '/give' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle accessibility: Scroll lock and Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
      };
      
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Focus management: Return focus to toggle button when menu closes
  useEffect(() => {
    if (!isOpen && toggleButtonRef.current) {
      toggleButtonRef.current.focus();
    }
  }, [isOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent'
      )}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group relative z-50">
          <img 
            src="logos/logo.png" 
            alt="IHM Healthcare Foundation" 
            className={cn(
              "w-auto object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-sm",
              scrolled ? "h-18 md:h-26" : "h-19 md:h-27",
              !scrolled && isHomePage && "brightness-0 invert" // Make logo white on home hero
            )} 
          />
        </Link>

        {/* Desktop Nav - Hidden on small/medium screens, visible on large */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => cn(
                  'text-sm font-semibold transition-all px-4 py-2 rounded-full relative group overflow-hidden',
                  isActive 
                    ? scrolled ? 'text-[#0052B4]' : isHomePage ? 'text-white' : 'text-[#0052B4]'
                    : scrolled 
                      ? 'text-primary/70 hover:text-[#0052B4]' 
                      : isHomePage ? 'text-white/80 hover:text-white' : 'text-primary/80 hover:text-[#0052B4]'
                )}
              >
                <span className="relative z-10">{link.name}</span>
                <motion.div 
                  className={cn(
                    "absolute inset-0 -z-0",
                    isActive(link.path) 
                      ? scrolled ? "bg-[#0052B4]/5" : isHomePage ? "bg-white/10" : "bg-[#0052B4]/5"
                      : scrolled ? "bg-[#0052B4]/5 opacity-0 group-hover:opacity-100" : isHomePage ? "bg-white/10 opacity-0 group-hover:opacity-100" : "bg-[#0052B4]/5 opacity-0 group-hover:opacity-100"
                  )}
                  transition={{ duration: 0.2 }}
                />
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="activeNav"
                    className={cn(
                      "absolute bottom-0 left-4 right-4 h-0.5",
                      scrolled ? "bg-[#0052B4]" : isHomePage ? "bg-white" : "bg-[#0052B4]"
                    )}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/volunteer"
              className={cn(
                "text-sm font-bold px-6 py-2.5 rounded-full border transition-all",
                scrolled 
                  ? "text-primary border-gray-200 hover:border-[#0052B4] hover:text-[#0052B4] hover:bg-[#0052B4]/5" 
                  : isHomePage 
                    ? "text-white border-white/30 hover:bg-white/10 hover:border-white" 
                    : "text-primary border-gray-200 hover:border-[#0052B4] hover:text-[#0052B4] hover:bg-[#0052B4]/5"
              )}
            >
              Volunteer
            </Link>
            {/* <Link
              to="/give"
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95",
                scrolled 
                  ? "bg-[#0052B4] text-white hover:bg-[#004191]" 
                  : isHomePage 
                    ? "bg-white text-primary hover:bg-white/90" 
                    : "bg-[#0052B4] text-white hover:bg-[#004191]"
              )}
            >
              Donate Now
            </Link> */}
          </div>
        </div>

        {/* Mobile/Tablet Toggle */}
        <button
          ref={toggleButtonRef}
          className={cn(
            "lg:hidden relative z-50 p-2 rounded-full transition-colors focus:outline-none focus:ring-2",
            scrolled 
              ? "text-primary hover:bg-gray-100 focus:ring-[#0052B4]" 
              : isHomePage 
                ? "text-white hover:bg-white/10 focus:ring-white" 
                : "text-primary hover:bg-gray-100 focus:ring-[#0052B4]"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-[60]"
              aria-hidden="true"
            />
            
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl z-[70] lg:hidden flex flex-col pt-20 px-6 overflow-y-auto"
            >
              {/* Internal Close Button for Mobile Menu */}
              <button
                className="absolute top-6 right-6 p-2 text-primary hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0052B4]"
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col gap-2 mt-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => cn(
                      'text-lg font-semibold py-4 px-6 rounded-2xl transition-all flex items-center justify-between group',
                      isActive 
                        ? 'text-[#0052B4] bg-[#0052B4]/5' 
                        : 'text-primary hover:bg-gray-50 hover:translate-x-2'
                    )}
                  >
                    {link.name}
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: isActive(link.path) ? 1 : 0, x: isActive(link.path) ? 0 : -10 }}
                      className="w-2 h-2 rounded-full bg-[#0052B4]"
                    />
                  </NavLink>
                ))}
              </div>
              
              <div className="mt-auto mb-10 flex flex-col gap-4">
                <Link
                  to="/volunteer"
                  onClick={() => setIsOpen(false)}
                  className="text-center font-bold py-4 border border-gray-200 rounded-2xl hover:bg-gray-50 hover:border-[#0052B4] hover:text-[#0052B4] transition-all"
                >
                  Volunteer
                </Link>
                <Link
                  to="/give"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#0052B4] text-white px-6 py-4 rounded-2xl text-center font-bold hover:bg-[#004191] transition-all shadow-lg active:scale-95"
                >
                  Donate Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
