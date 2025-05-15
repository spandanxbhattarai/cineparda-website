"use client";

import { motion } from 'framer-motion';

export default function LoadingUI() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-red-600 mb-4">CINEPARDA</h1>
        </motion.div>
        
        <div className="flex justify-center">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5,
              }}
              className="w-3 h-3 rounded-full bg-red-600 mx-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
}