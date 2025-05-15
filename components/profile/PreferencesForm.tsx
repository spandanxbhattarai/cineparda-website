"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';

export default function PreferencesForm() {
  const genres = [
    'Action', 'Adventure', 'Animation', 'Comedy', 'Crime',
    'Documentary', 'Drama', 'Fantasy', 'Horror', 'Mystery',
    'Romance', 'Sci-Fi', 'Thriller'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Playback Settings</h3>
        
        <div className="space-y-6 ml-1">
          <div className="flex justify-between items-center">
            <div>
              <Label htmlFor="autoplay" className="text-base">Autoplay next episode</Label>
              <p className="text-sm text-gray-400">Automatically play the next episode in a series</p>
            </div>
            <Switch id="autoplay" defaultChecked />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <Label htmlFor="previews" className="text-base">Autoplay previews</Label>
              <p className="text-sm text-gray-400">Play previews while browsing</p>
            </div>
            <Switch id="previews" defaultChecked />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <Label htmlFor="data-saver" className="text-base">Data saver</Label>
              <p className="text-sm text-gray-400">Reduce data usage while streaming</p>
            </div>
            <Switch id="data-saver" />
          </div>
        </div>
      </div>
      
      <div className="pt-6 border-t border-gray-800 space-y-4">
        <h3 className="text-lg font-medium">Streaming Quality</h3>
        
        <RadioGroup defaultValue="auto">
          <div className="flex items-center space-x-2 mb-3">
            <RadioGroupItem value="auto" id="quality-auto" />
            <Label htmlFor="quality-auto">Auto (Recommended)</Label>
          </div>
          <div className="flex items-center space-x-2 mb-3">
            <RadioGroupItem value="low" id="quality-low" />
            <Label htmlFor="quality-low">Low - Consumes less data</Label>
          </div>
          <div className="flex items-center space-x-2 mb-3">
            <RadioGroupItem value="medium" id="quality-medium" />
            <Label htmlFor="quality-medium">Medium - Balanced quality</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="high" id="quality-high" />
            <Label htmlFor="quality-high">High - Best quality</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="pt-6 border-t border-gray-800 space-y-4">
        <h3 className="text-lg font-medium">Genre Preferences</h3>
        <p className="text-sm text-gray-400">Select your preferred genres to improve recommendations</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {genres.map((genre) => (
            <Badge 
              key={genre}
              variant="outline" 
              className="cursor-pointer py-2 px-3 hover:bg-gray-800"
            >
              {genre}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="pt-6 border-t border-gray-800 space-y-4">
        <h3 className="text-lg font-medium">Email Notifications</h3>
        
        <div className="space-y-6 ml-1">
          <div className="flex justify-between items-center">
            <div>
              <Label htmlFor="new-releases" className="text-base">New Releases</Label>
              <p className="text-sm text-gray-400">Get notified about new movies and shows</p>
            </div>
            <Switch id="new-releases" defaultChecked />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <Label htmlFor="recommendations" className="text-base">Recommendations</Label>
              <p className="text-sm text-gray-400">Receive personalized content recommendations</p>
            </div>
            <Switch id="recommendations" defaultChecked />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <Label htmlFor="updates" className="text-base">Account Updates</Label>
              <p className="text-sm text-gray-400">Get important account and security notifications</p>
            </div>
            <Switch id="updates" defaultChecked />
          </div>
        </div>
      </div>
      
      <div className="flex justify-end pt-4">
        <Button type="submit" className="bg-[#2c9ad4] hover:bg-[#123447] text-white font-lato font-bold">
          Save Preferences
        </Button>
      </div>
    </motion.div>
  );
}