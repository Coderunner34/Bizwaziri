import { CheckCircle, Calendar } from 'lucide-react';

interface FreeAssessmentProps {
  onBookingClick: () => void;
}

export function FreeAssessment({ onBookingClick }: FreeAssessmentProps) {
  const benefits = [
    'Check how you currently appear (or don\'t appear) when customers search for businesses like yours',
    'Review your existing Google, Instagram, and Facebook presence if you have them',
    'Show you how your competitors appear online compared to you',
    'Explain specific gaps that might be costing you customers',
    'Recommend what would help your business most'
  ];

  return (
    <section id="free-assessment" className="py-20 bg-gradient-to-br from-[#0A2239] to-[#0A2239]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-6">
            Not Sure If You Need This? Let's Find Out.
          </h2>
          <p className="text-xl text-white/90 mb-12">
            We offer a free, no-obligation Digital Presence Assessment for local businesses. In about fifteen minutes, we'll:
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 mb-12">
            <div className="space-y-4 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#0EBE6F] flex-shrink-0 mt-1" />
                  <p className="text-white/90 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#D4AF37]/20 border border-[#D4AF37] rounded-xl p-6 mb-8">
            <p className="text-white/90 text-lg">
              <strong className="text-white">Important:</strong> This is a genuine assessment, not a sales pitch. Some businesses discover they're already doing well and just need minor tweaks. Others discover significant gaps. Either way, you'll walk away understanding your digital presence better, whether you work with us or not.
            </p>
          </div>

          <button
            onClick={onBookingClick}
            className="inline-flex items-center gap-2 bg-[#0EBE6F] hover:bg-[#0EBE6F]/90 text-white px-10 py-5 rounded-lg transition-colors text-lg shadow-xl hover:shadow-2xl hover:shadow-[#0EBE6F]/30"
          >
            <Calendar className="w-5 h-5" />
            Book Your Free Assessment
          </button>
        </div>
      </div>
    </section>
  );
}
