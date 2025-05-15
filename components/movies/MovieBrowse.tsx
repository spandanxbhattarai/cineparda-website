"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MovieGrid from '@/components/movies/MovieGrid';
import MovieSidebar from '@/components/movies/MovieSidebar';
import { featuredMovies, trendingMovies } from '@/data/movies';

const allMovies = [...featuredMovies, ...trendingMovies];

export default function MovieBrowse() {
  const [currentTab, setCurrentTab] = useState('all');
  const [showSidebar, setShowSidebar] = useState(false);
  
  const getFilteredMovies = () => {
    switch (currentTab) {
      case 'trending':
        return trendingMovies;
      case 'featured':
        return featuredMovies;
      default:
        return allMovies;
    }
  };

  return (
    <div className="min-h-screen font-lato">
      
      
      {/* Navigation & Filters */}
      <div className="px-4 md:px-8 py-6 bg-gray-900 border-t border-b border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <Tabs defaultValue="all" onValueChange={setCurrentTab} className="w-full md:w-auto">
          <TabsList className="bg-gray-800">
            <TabsTrigger value="all" >All Movies</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-full md:w-auto justify-between"
        >
          <Filter className="h-4 w-4 mr-2" /> 
          Filters
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </div>
      
      {/* Main Content with Sidebar */}
      <div className="px-4 md:px-8 py-8 flex">
        {showSidebar && (
          <div className="w-64 mr-8 hidden md:block">
            <MovieSidebar />
          </div>
        )}
        
        {/* Mobile Sidebar (as a dropdown) */}
        {showSidebar && (
          <div className="w-full mb-6 md:hidden">
            <MovieSidebar />
          </div>
        )}
        
        <div className="flex-1">
          <MovieGrid movies={getFilteredMovies()} />
        </div>
      </div>
    </div>
  );
}