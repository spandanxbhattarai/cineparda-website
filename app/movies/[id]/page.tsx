import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import MovieDetail from '@/components/movies/MovieDetail';
import LoadingUI from '@/components/ui/loading-ui';
import { featuredMovies, trendingMovies } from '@/data/movies';

export default function MovieDetailPage({ params }: { params: { id: string } }) {
  const allMovies = [...featuredMovies, ...trendingMovies];
  const movie = allMovies.find(m => m.id === params.id);
  
  if (!movie) {
    notFound();
  }
  
  return (
    <div className="pt-16">
      <Suspense fallback={<LoadingUI />}>
        <MovieDetail movie={movie} />
      </Suspense>
    </div>
  );
}