export interface MovieType {
  category: any;
  id: string;
  title: string;
  description: string;
  poster: string;
  backdrop: string;
  year: number;
  rating?: string;
  duration?: number;
  genres: string[];
  badge?: string;
  trailerUrl?: string;
  // For TV Shows
  seasons?: number;
  episodes?: number;
}

export interface ContinueWatchingItem extends MovieType {
  progress: number;
  timeLeft: string;
  isShow?: boolean;
  season?: number;
  episode?: number;
  thumbnail: string
}