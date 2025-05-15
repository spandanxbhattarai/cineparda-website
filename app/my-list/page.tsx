"use client";

import { motion } from 'framer-motion';
import { Grid, List, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MovieCard from '@/components/movies/MovieCard';
import { featuredMovies, tvShows } from '@/data/movies';

export default function MyListPage() {
  const savedContent = [...featuredMovies.slice(0, 3), ...tvShows.slice(0, 3)];

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bebas mb-2">My List</h1>
            <p className="text-gray-400">Your personally curated collection of movies and shows</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <List className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {savedContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <MovieCard movie={content} />
            </motion.div>
          ))}
        </div>

        {savedContent.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bebas mb-2">Your list is empty</h2>
            <p className="text-gray-400">Start adding movies and shows to your list!</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}