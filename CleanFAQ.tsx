import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export function CleanFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer website development, POS systems, SEO & Google visibility, social media management, e-commerce stores, and monitoring & evaluation services. Everything your business needs to succeed online.'
    },
    {
      question: 'How much does it cost?',
      answer: 'Prices vary by service. Website development starts from Ksh 20,000, POS systems from Ksh 35,000, SEO from Ksh 15,000/month, and social media management from Ksh 12,000/month. We offer flexible packages to suit different budgets.'
    },
    {
      question: 'How long does setup take?',
      answer: 'Most services are completed within 7 working days. POS systems can be installed in 2-3 days, while websites typically take 5-7 days. We work fast because we know time is money.'
    },
    {
      question: 'Do I need technical knowledge?',
      answer: 'Not at all. We train you and your staff thoroughly on how to use everything we set up. We explain in simple terms, in Swahili or English, until you\'re completely comfortable.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We work with businesses across Kenya, primarily in Nairobi, Kajiado, Kiambu, Nakuru, and surrounding areas. Much of our work can be done remotely.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept M-Pesa, bank transfer, or cash. We require 50% deposit before starting work and 50% upon completion.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes. All projects include 30-60 days of free support. After that, you can contact us anytime for assistance via WhatsApp. We also offer monthly management packages.'
    },
    {
      question: 'Can you help if I already have a website or social media?',
      answer: 'Absolutely. We can audit and optimize your existing digital presence, fix issues, and improve performance. Pricing is adjusted based on what already exists.'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl text-[#0A2239] mb-6">
            Common Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working with us
          </p>
        </motion.div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg text-[#0A2239] pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#FF8C42]" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
