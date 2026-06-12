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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 auto-rows-fr">
          {instructors.map((instructor, i) => (
            <div 
              key={i}
              className={`group relative overflow-hidden rounded-xl bg-neutral-950 border border-black/5 hover:border-black/20 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgba(237,28,36,0.2)] transition-all duration-700 ${
                i === 0 ? "md:col-span-2 md:row-span-2 min-h-[450px] lg:min-h-[600px]" : "col-span-1 row-span-1 min-h-[350px] lg:min-h-0"
              }`}
            >
              <img 
                src={instructor.image} 
                alt={instructor.name}
                className={`absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-105 ${i === 0 ? 'object-top lg:object-[center_10%]' : 'object-top'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
              
              <div className="absolute bottom-0 left-0 w-full flex flex-col justify-end p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <h3 className={`font-display font-medium text-white uppercase tracking-widest mb-1 ${i === 0 ? 'text-4xl md:text-6xl drop-shadow-lg' : 'text-2xl md:text-3xl'}`}>
                  {instructor.name}
                </h3>
                <p className={`text-[#ED1C24] font-bold uppercase tracking-widest ${i === 0 ? 'text-sm md:text-lg mb-2' : 'text-xs md:text-sm mb-1'} drop-shadow-md`}>
                  {instructor.role}
                </p>
                <div className="h-[2px] w-8 bg-white/30 my-2 group-hover:w-16 group-hover:bg-[#ED1C24] transition-all duration-500"></div>
                <p className="text-white/70 font-sans uppercase tracking-widest text-[10px] md:text-xs">
                  {instructor.degree}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
