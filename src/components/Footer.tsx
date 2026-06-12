import { useState } from "react";
import { Phone, MapPin } from "lucide-react";

export function Footer() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <footer className="bg-white text-neutral-900 pt-24 pb-12 px-6 border-t border-neutral-200 relative z-10 font-sans transition-colors duration-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-neutral-200 pb-16">
        
        {/* Get Started */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-[#ED1C24] font-display text-xl uppercase tracking-widest font-bold mb-4">Get Started</h3>
          <ul className="flex flex-col space-y-4 pt-1">
            <li><a href="#" className="relative group text-neutral-600 hover:text-black transition-colors inline-block w-fit">Home<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
            <li><a href="#" className="relative group text-neutral-600 hover:text-black transition-colors inline-block w-fit">About Us<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
            <li><a href="#" className="relative group text-neutral-600 hover:text-black transition-colors inline-block w-fit">Blog<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
            <li><a href="#" className="relative group text-neutral-600 hover:text-black transition-colors inline-block w-fit">News<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
            <li><a href="#" className="relative group text-neutral-600 hover:text-black transition-colors inline-block w-fit">Belt Ambassador<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
          </ul>
        </div>

        {/* Classes */}
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-4">
            <h3 className="text-[#ED1C24] font-display text-xl uppercase tracking-widest font-bold mb-4">In Person Classes</h3>
            <ul className="flex flex-col space-y-4 pt-1">
              <li><a href="#" className="relative group text-neutral-600 hover:text-black transition-colors inline-block w-fit">Preschool Martial Arts in Greenwood<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
              <li><a href="#" className="relative group text-neutral-600 hover:text-black transition-colors inline-block w-fit">Kids Martial Arts in Greenwood<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
              <li><a href="#" className="relative group text-neutral-600 hover:text-black transition-colors inline-block w-fit">Teen &amp; Adult Martial Arts in Greenwood<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
              <li><a href="#" className="relative group text-neutral-600 hover:text-black transition-colors inline-block w-fit">Krav Maga (Ages 18+ Only) in Greenwood<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
            </ul>
          </div>
        </div>

        {/* Taekwondo Classes */}
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-4">
            <h3 className="text-[#ED1C24] font-display text-xl uppercase tracking-widest font-bold mb-4">Taekwondo Classes</h3>
            <ul className="flex flex-col space-y-4 pt-1">
              <li><a href="#" className="relative group text-neutral-600 hover:text-black transition-colors inline-block w-fit">Preschool Taekwondo in Greenwood<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
              <li><a href="#" className="relative group text-neutral-600 hover:text-black transition-colors inline-block w-fit">Kids Taekwondo Classes in Greenwood<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
              <li><a href="#" className="relative group text-neutral-600 hover:text-black transition-colors inline-block w-fit">Teens Taekwondo Classes in Greenwood<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
              <li><a href="#" className="relative group text-neutral-600 hover:text-black transition-colors inline-block w-fit">Adult Taekwondo Classes in Greenwood<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
              <li className="pt-3 mt-3 border-t border-neutral-200"><a href="#" className="relative group text-[#ED1C24] font-bold hover:text-black transition-colors inline-block w-fit">Self-defense Classes<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-black origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
            </ul>
          </div>
        </div>

        {/* Contacts */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-[#ED1C24] font-display text-xl uppercase tracking-widest font-bold mb-2">Contacts</h3>
          
          <div className="flex flex-col space-y-4 text-neutral-700">
            <button onClick={() => handleCopy("(317) 881-2762", "phone")} className="flex items-center gap-3 hover:text-black transition-colors group relative w-fit">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-[#ED1C24] group-hover:text-white transition-colors"><Phone size={18} /></div>
              <span className="font-medium text-lg">(317) 881-2762</span>
              <div className={`absolute -top-8 left-12 bg-black text-white text-xs py-1 px-2 rounded font-bold uppercase tracking-widest transition-all duration-300 pointer-events-none shadow-lg ${copiedField === "phone" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                Copied!
              </div>
            </button>
            
            <button onClick={() => handleCopy("1729 US 31 South Ste A, Greenwood, IN 46143", "address")} className="flex items-start gap-3 hover:text-black transition-colors group relative text-left w-fit cursor-pointer">
              <div className="w-10 h-10 shrink-0 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-[#ED1C24] group-hover:text-white transition-colors"><MapPin size={18} /></div>
              <span className="leading-relaxed mt-2">1729 US 31 South Ste A,<br/>Greenwood, IN 46143</span>
              <div className={`absolute -top-4 left-12 bg-black text-white text-xs py-1 px-2 rounded font-bold uppercase tracking-widest transition-all duration-300 pointer-events-none shadow-lg ${copiedField === "address" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                Copied!
              </div>
            </button>
            
            <div className="w-full h-36 bg-neutral-100 rounded-sm overflow-hidden relative shadow-inner mt-2 mb-2">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.8878567543884!2d-86.12648710000001!3d39.6300465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b51ebdb11fbf3%3A0x647f1c1f1ec3cddc!2s1729%20US-31%20%23A%2C%20Greenwood%2C%20IN%2046143!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Pilsung ATA Martial Arts Location"
                className="opacity-90 object-cover"
              ></iframe>
            </div>
            
            <a href="https://maps.google.com/?q=1729+US+31+South+Ste+A,+Greenwood,+IN+46143" target="_blank" rel="noopener noreferrer" className="bg-black text-white hover:bg-neutral-800 uppercase font-display text-sm tracking-wider font-bold py-3 px-4 text-center rounded-sm transition-colors block w-full shadow-md hover:shadow-lg">
              Get Directions
            </a>
            
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                id="footer-facebook-link"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a 
                href="https://yelp.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-[#D32323] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                id="footer-yelp-link"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.215 15.35c-.16-.36-.45-.63-.8-.74l-4.14-1.21a.995.995 0 0 1-.72-1.25l.48-1.57a1 1 0 0 1 1.25-.72l4.14 1.21a1 1 0 0 1 .74.8l.21 4.14a.995.995 0 0 1-.92 1.05c-.11 0-.22-.02-.24-.029zm2.42-2.12c-.11-.38.01-.79.31-1.04l2.95-2.28a.993.993 0 0 1 1.4.15l1.01 1.3c.31.41.24 1-.16 1.31l-2.95 2.29c-.39.3-.92.21-1.18-.16l-1.31-1.41s-.07-.2-.07-.21zm-4.3 2.1c-.08-.38-.34-.7-.7-.84l-3.23-1.82a1 1 0 0 1-.41-1.4l1.01-1.3a.993.993 0 0 1 1.4-.41l3.23 1.82c.41.24.6.76.44 1.21l-1.32 2.36c-.05.14-.14.24-.22.28a1.002 1.002 0 0 1-.22.1zm2.39 3.03v3.7c0 .55-.45 1-1 1h-1.61a.993.993 0 0 1-.99-1v-3.7c0-.55.45-.99 1-.99h1.61c.54 0 .99.44.99.99zm2.14-10.7c.18-.35.16-.76-.05-1.08l-2.16-3.04c-.32-.46-.95-.57-1.41-.25l-1.3 1c-.42.32-.51.93-.19 1.35l2.16 3.04c.3.43.83.56 1.29.32l1.96-1.12z" />
                </svg>
              </a>
            </div>

            <div className="pt-6 border-t border-neutral-200 flex items-center justify-center sm:justify-start">
              <div className="flex items-center gap-6 group">
                <img 
                  src="https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781294261/Aspire-2025-2026-300x300_j62inc.webp" 
                  alt="Aspire Member Investor" 
                  className="h-44 w-44 md:h-48 md:w-48 object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="text-neutral-500 font-medium text-sm md:text-base tracking-widest uppercase leading-relaxed">
                  Aspire<br/>Member<br/>Investor
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between w-full text-xs font-sans text-neutral-400 uppercase tracking-widest gap-4 px-2">
        <span>© 2024 Pilsung ATA Martial Arts</span>
        <span>Greenwood, IN</span>
      </div>
    </footer>
  );
}
