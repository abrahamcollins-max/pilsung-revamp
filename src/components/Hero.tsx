import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { Star, CheckCircle } from "lucide-react";

function FloatingInput({ label, type = "text", ...props }: any) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-black/40 border border-white/20 text-white px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#ED1C24] transition-all font-medium rounded-sm backdrop-blur-sm shadow-inner"
        {...props}
      />
      <label className={`absolute left-4 transition-all duration-200 pointer-events-none text-white/60 ${active ? "text-[10px] top-2 text-[#ED1C24] font-bold uppercase tracking-wider" : "text-base top-3.5"}`}>
        {label}
      </label>
    </div>
  );
}

const testimonials = [
  { text: "Amazing adult martial arts & kids martial arts programs!", author: "Sarah M.", focus: "Kids & Adults" },
  { text: "My daughter's focus and confidence has skyrocketed since joining.", author: "James T.", focus: "Kids Martial Arts" },
  { text: "A truly welcoming, family-focused environment with top instructors.", author: "Emily R.", focus: "Family Program" },
];

const gridImages = [
  "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781297388/marquee-1_grmu9s.webp",
  "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781297360/marquee-3_s0ohlv.webp",
  "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781297361/marquee-4_c5whfe.webp",
  "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781297387/marquee-5_horryt.webp",
  "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781291792/adult-martial-arts-classes-7_jlmagr.webp",
  "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781297388/marquee-6_ku8jpo.webp",
  "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781297388/marquee-7_bbz1ea.webp",
  "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781291792/kidsma_dlnifv.webp",
  "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781291792/Preschool_wrkrop.webp",
];

const mainImage = "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781291792/adult-martial-arts-classes-7_jlmagr.webp";

export function Hero({ isReady }: { isReady: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const topContentRef = useRef<HTMLDivElement>(null);
  const bottomContentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const montageRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 4000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isReady || !titleRef.current) return;

    let text: SplitType;
    
    let ctx = gsap.context(() => {
      text = new SplitType(titleRef.current!, { types: "words,chars" });
      const tl = gsap.timeline();

      gsap.set(bgRef.current, { opacity: 0 });
      gsap.set(titleRef.current, { opacity: 1 });
      gsap.set(text.chars, { opacity: 0, y: 30, rotateX: -45 });
      
      const images = montageRef.current?.querySelectorAll("img");
      
      if (images && images.length === 9) {
        const gap = 110;
        const gridOffsets = [
          { x: -gap, y: -gap },
          { x: 0,    y: -gap },
          { x: gap,  y: -gap },
          { x: -gap, y: 0 },
          { x: 0,    y: 0 },
          { x: gap,  y: 0 },
          { x: -gap, y: gap },
          { x: 0,    y: gap },
          { x: gap,  y: gap },
        ];

        images.forEach((img, i) => {
          gsap.set(img, {
            left: "50%",
            top: "50%",
            xPercent: -50 + gridOffsets[i].x,
            yPercent: -50 + gridOffsets[i].y,
            scale: 0.8,
            rotation: 0,
          });
        });

        tl.to(images, {
          opacity: 1,
          scale: 1,
          duration: 1.0,
          ease: "power2.out"
        }, 0.5);

        const gridCompleteTime = 1.5;

        tl.to(montageRef.current, {
          x: () => (Math.random() - 0.5) * 60,
          y: () => (Math.random() - 0.5) * 60,
          duration: 2.0,
          ease: "sine.inOut"
        }, 0.5);

        const zoomStartTime = gridCompleteTime + 0.8;

        tl.to(montageRef.current, {
          x: 0,
          y: 0,
          duration: 1.5,
          ease: "power3.inOut"
        }, zoomStartTime);

        images.forEach((img, i) => {
          if (i === 4) return;
          tl.to(img, {
            xPercent: -50 + gridOffsets[i].x * 1.5,
            yPercent: -50 + gridOffsets[i].y * 1.5,
            opacity: 0,
            duration: 1.2,
            ease: "power3.inOut"
          }, zoomStartTime);
        });

        const scaleToFill = Math.max(window.innerWidth / (window.innerWidth * 0.35), window.innerHeight / (window.innerWidth * 0.35 * 0.5625)) * 1.8;

        tl.to(images[4], {
          scale: scaleToFill,
          opacity: 0,
          duration: 1.5,
          ease: "power4.inOut"
        }, zoomStartTime);

        tl.to(bgRef.current, {
          opacity: 0.3,
          duration: 1,
          ease: "power2.out"
        }, zoomStartTime + 0.5);

        const revealTime = zoomStartTime + 1.0;

        tl.to(topContentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, revealTime);

        tl.to(text.chars, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.015,
          duration: 0.6,
          ease: "power3.out",
        }, revealTime + 0.2);
        
        tl.to(bottomContentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, revealTime + 0.4);

        tl.to(formRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, revealTime + 0.5);
      }
    }, containerRef);

    return () => {
      if (text) text.revert();
      ctx.revert();
    };
  }, [isReady]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#050505] flex items-center justify-center pt-32 pb-20 md:pt-36 md:pb-16"
    >
      {/* Main Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${mainImage})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 pointer-events-none" />

      {/* Montage Grid layer */}
      <div ref={montageRef} className="absolute inset-0 z-10 pointer-events-none px-4 md:px-0">
        {gridImages.map((src, i) => (
          <img 
            key={i}
            src={src}
            alt={`Montage ${i}`}
            className="absolute opacity-0 w-[80vw] md:w-[35vw] p-1.5 md:p-2 bg-[#050505] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] rounded-sm object-cover aspect-video"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        
        {/* Left Column: Text & Hero Info */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-4">
          <div ref={topContentRef} className="flex flex-wrap gap-8 items-center mb-2" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
              </div>
              <div>
                <div className="flex text-[#FABB05]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div className="text-white text-xs font-bold font-sans tracking-wider mt-0.5">4.9 RATING</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 text-white rounded-full flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#1877F2]"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
               </div>
              <div>
                <div className="flex text-[#FABB05]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div className="text-white text-xs font-bold font-sans tracking-wider mt-0.5">5.0 RATING</div>
              </div>
            </div>
          </div>

          <h1 
            ref={titleRef}
            className="font-display font-bold text-6xl sm:text-7xl lg:text-[7rem] tracking-normal uppercase leading-[0.85] text-[#ED1C24] pt-2"
            style={{ transformStyle: "preserve-3d", opacity: 0 }}
          >
            Pilsung ATA <br />
            Martial Arts <br />
            Greenwood
          </h1>
          
          <div ref={bottomContentRef} className="pt-4 relative min-h-[140px]" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className={`transition-all duration-1000 ${currentTestimonial === idx ? 'opacity-100 translate-y-0 relative z-10' : 'opacity-0 translate-y-4 absolute top-0 left-0 pointer-events-none'}`}
              >
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-sans font-medium max-w-2xl leading-snug line-clamp-3">
                  "{t.text}"
                </h2>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 rounded-full bg-[#ED1C24] flex items-center justify-center text-white font-bold text-sm uppercase shadow-lg">{t.author[0]}</div>
                  <div className="flex flex-col">
                     <span className="text-white/90 text-sm font-bold uppercase tracking-wider">{t.author}</span>
                     <span className="text-[#ED1C24] text-[10px] uppercase tracking-widest">{t.focus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Web Special Form */}
        <div ref={formRef} className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <div className="bg-white/5 backdrop-blur-3xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden rounded-xl relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
            <div className="bg-gradient-to-b from-[#ED1C24]/90 to-[#b81016]/90 border-b border-white/20 px-6 py-8 text-center text-white backdrop-blur-md relative z-10">
              <h3 className="font-display text-[1.75rem] leading-[1.1] font-semibold tracking-wide uppercase drop-shadow-lg">
                View Our Schedule <br/> &amp; Gain Access To Our <br/> Exclusive Web Special
              </h3>
            </div>
            
            <form className="p-8 space-y-4 font-sans bg-transparent relative z-10" onSubmit={handleFormSubmit}>
              <FloatingInput label="First Name" />
              <FloatingInput label="Last Name" />
              <FloatingInput label="Email Address" type="email" />
              <FloatingInput label="Mobile Phone" type="tel" />
              
              <div className="relative">
                <select defaultValue="" className="w-full bg-black/40 border border-white/20 text-white px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#ED1C24] transition-all appearance-none cursor-pointer font-medium rounded-sm backdrop-blur-sm shadow-inner [&>option]:bg-[#111] [&>option]:text-white">    
                  <option value="" disabled hidden></option>
                  <option value="kids">Kids Martial Arts</option>
                  <option value="adults">Adult Martial Arts</option>
                  <option value="teens">Teen Martial Arts</option>
                </select>
                <label className="absolute left-4 top-2 text-[10px] text-white/60 font-bold uppercase tracking-wider pointer-events-none transition-all duration-200">
                  Program of Interest
                </label>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-white"></div>
              </div>
              
              <button type="submit" className="w-full bg-[#ED1C24] hover:bg-[#cc181f] border border-white/20 text-white font-display text-2xl font-bold uppercase tracking-wider py-4 mt-2 transition-colors flex items-center justify-center gap-2 rounded-sm shadow-[0_0_20px_rgba(237,28,36,0.4)] hover:shadow-[0_0_30px_rgba(237,28,36,0.6)]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Get Started Today
              </button>
              
              <p className="text-[0.6rem] text-neutral-400 mt-6 text-center leading-relaxed">
                By opting in, you agree to receive periodic text messages &amp; emails from Pilsung ATA Martial Arts. Your information will never be shared. Reply STOP to cancel. Standard rates may apply. View our <a href="#" className="underline hover:text-white transition-colors">Terms of Service &amp; Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>

      </div>
      
      {/* Toast Notification */}
      <div className={`fixed bottom-8 right-8 lg:bottom-12 lg:right-12 z-[100] transition-all duration-500 pointer-events-none shadow-2xl ${toastVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
        <div className="bg-white text-black px-6 py-4 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-4 border border-black/5">
          <div className="bg-[#e6f4ea] p-2 rounded-full hidden sm:block">
            <CheckCircle className="text-[#34A853] w-6 h-6" />
          </div>
          <div className="flex flex-col pr-4">
            <span className="font-bold font-sans uppercase tracking-widest text-[#ED1C24] text-xs mb-0.5">Success!</span>
            <span className="font-medium text-sm text-neutral-800">Thanks! We'll be in touch.</span>
          </div>
        </div>
      </div>

      {/* Ribbon Ticker */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
      <div className="absolute bottom-0 left-0 w-full bg-[#ED1C24] text-white py-3 overflow-hidden z-30 flex uppercase font-display text-lg tracking-widest font-bold shadow-[0_-10px_30px_rgba(237,28,36,0.3)]">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="mx-8">All Introductory Programs are just $29!</span>
          <span className="mx-8 opacity-50">•</span>
          <span className="mx-8">1-on-1 Family Meeting included!</span>
          <span className="mx-8 opacity-50">•</span>
          <span className="mx-8">2 Weeks of incredible classes!</span>
          <span className="mx-8 opacity-50">•</span>
          <span className="mx-8">All Introductory Programs are just $29!</span>
          <span className="mx-8 opacity-50">•</span>
          <span className="mx-8">1-on-1 Family Meeting included!</span>
          <span className="mx-8 opacity-50">•</span>
          <span className="mx-8">2 Weeks of incredible classes!</span>
          <span className="mx-8 opacity-50">•</span>
        </div>
      </div>
    </section>
  );
}
