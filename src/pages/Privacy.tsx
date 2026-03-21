import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '@/src/components/UI';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export function Privacy() {
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
              Privacy <span className="text-[#0052B4]">Policy</span>
            </h1>
            <p className="text-xl text-primary/60 leading-relaxed">
              Your trust is our most valuable asset. We are committed to protecting your personal data and being transparent about how we use it.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-accent p-3 rounded-xl text-tertiary">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-2xl font-display font-bold text-primary">Data Protection</h2>
              </div>
              <p className="text-primary/70 leading-relaxed mb-4">
                We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-primary/70">
                <li>Secure server hosting with advanced encryption</li>
                <li>Regular security audits and vulnerability scanning</li>
                <li>Restricted access to personal data for authorized personnel only</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-accent p-3 rounded-xl text-tertiary">
                  <Eye size={24} />
                </div>
                <h2 className="text-2xl font-display font-bold text-primary">Information We Collect</h2>
              </div>
              <p className="text-primary/70 leading-relaxed mb-4">
                We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-primary/70">
                <li>Name, email address, and contact information</li>
                <li>Donation history and preferences</li>
                <li>Technical data such as IP address and browser type for analytics</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-accent p-3 rounded-xl text-tertiary">
                  <Lock size={24} />
                </div>
                <h2 className="text-2xl font-display font-bold text-primary">Cookie Usage</h2>
              </div>
              <p className="text-primary/70 leading-relaxed mb-4">
                Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.
              </p>
              <p className="text-primary/70 leading-relaxed">
                We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
              </p>
            </div>

            <div className="bg-[#F8F9FA] p-8 rounded-3xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-xl text-tertiary shadow-sm">
                  <FileText size={24} />
                </div>
                <h2 className="text-2xl font-display font-bold text-primary">Your Rights</h2>
              </div>
              <p className="text-primary/70 leading-relaxed mb-6">
                Under GDPR and other privacy regulations, you have several rights regarding your personal data:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                  <h3 className="font-bold text-primary mb-2">Right to Access</h3>
                  <p className="text-sm text-primary/60">You can request a copy of all data we hold about you.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                  <h3 className="font-bold text-primary mb-2">Right to Erasure</h3>
                  <p className="text-sm text-primary/60">You can request that we delete your personal information.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                  <h3 className="font-bold text-primary mb-2">Right to Rectification</h3>
                  <p className="text-sm text-primary/60">You can ask us to correct any inaccurate information.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                  <h3 className="font-bold text-primary mb-2">Right to Object</h3>
                  <p className="text-sm text-primary/60">You can object to our processing of your personal data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
