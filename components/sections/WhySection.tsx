"use client";
import FadeUp from "@/components/ui/FadeUp";

const painPoints = [
  { icon: "🌀", title: "Mentally Stuck", text: "You feel trapped in the same patterns, same thoughts, same results. Nothing changes no matter how hard you try." },
  { icon: "👁", title: "Watching Others Win", text: "You watch people less talented than you succeed while you stay in the same place. The gap grows every day." },
  { icon: "🪞", title: "Zero Confidence", text: "You second-guess every decision. You shrink in social situations. You know you're capable of more but can't act." },
  { icon: "🔁", title: "Self-Sabotage", text: "Every time you get close to a breakthrough, something inside pulls you back. You destroy your own progress." },
  { icon: "⏳", title: "No Discipline", text: "You have goals but no system. You start strong and fade. Your potential is buried under procrastination." },
  { icon: "🌫", title: "Zero Clarity", text: "You don't know who you truly are or what you actually want. Confusion keeps you running in circles." },
];

const outcomes = [
  "Unshakeable Clarity", "Bulletproof Confidence", "Iron Discipline", "Elite Self-Control",
  "Strategic Thinking", "Natural Leadership", "Mental Resilience", "Limitless Focus",
];

export default function WhySection() {
  return (
    <section id="why" className="relative py-28 px-4 bg-gradient-to-b from-obsidian-2 to-midnight">
      <div className="max-w-5xl mx-auto text-center">
        <FadeUp>
          <p className="font-syne text-xs font-bold tracking-[0.25em] uppercase text-gold mb-3">The Reality Check</p>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Why Most People Stay <span className="text-ember">Stuck</span> Forever
          </h2>
          <p className="text-ice-dim max-w-xl mx-auto mb-14 leading-relaxed">Be honest with yourself. Which of these sounds familiar?</p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {painPoints.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.08}>
              <div className="h-full p-6 rounded-xl text-left glass-card transition-all duration-400 group hover:border-ember/30 hover:bg-ember/5 hover:-translate-y-1 cursor-default">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-syne text-sm font-bold text-ice mb-2">{item.title}</h3>
                <p className="text-ice-dim text-sm leading-relaxed">{item.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <p className="text-gold/40 text-3xl mb-5">↓</p>
          <p className="font-cormorant italic text-2xl text-ice-dim mb-8 font-light">
            This masterclass rewires everything. Here&apos;s what takes over instead:
          </p>
        </FadeUp>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {outcomes.map((o, i) => (
            <FadeUp key={o} delay={i * 0.06}>
              <div className="flex items-center gap-2.5 p-3 rounded-xl glass-gold transition-all duration-300 hover:bg-gold/10 hover:border-gold/40 hover:translate-x-1 group">
                <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0 shadow-[0_0_8px_rgba(201,169,110,0.5)]" />
                <span className="font-syne text-sm font-bold text-gold-light">{o}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
