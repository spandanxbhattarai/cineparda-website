"use client";

import { motion } from 'framer-motion';
import FAQAccordion from '@/components/support/FAQAccordion';
import ContactForm from '@/components/support/ContactForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Headphones, FileQuestion, MessageSquare } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-lato">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">How can we help you?</h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Find answers to your questions with our comprehensive support resources
        </p>
      </motion.div>
      
      {/* Main Content */}
      <Tabs defaultValue="faq" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8 bg-gray-900">
          <TabsTrigger value="faq" className="flex items-center justify-center gap-2">
            <FileQuestion className="h-4 w-4" />
            <span className="hidden sm:inline">FAQs</span>
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center justify-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">Contact Us</span>
          </TabsTrigger>
          <TabsTrigger value="help" className="flex items-center justify-center gap-2">
            <Headphones className="h-4 w-4" />
            <span className="hidden sm:inline">Help Center</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="faq">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <FAQAccordion />
            </div>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="contact">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <ContactForm />
            </div>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="help">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 rounded-lg border border-gray-800 p-6"
          >
            <h2 className="text-2xl font-bold mb-6">Help Center</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Account Issues', 'Streaming Problems', 'Billing Questions', 'Device Support', 'Content Requests', 'Getting Started'].map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <h3 className="text-lg font-medium mb-2">{category}</h3>
                  <p className="text-gray-400 text-sm">
                    Find helpful articles and tutorials about {category.toLowerCase()}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}