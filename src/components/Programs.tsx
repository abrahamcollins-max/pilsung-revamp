import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { cn } from "../lib/utils";

const programs = [
  {
    id: "preschool",
    title: "Preschool Martial Arts",
    subtitle: "in Greenwood",
    description: "The youngest group in our Kids Martial Arts programs, ATA Tigers is the perfect blend of gross motor skill building and fun! Our early learners (preschool age) program gives your little one the tools to surpass their development expectations. We’re dedicated to your child’s success and growth!",
    image: "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781291792/Preschool_wrkrop.webp",
    align: "left"
  },
  {
    id: "kids",
    title: "Kids Martial Arts",
    subtitle: "in Greenwood",
    description: "A strong blend of modern self defense and tradition! Our kids martial arts program will give your child the tools to protect themselves. In addition, we will equip them with skills that give them an unfair advantage in school and in life. We’re dedicated to your child’s success!",
    image: "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781291792/kidsma_dlnifv.webp",
    align: "right"
  },
  {
    id: "teens",
    title: "Teen & Adult Martial Arts",
    subtitle: "in Greenwood",
    description: "Let us help you achieve your fitness goals, while you learn a wide array of life saving martial arts techniques perfect for real world application!",
    image: "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781291792/adult-martial-arts-classes-7_jlmagr.webp",
    align: "left"
  },
  {
    id: "krav",
    title: "Krav Maga (Ages 18+ Only)",
    subtitle: "in Greenwood",
    description: "Transform your entire body into a self-defense machine, through the development of a skill set that could save your life!",
    image: "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781291792/krav1_ip8bnb.webp",
    align: "right"
  },
  {
    id: "yoga",
    title: "Yoga with Master Myers",
    subtitle: "in Greenwood",
    description: "Improve your health, enhance your athleticism, suffer less pain… Let Master Myers help you enjoy all of these things through improved mobility!",
    image: "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781291792/YogawithMasterMyers_nghagu.webp",
    align: "left"
  }
];

export function Programs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || !mediaContainerRef.current) return;

    // Pin the media container right in the center of the viewport
    const pinTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: mediaContainerRef.current,
      pinSpacing: false,
    });

    // Setup triggers for each text block to update active index
    const sectionTriggers = programs.map((_, index) => {
      return ScrollTrigger.create({
        trigger: sectionRefs.current[index],
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) {
            setActiveIndex(index);
          }
        }
      });
    });

    return () => {
      pinTrigger.kill();
      sectionTriggers.forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="programs" ref={containerRef} className="relative w-full bg-transparent py-24 md:py-0 text-current">
      
      {/* Pinned Media Container (Desktop & Tablet) */}
      <div 
        ref={mediaContainerRef} 
        className="hidden md:flex absolute top-0 left-0 w-full h-screen items-center justify-center pointer-events-none z-[1]"
      >
        <div className="relative aspect-video w-[600px] lg:w-[800px] rounded-sm overflow-hidden shadow-2xl transition-all duration-700 ease-in-out">
          {programs.map((program, index) => (
            <img
              key={program.id}
              src={program.image}
              alt={program.title}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out",
                index === activeIndex ? "opacity-100" : "opacity-0"
              )}
            />
          ))}
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Scrolling Text Blocks */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        {programs.map((program, index) => (
          <div 
            key={program.id}
            ref={el => sectionRefs.current[index] = el}
            className={cn(
              "min-h-screen flex items-center justify-center md:block pt-24 md:pt-[40vh]",
              index === programs.length - 1 ? "md:pb-[40vh]" : ""
            )}
          >
            <div 
              className={cn(
                "max-w-md bg-black/90 backdrop-blur-md p-10 rounded-sm shadow-2xl pointer-events-auto border border-white/5",
                program.align === "left" ? "md:mr-auto" : "md:ml-auto"
              )}
            >
              {/* Mobile media (visible only on small screens) */}
              <div className="md:hidden w-full aspect-video rounded-sm overflow-hidden mb-6 shadow-xl">
                <img src={program.image} className="w-full h-full object-cover" alt={program.title} />
              </div>
              
              <div className="mb-6">
                <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mb-1 text-white">
                  {program.title}
                </h3>
                <span className="text-[#ED1C24] font-display text-xl uppercase tracking-widest font-medium">
                  {program.subtitle}
                </span>
              </div>

              <p className="text-lg font-sans font-light leading-relaxed opacity-80 text-white mb-8">
                {program.description}
              </p>

              <div className="flex flex-col items-start gap-2">
                <span className="text-xs tracking-[0.2em] text-neutral-500 uppercase font-sans">— Discover —</span>
                <button className="flex items-center gap-2 group text-white">
                  <span className="font-display uppercase text-xl font-medium tracking-wider group-hover:text-[#ED1C24] transition-colors">
                    Learn More
                  </span>
                  <div className="w-8 h-[2px] bg-white group-hover:bg-[#ED1C24] group-hover:w-12 transition-all duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
