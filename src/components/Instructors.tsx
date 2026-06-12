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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[#ED1C24] font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4 block">Our Experts</span>
          <h2 className="font-display text-4xl md:text-6xl text-current uppercase tracking-widest font-black">
            Meet The Team
          </h2>
          <div className="w-24 h-1 bg-[#ED1C24] mx-auto mt-8 mb-4"></div>
        </div>
        
        <div className="flex flex-col items-center">
          {/* Master Myers */}
          <div className="mb-16 md:mb-20 w-full max-w-[320px]">
            <div className="group flex flex-col items-center group relative cursor-pointer">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900 border border-neutral-200/50 shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative">
                <img 
                  src={instructors[0].image} 
                  alt={instructors[0].name}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-700" />
              </div>
              <div className="text-center mt-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display font-medium text-3xl md:text-4xl text-current uppercase tracking-widest mb-1">
                  {instructors[0].name}
                </h3>
                <p className="text-[#ED1C24] font-bold uppercase tracking-widest text-sm mb-2 drop-shadow-sm">
                  {instructors[0].role}
                </p>
                <div className="h-[2px] w-8 mx-auto bg-neutral-300 group-hover:w-16 group-hover:bg-[#ED1C24] transition-all duration-500 mb-2"></div>
                <p className="text-neutral-500 font-sans uppercase tracking-widest text-[10px] md:text-xs">
                  {instructors[0].degree}
                </p>
              </div>
            </div>
          </div>
          
          {/* Rest of the team */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full max-w-5xl justify-items-center">
            {instructors.slice(1).map((instructor, i) => (
              <div key={i} className="group flex flex-col items-center relative cursor-pointer w-full max-w-[260px]">
                <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900 border border-neutral-200/50 shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-700" />
                </div>
                <div className="text-center mt-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 w-full">
                  <h3 className="font-display font-medium text-xl md:text-2xl text-current uppercase tracking-widest mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-[#ED1C24] font-bold uppercase tracking-widest text-xs mb-2">
                    {instructor.role}
                  </p>
                  <div className="h-[2px] w-6 mx-auto bg-neutral-300 group-hover:w-10 group-hover:bg-[#ED1C24] transition-all duration-500 mb-2"></div>
                  <p className="text-neutral-500 font-sans uppercase tracking-widest text-[10px]">
                    {instructor.degree}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
