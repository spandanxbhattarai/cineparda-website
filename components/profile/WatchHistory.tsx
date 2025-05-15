"use client";

import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { continueWatchingItems } from '@/data/movies';

export default function WatchHistory() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Recently Watched</h3>
        <Button variant="link" className="text-[#f36f20] hover:text-[#cc7945]">
          Clear History
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {continueWatchingItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-md group"
          >
            <div className="relative">
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="rounded-full"
                  asChild
                >
                  <Link href={`/movies/${item.id}`}>
                    <Play className="h-4 w-4 fill-current mr-1" /> Resume
                  </Link>
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                <div 
                  className="h-full bg-red-600" 
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.isShow ? `S${item.season} E${item.episode}` : ''} • Watched on {new Date().toLocaleDateString()}
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 -mt-1 -mr-1">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <Button variant="outline" className='bg-transparent hover:bg-[#2c9ad4] font-lato font-bold'>View More</Button>
      </div>
    </motion.div>
  );
}