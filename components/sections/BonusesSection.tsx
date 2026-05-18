"use client";
import FadeUp from "@/components/ui/FadeUp";
import { useModal } from "@/lib/modal-context";

const bonuses = [
  { icon: "📘", title: "Mindset Mastery PDF", text: "Core frameworks high performers use to dominate their mental game. 40+ pages of pure strategy.", value: "Value: Priceless" },
  { icon: "🗓", title: "90-Day Habit Blueprint", text: "The exact system to engineer discipline from scratch. Daily structure that builds unbreakable habits.", value: "Value: Exclusive" },
  { icon: "💬", title: "Live Q&A Session", text: "Ask your specific questions directly. Get personalized clarity from the coach in real time.", value: "Value: Personal" },
  { icon: "🔐", title: "Private Community Access", text: "Join a curated community of high-level thinkers committed to growth. Accountability and energy.", value: "Value: Ongoing" },
  { icon: "⚡", title: "Confidence Exercises", text: "A practical toolkit of daily confidence-building exercises. Tested on thousands worldwide.", value: "Value: Practical" },
  { icon: "📋", title: "Action Plan Workbook", text: "Your step-by-step personalized transformation roadmap. Built to implement everything from day one.", value: "Value: Your Map" },
];

export default function BonusesSection() {
  const { openModal } = useModal();
  return (
    <section id="bonuses" className="relative py-28 px-4 bg-gradient-to-b from-obsidian-2 to-midnight">
      <div className="max-w-5xl mx-auto text-center">
        <FadeUp>
          <p className="font-syne text-xs font-bold tracking-[0.25em] uppercase text-gold mb-3">Exclusive Inclusions</p>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            What You Get <span className="gradient-gold">Included</span>
          </h2>
          <p className="text-ice-dim max-w-lg mx-auto mb-14 leading-relaxed">
            Beyond the 2-hour masterclass, you receive these premium resources to accelerate your transformation.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {bonuses.map((b, i) => (
            <FadeUp key={b.title} delay={i * 0.08}>
              <div className="relative h-full text-left p-7 rounded-2xl glass-gold transition-all duration-400 hover:bg-gold/10 hover:border-gold/35 hover:-translate-y-1">
                <span className="absolute -top-3 right-5 px-3 py-1 rounded-full font-syne text-[10px] font-extrabold uppercase tracking-widest text-obsidian"
                  style={{ background: "linear-gradient(135deg,#8B6A3E,#C9A96E)" }}>
                  Free Bonus
                </span>
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-syne text-base font-extrabold text-gold-light mb-2">{b.title}</h3>
                <p className="text-ice-dim text-sm leading-relaxed mb-3">{b.text}</p>
                <p className="font-syne text-xs text-gold/60 uppercase tracking-widest">{b.value}</p>
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
            CLAIM ALL BONUSES
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </FadeUp>
      </div>
    </section>
  );
}
