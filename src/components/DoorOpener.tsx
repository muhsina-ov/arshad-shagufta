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
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#221404] via-[#5c3e10] via-[#9e7527] to-[#deb55e] border-r-2 border-[#fff3cc] shadow-[25px_0_50px_rgba(0,0,0,0.95),inset_-10px_0_35px_rgba(255,240,180,0.3)] flex items-center justify-end overflow-hidden"
          >
            {/* Subtle Luxury Damask Watermark Texture (Soft & Delicate) */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-[0.14] mix-blend-color-dodge" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="clean-damask-left" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path
                    d="M24,0 C14,10 14,20 24,24 C34,20 34,10 24,0 Z M24,24 C14,28 14,38 24,48 C34,38 34,28 24,24 Z M0,24 C10,14 20,14 24,24 C20,34 10,34 0,24 Z M24,24 C28,14 38,14 48,24 C38,34 28,34 24,24 Z"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="0.9"
                  />
                  <circle cx="24" cy="24" r="2" fill="#ffffff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#clean-damask-left)" />
            </svg>

            {/* Depth Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#140b02]/50 via-transparent to-[#140b02]/60 pointer-events-none" />

            {/* CLEAN ARCHITECTURAL PANELS - LEFT */}
            <div className="absolute inset-3 sm:inset-6 rounded-l-[2.5rem] border-2 border-r-0 border-[#fff0c2]/80 p-2 sm:p-4 flex flex-col justify-between shadow-[inset_0_0_25px_rgba(255,225,120,0.2)]">
              {/* Inner Hairline Trim */}
              <div className="absolute inset-1.5 sm:inset-2.5 rounded-l-[2.2rem] border border-r-0 border-dashed border-[#fff8e1]/60 pointer-events-none" />

              {/* TOP ARCH PANEL: Clean Elegant Mehrab Arch */}
              <div className="relative h-28 sm:h-40 w-full rounded-tl-[2rem] border-b-2 border-[#fff0c2]/70 bg-gradient-to-br from-[#ffe79a]/20 via-[#9e7527]/10 to-transparent p-3 overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,0.3)]">
                <svg
                  className="w-full h-full text-[#fff8e1]/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                  viewBox="0 0 100 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M100 0 C65 0 45 25 30 45 C15 65 5 75 0 80" />
                  <path d="M100 12 C72 12 55 32 42 48 C28 64 18 72 10 80" strokeDasharray="3 3" strokeWidth="1" />
                  {/* Subtle Hanging Chandelier Accent */}
                  <path d="M75 0 L75 22 M75 22 L70 30 L80 30 Z M75 30 L75 36" strokeWidth="1.4" />
                  <circle cx="75" cy="38" r="2" fill="currentColor" />
                </svg>
              </div>

              {/* CENTER MAIN PANEL: Recessed Gold Panel */}
              <div className="relative my-2.5 flex-1 rounded-l-2xl border-y-2 border-l-2 border-[#fff0c2]/70 bg-gradient-to-l from-[#ffe28a]/20 via-[#7a5315]/15 to-[#2a1704]/25 flex items-center justify-end p-3 overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.4)]">
                {/* Soft Center Arc Halo */}
                <div className="w-24 sm:w-36 h-44 sm:h-60 border-y-2 border-l-2 border-[#fff0c2]/60 rounded-l-full flex items-center justify-end pr-2 bg-gradient-to-l from-[#fff0c2]/15 to-transparent">
                  <div className="w-14 sm:w-22 h-28 sm:h-40 border border-dashed border-[#fff8e1]/50 rounded-l-full" />
                </div>
              </div>

              {/* BOTTOM PANEL: Clean Square Dado Panel */}
              <div className="relative h-20 sm:h-28 w-full rounded-bl-[2rem] border-t-2 border-[#fff0c2]/70 bg-gradient-to-tr from-[#ffe79a]/20 via-[#9e7527]/10 to-transparent p-2 sm:p-3 overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,0.3)] flex items-center justify-start pl-3">
                <div className="h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-l-2 border-[#fff0c2]/80 rounded-bl-xl flex items-center justify-center">
                  <div className="h-3 w-3 sm:h-5 sm:w-5 border border-[#fff8e1]/70 rotate-45" />
                </div>
              </div>
            </div>

            {/* LEFT DOOR HANDLE & BRASS KNOCKER */}
            <div className="relative z-20 mr-2 sm:mr-4 flex flex-col items-center gap-3">
              {/* Ornate Gold Stud */}
              <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-gradient-to-b from-[#ffffff] via-[#fce8a2] to-[#7a4e0c] shadow-[0_0_12px_rgba(255,240,180,0.9),0_2px_5px_rgba(0,0,0,0.6)] border border-white flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[#4a2e05]" />
              </div>

              {/* Traditional Mughal Door Handle */}
              <div className="relative flex flex-col items-center">
                {/* Fluted Gold Handle */}
                <div className="h-32 sm:h-44 w-3.5 sm:w-4.5 rounded-full bg-gradient-to-b from-[#fffbeb] via-[#f7d67f] via-[#ffffff] to-[#694009] shadow-[0_0_20px_rgba(255,235,160,0.85),0_4px_12px_rgba(0,0,0,0.7)] border border-white/90" />

                {/* Knocker Ring */}
                <div className="absolute top-1/2 -translate-y-1/2 h-9 w-9 sm:h-12 sm:w-12 rounded-full border-2 border-[#fff9e6] bg-gradient-to-b from-[#4a3410] to-[#170e01] shadow-[0_4px_10px_rgba(0,0,0,0.8)] flex items-center justify-center">
                  <div className="h-3.5 w-3.5 sm:h-5 sm:w-5 rounded-full bg-gradient-to-b from-[#ffffff] via-[#fedb80] to-[#916216] shadow-[0_0_6px_rgba(255,235,160,0.9)]" />
                </div>
              </div>

              {/* Ornate Gold Stud */}
              <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-gradient-to-b from-[#ffffff] via-[#fce8a2] to-[#7a4e0c] shadow-[0_0_12px_rgba(255,240,180,0.9),0_2px_5px_rgba(0,0,0,0.6)] border border-white flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[#4a2e05]" />
              </div>
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
            className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#221404] via-[#5c3e10] via-[#9e7527] to-[#deb55e] border-l-2 border-[#fff3cc] shadow-[-25px_0_50px_rgba(0,0,0,0.95),inset_10px_0_35px_rgba(255,240,180,0.3)] flex items-center justify-start overflow-hidden"
          >
            {/* Subtle Luxury Damask Watermark Texture (Soft & Delicate) */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-[0.14] mix-blend-color-dodge" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="clean-damask-right" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path
                    d="M24,0 C14,10 14,20 24,24 C34,20 34,10 24,0 Z M24,24 C14,28 14,38 24,48 C34,38 34,28 24,24 Z M0,24 C10,14 20,14 24,24 C20,34 10,34 0,24 Z M24,24 C28,14 38,14 48,24 C38,34 28,34 24,24 Z"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="0.9"
                  />
                  <circle cx="24" cy="24" r="2" fill="#ffffff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#clean-damask-right)" />
            </svg>

            {/* Depth Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#140b02]/50 via-transparent to-[#140b02]/60 pointer-events-none" />

            {/* CLEAN ARCHITECTURAL PANELS - RIGHT */}
            <div className="absolute inset-3 sm:inset-6 rounded-r-[2.5rem] border-2 border-l-0 border-[#fff0c2]/80 p-2 sm:p-4 flex flex-col justify-between shadow-[inset_0_0_25px_rgba(255,225,120,0.2)]">
              {/* Inner Hairline Trim */}
              <div className="absolute inset-1.5 sm:inset-2.5 rounded-r-[2.2rem] border border-l-0 border-dashed border-[#fff8e1]/60 pointer-events-none" />

              {/* TOP ARCH PANEL: Clean Elegant Mehrab Arch */}
              <div className="relative h-28 sm:h-40 w-full rounded-tr-[2rem] border-b-2 border-[#fff0c2]/70 bg-gradient-to-bl from-[#ffe79a]/20 via-[#9e7527]/10 to-transparent p-3 overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,0.3)]">
                <svg
                  className="w-full h-full text-[#fff8e1]/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                  viewBox="0 0 100 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M0 0 C35 0 55 25 70 45 C85 65 95 75 100 80" />
                  <path d="M0 12 C28 12 45 32 58 48 C72 64 82 72 90 80" strokeDasharray="3 3" strokeWidth="1" />
                  {/* Subtle Hanging Chandelier Accent */}
                  <path d="M25 0 L25 22 M25 22 L20 30 L30 30 Z M25 30 L25 36" strokeWidth="1.4" />
                  <circle cx="25" cy="38" r="2" fill="currentColor" />
                </svg>
              </div>

              {/* CENTER MAIN PANEL: Recessed Gold Panel */}
              <div className="relative my-2.5 flex-1 rounded-r-2xl border-y-2 border-r-2 border-[#fff0c2]/70 bg-gradient-to-r from-[#ffe28a]/20 via-[#7a5315]/15 to-[#2a1704]/25 flex items-center justify-start p-3 overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.4)]">
                {/* Soft Center Arc Halo */}
                <div className="w-24 sm:w-36 h-44 sm:h-60 border-y-2 border-r-2 border-[#fff0c2]/60 rounded-r-full flex items-center justify-start pl-2 bg-gradient-to-r from-[#fff0c2]/15 to-transparent">
                  <div className="w-14 sm:w-22 h-28 sm:h-40 border border-dashed border-[#fff8e1]/50 rounded-r-full" />
                </div>
              </div>

              {/* BOTTOM PANEL: Clean Square Dado Panel */}
              <div className="relative h-20 sm:h-28 w-full rounded-br-[2rem] border-t-2 border-[#fff0c2]/70 bg-gradient-to-tl from-[#ffe79a]/20 via-[#9e7527]/10 to-transparent p-2 sm:p-3 overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,0.3)] flex items-center justify-end pr-3">
                <div className="h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-r-2 border-[#fff0c2]/80 rounded-br-xl flex items-center justify-center">
                  <div className="h-3 w-3 sm:h-5 sm:w-5 border border-[#fff8e1]/70 rotate-45" />
                </div>
              </div>
            </div>

            {/* RIGHT DOOR HANDLE & BRASS KNOCKER */}
            <div className="relative z-20 ml-2 sm:ml-4 flex flex-col items-center gap-3">
              {/* Ornate Gold Stud */}
              <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-gradient-to-b from-[#ffffff] via-[#fce8a2] to-[#7a4e0c] shadow-[0_0_12px_rgba(255,240,180,0.9),0_2px_5px_rgba(0,0,0,0.6)] border border-white flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[#4a2e05]" />
              </div>

              {/* Traditional Mughal Door Handle */}
              <div className="relative flex flex-col items-center">
                {/* Fluted Gold Handle */}
                <div className="h-32 sm:h-44 w-3.5 sm:w-4.5 rounded-full bg-gradient-to-b from-[#fffbeb] via-[#f7d67f] via-[#ffffff] to-[#694009] shadow-[0_0_20px_rgba(255,235,160,0.85),0_4px_12px_rgba(0,0,0,0.7)] border border-white/90" />

                {/* Knocker Ring */}
                <div className="absolute top-1/2 -translate-y-1/2 h-9 w-9 sm:h-12 sm:w-12 rounded-full border-2 border-[#fff9e6] bg-gradient-to-b from-[#4a3410] to-[#170e01] shadow-[0_4px_10px_rgba(0,0,0,0.8)] flex items-center justify-center">
                  <div className="h-3.5 w-3.5 sm:h-5 sm:w-5 rounded-full bg-gradient-to-b from-[#ffffff] via-[#fedb80] to-[#916216] shadow-[0_0_6px_rgba(255,235,160,0.9)]" />
                </div>
              </div>

              {/* Ornate Gold Stud */}
              <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-gradient-to-b from-[#ffffff] via-[#fce8a2] to-[#7a4e0c] shadow-[0_0_12px_rgba(255,240,180,0.9),0_2px_5px_rgba(0,0,0,0.6)] border border-white flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[#4a2e05]" />
              </div>
            </div>
          </motion.div>

          {/* BOTTOM ACTION — OPEN INVITATION */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{
              scale: 1.1,
              opacity: 0,
              filter: "blur(6px)",
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center text-center px-4 w-full max-w-xs sm:max-w-sm"
          >
            {/* Soft Contrast Glow */}
            <div className="absolute -inset-6 bg-radial from-[#04150f]/90 via-[#04150f]/60 to-transparent blur-xl pointer-events-none" />

            {/* Open Invitation Button */}
            <motion.button
              onClick={handleOpen}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 45px rgba(255, 230, 150, 0.95), 0 15px 35px rgba(0,0,0,0.9)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#fff7de] bg-gradient-to-r from-[#d9aa48] via-[#fff9e6] to-[#b37f26] px-8 sm:px-10 py-3.5 sm:py-4 font-body text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#072219] shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_30px_rgba(247,214,120,0.7)] transition-all cursor-pointer overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform ease-in-out" />

              <Sparkles className="h-4 w-4 text-[#072219] animate-spin" style={{ animationDuration: "5s" }} />
              <span className="relative z-10 font-bold">Open Invitation</span>
              <Sparkles className="h-4 w-4 text-[#072219] animate-spin" style={{ animationDuration: "5s" }} />
            </motion.button>

            <p className="relative z-10 mt-3 text-[0.65rem] sm:text-xs text-[#ffeec2] font-light tracking-[0.25em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] animate-pulse">
              Tap to enter &amp; experience
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DoorOpener;
