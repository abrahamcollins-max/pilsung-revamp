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
              <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.114.198v3.425c-.283-.05-.759-.082-1.362-.082-2.735 0-3.159 1.16-3.159 3.143v1.83h4.646l-.844 3.667h-3.802v8.94H9.101z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#FF1A1A] flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M12.015 11.23c-.276.776.11 1.652.855 1.968l5.894 2.513c.749.32 1.58-.05 1.854-.825l1.107-3.136c.277-.78-.11-1.654-.855-1.967l-5.893-2.514c-.749-.32-1.581.05-1.855.826l-1.107 3.135zm-2.022 4.12l-2.316 3.04c-.466.61-.347 1.533.296 2.035l2.585 2.026c.636.502 1.558.417 2.03-.178l2.316-3.04c.465-.61.346-1.532-.296-2.034l-2.586-2.025c-.636-.503-1.558-.418-2.03.177zm-1.83 5.34l3.15-1.106c.036-.013.064-.035.093-.053l4.636-2.7c.677-.393.948-1.25.626-1.954l-1.39-3.023c-.31-.676-.983-.872-1.666-.453l-4.577 2.808c-.702.43-.883 1.25-.436 1.944l1.565 2.536zm-3.036-.9l3.04 2.317c.61.465 1.533.346 2.034-.297l2.026-2.585c.502-.636.417-1.558-.178-2.03l-3.04-2.316c-.61-.466-1.533-.347-2.035.295l-2.025 2.586c-.503.636-.418 1.558.177 2.03zm-1.83-5.34L.91 8.56c-.82-1.921-.194-4.094 1.488-5.17l5.228-1.83L5.807 5.64c-.287.643-.075 1.398.544 1.716.208.106.425.155.638.155.454 0 .89-.25 1.09-.697l2.645-5.918c.314-.707.037-1.516-.62-1.85-2.02-1.04-4.22-.38-5.4.92-1.6 1.83-1.32 4.49-.66 6.012l3.228 7.21c.277.625.992.83 1.597.466l6.814-4.108z"/></svg>
              </a>
            </div>

            <div className="pt-6 border-t border-neutral-200 flex items-center justify-center sm:justify-start">
              <div className="flex items-center gap-4 group">
                <img 
                  src="https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781294261/Aspire-2025-2026-300x300_j62inc.webp" 
                  alt="Aspire Member Investor" 
                  className="h-32 w-32 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="text-neutral-500 font-medium text-sm tracking-widest uppercase">
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
