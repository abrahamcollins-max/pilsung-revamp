import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "../lib/utils";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const leftFaqs: FAQItem[] = [
  {
    id: "bully",
    question: "Will My Child Become a Bully?",
    answer: "A specific part of our preschool and kids classes at Pilsung ATA Martial Arts in Greenwood is teaching respect and courtesy. These programs also include lessons on when to use their new self skills and when to not use them. Additionally, parents find that our students become more confident, able to stand up to bullies, as well as learning to show more humility and kindness towards others."
  },
  {
    id: "watch",
    question: "Are Parents Allowed To Watch?",
    answer: "We encourage parents to watch their children in their kids' lessons. We love parents getting involved! And so do their kids. Even better... join into some of our classes for adults. Your kids will love that you have something in common. It will build a strong family bond!\n\nAdditionally, if you wanted some 'Me-Time'? Simply drop them off, and go grab a coffee. They will greet you with a huge smile when you return, because they had SO much fun!"
  },
  {
    id: "fit",
    question: "Do I Need To Be Fit For This?",
    answer: "No, not at all! We find that people start at varying fitness levels. But, you will find that you do get fit by doing our Greenwood martial arts classes. Isn't that the point though? A fun workout that gets results!"
  },
  {
    id: "blackbelt",
    question: "How Long Until I Get My Black Belt?",
    answer: "Truthfully, the journey to black belt is an individual one. Everyone can progress at a different pace. There is no judgement on students for how long it does take.\n\nEarning your Black Belt is SO WORTHWHILE!\nThe self defense skills you will master can truly be life-saving!\nHowever, the other benefits of striving for black belt, like perseverance, never giving up, commitment and self discipline lead to life-long success.\n\nYou may find the journey is the best part!\nYou will find that your instructors at Pilsung ATA Martial Arts Greenwood are dedicated to helping you on your journey to black belt or whatever your personal goal may be."
  }
];

const rightFaqs: FAQItem[] = [
  {
    id: "offer",
    question: "How Do I Claim Your Limited Time Offer?",
    answer: "We do only have a certain amount of space in our training area. Take advantage of our limited time offer, the fastest way to fill in our quick start form.\n\nAdditionally, you can always call us, we would love to chat with you about what we do, and if our Greenwood classes would be a great fit for you and your family!"
  },
  {
    id: "bring",
    question: "What Do I Need To Bring To My First Martial Arts Lesson?",
    answer: "Make sure you wear comfortable clothes you can do sport in! Not really suitable to practice kicks in a skirt!\n\nBe sure to bring a water bottle to your classes. You will find Pilsung ATA Martial Arts in Greenwood have classes for kids and adults that are a great workout and lots of fun! Most students are grinning from ear to ear by the end. I am sure you will be too!"
  },
  {
    id: "sporty",
    question: "I'm Not Very Sporty or Coordinated, Will That Be A Problem?",
    answer: "Not at all! In fact, many students starting in our adult martial arts classes haven't done any physical activity in years. Our instructors work with you at your own pace to help build your coordination, balance, and physical confidence. You will be amazed at what your body can achieve!"
  }
];

export function FAQs() {
  const [openIds, setOpenIds] = useState<string[]>(["bully", "offer"]);

  const toggleId = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const renderFaqCard = (faq: FAQItem) => {
    const isOpen = openIds.includes(faq.id);

    return (
      <div 
        key={faq.id}
        className={cn(
          "border rounded-sm transition-all duration-300 overflow-hidden shadow-sm bg-white mb-4",
          isOpen ? "border-neutral-200 shadow-[0_5px_15px_rgba(0,0,0,0.03)]" : "border-neutral-200/60 hover:border-neutral-300"
        )}
      >
        <button
          className="w-full px-6 py-5 flex items-start gap-4 text-left focus:outline-none"
          onClick={() => toggleId(faq.id)}
          id={`faq-btn-${faq.id}`}
        >
          <div className="flex-shrink-0 mt-1 font-bold text-neutral-800">
            {isOpen ? <Minus size={18} className="text-[#ED1C24] stroke-[3px]" /> : <Plus size={18} className="text-neutral-400 stroke-[3px]" />}
          </div>
          <h3 className={cn(
            "font-sans text-base md:text-lg font-bold transition-colors duration-300 pr-4 leading-normal",
            isOpen ? "text-[#ED1C24]" : "text-neutral-800 hover:text-black"
          )}>
            {faq.question}
          </h3>
        </button>
        
        <div 
          className={cn(
            "px-6 overflow-hidden transition-all duration-500 ease-in-out font-sans",
            isOpen ? "max-h-[800px] pb-6 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="text-neutral-600 text-sm md:text-base leading-relaxed pl-8">
            {faq.id === "blackbelt" ? (
              <div className="space-y-4">
                <p>Truthfully, the journey to black belt is an individual one. Everyone can progress at a different pace. There is no judgement on students for how long it does take.</p>
                <p className="font-bold text-neutral-800 border-l-2 border-[#ED1C24] pl-3 mt-4">Earning your Black Belt is SO WORTHWHILE!</p>
                <p>The self defense skills you will master can truly be life-saving! However, the other benefits of striving for black belt, like perseverance, never giving up, commitment and self discipline lead to life-long success.</p>
                <p className="font-bold text-neutral-800 border-l-2 border-[#ED1C24] pl-3 mt-4">You may find the journey is the best part!</p>
                <p>You will find that your instructors at Pilsung ATA Martial Arts Greenwood are dedicated to helping you on your journey to black belt or whatever your personal goal may be.</p>
              </div>
            ) : faq.answer.includes("\n\n") ? (
              <div className="space-y-4">
                {faq.answer.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            ) : (
              <p>{faq.answer}</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-white text-neutral-900 relative z-10 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-500 font-sans text-base md:text-lg max-w-2xl mx-auto">
            Most frequent questions and answers about our Programs
          </p>
          <div className="w-16 h-1 bg-[#ED1C24] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-start max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="flex flex-col">
            {leftFaqs.map(renderFaqCard)}
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {rightFaqs.map(renderFaqCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
