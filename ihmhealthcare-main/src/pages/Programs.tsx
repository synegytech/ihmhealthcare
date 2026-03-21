import React from 'react';
import { SectionHeading, InsightModule } from '@/src/components/UI';
import { ImpactCard } from '@/src/components/ImpactCard';
import { Heart, Activity, Users, ShieldCheck, ArrowRight, Zap, Globe, Microscope } from 'lucide-react';
import { motion } from 'motion/react';

export function Programs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000"
            alt="Programs"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-tertiary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
              Our Initiatives
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
              Healthcare <br />
              <span className="text-tertiary italic">Initiatives</span> for the <br />
              Underserved.
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              We aim to ensure the provision of affordable healthcare to indigent persons, especially women and children, bridging the gap between poverty and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Families Supported', value: '10k+', icon: <Users size={24} /> },
            { label: 'Research Grants', value: '500+', icon: <Microscope size={24} /> },
            { label: 'Mobile Clinics', value: '25', icon: <Globe size={24} /> },
            { label: 'Innovation Hubs', value: '5', icon: <Zap size={24} /> },
          ].map((metric, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-accent text-tertiary flex items-center justify-center mb-4">
                {metric.icon}
              </div>
              <span className="text-4xl font-display font-bold text-primary mb-2">{metric.value}</span>
              <span className="text-primary/60 font-semibold text-xs uppercase tracking-widest">{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Initiatives */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Our Core Initiatives"
            subtitle="Impact Areas"
            align="left"
          />

          <div className="bento-grid">
            <ImpactCard
              title="Maternity Support"
              description="Ensuring safe and comprehensive care for expectant mothers, reducing maternal mortality in underserved areas."
              icon={<Heart size={24} />}
              className="md:col-span-8 h-[320px]"
              variant="dark"
              image="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000"
            />
            <ImpactCard
              title="Medical Equipment"
              description="Equipping local clinics with high-quality medical supplies to ensure no patient is turned away."
              icon={<Activity size={24} />}
              className="md:col-span-4 h-[320px]"
              variant="green"
            />
            <ImpactCard
              title="Community Health"
              description="Mobile clinics and outreach programs bringing care directly to those who need it most."
              icon={<Users size={24} />}
              className="md:col-span-4 h-[320px]"
            />
            <ImpactCard
              title="Safety & Transparency"
              description="Setting the gold standard for medical safety and patient rights advocacy."
              icon={<ShieldCheck size={24} />}
              className="md:col-span-8 h-[320px]"
              image="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000"
            />
          </div>
        </div>
      </section>

      {/* Transparency Quote */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <InsightModule
            quote="Transparency is the bedrock of trust. We are committed to ensuring that every dollar donated is used to its maximum potential for healing."
            author="Elena Rodriguez, Director of Philanthropy"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-primary rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary rounded-full blur-[100px] opacity-20 -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-20 -ml-32 -mb-32" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Support Our Programs. <br />
              Empower Healing.
            </h2>
            <p className="text-white/70 text-lg mb-12">
              Your contribution helps us expand our reach and deepen our impact. Join us in building a healthier future.
            </p>
            <button className="inline-flex bg-tertiary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-xl">
              Donate to a Program
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
