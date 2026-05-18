"use client";
import FadeUp from "@/components/ui/FadeUp";
import { useModal } from "@/lib/modal-context";

export default function FinalCTASection() {
  const { openModal } = useModal();
  return (
    <section id="final-cta" className="relative py-28 px-4 text-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 70%), #060810" }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(196,48,85,0.06)_0%,transparent_60%)]" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <FadeUp>
          <p className="font-syne text-xs font-bold tracking-[0.25em] uppercase text-gold mb-4">Your Moment Is Now</p>
          <h2 className="font-syne text-4xl md:text-6xl font-extrabold leading-[1.08] mb-6">
            Are You Ready To Stop{" "}
            <span className="text-ember">Watching</span>
            {" "}&amp; Start{" "}
            <span className="gradient-gold">Becoming?</span>
          </h2>
          <p className="text-ice-dim text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Every day you wait is another day you stay the same. The only difference between the person
            you are now and the person you&apos;re meant to be is a single decision.
          </p>
          <button
            onClick={openModal}
            className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-sm font-syne font-extrabold tracking-widest uppercase text-obsidian text-base overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(201,169,110,0.4)]"
            style={{ background: "linear-gradient(135deg,#8B6A3E,#C9A96E,#E8CC94)" }}
          >
            <span className="relative z-10">SIGN UP NOW — SECURE YOUR SEAT</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </button>
          <p className="text-ice-dim/40 text-xs mt-4">🔒 Secured by Razorpay · Limited spots remaining · Instant confirmation</p>
        </FadeUp>
      </div>
    </section>
  );
}
