import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Facebook, Phone, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%", // slightly before the footer
        onEnter: () => gsap.to("body", { backgroundColor: "#000000", color: "#ffffff", duration: 0.8, overwrite: "auto" }),
        onLeaveBack: () => gsap.to("body", { backgroundColor: "#ffffff", color: "#111111", duration: 0.8, overwrite: "auto" }),
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={containerRef} className="bg-[#050505] text-white pt-24 pb-12 px-6 border-t border-white/10 relative z-10 font-sans transition-colors duration-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-16">
        
        {/* Get Started */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-[#ED1C24] font-display text-xl uppercase tracking-widest font-bold mb-4">Get Started</h3>
          <ul className="flex flex-col space-y-4 pt-1">
            <li><a href="#" className="relative group text-white/80 hover:text-white transition-colors inline-block w-fit">Home<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
            <li><a href="#" className="relative group text-white/80 hover:text-white transition-colors inline-block w-fit">About Us<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
            <li><a href="#" className="relative group text-white/80 hover:text-white transition-colors inline-block w-fit">Blog<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
            <li><a href="#" className="relative group text-white/80 hover:text-white transition-colors inline-block w-fit">News<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
            <li><a href="#" className="relative group text-white/80 hover:text-white transition-colors inline-block w-fit">Belt Ambassador<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
          </ul>
        </div>

        {/* Classes */}
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-4">
            <h3 className="text-[#ED1C24] font-display text-xl uppercase tracking-widest font-bold mb-4">In Person Classes</h3>
            <ul className="flex flex-col space-y-4 pt-1">
              <li><a href="#" className="relative group text-white/80 hover:text-white transition-colors inline-block w-fit">Preschool Martial Arts in Greenwood<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
              <li><a href="#" className="relative group text-white/80 hover:text-white transition-colors inline-block w-fit">Kids Martial Arts in Greenwood<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
              <li><a href="#" className="relative group text-white/80 hover:text-white transition-colors inline-block w-fit">Teen &amp; Adult Martial Arts in Greenwood<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
              <li><a href="#" className="relative group text-white/80 hover:text-white transition-colors inline-block w-fit">Krav Maga (Ages 18+ Only) in Greenwood<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
            </ul>
          </div>
        </div>

        {/* Taekwondo Classes */}
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-4">
            <h3 className="text-[#ED1C24] font-display text-xl uppercase tracking-widest font-bold mb-4">Taekwondo Classes</h3>
            <ul className="flex flex-col space-y-4 pt-1">
              <li><a href="#" className="relative group text-white/80 hover:text-white transition-colors inline-block w-fit">Preschool Taekwondo in Greenwood<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
              <li><a href="#" className="relative group text-white/80 hover:text-white transition-colors inline-block w-fit">Kids Taekwondo Classes in Greenwood<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
              <li><a href="#" className="relative group text-white/80 hover:text-white transition-colors inline-block w-fit">Teens Taekwondo Classes in Greenwood<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
              <li><a href="#" className="relative group text-white/80 hover:text-white transition-colors inline-block w-fit">Adult Taekwondo Classes in Greenwood<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
              <li className="pt-3 mt-3 border-t border-white/10"><a href="#" className="relative group text-[#ED1C24] font-bold hover:text-white transition-colors inline-block w-fit">Self-defense Classes<span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-white origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span></a></li>
            </ul>
          </div>
        </div>

        {/* Contacts */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-[#ED1C24] font-display text-xl uppercase tracking-widest font-bold mb-2">Contacts</h3>
          
          <div className="flex flex-col space-y-4 text-white/80">
            <button onClick={() => handleCopy("(317) 881-2762", "phone")} className="flex items-center gap-3 hover:text-white transition-colors group relative w-fit">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ED1C24] transition-colors"><Phone size={18} /></div>
              <span className="font-medium text-lg">(317) 881-2762</span>
              <div className={`absolute -top-8 left-12 bg-white text-black text-xs py-1 px-2 rounded font-bold uppercase tracking-widest transition-all duration-300 pointer-events-none shadow-lg ${copiedField === "phone" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                Copied!
              </div>
            </button>
            
            <button onClick={() => handleCopy("1729 US 31 South Ste A, Greenwood, IN 46143", "address")} className="flex items-start gap-3 hover:text-white transition-colors group relative text-left w-fit cursor-pointer">
              <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ED1C24] transition-colors"><MapPin size={18} /></div>
              <span className="leading-relaxed mt-2">1729 US 31 South Ste A,<br/>Greenwood, IN 46143</span>
              <div className={`absolute -top-4 left-12 bg-white text-black text-xs py-1 px-2 rounded font-bold uppercase tracking-widest transition-all duration-300 pointer-events-none shadow-lg ${copiedField === "address" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                Copied!
              </div>
            </button>
            
            <div className="w-full h-36 bg-white/10 rounded-sm overflow-hidden relative shadow-inner mt-2 mb-2">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.8878567543884!2d-86.12648710000001!3d39.6300465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b51ebdb11fbf3%3A0x647f1c1f1ec3cddc!2s1729%20US-31%20%23A%2C%20Greenwood%2C%20IN%2046143!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Pilsung ATA Martial Arts Location"
                className="opacity-80 object-cover"
              ></iframe>
            </div>
            
            <a href="https://maps.google.com/?q=1729+US+31+South+Ste+A,+Greenwood,+IN+46143" target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-neutral-200 uppercase font-display text-sm tracking-wider font-bold py-3 px-4 text-center rounded-sm transition-colors block w-full outline outline-1 outline-white/20 outline-offset-[-1px]">
              Get Directions
            </a>
            
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Facebook size={20} className="fill-current text-white border-0" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#FF1A1A] flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M11.666 12.01L8.718 10.99 11.232 5.094c.319-.748-.052-1.579-.824-1.854-.775-.275-1.65.111-1.967.854s-.044 6.776-.044 6.776c0 .484-.337.89-.806.945-1.127.135-2.28-.415-2.73-1.464-.492-1.156-.347-2.316.326-3.15C3.805 5.56 1.776 6.54.912 8.56c-.82 1.921-.194 4.094 1.488 5.17l5.228 1.83 -1.82 4.08c-.287.643-.075 1.398.544 1.716.208.106.425.155.638.155.454 0 .89-.25 1.09-.697l2.645-5.918c.314-.707.037-1.516-.62-1.85z"/><path d="M12.984 13.906L17.518 17.514c.594.472 1.484.34 1.986-.296.502-.636.417-1.558-.178-2.03L15.352 12.03c-.66-.466-1.528-.485-2.203-.02l-.515.36c-.45.318-.517.914-.15.132zM15.46 11.696L19.98 9.3c.69-.364 1.583-.178 1.996.42.413.595.143 1.378-.518.174l-4.522 2.396c-.736.392-1.594.238-2.18-.328l-.508-.49c-.437-.425-.333-1.026.22-1.42z"/><path d="M12.185 10.32v-5c0-.777.627-1.405 1.4-1.405s1.4.628 1.4 1.405v5c0 .777-.627 1.404-1.4 1.404s-1.4-.627-1.4-1.404z"/></svg>
              </a>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-center sm:justify-start">
              <div className="flex items-center gap-4 group">
                <img 
                  src="https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781294261/Aspire-2025-2026-300x300_j62inc.webp" 
                  alt="Aspire Member Investor" 
                  className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="text-white/60 font-medium text-xs tracking-widest uppercase">
                  Aspire<br/>Member<br/>Investor
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between w-full text-xs font-sans text-neutral-500 uppercase tracking-widest gap-4 px-2">
        <span>© 2024 Pilsung ATA Martial Arts</span>
        <span>Greenwood, IN</span>
      </div>
    </footer>
  );
}
