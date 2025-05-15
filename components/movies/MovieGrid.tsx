"use client";

import { motion } from 'framer-motion';
import MovieCard from '@/components/movies/MovieCard';
import { MovieType } from '@/types/movie';

interface MovieGridProps {
  movies: MovieType[];
}

export default function MovieGrid({ movies }: MovieGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
    >
      {movies.map((movie) => (
        <motion.div key={movie.id} variants={item}>
          <MovieCard movie={movie} />
        </motion.div>
      ))}
    </motion.div>
  );
}