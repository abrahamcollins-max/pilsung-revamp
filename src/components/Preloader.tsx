import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });

    // Subtle scale in for logo
    gsap.fromTo(".preloader-logo", 
      { scale: 0.95, opacity: 0, filter: "blur(4px)" },
      { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power2.out" }
    );

    // Animate progress to 100
    tl.to(
      { value: 0 },
      {
        value: 100,
        duration: 2.5,
        ease: "power2.inOut",
        onUpdate: function () {
          const val = Math.round(this.targets()[0].value);
          setProgress(val);
          if (barRef.current) {
            gsap.set(barRef.current, { scaleX: val / 100 });
          }
        },
      }
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-black text-white"
    >
      {/* Premium Loading Bar */}
      <div className="w-full h-[3px] bg-white/5 origin-left">
        <div ref={barRef} className="h-full bg-[#ED1C24] origin-left scale-x-0" />
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-56 md:w-72 overflow-hidden mb-12 preloader-logo">
            <img 
                src="https://ik.imagekit.io/ofvhaiwug/White-Logo-300x189.webp" 
                alt="Pilsung ATA Martial Arts Logo" 
                className="w-full h-auto object-contain"
            />
        </div>
      </div>

      <div className="p-8 md:p-12 flex justify-between items-end border-t border-white/5 bg-black">
        <div className="font-sans text-[10px] md:text-sm tracking-[0.3em] uppercase text-neutral-500 font-medium overflow-hidden">
          <div className="animate-pulse">Loading Experience</div>
        </div>
        <div className="font-display text-6xl md:text-8xl font-bold tracking-tight leading-none text-white overflow-hidden flex items-end">
          <span className="inline-block w-[3ch] text-right">{progress}</span>
          <span className="text-[#ED1C24] text-xl md:text-3xl mb-1 md:mb-2 ml-1">%</span>
        </div>
      </div>
    </div>
  );
}
