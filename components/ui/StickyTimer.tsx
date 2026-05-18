"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "@/lib/modal-context";

export default function StickyTimer() {
  const [seconds, setSeconds] = useState(15 * 60);
  const { openModal } = useModal();

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, type: "spring", damping: 20 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 md:gap-5 px-4 md:px-6 py-3 rounded-full bg-obsidian/90 backdrop-blur-2xl border border-gold/25 shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(201,169,110,0.05)] whitespace-nowrap"
    >
      <div className="hidden sm:block">
        <p className="font-syne text-[10px] font-bold tracking-[0.18em] uppercase text-ice-dim leading-none">
          Enrollment Closing Soon
        </p>
      </div>

      <div className="flex items-center gap-1">
        <span className="font-syne text-lg font-extrabold text-gold tabular-nums min-w-[28px] text-center">{m}</span>
        <span className="text-gold/50 font-light pb-0.5">:</span>
        <span className="font-syne text-lg font-extrabold text-gold tabular-nums min-w-[28px] text-center">{s}</span>
      </div>

      <button
        onClick={openModal}
        className="px-4 md:px-5 py-2 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-obsidian font-syne text-[11px] font-extrabold tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_16px_rgba(201,169,110,0.3)] active:scale-95"
      >
        Reserve Your Seat
      </button>
    </motion.div>
  );
}
