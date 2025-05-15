"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export default function MovieSidebar() {
  const genres = [
    'Action', 'Adventure', 'Animation', 'Comedy', 'Crime',
    'Documentary', 'Drama', 'Fantasy', 'Horror', 'Mystery',
    'Romance', 'Sci-Fi', 'Thriller'
  ];
  
  const languages = ['English', 'Spanish', 'French', 'German', 'Japanese', 'Korean', 'Chinese'];
  
  return (
    <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 font-lato ">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      
      <Accordion type="multiple" className="space-y-2">
        <AccordionItem value="genres" className="border-gray-800">
          <AccordionTrigger className="text-sm font-medium py-2">Genres</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {genres.map((genre) => (
                <div key={genre} className="flex items-center space-x-2">
                  <Checkbox id={`genre-${genre}`} />
                  <Label htmlFor={`genre-${genre}`} className="text-sm text-gray-300">
                    {genre}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="years" className="border-gray-800">
          <AccordionTrigger className="text-sm font-medium py-2">Release Year</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2 px-1">
              <Slider defaultValue={[1990, 2025]} min={1950} max={2025} step={1} />
              <div className="flex justify-between text-xs text-gray-400">
                <span>1950</span>
                <span>2025</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="ratings" className="border-gray-800">
          <AccordionTrigger className="text-sm font-medium py-2">Ratings</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {['G', 'PG', 'PG-13', 'R', 'TV-MA', 'TV-14', 'TV-PG'].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <Label htmlFor={`rating-${rating}`} className="text-sm text-gray-300">
                    {rating}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="languages" className="border-gray-800">
          <AccordionTrigger className="text-sm font-medium py-2">Languages</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {languages.map((language) => (
                <div key={language} className="flex items-center space-x-2">
                  <Checkbox id={`lang-${language}`} />
                  <Label htmlFor={`lang-${language}`} className="text-sm text-gray-300">
                    {language}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="mt-6 space-y-2">
        <Button className="w-full font-lato font-bold bg-[#2c9ad4] text-white hover:text-black">Apply Filters</Button>
        <Button variant="outline" className="w-full font-lato font-bold bg-transparent">Reset</Button>
      </div>
    </div>
  );
}