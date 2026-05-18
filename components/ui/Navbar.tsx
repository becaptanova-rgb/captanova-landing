"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "@/lib/modal-context";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/80 backdrop-blur-2xl border-b border-gold/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="font-syne text-xl font-extrabold tracking-widest gradient-gold">
        CAPTANOVA
      </div>
      <button
        onClick={openModal}
        className="px-5 py-2.5 border border-gold/60 text-gold font-syne text-xs font-bold tracking-widest uppercase rounded-sm transition-all duration-300 hover:bg-gold hover:text-obsidian"
      >
        Join Masterclass
      </button>
    </motion.nav>
  );
}
