import FadeUp from "@/components/ui/FadeUp";

const credentials = [
  "6+ years of elite mindset coaching",
  "10,000+ lives transformed across 50+ countries",
  "Expert in self-mastery, discipline & peak performance",
  "Featured in leading global transformation communities",
];

export default function CoachSection() {
  return (
    <section id="coach" className="relative py-28 px-4 bg-obsidian">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Coach image */}
          <FadeUp>
            <div className="relative">
              <div className="w-full aspect-[3/4] rounded-2xl flex items-center justify-center text-8xl opacity-20"
                style={{ background: "linear-gradient(135deg,#1A2035,#242B40)", border: "1px solid rgba(201,169,110,0.15)" }}>
                {/* Replace with <Image src="/coach.jpg" ... /> */}
                👤
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gold/8 to-transparent" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl"
                style={{ background: "rgba(201,169,110,0.15)" }} />
            </div>
          </FadeUp>

          {/* Story */}
          <FadeUp delay={0.15}>
            <p className="font-syne text-xs font-bold tracking-[0.25em] uppercase text-gold mb-3">Meet Your Coach</p>
            <h2 className="font-syne text-3xl md:text-4xl font-extrabold mb-5 gradient-gold">
              The Mind Behind The Movement
            </h2>
            <p className="text-ice-dim text-sm leading-relaxed mb-4">
              Born and raised in Copenhagen, Denmark, your coach has spent over 6 years studying the
              architecture of human potential. Not from books — from the field, from real transformation,
              from thousands of conversations with broken and brilliant people.
            </p>
            <p className="text-ice-dim text-sm leading-relaxed mb-4">
              After hitting rock bottom personally — struggling with identity, purpose, and direction —
              they built themselves from the ground up using the exact methods taught in this masterclass.
            </p>
            <p className="text-ice-dim text-sm leading-relaxed mb-8">
              Today, they work with high performers, entrepreneurs, and everyday people across 50+ countries,
              helping them break the mental prison that keeps them small.
            </p>
            <div className="flex flex-col gap-3">
              {credentials.map((c) => (
                <div key={c} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 shadow-[0_0_6px_rgba(201,169,110,0.6)]" />
                  <span className="text-ice-dim text-sm">{c}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
