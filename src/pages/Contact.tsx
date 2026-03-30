import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '@/src/components/UI';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#F8F9FA] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-primary mb-6">
              Get in <span className="text-[#0052B4]">Touch</span>
            </h1>
            <p className="text-xl text-primary/60 leading-relaxed">
              Have questions about our mission or want to get involved? We're here to help. Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <SectionHeading title="Contact Information" subtitle="Reach Out" align="left" />
              <p className="text-primary/60 text-lg mb-12 mt-6">
                Our team is dedicated to providing timely responses to all inquiries. Whether you're a donor, a potential partner, or someone in need of assistance, we're here for you.
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-tertiary shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-3">Our Offices</h4>
                    <div className="space-y-4 text-primary/70 leading-relaxed">
                      <p>
                        <span className="font-bold text-primary block mb-1">USA Office:</span>
                        11152 Preserve Ln, Champlin, MN 55318
                      </p>
                      <p>
                        <span className="font-bold text-primary block mb-1">Nigeria Office:</span>
                        18 Immaculate Heart Avenue, Nkpor, ANAMBRA State 434101
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-tertiary shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1">Call Us</h4>
                    <p className="text-2xl font-bold text-[#0052B4]">+1 651 214 4696</p>
                    <p className="text-primary/40 text-sm mt-1">Monday - Friday, 9am - 5pm CST</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-tertiary shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1">Email Us</h4>
                    <a href="mailto:ihfoundation@ihmcare.net" className="text-2xl font-bold text-[#0052B4] hover:underline">
                      ihfoundation@ihmcare.net
                    </a>
                    <p className="text-primary/40 text-sm mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F8F9FA] rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm">
              <h3 className="text-3xl font-display font-bold text-primary mb-8">Send a Message</h3>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('fullName');
                  const email = formData.get('email');
                  const subject = formData.get('subject');
                  const message = formData.get('message');
                  
                  const mailtoLink = `mailto:ihfoundation@ihmcare.net?subject=${encodeURIComponent(String(subject))}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                  window.location.href = mailtoLink;
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-2">Full Name</label>
                    <input 
                      name="fullName"
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:border-tertiary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-2">Email Address</label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:border-tertiary transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-2">Subject</label>
                  <input 
                    name="subject"
                    type="text" 
                    required
                    placeholder="How can we help?"
                    className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:border-tertiary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-2">Message</label>
                  <textarea 
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:border-tertiary transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-[#0052B4] text-white rounded-2xl font-bold text-lg hover:bg-[#004191] transition-all shadow-lg flex items-center justify-center gap-3"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
