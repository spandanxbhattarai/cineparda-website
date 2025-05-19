"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { continueWatchingItems } from '@/data/movies';
// import { Progress } from '@/components/ui/progress';

export default function ContinueWatching() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.9 
        : scrollLeft + clientWidth * 0.9;
      
      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-bold">Continue Watching</h2>
        <div className="flex space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => scroll('left')}
            className="h-8 w-8 rounded-full bg-gray-900 hover:bg-gray-800"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => scroll('right')}
            className="h-8 w-8 rounded-full bg-gray-900 hover:bg-gray-800"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div 
        ref={carouselRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {continueWatchingItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 w-[270px] md:w-[300px]"
          >
            <div className="group relative overflow-hidden">
              <Link href={`/movies/${item.id}`}>
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Button 
                        variant="secondary" 
                        size="icon" 
                        className="rounded-full"
                      >
                        <Play className="h-4 w-4 fill-current" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
              
              <div className="relative">
                {/* <Progress value={item.progress} className="h-1 w-full rounded-none" /> */}
                
                <div className="p-2 bg-gray-900 flex justify-between items-center">
                  <div className="text-sm font-semibold truncate font-lato">{item.title}</div>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                
                <div className="p-2 bg-gray-900 text-xs text-gray-400 font-bebas tracking-wider">
                  {item.isShow ? `S${item.season} E${item.episode}` : 'Resume'} · {item.timeLeft}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}