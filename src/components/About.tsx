export function About() {
  return (
    <section id="about" className="py-32 md:py-48 px-6 bg-transparent text-current max-w-7xl mx-auto relative z-10 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 order-2 lg:order-1">
          <div className="space-y-4">
             <span className="font-display text-primary tracking-[0.2em] uppercase text-sm font-semibold">Our Story</span>
             <h2 className="font-display text-5xl md:text-7xl font-bold tracking-normal uppercase leading-[1.1]">
              Welcome to <br />
              <span className="text-primary mt-2 block">Pilsung.</span>
             </h2>
          </div>
          
          <div className="text-lg md:text-xl text-current opacity-80 font-light leading-relaxed space-y-6 max-w-2xl">
            <p>
              Established in 2003 in Greenwood, IN, we are more than just a martial arts school. 
              We are a family-focused Leadership Academy dedicated to cultivating confidence, focus, and respect.
            </p>
            <p>
              The term <strong className="font-medium opacity-100 text-white">"Pilsung"</strong> translates to <strong className="font-medium opacity-100 text-white">"Personal Victory."</strong> 
              We believe that true victory is found not in defeating others, but in mastering yourself.
            </p>
            <p className="pl-6 border-l-2 border-primary italic">
              Whether you are 3 or 65+, our doors are open. We've built an inviting, permission-based environment where you can feel at home, at ease, and ready to grow. 
            </p>
          </div>

          <div className="pt-4">
            <button className="border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all px-8 py-4 rounded-full uppercase tracking-widest text-sm font-medium">
              Read Our Full Story
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://res.cloudinary.com/dxyaxgbjl/image/upload/v1781297388/pilsung_about_dnk2tu.webp" 
              alt="Martial arts training" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-display text-3xl font-medium uppercase tracking-wide">Building confident leaders since 2003.</p>
            </div>
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary rounded-full blur-3xl opacity-20 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
