"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ChevronRight } from 'lucide-react';

export default function SubscriptionInfo() {
  const plan = {
    name: 'Premium',
    price: '$14.99',
    period: 'month',
    nextBilling: 'June 15, 2025',
    quality: '4K Ultra HD',
    devices: 4,
    features: [
      'Watch on 4 devices at the same time',
      'Unlimited movies and TV shows',
      'Ad-free viewing experience',
      'Downloads available',
      'Cancel anytime'
    ]
  };

  const otherPlans = [
    {
      name: 'Basic',
      price: '$8.99',
      period: 'month',
      quality: 'HD',
      devices: 1
    },
    {
      name: 'Standard',
      price: '$11.99',
      period: 'month',
      quality: 'Full HD',
      devices: 2
    },
    {
      name: 'Family',
      price: '$19.99',
      period: 'month',
      quality: '4K Ultra HD',
      devices: 6
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 font-lato">
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">Current Plan: {plan.name}</h3>
              <Badge className="bg-[#2c9ad4] text-white">Active</Badge>
            </div>
            <p className="text-3xl font-bold mt-2">
              {plan.price}
              <span className="text-sm text-gray-400 font-normal">/{plan.period}</span>
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Next billing date: {plan.nextBilling}
            </p>
          </div>
          
          <div className="space-y-2">
            <Button variant="outline" className="w-full sm:w-auto bg-transparent hover:bg-[#2c9ad4] font-lato font-bold">
              Change Plan
            </Button>
            <Button variant="link" className="text-[#f36f20] hover:text-[#e9844a] w-full sm:w-auto font-lato font-bold">
              Cancel Subscription
            </Button>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700">
          <h4 className="font-medium mb-3">Plan Features:</h4>
          <ul className="space-y-2">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Other Available Plans</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {otherPlans.map((otherPlan, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <h4 className="font-medium">{otherPlan.name}</h4>
              <p className="text-xl font-bold mt-1">
                {otherPlan.price}
                <span className="text-xs text-gray-400 font-normal">/{otherPlan.period}</span>
              </p>
              <div className="mt-2 text-sm text-gray-400">
                <p>{otherPlan.quality}</p>
                <p>{otherPlan.devices} device{otherPlan.devices > 1 ? 's' : ''}</p>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full mt-3 justify-between"
              >
                View Details <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-800 rounded-lg p-6 mt-6">
        <h3 className="text-lg font-medium mb-4">Payment Method</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-8 bg-blue-600 rounded mr-3 flex items-center justify-center text-white font-bold">
              VISA
            </div>
            <div>
              <p className="font-medium">Visa ending in 4242</p>
              <p className="text-sm text-gray-400">Expires 09/2026</p>
            </div>
          </div>
          
          <Button variant="outline" className="w-full sm:w-auto bg-transparent hover:bg-[#2c9ad4] font-lato font-bold">
              Update
            </Button>
        </div>
      </div>
    </motion.div>
  );
}