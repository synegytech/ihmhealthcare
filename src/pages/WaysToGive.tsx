import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading, InsightModule } from '@/src/components/UI';
import { ImpactCard } from '@/src/components/ImpactCard';
import { Heart, Calendar, Gift, Briefcase, ArrowRight, CheckCircle2, User, Mail, Copy, Check, CreditCard, Landmark, ShieldCheck, QrCode } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

declare global {
  interface Window {
    paypal?: any;
  }
}

export function WaysToGive() {
  const [amount, setAmount] = useState('50');
  const [isMonthly, setIsMonthly] = useState(true);
  const [isDedicated, setIsDedicated] = useState(false);
  const [honoreeName, setHonoreeName] = useState('');
  const [dedicationType, setDedicationType] = useState<'honor' | 'memory'>('honor');
  const [notifyRecipient, setNotifyRecipient] = useState('');
  const [notifyContact, setNotifyContact] = useState('');
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedName, setCopiedName] = useState(false);
  
  const paypalContainerRef = useRef<HTMLDivElement>(null);

  const donationAmounts = ['25', '50', '100', '250', '500', 'Custom'];

  const copyToClipboard = (text: string, type: 'account' | 'name') => {
    navigator.clipboard.writeText(text);
    if (type === 'account') {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    } else {
      setCopiedName(true);
      setTimeout(() => setCopiedName(false), 2000);
    }
  };

  useEffect(() => {
    if (window.paypal && paypalContainerRef.current) {
      // Clear container first
      paypalContainerRef.current.innerHTML = '';
      
      window.paypal.HostedButtons({
        hostedButtonId: "YQ5CHEBECNHUN",
      }).render(paypalContainerRef.current);
    }
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-[#A7F3D0] text-[#065F46] rounded-lg text-xs font-bold uppercase tracking-widest mb-8">
              Support Our Mission
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-primary leading-[1.05] mb-8">
              Your Kindness <br />
              <span className="text-[#0052B4]">Heals Lives.</span>
            </h1>
            <p className="text-lg text-primary/70 leading-relaxed mb-10 max-w-lg font-medium">
              Every gift to IHM Healthcare Foundation directly fuels breakthrough research, patient-centered care, and the essential clinical resources that our community relies on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.paypal.com/donate?token=mFDsZwS4JacfyuNkFzU8mh_q4Gqp8y95ZqlC8G4SVaBKwUqjeXJ87jgJwFwQVWAFYz2fmANa-b6dSmW1breQqje-kcu&useraction=commit%2Fdonate%2F&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWxvYmplY3RzLmNvbS9kb25hdGUvc2RrL2RvbmF0ZS1zZGsuanMiLCJhdHRycyI6eyJkYXRhLXVpZCI6InVpZF9wb2t1aW9tbmJnc293cGhpc2F1Z2VianVpb21iamsifX0&targetMeta=eyJ6b2lkVmVyc2lvbiI6IjlfMF81OCIsInRhcmdldCI6IkRPTkFURSIsInNka1ZlcnNpb24iOiIwLjkuMCJ9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0052B4] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#004191] transition-all shadow-lg text-center"
              >
                Donate to PayPal Giving Fund <ArrowRight size={20} />
              </a>
              <button 
                onClick={() => document.getElementById('other-ways')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#F8F9FA] text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white transition-all shadow-sm border border-gray-100"
              >
                Explore Ways to Give
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-[500px] ml-auto">
              <div className="absolute -inset-4 bg-[#A7F3D0]/20 rounded-[60px] blur-3xl -z-10" />
              <img
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1000"
                alt="Compassionate Healthcare"
                className="w-full h-full object-cover rounded-[60px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#A7F3D0]/30 rounded-3xl blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#F8F9FA] rounded-[32px] p-8 md:p-10 border-l-[6px] border-[#059669] flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
              <Heart className="text-[#059669]" size={32} fill="currentColor" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">94% of Every Dollar</h3>
              <p className="text-primary/60 text-lg">
                Goes directly to patient support and clinical programs. We are committed to radical transparency and maximum impact for every gift received.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading
              title="Make a Direct Impact"
              subtitle="Donate Today"
            />
            <p className="text-primary/70 text-lg leading-relaxed mb-10">
              Choose a donation amount and frequency that works for you. Your support provides life-saving resources to those in need.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-tertiary shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-primary mb-2">Secure & Transparent</h4>
                  <p className="text-primary/60">Your donation is processed securely and 100% of your gift goes directly to the foundation's programs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-tertiary shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-primary mb-2">Tax Deductible</h4>
                  <p className="text-primary/60">As a 501(c)(3) non-profit, all donations to IHM Healthcare Foundation are tax-deductible.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="flex bg-surface p-1 rounded-full mb-10">
              <button
                onClick={() => setIsMonthly(true)}
                className={cn(
                  "flex-1 py-3 rounded-full font-bold transition-all",
                  isMonthly ? "bg-primary text-white shadow-md" : "text-primary/50 hover:text-primary"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsMonthly(false)}
                className={cn(
                  "flex-1 py-3 rounded-full font-bold transition-all",
                  !isMonthly ? "bg-primary text-white shadow-md" : "text-primary/50 hover:text-primary"
                )}
              >
                One-time
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {donationAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt)}
                  className={cn(
                    "py-4 rounded-2xl font-bold border-2 transition-all",
                    amount === amt
                      ? "border-tertiary bg-accent text-tertiary"
                      : "border-gray-100 text-primary/50 hover:border-tertiary/30"
                  )}
                >
                  {amt === 'Custom' ? amt : `$${amt}`}
                </button>
              ))}
            </div>

            <div className="mb-10">
              <label className="block text-sm font-bold text-primary/60 uppercase tracking-widest mb-3">
                {amount === 'Custom' ? 'Enter Custom Amount' : 'Selected Amount'}
              </label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-primary">$</span>
                <input
                  type="text"
                  value={amount === 'Custom' ? '' : amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-surface border-none rounded-2xl py-5 pl-12 pr-6 text-2xl font-bold text-primary focus:ring-2 focus:ring-tertiary/20 outline-none"
                />
              </div>
            </div>

            {/* Dedication Option */}
            <div className="mb-10 p-6 bg-surface rounded-3xl border border-gray-100">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={isDedicated}
                    onChange={(e) => setIsDedicated(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={cn(
                    "w-6 h-6 rounded-md border-2 transition-all flex items-center justify-center",
                    isDedicated ? "bg-tertiary border-tertiary" : "border-gray-300 group-hover:border-tertiary/50"
                  )}>
                    {isDedicated && <CheckCircle2 size={16} className="text-white" />}
                  </div>
                </div>
                <span className="font-bold text-primary">Dedicate this gift in honor or memory of someone</span>
              </label>

              {isDedicated && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 space-y-6"
                >
                  <div className="flex gap-4">
                    <button
                      onClick={() => setDedicationType('honor')}
                      className={cn(
                        "flex-1 py-3 rounded-xl font-bold text-sm transition-all border-2",
                        dedicationType === 'honor' ? "bg-primary text-white border-primary" : "border-gray-200 text-primary/50 hover:border-primary/20"
                      )}
                    >
                      In Honor Of
                    </button>
                    <button
                      onClick={() => setDedicationType('memory')}
                      className={cn(
                        "flex-1 py-3 rounded-xl font-bold text-sm transition-all border-2",
                        dedicationType === 'memory' ? "bg-primary text-white border-primary" : "border-gray-200 text-primary/50 hover:border-primary/20"
                      )}
                    >
                      In Memory Of
                    </button>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary/40 uppercase tracking-widest">Honoree Name</label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" />
                      <input
                        type="text"
                        value={honoreeName}
                        onChange={(e) => setHonoreeName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full bg-white border border-gray-100 rounded-xl py-4 pl-12 pr-4 text-primary focus:ring-2 focus:ring-tertiary/20 outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200/50">
                    <p className="text-sm font-bold text-primary mb-4">Who should we notify about this gift?</p>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-primary/40 uppercase tracking-widest">Recipient Name</label>
                        <input
                          type="text"
                          value={notifyRecipient}
                          onChange={(e) => setNotifyRecipient(e.target.value)}
                          placeholder="Recipient's Full Name"
                          className="w-full bg-white border border-gray-100 rounded-xl py-4 px-4 text-primary focus:ring-2 focus:ring-tertiary/20 outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-primary/40 uppercase tracking-widest">Notification Email or Address</label>
                        <div className="relative">
                          <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" />
                          <input
                            type="text"
                            value={notifyContact}
                            onChange={(e) => setNotifyContact(e.target.value)}
                            placeholder="Email or Mailing Address"
                            className="w-full bg-white border border-gray-100 rounded-xl py-4 pl-12 pr-4 text-primary focus:ring-2 focus:ring-tertiary/20 outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <button className="w-full bg-tertiary text-white py-6 rounded-2xl font-bold text-xl hover:bg-primary transition-all shadow-lg hover:shadow-tertiary/20 flex items-center justify-center gap-3">
              Complete Donation <ArrowRight size={24} />
            </button>

            <p className="text-center text-primary/40 text-sm mt-8">
              Secure payment powered by Stripe.
            </p>
          </div>
        </div>
      </section>

      {/* Other Payment Methods */}
      <section id="other-ways" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Alternative Ways to Give"
            subtitle="More Options"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Bank Transfer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F8F9FA] rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#0052B4]/10 rounded-2xl flex items-center justify-center text-[#0052B4]">
                  <Landmark size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary">Direct Bank Transfer</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm relative group">
                  <p className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-2">Account Name</p>
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-lg font-bold text-primary leading-tight">Immaculate Heart of Mary Sisters Healthcare Foundation</p>
                    <button 
                      onClick={() => copyToClipboard('Immaculate Heart of Mary Sisters Healthcare Foundation', 'name')}
                      className="p-2 hover:bg-surface rounded-lg transition-colors text-primary/40 hover:text-tertiary shrink-0"
                      title="Copy account name"
                    >
                      {copiedName ? <Check size={18} className="text-[#059669]" /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-2">Bank Name</p>
                    <p className="text-lg font-bold text-primary">Globus Bank</p>
                  </div>
                  
                  <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm relative group">
                    <p className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-2">Account Number</p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-primary tracking-wider">1000284153</p>
                      <button 
                        onClick={() => copyToClipboard('1000284153', 'account')}
                        className="p-2 hover:bg-surface rounded-lg transition-colors text-primary/40 hover:text-tertiary"
                        title="Copy account number"
                      >
                        {copiedAccount ? <Check size={18} className="text-[#059669]" /> : <Copy size={18} />}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-[#0052B4]/5 rounded-2xl border border-[#0052B4]/10">
                  <div className="w-8 h-8 rounded-full bg-[#0052B4]/10 flex items-center justify-center text-[#0052B4] shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <p className="text-sm text-primary/70 font-medium">
                    Please include your name in the transfer description for proper acknowledgment.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* PayPal & Other */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#F8F9FA] rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#0052B4]/10 rounded-2xl flex items-center justify-center text-[#0052B4]">
                  <CreditCard size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary">PayPal & Card Payments</h3>
              </div>
              
              <div className="flex-grow flex flex-col p-8 md:p-12 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0052B4]/5 rounded-full text-[#0052B4] text-xs font-bold uppercase tracking-widest mb-4">
                    <ShieldCheck size={14} /> Secure Payment Portal
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-2">Donate via PayPal</h4>
                  <p className="text-primary/60 max-w-xs mx-auto">
                    Support our mission globally using PayPal, Venmo, or any major debit/credit card.
                  </p>
                </div>
                
                <div className="w-full max-w-[420px] mx-auto bg-surface/30 p-6 md:p-10 rounded-[32px] border border-gray-50">
                  <div 
                    id="paypal-container-YQ5CHEBECNHUN" 
                    ref={paypalContainerRef} 
                    className="w-full min-h-[350px]"
                  >
                    {/* PayPal button will render here */}
                    <div className="flex flex-col items-center justify-center py-20">
                      <div className="w-12 h-12 border-4 border-tertiary/20 border-t-tertiary rounded-full animate-spin mb-4"></div>
                      <p className="text-sm font-bold text-primary/30 uppercase tracking-widest">Connecting to PayPal...</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col items-center">
                  <p className="text-[10px] text-primary/30 font-bold mb-6 uppercase tracking-[0.2em]">Global Payment Partners</p>
                  <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" referrerPolicy="no-referrer" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" referrerPolicy="no-referrer" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" className="h-6" referrerPolicy="no-referrer" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/American_Express_logo_%282018%29.svg" alt="Amex" className="h-5" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Scan to Donate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F8F9FA] rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#0052B4]/10 rounded-2xl flex items-center justify-center text-[#0052B4]">
                  <QrCode size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary">Scan to Donate</h3>
              </div>
              
              <div className="flex-grow flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-tertiary/5 rounded-[40px] blur-xl group-hover:bg-tertiary/10 transition-colors" />
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://www.paypal.com/donate?token=mFDsZwS4JacfyuNkFzU8mh_q4Gqp8y95ZqlC8G4SVaBKwUqjeXJ87jgJwFwQVWAFYz2fmANa-b6dSmW1breQqje-kcu" 
                    alt="Scan to Donate QR Code" 
                    className="relative w-48 h-48 md:w-64 md:h-64 object-contain rounded-2xl shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="mt-8 text-primary/60 text-center max-w-xs font-medium">
                  Open your camera or QR scanner app to give instantly via your mobile device.
                </p>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-2 text-primary/30 text-[10px] font-bold uppercase tracking-widest">
                <ShieldCheck size={12} /> Verified Secure QR
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">How You Can Help</h2>
            <p className="text-primary/60 text-lg max-w-2xl leading-relaxed">
              Choose the path that best suits your philanthropic goals. No gift is too small to make a lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Recurring Giving */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-[#0052B4]/10 rounded-2xl flex items-center justify-center text-[#0052B4] mb-8">
                <Calendar size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Recurring Giving</h3>
              <p className="text-primary/60 mb-8 flex-grow leading-relaxed">
                Join our Circle of Hope by setting up a monthly gift. Consistent support allows us to plan for the future and ensure no patient is ever turned away.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3 text-sm font-medium text-primary/70">
                  <div className="w-5 h-5 rounded-full bg-[#059669]/10 flex items-center justify-center text-[#059669]">
                    <CheckCircle2 size={12} />
                  </div>
                  Impact throughout the year
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-primary/70">
                  <div className="w-5 h-5 rounded-full bg-[#059669]/10 flex items-center justify-center text-[#059669]">
                    <CheckCircle2 size={12} />
                  </div>
                  Easily adjustable at any time
                </li>
              </ul>
              <button className="text-[#0052B4] font-bold flex items-center gap-2 hover:underline group">
                Start Monthly Gift <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Planned Giving */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-[#059669]/10 rounded-2xl flex items-center justify-center text-[#059669] mb-8">
                <Gift size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Planned Giving</h3>
              <p className="text-primary/60 mb-8 flex-grow leading-relaxed">
                Leave a legacy of health. Include IHM Healthcare in your will or estate plans to support future generations.
              </p>
              <button className="text-[#059669] font-bold flex items-center gap-2 hover:underline group mt-auto">
                Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Corporate Partnerships */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-[#F59E0B]/10 rounded-2xl flex items-center justify-center text-[#F59E0B] mb-8">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Corporate Partnerships</h3>
              <p className="text-primary/60 mb-8 flex-grow leading-relaxed">
                Partner with us to amplify your impact. We offer matching gift programs, event sponsorships, and employee engagement opportunities.
              </p>
              <button className="text-[#F59E0B] font-bold flex items-center gap-2 hover:underline group mt-auto">
                Partner With Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <InsightModule
            quote="Giving is not just about making a donation. It is about making a difference."
            author="Kathy Calvin, Former CEO of UN Foundation"
          />
        </div>
      </section>
    </div>
  );
}
