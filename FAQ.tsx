import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What exactly do you do? I don\'t understand all this digital stuff.',
      answer: 'Think of us as your complete digital department. We make sure customers can find you on Google, set up professional websites, install modern cash register systems (POS) that track everything, manage your social media, and teach you how to use it all. We handle the technology so you can focus on your business.'
    },
    {
      question: 'How much does this cost? I\'m on a tight budget.',
      answer: 'We have solutions starting from Ksh 15,000/month for Google visibility, up to complete packages. We understand budget constraints and can work with you to prioritize what will make the biggest impact first. Many clients start small and add more as they see results and revenue grows.'
    },
    {
      question: 'I don\'t even know how to use Instagram. Can you still help me?',
      answer: 'Absolutely! Most of our clients start with little to no tech knowledge. We teach everything in simple terms, in Swahili or English, using examples from YOUR business. We don\'t leave until you\'re comfortable. Plus we\'re always available on WhatsApp if you get stuck.'
    },
    {
      question: 'How long before I see more customers and sales?',
      answer: 'Google visibility shows results in 1-2 weeks - customers start finding you in searches. Social media takes 2-4 weeks as we build content and followers. POS systems show immediate benefits - you\'ll see exactly where your money is going from day one. Most businesses see 30-50% more customer inquiries within the first month.'
    },
    {
      question: 'What\'s a POS system and do I really need one?',
      answer: 'A POS (Point of Sale) system is like a smart cash register. It tracks every sale, manages your inventory, shows which products make money, and eliminates cash discrepancies. If you\'re tired of not knowing where money goes, or spending hours counting stock, you need this. Restaurant owners and shop owners typically recover the cost in 2-3 months from reduced losses alone.'
    },
    {
      question: 'Can you build me an online store? I want to sell products online.',
      answer: 'Yes! We build complete e-commerce websites with M-PESA payment integration, product catalogs, order management, and delivery coordination. Prices start at Ksh 45,000. We\'ve helped clothing shops, electronics sellers, and many others start selling beyond their physical location.'
    },
    {
      question: 'Do I need a website if I have Instagram and Facebook?',
      answer: 'Instagram and Facebook are great, but you don\'t own them - they can change rules or shut down anytime. A website is YOURS. It shows up in Google searches, looks more professional, and gives customers a place to learn about you outside social media. Think of social media as the billboard that points to your website (the actual store).'
    },
    {
      question: 'What if I already tried digital marketing and it didn\'t work?',
      answer: 'Many businesses try random tactics without a complete strategy. Maybe they paid for Facebook ads but had no website. Or created social media but never posted. We take a complete approach - everything works together. Plus we focus on local businesses, not big corporations, so our strategies are practical and affordable.'
    },
    {
      question: 'Will you keep charging me monthly fees forever?',
      answer: 'No. Our goal is to SET YOU UP so you can run things yourself. Initial setup (websites, Google profiles, POS installation) is one-time. We only charge monthly for ongoing services you choose - like content management (Ksh 8,000-12,000/month) or SEO (Ksh 15,000+/month). Many clients take over after our training and only call us when they need updates.'
    },
    {
      question: 'What if something breaks or stops working?',
      answer: 'All our work includes 30-60 days support. After that, we\'re still available via WhatsApp. For websites and POS systems, we offer maintenance packages. Most issues are simple and we can fix remotely within hours. We built your system, so we know exactly how to fix it.'
    },
    {
      question: 'Can you help me compete with bigger businesses in my area?',
      answer: 'Yes! That\'s our specialty. Big businesses often neglect local SEO and personal customer service. We make sure you show up in "near me" searches, showcase your local roots, and highlight your personal touch. Many small businesses outrank bigger competitors because they\'re more relevant to local customers.'
    },
    {
      question: 'Do you work with businesses in my industry?',
      answer: 'We work with restaurants, salons, barbershops, retail shops, boutiques, pharmacies, schools, clinics, gyms, car washes, hardware stores, and many more. If you serve local customers in Kenya, we can help you. We\'ve seen success in almost every industry.'
    },
    {
      question: 'What makes you different from other digital marketing companies?',
      answer: 'We focus specifically on Kenyan local businesses, not big corporations. We understand your challenges - limited budgets, staff turnover, tech literacy. We don\'t just build and leave - we train and support. Our prices are honest and affordable. We speak Swahili and English. And we\'re always available on WhatsApp, not hiding behind email tickets.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-[#0A2239] mb-6">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#FAFAFA] rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FAFAFA]/80 transition-colors"
              >
                <span className="text-lg text-[#0A2239] pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0EBE6F] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-[#2C2C2C]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
