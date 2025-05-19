"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Apple, PlayCircle, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function MobileAppPage() {
  const features = [
    {
      icon: <PlayCircle className="h-8 w-8 text-[#f36f20]" />,
      title: "Offline Downloads",
      description: "Download your favorite content and watch offline anywhere, anytime."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-[#f36f20]" />,
      title: "Cross-Platform Sync",
      description: "Start watching on one device and continue seamlessly on another."
    },
    {
      icon: <Apple className="h-8 w-8 text-[#f36f20]" />,
      title: "Premium Experience",
      description: "Enjoy high-quality streaming with our optimized mobile experience."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bebas mb-4">
              Watch Anywhere, <span className="text-[#f36f20]">Anytime</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-lato">
              Download the Cineparda app and enjoy your favorite movies and shows on the go.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 font-lato font-bold">
                <Apple className="mr-2 h-5 w-5" /> Download for iOS
              </Button>
              <Button size="lg" variant="outline" className='font-lato font-bold'>
                <PlayCircle className="mr-2 h-5 w-5" /> Get it on Android
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-lato mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bebas mb-4">Ready to Start Watching?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Download the Cineparda app now and start enjoying unlimited entertainment on your mobile device.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-[#2c9ad4] hover:bg-[#9ad9fe] font-bold text-white">
                Download Now
              </Button>
              <Button size="lg" variant="outline" className='font-bold font-lato'>
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}