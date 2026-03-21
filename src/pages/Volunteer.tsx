import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '@/src/components/UI';
import { Heart, Users, Globe, BookOpen, Send } from 'lucide-react';

export function Volunteer() {
  const opportunities = [
    {
      icon: <Users size={32} />,
      title: "Community Outreach",
      description: "Help us organize local health fairs and awareness campaigns in our target communities."
    },
    {
      icon: <Globe size={32} />,
      title: "International Support",
      description: "Assist with logistics and coordination for our programs in Nigeria and other regions."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Health Education",
      description: "Use your medical or educational expertise to help develop training materials for healthcare workers."
    },
    {
      icon: <Heart size={32} />,
      title: "Patient Care",
      description: "Support our partner clinics with administrative or non-medical assistance for patients."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-tertiary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6">
              Make an <span className="text-tertiary text-glow">Impact</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Your time and skills can change lives. Join our global network of volunteers and help us bring quality healthcare to those who need it most.
            </p>
            <a href="#apply" className="inline-flex items-center gap-2 bg-tertiary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl">
              Apply to Volunteer <Heart size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Volunteer Opportunities" 
            subtitle="How You Can Help" 
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {opportunities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[32px] bg-[#F8F9FA] border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-tertiary mb-6 shadow-sm group-hover:bg-tertiary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-primary/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 px-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-primary p-12 text-white">
              <h3 className="text-3xl font-display font-bold mb-6">Join Our Team</h3>
              <p className="text-white/70 mb-8">
                Fill out the form below and our volunteer coordinator will get back to you within 3-5 business days.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-tertiary">
                    <Users size={20} />
                  </div>
                  <span>Flexible schedules</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-tertiary">
                    <Globe size={20} />
                  </div>
                  <span>Remote & on-site roles</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-tertiary">
                    <Heart size={20} />
                  </div>
                  <span>Meaningful impact</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 p-12">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-2">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-[#F8F9FA] border border-gray-100 rounded-2xl focus:outline-none focus:border-tertiary transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-2">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 bg-[#F8F9FA] border border-gray-100 rounded-2xl focus:outline-none focus:border-tertiary transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-2">Phone Number</label>
                  <input type="tel" className="w-full px-6 py-4 bg-[#F8F9FA] border border-gray-100 rounded-2xl focus:outline-none focus:border-tertiary transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-2">Area of Interest</label>
                  <select className="w-full px-6 py-4 bg-[#F8F9FA] border border-gray-100 rounded-2xl focus:outline-none focus:border-tertiary transition-colors appearance-none">
                    <option>Community Outreach</option>
                    <option>International Support</option>
                    <option>Health Education</option>
                    <option>Patient Care</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-2">Why do you want to volunteer?</label>
                  <textarea rows={4} className="w-full px-6 py-4 bg-[#F8F9FA] border border-gray-100 rounded-2xl focus:outline-none focus:border-tertiary transition-colors resize-none" placeholder="Tell us about your motivation..."></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full py-5 bg-tertiary text-primary rounded-2xl font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-3">
                    Submit Application <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
