"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Play, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { featuredMovies } from '@/data/movies';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredMovies.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const currentMovie = featuredMovies[currentIndex];

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          key={currentMovie.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${currentMovie.backdrop})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-24 px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
        <motion.div
          key={`content-${currentMovie.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl"
        >
          {currentMovie.badge && (
            <span className="inline-block bg-[#2c9ad4] text-white text-xs font-semibold px-2 py-1 rounded mb-4">
              {currentMovie.badge}
            </span>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white font-bebas">
            {currentMovie.title}
          </h1>
          
          <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
            <span>{currentMovie.year}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="border border-gray-300 px-2 py-0.5 text-xs">
              {currentMovie.rating}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>{`${currentMovie.duration} min`}</span>
          </div>
          
          <p className="text-gray-300 text-sm md:text-base mb-6 max-w-2xl">
            {currentMovie.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-[#f36f20] text-white hover:bg-white/90 hover:text-black font-semibold"
              asChild
            >
              <Link href={`/movies/${currentMovie.id}`}>
                <Play className="mr-2 h-5 w-5" /> Play
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-400 text-white"
              asChild
            >
              <Link href={`/movies/${currentMovie.id}`}>
                <Info className="mr-2 h-5 w-5" /> More Info
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {featuredMovies.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === currentIndex ? 'bg-white' : 'bg-gray-600'
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}