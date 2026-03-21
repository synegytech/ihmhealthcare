import React from 'react';
import { cn } from '@/src/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ title, subtitle, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cn(
      'mb-12',
      align === 'center' ? 'text-center' : 'text-left',
      className
    )}>
      {subtitle && (
        <span className="text-tertiary font-semibold text-sm uppercase tracking-widest mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
        {title}
      </h2>
    </div>
  );
}

interface InsightModuleProps {
  quote: string;
  author?: string;
  className?: string;
}

export function InsightModule({ quote, author, className }: InsightModuleProps) {
  return (
    <div className={cn('insight-module', className)}>
      <p className="text-xl md:text-2xl font-display leading-relaxed mb-4">
        "{quote}"
      </p>
      {author && (
        <cite className="not-italic font-semibold text-primary/60 text-sm uppercase tracking-widest">
          — {author}
        </cite>
      )}
    </div>
  );
}

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-200',
        className
      )}
    />
  );
}
