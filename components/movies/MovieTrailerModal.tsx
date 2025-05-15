"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MovieType } from '@/types/movie';

interface MovieTrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie: MovieType;
}

export default function MovieTrailerModal({ isOpen, onClose, movie }: MovieTrailerModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-black border-gray-800">
        <div className="relative aspect-video bg-gray-900">
          {/* For a real implementation, this would be a video player */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              <h2 className="text-2xl font-bold mb-4">{movie.title} - Official Trailer</h2>
              <p className="text-gray-400 mb-6">
                This is a placeholder for the trailer video player. In a real implementation, 
                this would be replaced with an actual video player loading the trailer from a CDN.
              </p>
              <div className="animate-pulse flex space-x-4 justify-center">
                <div className="rounded-full bg-red-600 h-12 w-12 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full bg-black/50 hover:bg-black/70 z-10"
        >
          <X className="h-5 w-5" />
        </Button>
      </DialogContent>
    </Dialog>
  );
}