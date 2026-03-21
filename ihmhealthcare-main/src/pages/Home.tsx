import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SectionHeading, InsightModule, Skeleton } from '@/src/components/UI';
import { ImpactCard } from '@/src/components/ImpactCard';
import { NewsItemSkeleton, ImpactCardSkeleton, CollectiveImpactSkeleton } from '@/src/components/Skeletons';
import { Heart, Activity, Users, ShieldCheck, ArrowRight, ExternalLink, MapPin, PlusSquare, GraduationCap, Globe, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-primary">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://lh3.googleusercontent.com/d/1LAkSQTM-GU7ceddajyFhVV94aStEQkdb"
            className="w-full h-full object-cover opacity-40"
          >
            <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=729737c04912c2990554074054794d963a0d3046&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
          {/* Left Column */}
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-tertiary text-white rounded-lg text-xs font-bold uppercase tracking-widest mb-8"
            >
              Foundation Mission
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-8xl font-display font-bold text-white leading-[1.05] mb-8"
            >
              Funding <br />
              <span className="text-tertiary">Healthcare</span> <br />
              in Africa.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg font-medium"
            >
               Every day, patients walk through hospital doors carrying not only pain, but fear—fear of being turned away because they cannot pay. We bridge the gap between compassion and action, restoring dignity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/give"
                className="bg-tertiary text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-tertiary/90 transition-all shadow-lg"
              >
                Support Our Mission <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all shadow-sm"
              >
                Our Impact Report
              </Link>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-[500px] ml-auto">
              <img
                src="https://lh3.googleusercontent.com/d/1LAkSQTM-GU7ceddajyFhVV94aStEQkdb"
                alt="Healthcare in Africa"
                className="w-full h-full object-cover rounded-[60px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Initiative Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-xl p-6 rounded-[32px] border border-white/40 shadow-xl">
                <span className="text-secondary text-xs font-bold uppercase tracking-wider mb-2 block">Funding Initiative</span>
                <h3 className="text-xl font-bold text-primary mb-4">Health for All: $1 Million Commitment to Wellness</h3>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "20%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-[#059669]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Bento Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Our Measures"
            subtitle="Transforming Lives"
            align="left"
          />

          {isLoading ? (
            <div className="bento-grid">
              {[...Array(4)].map((_, i) => (
                <ImpactCardSkeleton key={i} className={i % 3 === 0 ? "md:col-span-8" : "md:col-span-4"} />
              ))}
            </div>
          ) : (
            <div className="bento-grid">
              <ImpactCard
                title="Healthcare Access"
                description="Ensuring the poorest are not turned away. We cover treatment costs for those who desperately need care."
                icon={<Heart size={24} />}
                className="md:col-span-8 h-[300px]"
                variant="dark"
                image="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000"
              />
              <ImpactCard
                title="Sustainable Fund"
                description="Our $1M Sustainable Healthcare Access Fund guarantees lasting care for the poor."
                icon={<Activity size={24} />}
                className="md:col-span-4 h-[300px]"
                variant="green"
              />
              <ImpactCard
                title="Mobile Clinics"
                description="Reaching remote areas where healthcare is a luxury, bringing hope to the doorstep."
                icon={<Users size={24} />}
                className="md:col-span-4 h-[300px]"
              />
              <ImpactCard
                title="Safety First"
                description="Implementing the highest standards of medical safety and transparency."
                icon={<ShieldCheck size={24} />}
                className="md:col-span-8 h-[300px]"
                image="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000"
              />
            </div>
          )}
        </div>
      </section>

      {/* Insight Section */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <InsightModule
            quote="The true measure of a society is how it treats its poorest. They may be poor, but they must not remain sick because they cannot afford care."
            author="Archbishop Heerey, Founding Visionary"
          />
        </div>
      </section>

      {/* Purposeful Care Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#059669] text-white rounded-lg text-xs font-bold uppercase tracking-widest mb-8">
              Our Impact
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-primary leading-[1.1] mb-8">
              Transforming Lives <br />
              through <span className="text-[#0052B4]">Purposeful Care</span>
            </h2>
            <p className="text-lg text-primary/60 leading-relaxed max-w-xl">
              At IHM Healthcare, we believe every individual deserves access to world-class medical support. Our programs are designed to bridge gaps in care and foster long-term community wellness.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div 
              className="relative w-full aspect-video md:aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl group cursor-pointer bg-black"
              onClick={() => setIsVideoPlaying(true)}
            >
              {!isVideoPlaying ? (
                <>
                  <img
                    src="public/images/ifeoma.png"
                    alt="IHM Healthcare Mission"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl transform transition-transform group-hover:scale-110">
                      <Play size={32} className="text-[#0052B4] fill-[#0052B4] ml-1" />
                    </div>
                  </div>
                  
                  {/* Video Overlay Info */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1">Watch Ifeoma's Story</p>
                    <h4 className="text-lg font-bold">The Heart of Our Mission</h4>
                  </div>
                </>
              ) : (
                <iframe
                  src="https://drive.google.com/file/d/1e9eQ_djoRqrWmGHgkamBXpZk2v31Nsp8/preview"
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Collective Impact Section */}
      <section className="py-24 px-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">Our Collective Impact</h2>
            <p className="text-primary/60 max-w-2xl leading-relaxed">
              Through the generosity of our donors, we've transformed thousands of lives across our global healthcare network.
            </p>
          </div>

          {isLoading ? (
            <CollectiveImpactSkeleton />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Patients Treated */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 bg-white rounded-[32px] p-10 flex flex-col justify-between relative overflow-hidden shadow-sm border border-gray-100 min-h-[320px]"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#0052B4]/10 text-[#0052B4] rounded-xl flex items-center justify-center mb-8">
                    <PlusSquare size={28} />
                  </div>
                  <h3 className="text-5xl font-bold text-primary mb-4">120,000+</h3>
                  <p className="text-primary/70 text-lg font-medium max-w-md leading-relaxed">
                    Patients treated annually with advanced specialized equipment funded by the foundation.
                  </p>
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none">
                  <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                    alt="Medical Facility" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              {/* Card 2: Recovery Rate */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#059669] rounded-[32px] p-10 flex flex-col justify-end text-white shadow-lg min-h-[320px]"
              >
                <h3 className="text-6xl font-bold mb-4">94%</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  Recovery rate in our donor-supported surgical units last year.
                </p>
              </motion.div>

              {/* Card 3: Education */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#E5E7EB] rounded-[32px] p-10 flex flex-col shadow-sm min-h-[320px]"
              >
                <div className="w-12 h-12 bg-white/50 text-[#0052B4] rounded-xl flex items-center justify-center mb-8">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Education</h3>
                <p className="text-primary/60 font-medium leading-relaxed">
                  Funding 500+ nursing scholarships to address global healthcare staffing needs.
                </p>
              </motion.div>

              {/* Card 4: Community Outreach */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 bg-[#0052B4] rounded-[32px] p-10 flex flex-col justify-center text-white relative overflow-hidden shadow-lg min-h-[320px]"
              >
                <div className="relative z-10 max-w-md">
                  <h3 className="text-2xl font-bold mb-4">Community Outreach</h3>
                  <p className="text-white/80 font-medium leading-relaxed">
                    Providing mobile health clinics to underserved rural areas, reaching 50,000 residents monthly.
                  </p>
                </div>
                <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-20">
                  <div className="relative">
                    <Globe size={120} className="text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl -z-10" />
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Recent News */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-display font-bold text-primary">Recent News</h2>
                <Link to="/news" className="text-[#0052B4] font-bold flex items-center gap-2 hover:underline">
                  View All News <ExternalLink size={18} />
                </Link>
              </div>
              
              <div className="space-y-12">
                {isLoading ? (
                  <>
                    <NewsItemSkeleton />
                    <NewsItemSkeleton />
                  </>
                ) : (
                  <>
                    {/* News Item 1 */}
                    <div className="flex flex-col md:flex-row gap-8 group">
                      <Link to="/news/1" className="w-full md:w-1/3 aspect-video rounded-3xl overflow-hidden shadow-lg">
                        <img 
                          src="public/images/mrpeterobi.jpg" 
                          alt="Mr peter obi's donation"
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </Link>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[#059669] text-xs font-bold uppercase tracking-wider">Philanthropy</span>
                          <span className="text-primary/40 text-xs font-medium">May 14, 2024</span>
                        </div>
                        <Link to="/news/1">
                          <h3 className="text-xl font-bold text-primary mb-3 hover:text-[#0052B4] transition-colors">Mr. Peter Obi, donated N100 million to IHM Health System</h3>
                        </Link>
                        <p className="text-primary/60 leading-relaxed">Former Anambra State governor, Mr. Peter Obi's donation to the IHM Health System, at Mmiata-Anam in Anambra West Local Government, marks a new era in compassionate clinical care.</p>
                      </div>
                    </div>
                    {/* News Item 2 */}
                    <div className="flex flex-col md:flex-row gap-8 group">
                      <Link to="/news/2" className="w-full md:w-1/3 aspect-video rounded-3xl overflow-hidden shadow-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1559039282-4c3ca4c25b44?auto=format&fit=crop&q=80&w=800" 
                          alt="Annual Gala"
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </Link>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[#059669] text-xs font-bold uppercase tracking-wider">Community Engagement</span>
                          <span className="text-primary/40 text-xs font-medium">May 10, 2024</span>
                        </div>
                        <Link to="/news/2">
                          <h3 className="text-xl font-bold text-primary mb-3 hover:text-[#0052B4] transition-colors">Annual Gala Raises Record Funds for Rural Healthcare</h3>
                        </Link>
                        <p className="text-primary/60 leading-relaxed">Over 1,000 attendees joined us for our yearly celebration of life and generosity, exceeding our fundraising goals.</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-[#F8F9FA] rounded-[40px] p-8 md:p-10 border border-gray-100 flex flex-col shadow-sm">
              <h2 className="text-2xl font-display font-bold text-primary mb-10">Upcoming Events</h2>
              <div className="space-y-8 flex-1">
                {/* Event 1 */}
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm border border-gray-100 shrink-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Jun</span>
                    <span className="text-xl font-bold text-[#0052B4]">12</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Wellness & Yoga for Patients</h4>
                    <div className="flex items-center gap-2 text-primary/40 text-sm">
                      <MapPin size={14} />
                      <span>Central Park Sanctuary</span>
                    </div>
                  </div>
                </div>
                {/* Event 2 */}
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm border border-gray-100 shrink-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Jun</span>
                    <span className="text-xl font-bold text-[#0052B4]">28</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Philanthropy Webinar</h4>
                    <div className="flex items-center gap-2 text-primary/40 text-sm">
                      <Activity size={14} />
                      <span>Digital Live Event</span>
                    </div>
                  </div>
                </div>
                {/* Event 3 */}
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm border border-gray-100 shrink-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Jul</span>
                    <span className="text-xl font-bold text-[#0052B4]">05</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Blood Donation Drive</h4>
                    <div className="flex items-center gap-2 text-primary/40 text-sm">
                      <MapPin size={14} />
                      <span>IHM Main Hospital Wing</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-10 py-4 rounded-full border border-gray-200 font-bold text-[#0052B4] hover:bg-white transition-all shadow-sm">
                Join Our Events
              </button>
            </div>
          </div>

          {/* Quote Block */}
          <div className="mt-24 bg-[#F8F9FA] rounded-[32px] p-10 md:p-16 border-l-[6px] border-[#059669] relative overflow-hidden">
             <div className="absolute top-10 left-10 text-8xl text-[#059669] opacity-10 font-serif pointer-events-none">“</div>
             <div className="relative z-10">
               <p className="text-xl md:text-2xl font-medium text-primary leading-relaxed mb-8 italic">
                 "The measure of a healthcare system is not just in its technology, but in the depth of its compassion. Through your donations, we aren't just buying machines; we are restoring hope."
               </p>
               <p className="text-primary/60 font-bold">— Dr. Helena Vance, Chief Medical Officer</p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-primary rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary rounded-full blur-[100px] opacity-20 -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-20 -ml-32 -mb-32" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Be the Change in <br />
              Someone's Life Today.
            </h2>
            <p className="text-white/70 text-lg mb-12">
              Your contribution, no matter the size, helps us provide life-saving care and hope to those who need it most.
            </p>
            <Link
              to="/give"
              className="inline-flex bg-tertiary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-xl"
            >
              Donate to the Foundation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
