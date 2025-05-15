"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Plus, ThumbsUp, Clock, Share2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import MovieTrailerModal from '@/components/movies/MovieTrailerModal';
import { MovieType } from '@/types/movie';
import { trendingMovies } from '@/data/movies';

interface MovieDetailProps {
  movie: MovieType;
}

export default function MovieDetail({ movie }: MovieDetailProps) {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  
  const similarMovies = trendingMovies.filter(m => 
    m.id !== movie.id && m.genres.some(genre => movie.genres.includes(genre))
  ).slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[70vh]">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${movie.backdrop})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end gap-8"
          >
            <div className="hidden md:block w-64 h-96 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="max-w-3xl">
              <Link href="/movies" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-4">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Movies
              </Link>
              
              <div className="flex items-center gap-2 mb-2">
                {movie.badge && (
                  <Badge variant="destructive" className="bg-[#f36f20] hover:bg-[#5e3118] pb-1">
                    {movie.badge}
                  </Badge>
                )}
                {movie.category && (
                  <Badge variant="outline" className="text-green-400 border-green-400 pb-1">
                    {movie.category}
                  </Badge>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
                {movie.title}
              </h1>
              
              <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-300 mb-4">
                <span>{movie.year}</span>
                <span className="border border-gray-300 px-2 py-0.5 text-xs">
                  {movie.rating}
                </span>
                <span>{`${movie.duration} min`}</span>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-gray-800 hover:bg-gray-700">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 text-sm md:text-base mb-6 max-w-2xl">
                {movie.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-white/90 font-semibold"
                  onClick={() => setIsTrailerOpen(true)}
                >
                  <Play className="mr-2 h-5 w-5" /> Play Trailer
                </Button>
                <Button variant="outline" size="lg">
                  <Plus className="mr-2 h-5 w-5" /> My List
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ThumbsUp className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Clock className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Similar Movies */}
      <div className="px-6 md:px-16 lg:px-24 py-12 max-w-screen-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Similar Movies</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {similarMovies.map((similarMovie, index) => (
            <motion.div
              key={similarMovie.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/movies/${similarMovie.id}`}>
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={similarMovie.poster}
                    alt={similarMovie.title}
                    className="w-full h-auto aspect-[2/3] object-cover transition duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="mt-2 text-sm  font-lato font-bold">{similarMovie.title}</h3>
                <p className="text-xs text-gray-400 font-lato">{similarMovie.year}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Trailer Modal */}
      <MovieTrailerModal 
        isOpen={isTrailerOpen} 
        onClose={() => setIsTrailerOpen(false)} 
        movie={movie}
      />
    </>
  );
}