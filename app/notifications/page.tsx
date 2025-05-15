"use client";

import { motion } from 'framer-motion';
import { Bell, Settings, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "New Release: 'Galactic Odyssey'",
      message: "The highly anticipated sci-fi epic is now available to stream!",
      time: "2 hours ago",
      read: false
    },
    {
      id: 2,
      title: "Continue Watching",
      message: "Pick up where you left off with 'The Last Kingdom'",
      time: "5 hours ago",
      read: true
    },
    {
      id: 3,
      title: "New Season Alert",
      message: "Season 2 of 'Kingdom of Dreams' drops next week!",
      time: "1 day ago",
      read: false
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 max-w-7xl mx-auto mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bebas mb-2">Notifications</h1>
            <p className="text-gray-400">Stay updated with the latest releases and recommendations</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {notifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`bg-gray-900 rounded-lg p-4 border ${
                notification.read ? 'border-gray-800' : 'border-[#f36f20]'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-full ${notification.read ? 'bg-gray-800' : 'bg-[#f36f20]'}`}>
                  <Bell className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-lato font-bold text-xl mb-1">{notification.title}</h3>
                  <p className="text-gray-400 text-sm font-bold">{notification.message}</p>
                  <p className="text-gray-500 text-xs mt-2 font-bold">{notification.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="font-bebas text-2xl mb-6">Notification Settings</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">New Releases</Label>
                <p className="text-sm text-gray-400">Get notified about new movies and shows</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Recommendations</Label>
                <p className="text-sm text-gray-400">Receive personalized content suggestions</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Watch List Updates</Label>
                <p className="text-sm text-gray-400">Updates about your saved content</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}