"use client";

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqData } from '@/data/faq';

export default function FAQAccordion() {
  return (
    <div className="space-y-8">
      {faqData.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-medium">{category.category}</h3>
          <Accordion type="single" collapsible className="space-y-2">
            {category.questions.map((faq, faqIndex) => (
              <AccordionItem 
                key={faqIndex} 
                value={`${categoryIndex}-${faqIndex}`}
                className="border-gray-800 bg-gray-800 rounded-lg px-4"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      ))}
    </div>
  );
}