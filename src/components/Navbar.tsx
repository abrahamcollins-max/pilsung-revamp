import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export function Navbar({ isReady }: { isReady: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out flex justify-center",
      scrolled ? "pt-4 px-4" : "pt-8 px-6",
      isReady ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
    )}
    style={{ transitionDelay: isReady ? "2000ms" : "0ms" }}>
      <nav className={cn(
        "w-full flex justify-between items-center transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled 
          ? "max-w-6xl bg-black/70 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)]" 
          : "max-w-7xl px-0 py-0"
      )}>
        <div className={cn("flex flex-col shrink-0 cursor-pointer transition-all duration-500 origin-left", scrolled ? "w-28 md:w-36" : "w-36 md:w-48")}>
          <img
            src="https://ik.imagekit.io/ofvhaiwug/White-Logo-300x189.webp"
            alt="Pilsung ATA Martial Arts"
            className="w-full h-auto object-contain drop-shadow-lg"
          />
        </div>
        
        <div className="hidden lg:flex items-center space-x-8 text-white font-sans text-xs tracking-widest font-bold uppercase transition-all">
          <a href="#how-it-works" className="relative group hover:text-white transition-colors py-2">
            How It Works
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </a>
          <a href="#about" className="relative group hover:text-white transition-colors py-2">
            About
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </a>
          <a href="#programs" className="relative group hover:text-white transition-colors py-2">
            Programs
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </a>
          <a href="#resources" className="relative group hover:text-white transition-colors py-2">
            Resources
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ED1C24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="bg-[#ED1C24] hover:bg-[#cc181f] text-white px-6 py-2.5 rounded-full text-xs tracking-widest uppercase font-bold transition-all shadow-[0_0_15px_rgba(237,28,36,0.3)] hover:shadow-[0_0_25px_rgba(237,28,36,0.5)]">
            Join Now
          </button>
        </div>

        <button className="lg:hidden text-white hover:text-[#ED1C24] transition-colors p-2">
          <Menu size={scrolled ? 24 : 28} />
        </button>
      </nav>
    </div>
  );
}

