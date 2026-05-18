"use client";
import FadeUp from "@/components/ui/FadeUp";

const testimonials = [
  { name: "Alex M.", role: "Entrepreneur · UK", quote: "I went from complete paralysis to closing my first major deal in 60 days. The mindset shift was immediate and lasting." },
  { name: "Priya S.", role: "Executive · India", quote: "I stopped overthinking and started executing. My team noticed the change before I even told anyone about this program." },
  { name: "Marcus D.", role: "Coach · USA", quote: "I've done every program out there. Nothing touched my identity the way this did. The difference between knowing and being." },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 px-4 bg-gradient-to-b from-midnight to-obsidian-2">
      <div className="max-w-5xl mx-auto text-center">
        <FadeUp>
          <p className="font-syne text-xs font-bold tracking-[0.25em] uppercase text-gold mb-3">Real Results</p>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Hear It From <span className="font-cormorant italic font-semibold">Them</span>
          </h2>
          <p className="text-ice-dim max-w-lg mx-auto mb-14 leading-relaxed">
            These aren&apos;t actors. These are real people who chose to change.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1}>
              <div className="h-full text-left p-6 rounded-2xl glass-card transition-all duration-400 hover:border-gold/20 hover:-translate-y-1 group">
                {/* Video placeholder */}
                <div className="w-full h-40 rounded-xl mb-5 flex items-center justify-center relative overflow-hidden cursor-pointer"
                  style={{ background: "linear-gradient(135deg,#1A2035,#242B40)" }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-ember/5" />
                  <div className="relative z-10 w-13 h-13 rounded-full flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(201,169,110,0.2)", border: "2px solid rgba(201,169,110,0.5)", width: 52, height: 52 }}>
                    ▶
                  </div>
                  <div className="absolute bottom-2 right-2 text-[10px] text-gold/50 font-syne uppercase tracking-widest">Video Testimonial</div>
                </div>
                <div className="text-gold text-sm mb-2">★★★★★</div>
                <p className="font-syne text-sm font-bold text-ice">{t.name}</p>
                <p className="text-gold text-[11px] uppercase tracking-widest mb-3">{t.role}</p>
                <p className="text-ice-dim text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
