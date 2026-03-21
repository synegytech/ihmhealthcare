import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '@/src/components/UI';
import { ExternalLink, MapPin, Activity, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { newsItems } from '@/src/data/news';

const upcomingEvents = [
  {
    id: 1,
    month: 'Jun',
    day: '12',
    title: 'Wellness & Yoga for Patients',
    location: 'Central Park Sanctuary',
    type: 'In-person',
  },
  {
    id: 2,
    month: 'Jun',
    day: '28',
    title: 'Philanthropy Webinar',
    location: 'Digital Live Event',
    type: 'Online',
  },
  {
    id: 3,
    month: 'Jul',
    day: '05',
    title: 'Blood Donation Drive',
    location: 'IHM Main Hospital Wing',
    type: 'In-person',
  },
  {
    id: 4,
    month: 'Aug',
    day: '15',
    title: 'Annual Charity Golf Tournament',
    location: 'Royal Palms Golf Club',
    type: 'In-person',
  }
];

export function NewsEvents() {
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
              News & <span className="text-[#0052B4]">Events</span>
            </h1>
            <p className="text-xl text-primary/60 leading-relaxed">
              Stay updated with our latest medical breakthroughs, community initiatives, and upcoming opportunities to get involved.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* News Feed */}
            <div className="lg:col-span-2">
              <SectionHeading title="Recent News" subtitle="Latest Updates" align="left" />
              <div className="space-y-16 mt-12">
                {newsItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="w-full md:w-2/5 aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-[#059669] text-xs font-bold uppercase tracking-wider">{item.category}</span>
                          <span className="text-primary/40 text-xs font-medium">{item.date}</span>
                        </div>
                        <Link to={`/news/${item.id}`}>
                          <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-[#0052B4] transition-colors">
                            {item.title}
                          </h3>
                        </Link>
                        <p className="text-primary/60 leading-relaxed mb-6">
                          {item.description}
                        </p>
                        <Link to={`/news/${item.id}`} className="text-primary font-bold flex items-center gap-2 group/link">
                          Read Full Story <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Events Sidebar */}
            <div className="space-y-12">
              <div className="bg-[#F8F9FA] rounded-[40px] p-8 md:p-10 border border-gray-100 shadow-sm sticky top-32">
                <h2 className="text-2xl font-display font-bold text-primary mb-10 flex items-center gap-3">
                  <Calendar className="text-[#0052B4]" /> Upcoming Events
                </h2>
                <div className="space-y-8">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex gap-6 group cursor-pointer">
                      <div className="w-16 h-16 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm border border-gray-100 shrink-0 group-hover:border-[#0052B4] transition-colors">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">{event.month}</span>
                        <span className="text-xl font-bold text-[#0052B4]">{event.day}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1 group-hover:text-[#0052B4] transition-colors">{event.title}</h4>
                        <div className="flex items-center gap-2 text-primary/40 text-sm">
                          <MapPin size={14} />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-10 py-4 rounded-full bg-[#0052B4] text-white font-bold hover:bg-[#004191] transition-all shadow-lg">
                  Register for an Event
                </button>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-primary rounded-[40px] p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary rounded-full blur-[60px] opacity-20 -mr-16 -mt-16" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
                  <p className="text-white/70 mb-8 text-sm leading-relaxed">
                    Subscribe to our newsletter to receive the latest news and event invitations directly in your inbox.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-white/40"
                    />
                    <button className="w-full py-4 bg-tertiary text-white rounded-2xl font-bold hover:bg-white hover:text-primary transition-all">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
