import Hero from '@/components/home/Hero';
import FeaturedMovies from '@/components/home/FeaturedMovies';
import TrendingNow from '@/components/home/TrendingNow';
import PopularShows from '@/components/home/PopularShows';
import ContinueWatching from '@/components/home/ContinueWatching';
import { Suspense } from 'react';
import LoadingUI from '@/components/ui/loading-ui';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Suspense fallback={<LoadingUI />}>
        <Hero />
        <div className="px-4 md:px-8 space-y-12 pb-20">
          <ContinueWatching />
          <TrendingNow />
          <FeaturedMovies />
          <PopularShows />
        </div>
      </Suspense>
    </div>
  );
}