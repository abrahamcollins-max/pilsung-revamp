import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const instructors = [
  {
    name: "Master Myers",
    role: "Master Instructor",
    degree: "6th Degree Black Belt",
    image: "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781293894/Rosemarie-Myers-214x300_ocla4z.webp"
  },
  {
    name: "Brian Myers",
    role: "Business Manager",
    degree: "5th Degree Black Belt",
    image: "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781293893/Brian-Myers-214x300_stx9wo.webp"
  },
  {
    name: "David Sears",
    role: "Certified Instructor",
    degree: "2nd Degree Black Belt",
    image: "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781293893/Sears_e6xmux.png"
  },
  {
    name: "William Corn",
    role: "Instructor Trainee",
    degree: "2nd Degree Black Belt",
    image: "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781293893/Will-1-200x300_whu1nu.webp"
  },
  {
    name: "Tristan Davis",
    role: "Instructor Trainee",
    degree: "1st Degree Black Belt",
    image: "https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781293894/Tristan-quov54yhrq6xgg0eu8dcrpp2c7l32o4ktx0c1lezug_jvpyp8.png"
  }
];

export function Instructors() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 40%",
        end: "bottom 30%",
        onEnter: () => gsap.to("body", { backgroundColor: "#ffffff", color: "#111111", duration: 0.8, overwrite: "auto" }),
        onLeaveBack: () => gsap.to("body", { backgroundColor: "#000000", color: "#ffffff", duration: 0.8, overwrite: "auto" }),
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 relative z-10 transition-colors duration-700 bg-transparent text-current">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-[#ED1C24] text-xl tracking-[0.2em] uppercase font-bold text-center mb-20">
          Meet Our Team
        </h2>
        
        {/* Master Instructor First */}
        <div className="flex justify-center mb-16">
          <div className="group flex flex-col items-center max-w-sm w-full">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden mb-6 shadow-2xl border-[6px] border-white ring-4 ring-neutral-200 group-hover:ring-[#ED1C24]/30 transition-all duration-500 bg-neutral-100 relative">
              <img 
                src={instructors[0].image} 
                alt={instructors[0].name}
                className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out filter contrast-125"
              />
            </div>
            <h3 className="font-display font-bold text-3xl md:text-5xl text-current uppercase tracking-wider mb-2 text-center drop-shadow-sm">
              {instructors[0].name}
            </h3>
            <span className="text-[#ED1C24] font-bold uppercase tracking-widest text-sm md:text-lg text-center mb-1">
              {instructors[0].role}
            </span>
            <span className="text-current opacity-60 font-sans uppercase tracking-widest text-xs md:text-sm text-center">
              {instructors[0].degree}
            </span>
          </div>
        </div>

        {/* Other Instructors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center">
          {instructors.slice(1).map((instructor, i) => (
            <div 
              key={i}
              className="group flex flex-col items-center w-full max-w-[200px]"
            >
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mb-5 shadow-xl border-4 border-white ring-2 ring-neutral-200 group-hover:ring-neutral-300 transition-all duration-500 bg-neutral-100 relative">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out filter contrast-125"
                />
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-current uppercase tracking-wider mb-1 text-center">
                {instructor.name}
              </h3>
              <span className="text-[#ED1C24] font-bold uppercase tracking-widest text-xs mb-1 text-center">
                {instructor.role}
              </span>
              <span className="text-current opacity-60 font-sans uppercase tracking-widest text-[10px] text-center">
                {instructor.degree}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
