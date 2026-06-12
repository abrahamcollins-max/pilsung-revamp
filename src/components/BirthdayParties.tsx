import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function BirthdayParties() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;
    
    gsap.fromTo(contentRef.current, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 bg-transparent text-current relative z-10 tracking-wide font-sans">
      <div className="max-w-7xl mx-auto">
        <div ref={contentRef} className="rounded-sm overflow-hidden bg-[#111] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5 relative">
          
          <img 
            src="https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781292036/Pilsung-ATA-Birthday-Page-Header_thrasq.png" 
            alt="Birthday Parties at Pilsung" 
            className="w-full h-[40vh] md:h-[60vh] object-cover opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-end md:justify-center p-8 md:p-16 text-center">
            
            <span className="text-[#ED1C24] font-display text-xl md:text-2xl tracking-widest uppercase font-medium mb-2 drop-shadow-md">
              in Greenwood
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6 drop-shadow-lg">
              Birthday Parties @ <br/>
              Pilsung ATA Martial Arts
            </h2>
            
            <p className="text-xl md:text-2xl font-light text-white opacity-90 max-w-2xl mx-auto mb-10 drop-shadow-md">
              Exciting Birthday Parties and lots of Surprises!
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs tracking-[0.3em] text-white/70 uppercase">— Party With Us —</span>
              <button className="bg-[#ED1C24] hover:bg-[#cc181f] text-white font-display text-2xl font-bold uppercase tracking-wider py-4 px-10 rounded-sm transition-colors shadow-xl">
                Get Started
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
