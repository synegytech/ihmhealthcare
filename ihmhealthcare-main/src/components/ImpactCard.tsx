import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

interface ImpactCardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
  icon?: React.ReactNode;
  variant?: 'light' | 'dark' | 'green';
}

export function ImpactCard({ title, description, image, className, icon, variant = 'light' }: ImpactCardProps) {
  const variants = {
    light: 'bg-white text-primary',
    dark: 'bg-primary text-white',
    green: 'bg-tertiary text-white',
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        'relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between group transition-all shadow-sm hover:shadow-xl',
        variants[variant],
        className
      )}
    >
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center',
            variant === 'light' ? 'bg-accent text-tertiary' : 'bg-white/10 text-white'
          )}>
            {icon}
          </div>
          <div className="w-10 h-10 rounded-full border border-current/20 flex items-center justify-center group-hover:bg-current group-hover:text-primary transition-all">
            <ArrowUpRight size={20} />
          </div>
        </div>
        <h3 className="text-2xl font-display font-bold mb-3">{title}</h3>
        <p className={cn(
          'text-sm leading-relaxed max-w-[280px]',
          variant === 'light' ? 'text-primary/70' : 'text-white/70'
        )}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
