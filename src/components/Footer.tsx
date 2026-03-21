import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4">
          <Link to="/" className="flex items-center gap-3 mb-6 group">
            <div className="bg-white p-4 rounded-2xl inline-block shadow-lg transition-transform group-hover:scale-105">
              <img src="logos/logo.png" alt="IHM Healthcare Foundation" className="h-50 w-auto object-contain" />
            </div>
          </Link>
          <p className="text-white/70 leading-relaxed mb-8 max-w-sm">
            Dedicated to advancing healthcare through compassion, innovation, and community support. Together, we build a healthier future for all.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tertiary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tertiary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tertiary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tertiary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display font-bold text-lg mb-6">Foundation</h4>
          <ul className="flex flex-col gap-4 text-white/70">
            <li><Link to="/about" className="hover:text-tertiary transition-colors">About Us</Link></li>
            {/* <li><Link to="/programs" className="hover:text-tertiary transition-colors">Our Programs</Link></li> */}
            <li><Link to="/give" className="hover:text-tertiary transition-colors">Ways to Give</Link></li>
            <li><Link to="/news" className="hover:text-tertiary transition-colors">News & Events</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display font-bold text-lg mb-6">Support</h4>
          <ul className="flex flex-col gap-4 text-white/70">
            <li><Link to="/contact" className="hover:text-tertiary transition-colors">Contact Us</Link></li>
            <li><Link to="/volunteer" className="hover:text-tertiary transition-colors">Volunteer</Link></li>
            <li><Link to="/privacy" className="hover:text-tertiary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-tertiary transition-colors">Terms of Service</Link></li>
            <li><Link to="/faq" className="hover:text-tertiary transition-colors">FAQs</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
          <ul className="flex flex-col gap-6 text-white/70">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-tertiary shrink-0 mt-1" />
              <div className="flex flex-col gap-4">
                <span>11152 Preserve Ln, Champlin, MN 55318</span>
                <span>18 Immaculate Heart Avenue, Nkpor, ANAMBRA State 434101</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={20} className="text-tertiary shrink-0 mt-1" />
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1">Call Us</span>
                <span className="text-lg font-semibold text-white">+1 651 214 4696</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={20} className="text-tertiary shrink-0 mt-1" />
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1">Email Us</span>
                <a href="mailto:ihfoundation@ihmcare.net" className="text-lg font-semibold text-white hover:text-tertiary transition-colors">
                  ihfoundation@ihmcare.net
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
        <p>© 2026 IHM Healthcare Foundation. All rights reserved.</p>
        <p>A 501(c)(3) Non-Profit Organization</p>
      </div>
    </footer>
  );
}
