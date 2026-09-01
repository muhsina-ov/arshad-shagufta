import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

interface DoorOpenerProps {
  onOpen?: () => void;
}

export function DoorOpener({ onOpen }: DoorOpenerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    if (onOpen) {
      onOpen();
    }
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1.3, delay: 0.9, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#04150f] select-none perspective-[1400px]"
        >
          {/* Background Texture & Aurora */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="/images/hero-bg.jpg"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover opacity-40 scale-105"
            />
            <div className="absolute inset-0 bg-radial from-transparent via-[#03130d]/80 to-[#020b08]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[75vh] w-[75vw] max-w-[700px] rounded-full bg-gold/12 blur-[140px] animate-pulse" />
          </div>

          {/* Floating Corner Florals Matching Hero */}
          <img
            src="/images/roses.png"
            alt=""
            aria-hidden
            className="pointer-events-none absolute -left-10 -top-8 w-48 sm:w-64 opacity-90 drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] z-30 animate-[float-slow_9s_ease-in-out_infinite]"
          />
          <img
            src="/images/daisies.png"
            alt=""
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -right-10 w-44 sm:w-56 opacity-85 drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] z-30 animate-[float-slow_11s_ease-in-out_infinite_1s]"
          />

          {/* LEFT DOOR */}
          <motion.div
            initial={{ rotateY: 0, x: 0 }}
            exit={{
              rotateY: -105,
              x: "-35%",
              transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
            }}
            style={{ transformOrigin: "left center" }}
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#03160e] via-[#07281d] to-[#0b3527] border-r-2 border-gold/70 shadow-[15px_0_40px_rgba(0,0,0,0.95)] flex items-center justify-end overflow-hidden"
          >
            {/* Islamic Damask & Geometric Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.07]" />

            {/* Arched Mehrab Outer Frame - Left */}
            <div className="absolute inset-3 sm:inset-6 rounded-l-[2.5rem] border-2 border-r-0 border-gold/60 p-3 sm:p-5 flex flex-col justify-between">
              {/* Inner Hairline Arch */}
              <div className="absolute inset-2 sm:inset-3.5 rounded-l-[2rem] border border-r-0 border-dashed border-gold/35" />

              {/* Top Islamic Arched Mehrab Motif */}
              <div className="relative h-28 sm:h-44 w-full flex items-start justify-end pr-2 pt-2">
                <svg
                  className="w-24 sm:w-40 h-24 sm:h-40 text-gold/30"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M100 0 C60 0, 40 40, 0 60 C40 80, 60 100, 100 100" />
                  <path d="M100 15 C70 15, 55 45, 20 60 C55 75, 70 85, 100 85" strokeDasharray="3 3" />
                </svg>
              </div>

              {/* Central Islamic Jali Lattice Arch */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-28 sm:w-44 h-72 sm:h-96 border-y-2 border-l-2 border-gold/45 rounded-l-full flex items-center justify-center bg-gradient-to-l from-gold/10 to-transparent">
                <div className="w-18 sm:w-32 h-56 sm:h-76 border border-dashed border-gold/30 rounded-l-full flex items-center justify-center">
                  <div className="w-10 sm:w-20 h-40 sm:h-56 border border-gold/20 rounded-l-full" />
                </div>
              </div>

              {/* Bottom Decorative Corner */}
              <div className="relative h-20 w-full flex items-end justify-start pl-1 pb-1">
                <div className="h-10 w-10 sm:h-14 sm:w-14 border-b-2 border-l-2 border-gold/60 rounded-bl-2xl" />
              </div>
            </div>

            {/* Left Door Handle & Brass Knocker */}
            <div className="relative z-20 mr-2 sm:mr-5 flex flex-col items-center gap-3">
              {/* Ornate Gold Studs */}
              <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-gradient-to-b from-[#fff6db] via-[#e5c178] to-[#9e6f1d] shadow-[0_0_8px_rgba(229,193,120,0.6)] border border-gold" />

              {/* Traditional Mughal Door Handle */}
              <div className="relative flex flex-col items-center">
                <div className="h-28 sm:h-36 w-3 sm:w-4 rounded-full bg-gradient-to-b from-[#cf9e46] via-[#fff6db] to-[#9e6f1d] shadow-[0_0_20px_rgba(229,193,120,0.6)] border border-gold/90" />
                <div className="absolute top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-gold bg-[#07281d] shadow-md flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-gold" />
                </div>
              </div>

              <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-gradient-to-b from-[#fff6db] via-[#e5c178] to-[#9e6f1d] shadow-[0_0_8px_rgba(229,193,120,0.6)] border border-gold" />
            </div>
          </motion.div>

          {/* RIGHT DOOR */}
          <motion.div
            initial={{ rotateY: 0, x: 0 }}
            exit={{
              rotateY: 105,
              x: "35%",
              transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
            }}
            style={{ transformOrigin: "right center" }}
            className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#03160e] via-[#07281d] to-[#0b3527] border-l-2 border-gold/70 shadow-[-15px_0_40px_rgba(0,0,0,0.95)] flex items-center justify-start overflow-hidden"
          >
            {/* Islamic Damask & Geometric Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.07]" />

            {/* Arched Mehrab Outer Frame - Right */}
            <div className="absolute inset-3 sm:inset-6 rounded-r-[2.5rem] border-2 border-l-0 border-gold/60 p-3 sm:p-5 flex flex-col justify-between">
              {/* Inner Hairline Arch */}
              <div className="absolute inset-2 sm:inset-3.5 rounded-r-[2rem] border border-l-0 border-dashed border-gold/35" />

              {/* Top Islamic Arched Mehrab Motif */}
              <div className="relative h-28 sm:h-44 w-full flex items-start justify-start pl-2 pt-2">
                <svg
                  className="w-24 sm:w-40 h-24 sm:h-40 text-gold/30"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M0 0 C40 0, 60 40, 100 60 C60 80, 40 100, 0 100" />
                  <path d="M0 15 C30 15, 45 45, 80 60 C45 75, 30 85, 0 85" strokeDasharray="3 3" />
                </svg>
              </div>

              {/* Central Islamic Jali Lattice Arch */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-28 sm:w-44 h-72 sm:h-96 border-y-2 border-r-2 border-gold/45 rounded-r-full flex items-center justify-center bg-gradient-to-r from-gold/10 to-transparent">
                <div className="w-18 sm:w-32 h-56 sm:h-76 border border-dashed border-gold/30 rounded-r-full flex items-center justify-center">
                  <div className="w-10 sm:w-20 h-40 sm:h-56 border border-gold/20 rounded-r-full" />
                </div>
              </div>

              {/* Bottom Decorative Corner */}
              <div className="relative h-20 w-full flex items-end justify-end pr-1 pb-1">
                <div className="h-10 w-10 sm:h-14 sm:w-14 border-b-2 border-r-2 border-gold/60 rounded-br-2xl" />
              </div>
            </div>

            {/* Right Door Handle & Brass Knocker */}
            <div className="relative z-20 ml-2 sm:ml-5 flex flex-col items-center gap-3">
              {/* Ornate Gold Studs */}
              <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-gradient-to-b from-[#fff6db] via-[#e5c178] to-[#9e6f1d] shadow-[0_0_8px_rgba(229,193,120,0.6)] border border-gold" />

              {/* Traditional Mughal Door Handle */}
              <div className="relative flex flex-col items-center">
                <div className="h-28 sm:h-36 w-3 sm:w-4 rounded-full bg-gradient-to-b from-[#cf9e46] via-[#fff6db] to-[#9e6f1d] shadow-[0_0_20px_rgba(229,193,120,0.6)] border border-gold/90" />
                <div className="absolute top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-gold bg-[#07281d] shadow-md flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-gold" />
                </div>
              </div>

              <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-gradient-to-b from-[#fff6db] via-[#e5c178] to-[#9e6f1d] shadow-[0_0_8px_rgba(229,193,120,0.6)] border border-gold" />
            </div>
          </motion.div>

          {/* CENTER ROYAL MEDALLION & INVITATION OPENER */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{
              scale: 1.18,
              opacity: 0,
              filter: "blur(8px)",
              transition: { duration: 0.7, ease: "easeOut" },
            }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative z-40 flex flex-col items-center justify-center text-center px-4 max-w-sm sm:max-w-md w-full"
          >
            {/* 8-Point Islamic Gold Star Crest */}
            <div className="relative mb-4 sm:mb-6">
              <div className="absolute -inset-6 rounded-full bg-gold/25 blur-2xl animate-pulse" />
              <svg
                className="h-7 w-7 sm:h-8 sm:w-8 text-gold drop-shadow-[0_0_12px_rgba(229,193,120,0.8)] mx-auto mb-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M12 2L14.5 8.5L21 9.5L16 14L17.5 20.5L12 17L6.5 20.5L8 14L3 9.5L9.5 8.5L12 2Z"
                  fill="currentColor"
                  fillOpacity="0.35"
                />
              </svg>

              {/* Calligraphy Header */}
              <p className="font-arabic text-2xl sm:text-4xl text-gold-bright drop-shadow-[0_2px_15px_rgba(247,230,184,0.6)] leading-relaxed">
                بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
              </p>
              <p className="mt-1 font-display text-[0.65rem] sm:text-xs uppercase tracking-[0.45em] font-semibold text-gold-soft">
                Save The Date
              </p>
            </div>

            {/* Royal Gateway Card Seal */}
            <div className="relative w-full rounded-3xl border-2 border-gold/70 bg-gradient-to-b from-[#faf5eb] via-[#f7e6b8] to-[#eedcba] p-6 sm:p-8 text-center shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(229,193,120,0.35)] overflow-hidden">
              {/* Inner Double Gold Frame */}
              <div className="pointer-events-none absolute inset-2.5 sm:inset-3 rounded-2xl border border-[#b88c3a]/60" />
              <div className="pointer-events-none absolute inset-3.5 sm:inset-4 rounded-xl border border-dashed border-[#b88c3a]/40" />

              {/* Corner Rosettes */}
              <div className="pointer-events-none absolute top-3.5 left-3.5 text-[#b88c3a]">❖</div>
              <div className="pointer-events-none absolute top-3.5 right-3.5 text-[#b88c3a]">❖</div>
              <div className="pointer-events-none absolute bottom-3.5 left-3.5 text-[#b88c3a]">❖</div>
              <div className="pointer-events-none absolute bottom-3.5 right-3.5 text-[#b88c3a]">❖</div>

              {/* Content */}
              <div className="relative z-10 py-1">
                <span className="inline-block rounded-full bg-[#1a382d] px-5 py-0.5 font-display text-[0.65rem] sm:text-xs font-semibold tracking-[0.3em] uppercase text-gold-bright shadow-sm mb-3">
                  Wedding Invitation
                </span>

                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold italic leading-[1.05] text-[#1a382d] drop-shadow-sm">
                  Dr. Shagufta Ali
                </h1>

                {/* Medallion Divider */}
                <div className="my-2.5 sm:my-3 flex items-center justify-center">
                  <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#b88c3a] to-transparent" />
                  <div className="mx-2.5 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[#b88c3a] bg-gradient-to-b from-[#faf5eb] to-[#eedcba] shadow-sm">
                    <span className="font-display italic text-xs sm:text-sm font-bold text-[#7a2335]">
                      weds
                    </span>
                  </div>
                  <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#b88c3a] to-transparent" />
                </div>

                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold italic leading-[1.05] text-[#1a382d] drop-shadow-sm">
                  Arshad Khan
                </h2>

                <p className="mt-2 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6721]">
                  Thursday · 5 November 2026
                </p>
              </div>
            </div>

            {/* Glowing Royal "Open Invitation" Button */}
            <motion.button
              onClick={handleOpen}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(229, 193, 120, 0.8), 0 15px 30px rgba(0,0,0,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 sm:mt-7 group relative inline-flex items-center justify-center gap-3 rounded-full border-2 border-gold bg-gradient-to-r from-[#c4943f] via-[#fff2c8] to-[#b8822d] px-8 sm:px-10 py-3.5 sm:py-4 font-body text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#072219] shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(229,193,120,0.5)] transition-all cursor-pointer overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform ease-in-out" />

              <Sparkles className="h-4 w-4 text-[#072219] animate-spin" style={{ animationDuration: "5s" }} />
              <span className="relative z-10 font-bold">Open Invitation</span>
              <Sparkles className="h-4 w-4 text-[#072219] animate-spin" style={{ animationDuration: "5s" }} />
            </motion.button>

            <p className="mt-3 text-[0.65rem] sm:text-xs text-gold-soft font-light tracking-[0.25em] uppercase drop-shadow animate-pulse">
              Tap to enter &amp; experience the celebration
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DoorOpener;
