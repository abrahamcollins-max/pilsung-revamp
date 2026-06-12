import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "../lib/utils";

const faqs = [
  {
    question: "Do I need any prior martial arts experience?",
    answer: "Not at all! Our programs are designed to accommodate all skill levels, from absolute beginners to advanced martial artists. Our instructors will guide you step-by-step to ensure you learn safely and effectively."
  },
  {
    question: "What is the best age for a child to start?",
    answer: "We have programs starting as early as preschool age (ATA Tigers). Martial arts is fantastic for developing early motor skills, focus, and discipline in young children!"
  },
  {
    question: "How often should I or my child attend classes?",
    answer: "For the best results, we recommend attending classes 2 to 3 times a week. This ensures consistent progress, muscle memory development, and overall fitness improvement."
  },
  {
    question: "Is martial arts safe?",
    answer: "Safety is our top priority. Our instructors are highly trained professionals, and we use top-quality protective gear for sparring and drills. We maintain a structured and disciplined environment to minimize risks."
  },
  {
    question: "What should I wear for my first class?",
    answer: "For your introductory class, comfortable workout clothes (like sweatpants or shorts and a t-shirt) are perfect. Once you formally enroll, we will provide you with an official Pilsung ATA martial arts uniform!"
  }
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-transparent text-current relative z-10 transition-colors duration-700">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#ED1C24] font-display text-lg tracking-[0.2em] uppercase font-bold mb-4 block">
            Got Questions?
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-current">
            Frequently Asked <br /> Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={cn(
                "border rounded-xl transition-all duration-300 overflow-hidden shadow-sm",
                openIndex === index ? "border-[#ED1C24]/40 bg-neutral-500/5" : "border-current/10 hover:border-current/20 bg-transparent"
              )}
            >
              <button
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleOpen(index)}
              >
                <h3 className={cn(
                  "font-sans text-lg md:text-xl font-semibold transition-colors duration-300 pr-8",
                  openIndex === index ? "text-current" : "text-current opacity-80"
                )}>
                  {faq.question}
                </h3>
                <div className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",
                  openIndex === index ? "bg-[#ED1C24] text-white" : "bg-current/10 text-current"
                )}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <div 
                className={cn(
                  "px-6 overflow-hidden transition-all duration-500 ease-in-out font-sans",
                  openIndex === index ? "max-h-60 pb-6 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-current opacity-70 text-base md:text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
