import { Star } from "lucide-react";

interface Review {
  id: string;
  headline: string;
  author: string;
  date: string;
  rating: number;
}

const reviewsData: Review[] = [
  {
    id: "melissa",
    headline: "The leadership and structures of the classes really keeps my son focused and determined to succeed each session.",
    author: "Melissa Stecher",
    date: "December 21, 2021",
    rating: 5,
  },
  {
    id: "danielle",
    headline: "The instructors take time to answer questions and to help when anyone has problems. Thank you!",
    author: "Danielle Willson",
    date: "December 21, 2019",
    rating: 5,
  },
  {
    id: "mike",
    headline: "Great place. Great Staff! It's more than just punches and kicks. It's stuff that will help you in life",
    author: "Mike Black",
    date: "April 2, 2014",
    rating: 5,
  },
  {
    id: "maria",
    headline: "Very passionate about helping others with self defense and living a healthy lifestyle. They are big on giving back to the community & local schools.",
    author: "Maria Sicon",
    date: "October 12, 2021",
    rating: 5,
  }
];

export function Reviews() {
  return (
    <section className="py-24 bg-neutral-50 text-neutral-900 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#ED1C24] font-sans text-sm tracking-[0.25em] uppercase font-extrabold mb-3 block">
            What Our Family Says
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-none">
            Student & Parent Reviews
          </h2>
          <div className="w-12 h-1 bg-[#ED1C24] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviewsData.map((review) => (
            <div 
              key={review.id} 
              className="bg-white rounded-lg border border-neutral-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.02)] p-8 md:p-10 flex flex-col justify-between hover:border-[#ED1C24]/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-500 relative"
              id={`review-card-${review.id}`}
            >
              <div className="flex flex-col gap-6">
                {/* Stars & Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 bg-neutral-50 px-2.5 py-1.5 rounded-md border border-neutral-100/50">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-[#FFB800] text-[#FFB800] stroke-[1.5]" />
                    ))}
                  </div>
                  <span className="text-neutral-100 font-serif text-6xl select-none leading-none pointer-events-none -mt-4">
                    “
                  </span>
                </div>

                {/* Bold Quote Text */}
                <blockquote className="font-sans font-bold text-lg md:text-xl text-neutral-900 leading-relaxed pr-2">
                  "{review.headline}"
                </blockquote>
              </div>

              {/* Author & Date Footer */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-extrabold text-base text-neutral-900">
                    {review.author}
                  </h4>
                  <p className="text-[11px] text-[#ED1C24] font-bold tracking-wider uppercase mt-1">
                    Verified PILSUING Parent
                  </p>
                </div>
                <span className="text-xs text-neutral-500 font-semibold tracking-wider font-mono">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
