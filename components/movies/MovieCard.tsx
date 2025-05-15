"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Plus, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MovieType } from '@/types/movie';

interface MovieCardProps {
  movie: MovieType;
  isShow?: boolean;
}

export default function MovieCard({ movie, isShow = false }: MovieCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <Link href={isShow ? `/tv-shows/${movie.id}` : `/movies/${movie.id}`}>
        <div className="relative overflow-hidden rounded-md aspect-[2/3] font-lato font-bold">
          <img 
            src={movie.poster} 
            alt={movie.title} 
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Button 
                size="sm" 
                className="rounded-full bg-white hover:bg-white/90 text-black mb-2"
              >
                <Play className="h-4 w-4 fill-current" />
              </Button>
            </div>
            
            <div className="space-y-1 text-center px-3">
              <h3 className="font-bold text-sm line-clamp-2">{movie.title}</h3>
              <div className="flex items-center justify-center space-x-2 text-xs">
                <span>{movie.year}</span>
                {movie.rating && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                    <span className="border border-gray-400 px-1">{movie.rating}</span>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 mt-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 rounded-full bg-black/50 hover:bg-black/70"
              >
                <Plus className="h-3 w-3" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 rounded-full bg-black/50 hover:bg-black/70"
              >
                <ThumbsUp className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
      
      {/* {movie.category && (
        <div className="absolute top-2 left-2 bg-[#2c9ad4] text-white text-xs px-2.5 py-0.5 pb-1 rounded-full font-lato font-bold">
          {movie.category}
        </div>
      )} */}
    </motion.div>
  );
}