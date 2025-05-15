"use client";

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProfileForm from '@/components/profile/ProfileForm';
import WatchHistory from '@/components/profile/WatchHistory';
import PreferencesForm from '@/components/profile/PreferencesForm';
import SubscriptionInfo from '@/components/profile/SubscriptionInfo';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-lato">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold font-bebas tracking-wider">Account Settings</h1>
          <p className="text-gray-400 mt-1">Manage your profile and preferences</p>
        </div>
        <div className="mt-4 md:mt-0">
          <img 
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Profile" 
            className="w-16 h-16 rounded-full object-cover border-2 border-[#f36f20]"
          />
        </div>
      </div>
      
      <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-gray-900">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="history">Watch History</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
        </TabsList>
        
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
          <TabsContent value="profile">
            <ProfileForm />
          </TabsContent>
          
          <TabsContent value="history">
            <WatchHistory />
          </TabsContent>
          
          <TabsContent value="preferences">
            <PreferencesForm />
          </TabsContent>
          
          <TabsContent value="subscription">
            <SubscriptionInfo />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}