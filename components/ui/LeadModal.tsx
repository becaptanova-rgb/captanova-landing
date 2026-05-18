"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModal } from "@/lib/modal-context";
import { X } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  country: z.string().optional(),
  message: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

type Step = "form" | "loading" | "success";

export default function LeadModal() {
  const { isOpen, closeModal } = useModal();
  const [step, setStep] = useState<Step>("form");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStep("loading");
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      setStep("success");
      setTimeout(() => {
        if (result.paymentLink) {
          window.location.href = result.paymentLink;
        }
      }, 2000);
    } catch {
      setStep("form");
      alert("Something went wrong. Please try again.");
    }
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => { setStep("form"); reset(); }, 400);
  };

  const inputClass = `w-full px-4 py-3 rounded-lg font-inter text-sm text-ice placeholder-ice-dim/40
    bg-white/[0.04] border border-white/10 transition-all duration-300
    focus:border-gold/50 focus:bg-gold/[0.04] outline-none`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            className="relative bg-obsidian-2 border border-gold/20 rounded-2xl p-8 md:p-10 w-full max-w-lg shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-ice-dim hover:text-ice transition-colors p-1"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <AnimatePresence mode="wait">
              {step === "form" && (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <h2 className="font-syne text-2xl md:text-3xl font-extrabold gradient-gold mb-1">Reserve Your Seat</h2>
                  <p className="text-ice-dim text-sm mb-7 leading-relaxed">
                    Join thousands transforming their mindset, discipline &amp; success. Seats are strictly limited.
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="block font-syne text-xs font-bold tracking-widest uppercase text-ice-dim mb-1.5">Full Name</label>
                      <input {...register("name")} className={inputClass} placeholder="Your full name" />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-syne text-xs font-bold tracking-widest uppercase text-ice-dim mb-1.5">Email</label>
                        <input {...register("email")} type="email" className={inputClass} placeholder="your@email.com" />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block font-syne text-xs font-bold tracking-widest uppercase text-ice-dim mb-1.5">Phone</label>
                        <input {...register("phone")} type="tel" className={inputClass} placeholder="+91 234 567 890" />
                      </div>
                    </div>
                    <div>
                      <label className="block font-syne text-xs font-bold tracking-widest uppercase text-ice-dim mb-1.5">Country</label>
                      <input {...register("country")} className={inputClass} placeholder="Your country" />
                    </div>
                    <div>
                      <label className="block font-syne text-xs font-bold tracking-widest uppercase text-ice-dim mb-1.5">
                        What&apos;s holding you back? <span className="normal-case opacity-60">(Optional)</span>
                      </label>
                      <textarea
                        {...register("message")}
                        className={`${inputClass} resize-none min-h-[80px]`}
                        placeholder="Share your biggest challenge..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 mt-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-obsidian font-syne text-sm font-extrabold tracking-widest uppercase rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(201,169,110,0.3)] active:translate-y-0"
                    >
                      Secure My Spot →
                    </button>
                    <p className="text-center text-ice-dim text-xs opacity-60">🔒 Secured by Razorpay · Instant confirmation</p>
                  </form>
                </motion.div>
              )}

              {step === "loading" && (
                <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-14 h-14 rounded-full border-2 border-gold/20 border-t-gold animate-spin mb-6" />
                  <p className="font-syne text-gold font-bold tracking-widest uppercase text-sm">Processing Enrollment...</p>
                  <p className="text-ice-dim text-xs mt-2 opacity-60">Preparing your secure payment</p>
                </motion.div>
              )}

              {step === "success" && (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 12, delay: 0.1 }}
                    className="text-5xl mb-5">✦</motion.div>
                  <h3 className="font-syne text-2xl font-extrabold gradient-gold mb-2">You&apos;re In!</h3>
                  <p className="text-ice-dim text-sm leading-relaxed mb-2">Redirecting to your secure payment gateway...</p>
                  <p className="text-ice-dim/50 text-xs">Your transformation begins now.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
