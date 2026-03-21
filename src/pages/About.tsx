import React from 'react';
import { SectionHeading, InsightModule } from '@/src/components/UI';
import { ImpactCard } from '@/src/components/ImpactCard';
import { Heart, Target, Lightbulb, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-accent text-tertiary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-tertiary/10">
              Our Legacy
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-primary leading-tight mb-8">
              Access <br />
              <span className="text-tertiary italic">is Our</span> Essence.
            </h1>
            <p className="text-xl text-primary/70 leading-relaxed max-w-2xl">
              We exist for one simple reason: people need life-saving help. We stand with those at the fragile line between life and death, bridging the gap between those who want to help and those who desperately need care.
            </p>
          </motion.div>
        </div>

        <div className="absolute top-0 right-0 w-1/3 h-full z-0 hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
            alt="About Us"
            className="w-full h-full object-cover rounded-bl-[100px] opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Our Core Philosophy"
            subtitle="Mission & Values"
            align="left"
          />

          <div className="bento-grid">
            <ImpactCard
              title="Our Mission"
              description="To bridge compassion with action, ensuring that no one is left to suffer simply because they cannot afford care. We restore dignity and save lives."
              icon={<Target size={24} />}
              className="md:col-span-8 h-[320px]"
              variant="dark"
            />
            <ImpactCard
              title="Our Vision"
              description="A world where the poorest must not remain sick. We aim to guarantee access to inexpensive healthcare for marginalized individuals."
              icon={<Lightbulb size={24} />}
              className="md:col-span-4 h-[320px]"
              variant="green"
            />
            <ImpactCard
              title="Compassion"
              description="We believe that healing begins with a kind heart and a listening ear."
              icon={<Heart size={24} />}
              className="md:col-span-4 h-[320px]"
            />
            <ImpactCard
              title="Community"
              description="We are stronger together. Our impact is amplified through collaboration and partnership."
              icon={<Users size={24} />}
              className="md:col-span-8 h-[320px]"
              image="https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=1000"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Our Journey of Impact"
            subtitle="The Timeline"
            align="center"
          />

          <div className="space-y-12 relative before:absolute before:left-[20px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary/10">
            {[
              { year: '1995', title: 'Foundation Established', desc: 'IHM Healthcare Foundation was founded with a $1M endowment.' },
              { year: '2005', title: 'First Major Innovation', desc: 'Launched the Innovation Hub for medical research.' },
              { year: '2015', title: 'Community Outreach', desc: 'Expanded mobile clinic services to 10 underserved counties.' },
              { year: '2025', title: 'The Sanctuary Initiative', desc: 'Broke ground on the new Clinical Sanctuary patient center.' },
            ].map((item, idx) => (
              <div key={idx} className={cn(
                "relative flex flex-col md:flex-row items-center gap-8 md:gap-24",
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              )}>
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-tertiary z-10 flex items-center justify-center font-bold text-xs text-primary">
                  {idx + 1}
                </div>
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={cn(
                    "bg-white p-8 rounded-3xl shadow-sm border border-gray-100",
                    idx % 2 === 0 ? "text-left" : "md:text-right"
                  )}>
                    <span className="text-tertiary font-bold text-2xl mb-2 block">{item.year}</span>
                    <h4 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h4>
                    <p className="text-primary/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Guided by Visionaries"
            subtitle="Leadership"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Jenkins', role: 'Chief Medical Officer', img: 'https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=500' },
              { name: 'Michael Chen', role: 'Executive Director', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500' },
              { name: 'Elena Rodriguez', role: 'Director of Philanthropy', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500' },
            ].map((person, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-6">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="text-xl font-display font-bold text-primary mb-1">{person.name}</h4>
                <p className="text-tertiary font-semibold text-sm uppercase tracking-widest">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
