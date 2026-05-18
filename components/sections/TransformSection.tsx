"use client";
import FadeUp from "@/components/ui/FadeUp";
import { useModal } from "@/lib/modal-context";

const cards = [
  { icon: "🧠", title: "Rewired Mindset", text: "Your mental operating system gets upgraded. Old limiting beliefs dissolve. A new identity takes root permanently." },
  { icon: "⚔️", title: "Warrior Discipline", text: "You'll follow through on commitments regardless of how you feel. Action becomes automatic. Excuses become foreign." },
  { icon: "🦁", title: "Fearless Confidence", text: "You'll walk into any room knowing your value. You'll speak with authority. You'll lead without hesitation." },
  { icon: "🎯", title: "Crystal Clarity", text: "Your direction becomes undeniable. You'll know exactly who you are, what you want, and how to get there." },
  { icon: "🔥", title: "Emotional Control", text: "Fear, doubt, and anxiety lose their grip. You respond to life's challenges from strength, not survival mode." },
  { icon: "👑", title: "Leadership Energy", text: "People sense your transformation. Your presence shifts. Others want to follow you. You become the standard." },
];

export default function TransformSection() {
  const { openModal } = useModal();
  return (
    <section id="transform" className="relative py-28 px-4 bg-obsidian-3">
      <div className="max-w-5xl mx-auto text-center">
        <FadeUp>
          <p className="font-syne text-xs font-bold tracking-[0.25em] uppercase text-gold mb-3">The Masterclass Promise</p>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            What Will <span className="gradient-gold">Change</span> After This
          </h2>
          <p className="text-ice-dim max-w-lg mx-auto mb-14 leading-relaxed">
            Not motivation. Not hype. Real, measurable shifts in how you think, feel, and operate.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {cards.map((c, i) => (
            <FadeUp key={c.title} delay={i * 0.08}>
              <div className="h-full text-left p-7 rounded-2xl glass-card relative overflow-hidden group transition-all duration-400 hover:border-gold/25 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="font-syne text-base font-extrabold text-gold-light mb-2">{c.title}</h3>
                <p className="text-ice-dim text-sm leading-relaxed">{c.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <button
            onClick={openModal}
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-sm font-syne text-sm font-extrabold tracking-widest uppercase text-obsidian overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(201,169,110,0.35)]"
            style={{ background: "linear-gradient(135deg,#8B6A3E,#C9A96E,#E8CC94)" }}
          >
            START MY TRANSFORMATION
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </FadeUp>
      </div>
    </section>
  );
}
