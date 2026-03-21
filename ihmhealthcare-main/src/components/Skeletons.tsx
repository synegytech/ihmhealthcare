import React from 'react';
import { Skeleton } from './UI';

export function NewsItemSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <Skeleton className="w-full md:w-1/3 aspect-video rounded-3xl" />
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-8 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    </div>
  );
}

export function ImpactCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl p-8 h-[300px] flex flex-col justify-between border border-gray-100">
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <Skeleton className="w-12 h-12 rounded-xl" />
          <Skeleton className="w-10 h-10 rounded-full" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-8 w-1/2" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function CollectiveImpactSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Skeleton className="md:col-span-2 h-[320px] rounded-[32px]" />
      <Skeleton className="h-[320px] rounded-[32px]" />
      <Skeleton className="h-[320px] rounded-[32px]" />
      <Skeleton className="md:col-span-2 h-[320px] rounded-[32px]" />
    </div>
  );
}
