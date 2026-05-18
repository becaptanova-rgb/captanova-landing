"use client";
import { motion } from "framer-motion";
import { useModal } from "@/lib/modal-context";

const stats = [
  { num: "6+", label: "Years" },
  { num: "10K+", label: "Lives Changed" },
  { num: "50+", label: "Countries" },
];

const mcItems = [
  { icon: "🎯", label: "Type", value: "Live Masterclass" },
  { icon: "⏱", label: "Duration", value: "2 Hours" },
  { icon: "💻", label: "Platform", value: "Online" },
  { icon: "📅", label: "Date", value: "Date TBA" },
  { icon: "🕐", label: "Time", value: "Time TBA" },
];

export default function HeroSection() {
  const { openModal } = useModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 pt-28 pb-16 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,169,110,0.13)_0%,transparent_60%),radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(196,48,85,0.09)_0%,transparent_50%)]" />
      <div className="grid-bg absolute inset-0 opacity-100" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full mb-8 animate-pulse-border"
          style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.35)" }}
        >
          <span className="text-gold text-xs">⟡</span>
          <span className="font-syne text-[11px] font-bold tracking-[0.22em] uppercase text-gold">
            Live Masterclass — Limited Seats
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-syne text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 gradient-white-gold"
        >
          Learn The Secret Of How<br />
          To Unlock Your<br />
          <span className="font-cormorant italic font-semibold">True Potential</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-ice-dim text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Thousands worldwide have taken these transformation programs and completely changed
          their mindset, discipline, confidence, and success.
        </motion.p>

        {/* Coach image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-[220px] h-[300px] mx-auto mb-6"
        >
          <div className="absolute inset-[-30px] rounded-full bg-[radial-gradient(ellipse,rgba(201,169,110,0.25)_0%,transparent_70%)] animate-breathe" />
          <div className="relative z-10 w-full h-full rounded-xl border border-gold/25 bg-gradient-to-br from-slate to-slate-2 flex items-center justify-center overflow-hidden">
            {/* Replace this div with <Image> once you have the coach photo */}
            <span className="text-7xl opacity-25" aria-label="Coach photo placeholder">👤</span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div className="absolute inset-[-14px] rounded-2xl border border-gold/12 animate-spin-slow pointer-events-none" />
        </motion.div>

        {/* Coach info */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-8"
        >
          <p className="font-cormorant text-3xl font-semibold text-gold-light">Coach Name Placeholder</p>
          <p className="text-ice-dim text-sm mt-1 tracking-wide">Mindset Coach · Copenhagen, Denmark</p>
          <div className="flex gap-8 justify-center mt-4">
            {stats.map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="font-syne text-2xl font-extrabold text-gold">{num}</div>
                <div className="text-ice-dim text-[11px] uppercase tracking-widest mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Masterclass card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="max-w-2xl mx-auto mb-10 rounded-2xl p-6 glass-gold"
        >
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {mcItems.map(({ icon, label, value }) => (
              <div key={label} className="text-center">
                <div className="text-2xl mb-1">{icon}</div>
                <div className="text-[10px] uppercase tracking-widest text-ice-dim">{label}</div>
                <div className="font-syne text-sm font-bold text-gold-light mt-0.5">{value}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[#F4769E] font-syne text-[11px] font-bold uppercase tracking-widest"
              style={{ background: "rgba(196,48,85,0.15)", border: "1px solid rgba(196,48,85,0.4)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4769E] animate-blink inline-block" />
              Limited Seats Available
            </span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col items-center gap-3"
        >
          <button
            onClick={openModal}
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-sm font-syne text-sm font-extrabold tracking-widest uppercase text-obsidian overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(201,169,110,0.35)]"
            style={{ background: "linear-gradient(135deg,#8B6A3E,#C9A96E,#E8CC94)" }}
          >
            <span className="relative z-10">SIGN UP NOW</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </button>
          <p className="text-ice-dim/50 text-xs">🔒 Secure enrollment · Instant confirmation</p>
        </motion.div>
      </div>
    </section>
  );
}
