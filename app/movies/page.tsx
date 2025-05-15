import { Suspense } from 'react';
import LoadingUI from '@/components/ui/loading-ui';
import MovieBrowse from '@/components/movies/MovieBrowse';

export default function MoviesPage() {
  return (
    <div className="pt-16">
      <Suspense fallback={<LoadingUI />}>
        <MovieBrowse />
      </Suspense>
    </div>
  );
}