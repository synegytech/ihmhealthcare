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
            align="left"
          />

          <div className="space-y-12 relative before:absolute before:left-[20px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary/10">
            {[
              { year: '1937', title: 'Foundation Established', desc: 'Founded by Most Rev. Charles Heerey CSSp, the Sisters of the Immaculate Heart of Mary (IHM) began their missionary work in Nigeria.' },
              { year: 'Expansion', title: 'Global Reach', desc: 'The Institute has since spread its missionary work to 15 countries across Africa, Europe, and North America, offering holistic healthcare.' },
              { year: 'Present', title: 'Healing Mission', desc: 'Currently constructing and operating a state-of-the-art 250-bed hospital in Nkpor, Anambra State, Nigeria to expand access to care.' },
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

      {/* Nigeria Board Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Nigeria Board of Directors"
            subtitle="Esteemed Leadership"
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'Barr. Ikenna Egbuna SAN', role: 'Chairman' },
              { name: 'Sr. M. Nkiruka Okafor', role: 'Board Member' },
              { name: 'Sr. Mary Therese Ann Ugwuja', role: 'Board Member' },
              { name: 'Sr. Maria Irena Onyemaiz', role: 'Board Member' },
              { name: 'Sr. Mary Fides Chukwuma', role: 'Board Member' },
              { name: 'Rev. Fr. Remigius Nwangwu', role: 'Board Member' },
              { name: 'Mrs. Ngozi Iwere', role: 'Board Member' },
              { name: 'Dr. Aaron Shitery', role: 'Board Member' },
              { name: 'Sr. Marie Lynn Makau', role: 'Board Member' },
              { name: 'Ekpeleamaka Ikegbunam', role: 'Board Member' },
            ].map((person, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-primary/5 group-hover:border-tertiary transition-colors duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=200"
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                </div>
                <h4 className="text-base font-display font-bold text-primary mb-1 leading-tight">{person.name}</h4>
                <p className="text-tertiary text-[10px] font-bold uppercase tracking-widest">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USA Board Section */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="USA Board of Directors"
            subtitle="Global Oversight"
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Sr. M. Nkiruka Okafor', role: 'Executive Director & President' },
              { name: 'Dr. Agodichi Nwosu', role: 'Vice President' },
              { name: 'Sr. Mary DorisAnne Okere', role: 'Secretary' },
              { name: 'Sr. Mary Loveth Emecheta', role: 'Book Keeper' },
            ].map((person, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-2 border-primary/5 group-hover:border-tertiary transition-colors duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=300"
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                </div>
                <h4 className="text-lg font-display font-bold text-primary mb-1">{person.name}</h4>
                <p className="text-tertiary text-xs font-bold uppercase tracking-widest">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
