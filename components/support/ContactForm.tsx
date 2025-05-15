"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would send the contact form in a real application
    console.log({ name, email, subject, message });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-800 border-gray-700 mt-1"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 mt-1"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Select onValueChange={setSubject} required>
                <SelectTrigger className="bg-gray-800 border-gray-700 mt-1">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="account">Account Issues</SelectItem>
                  <SelectItem value="billing">Billing Questions</SelectItem>
                  <SelectItem value="streaming">Streaming Problems</SelectItem>
                  <SelectItem value="technical">Technical Support</SelectItem>
                  <SelectItem value="content">Content Request</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-gray-800 border-gray-700 mt-1 resize-none"
                required
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full bg-[#2c9ad4] hover:bg-[#16394e] text-white font-lato font-bold">
            Send Message
          </Button>
        </form>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col justify-center space-y-6"
      >
        <div>
          <h3 className="text-xl font-medium mb-4">Contact Information</h3>
          <p className="text-gray-400 mb-6">
            Have questions or need assistance? Our support team is here to help. 
            Reach out to us and we'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-gray-800 p-3 rounded-full mr-4">
                <Mail className="h-5 w-5 text-[#f36f20]" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-400">support@cineparda.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gray-800 p-3 rounded-full mr-4">
                <Phone className="h-5 w-5 text-[#f36f20]" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-400">+1 (555) 123-4567</p>
                <p className="text-gray-500 text-sm">Mon-Fri, 9am-6pm EST</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gray-800 p-3 rounded-full mr-4">
                <MessageSquare className="h-5 w-5 text-[#f36f20]" />
              </div>
              <div>
                <h4 className="font-medium">Live Chat</h4>
                <p className="text-gray-400">Available 24/7</p>
                <Button variant="link" className="text-[#f36f20] hover:text-red-400 px-0 mt-1 font-bold">
                  Start a chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}