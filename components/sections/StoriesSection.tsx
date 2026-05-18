import FadeUp from "@/components/ui/FadeUp";

const stories = [
  {
    initials: "JK", name: "James K.", role: "Sales Director · Dubai",
    before: "Crippling self-doubt, missed promotions",
    after: "VP promotion, 3× revenue target",
    quote: "I almost didn't sign up. Thought I knew enough. The program showed me I was operating at 30% of my capacity.",
  },
  {
    initials: "SR", name: "Sofia R.", role: "Founder · Spain",
    before: "Afraid to launch, procrastinating for years",
    after: "Launched business, first clients in week 1",
    quote: "The fear didn't go away. I just stopped letting it drive. That distinction changed everything for me.",
  },
  {
    initials: "AT", name: "Amir T.", role: "Student → Entrepreneur · Egypt",
    before: "No direction, living on autopilot",
    after: "Clear vision, launched first venture at 22",
    quote: "I found out who I actually am and what I'm actually capable of. At 22. That's priceless.",
  },
];

export default function StoriesSection() {
  return (
    <section id="stories" className="relative py-28 px-4 bg-obsidian-3">
      <div className="max-w-5xl mx-auto text-center">
        <FadeUp>
          <p className="font-syne text-xs font-bold tracking-[0.25em] uppercase text-gold mb-3">Transformation Evidence</p>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold leading-tight mb-14">
            Before &amp; After <span className="font-cormorant italic font-semibold">Stories</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stories.map((s, i) => (
            <FadeUp key={s.name} delay={i * 0.1}>
              <div className="h-full text-left p-6 rounded-2xl glass-card transition-all duration-400 hover:border-gold/20 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-syne font-extrabold text-sm text-obsidian flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#8B6A3E,#C9A96E)" }}>
                    {s.initials}
                  </div>
                  <div>
                    <p className="font-syne text-sm font-bold text-ice">{s.name}</p>
                    <p className="text-gold text-[11px] uppercase tracking-widest">{s.role}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="p-2.5 rounded-lg" style={{ background: "rgba(196,48,85,0.08)", border: "1px solid rgba(196,48,85,0.2)" }}>
                    <p className="text-[#F4769E] font-syne text-[10px] font-bold uppercase tracking-widest mb-1">Before</p>
                    <p className="text-[#F4769E] text-xs leading-relaxed">{s.before}</p>
                  </div>
                  <div className="p-2.5 rounded-lg" style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.2)" }}>
                    <p className="text-gold-light font-syne text-[10px] font-bold uppercase tracking-widest mb-1">After</p>
                    <p className="text-gold-light text-xs leading-relaxed">{s.after}</p>
                  </div>
                </div>
                <p className="text-ice-dim text-sm leading-relaxed italic">&ldquo;{s.quote}&rdquo;</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
