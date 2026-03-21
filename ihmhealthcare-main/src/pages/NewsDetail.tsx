import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { newsItems } from '@/src/data/news';
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

export function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = newsItems.find((item) => item.id === Number(id));

  if (!article) {
    return (
      <div className="pt-32 pb-24 px-6 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Article Not Found</h1>
        <p className="text-primary/60 mb-8">The news article you are looking for does not exist or has been moved.</p>
        <Link 
          to="/news" 
          className="bg-[#0052B4] text-white px-8 py-3 rounded-full font-bold hover:bg-[#004191] transition-all"
        >
          Back to News
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Article Header */}
      <section className="bg-[#F8F9FA] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/news" 
            className="flex items-center gap-2 text-primary/60 hover:text-[#0052B4] font-bold mb-8 transition-colors group"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" /> Back to News
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#059669]/10 text-[#059669] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-primary/40 text-sm">
                <Calendar size={14} />
                <span>{article.date}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-between py-6 border-y border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0052B4] rounded-full flex items-center justify-center text-white">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">IHM Editorial Team</p>
                  <p className="text-xs text-primary/40">Healthcare Foundation</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-primary/40 uppercase tracking-widest hidden sm:inline">Share:</span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary/60 hover:text-[#0052B4] hover:border-[#0052B4] transition-all">
                    <Facebook size={16} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary/60 hover:text-[#0052B4] hover:border-[#0052B4] transition-all">
                    <Twitter size={16} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary/60 hover:text-[#0052B4] hover:border-[#0052B4] transition-all">
                    <Linkedin size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl mb-16 aspect-video">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="prose prose-lg max-w-none prose-primary">
              <div 
                className="text-primary/70 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: article.content || article.description }} 
              />
            </div>
            
            <div className="mt-20 pt-10 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-primary mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsItems.filter(item => item.id !== article.id).slice(0, 2).map(item => (
                  <Link key={item.id} to={`/news/${item.id}`} className="group">
                    <div className="aspect-video rounded-3xl overflow-hidden mb-4 shadow-md">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h4 className="font-bold text-primary group-hover:text-[#0052B4] transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
