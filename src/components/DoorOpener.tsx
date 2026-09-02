import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface DoorOpenerProps {
  onOpen?: () => void;
}

export function DoorOpener({ onOpen }: DoorOpenerProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleOpen = () => {
    if (isOpening || isDismissed) return;
    setIsOpening(true);
    if (onOpen) {
      onOpen();
    }
  };

  useEffect(() => {
    if (isOpening) {
      // Allow full 2.1s cinematic animation to complete before removing from DOM
      const timer = setTimeout(() => {
        setIsDismissed(true);
      }, 2100);
      return () => clearTimeout(timer);
    }
  }, [isOpening]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: isOpening ? [1, 1, 0] : 1,
        }}
        transition={{
          duration: 2.1,
          times: [0, 0.65, 1],
          ease: "easeInOut",
        }}
        onClick={handleOpen}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#020705] select-none cursor-pointer"
        style={{ perspective: "1500px" }}
      >
        {/* ================= BACKGROUND & AMBIENT GLOW ================= */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Deep royal emerald vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#092319_0%,#030e0a_50%,#010403_100%)]" />

          {/* Golden pulsing nebula backdrop */}
          <motion.div
            animate={{
              scale: isOpening ? [1, 1.4, 2] : [0.95, 1.05, 0.95],
              opacity: isOpening ? [0.25, 0.85, 0] : [0.15, 0.28, 0.15],
            }}
            transition={{
              duration: isOpening ? 1.8 : 4.5,
              repeat: isOpening ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80vh] w-[80vw] max-w-[700px] rounded-full bg-gradient-to-tr from-gold/20 via-amber-400/20 to-transparent blur-[140px]"
          />

          {/* Floating stardust embers */}
          <div className="absolute top-[18%] left-[15%] w-1.5 h-1.5 rounded-full bg-gold/70 blur-[0.6px] animate-pulse" />
          <div className="absolute top-[28%] right-[18%] w-2 h-2 rounded-full bg-gold/60 blur-[1px] animate-ping" style={{ animationDuration: "5s" }} />
          <div className="absolute top-[65%] left-[12%] w-1 h-1 rounded-full bg-gold/80 animate-ping" style={{ animationDuration: "4s" }} />
          <div className="absolute top-[72%] right-[15%] w-2 h-2 rounded-full bg-gold/50 blur-[0.8px] animate-pulse" style={{ animationDuration: "6s" }} />
          <div className="absolute bottom-[15%] left-[25%] w-1.5 h-1.5 rounded-full bg-gold/70 animate-ping" style={{ animationDuration: "4.5s" }} />
        </div>

        {/* ================= CELESTIAL LIGHT BURST / GOD RAYS (Behind Doors) ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isOpening
              ? {
                  opacity: [0, 0.95, 1, 0],
                  scale: [0.5, 1.2, 2.2],
                }
              : { opacity: 0 }
          }
          transition={{
            duration: 1.9,
            times: [0, 0.25, 0.65, 1],
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[850px] h-[95vh] pointer-events-none flex items-center justify-center"
        >
          {/* Central sunburst sphere */}
          <div className="w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,#ffffff_0%,#fff2c2_25%,#e5b03c_55%,transparent_75%)] blur-2xl opacity-95" />

          {/* Radiant expanding light beams */}
          <motion.div
            animate={isOpening ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="absolute w-[200%] h-8 bg-gradient-to-r from-transparent via-white to-transparent blur-md rotate-12" />
            <div className="absolute w-[200%] h-8 bg-gradient-to-r from-transparent via-[#fff5d0] to-transparent blur-md -rotate-25" />
            <div className="absolute w-[200%] h-12 bg-gradient-to-r from-transparent via-[#ffd773] to-transparent blur-lg rotate-75" />
            <div className="absolute w-[200%] h-6 bg-gradient-to-r from-transparent via-white to-transparent blur-sm -rotate-60" />
            <div className="absolute w-[200%] h-10 bg-gradient-to-r from-transparent via-[#ffe89e] to-transparent blur-md" />
          </motion.div>
        </motion.div>

        {/* ================= VERTICAL CENTER SEAM LIGHT CRACK ================= */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0.4 }}
          animate={
            isOpening
              ? {
                  opacity: [0, 1, 0.8, 0],
                  scaleY: [0.4, 1, 1.2],
                  scaleX: [1, 4, 8],
                }
              : { opacity: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute z-25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-[65vh] max-h-[620px] bg-gradient-to-b from-transparent via-white to-transparent blur-[2px] shadow-[0_0_25px_#ffe494,0_0_50px_#f5b838] pointer-events-none"
        />

        {/* ================= MAIN GRAND GATEWAY PORTAL CONTAINER ================= */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={
            isOpening
              ? {
                  scale: [1, 1.05, 1.36],
                  opacity: [1, 1, 0.2, 0],
                  z: [0, 80, 240],
                }
              : { scale: 1, opacity: 1, z: 0 }
          }
          transition={
            isOpening
              ? {
                  duration: 2.0,
                  times: [0, 0.35, 1],
                  ease: [0.16, 1, 0.3, 1],
                }
              : { duration: 1.0, ease: "easeOut" }
          }
          className="relative z-20 w-[92vw] max-w-[390px] sm:max-w-[430px] aspect-[500/840] max-h-[78vh] sm:max-h-[82vh] flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* SVG DEFINITIONS & FILTERS */}
          <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
            <defs>
              {/* Luxury Multi-Stop Gold Linear Gradient */}
              <linearGradient id="gate-gold-metal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff8df" />
                <stop offset="18%" stopColor="#f7d479" />
                <stop offset="42%" stopColor="#c89632" />
                <stop offset="60%" stopColor="#fff3c8" />
                <stop offset="82%" stopColor="#966716" />
                <stop offset="100%" stopColor="#f3cf73" />
              </linearGradient>

              {/* Cylindrical Pillar Horizontal Gold Gradient */}
              <linearGradient id="gate-pillar-metal" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8a5c12" />
                <stop offset="22%" stopColor="#fce295" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="78%" stopColor="#dca83c" />
                <stop offset="100%" stopColor="#6e460a" />
              </linearGradient>

              {/* Radial Highlight Gold for Studs & Medallions */}
              <radialGradient id="gate-gold-sphere" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#fee48d" />
                <stop offset="65%" stopColor="#cf9a2e" />
                <stop offset="100%" stopColor="#573605" />
              </radialGradient>

              {/* Glowing Aura for Sunburst Centers */}
              <radialGradient id="gate-sun-burst-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#fff4d4" />
                <stop offset="65%" stopColor="#e5b448" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#cf9a2e" stopOpacity="0" />
              </radialGradient>

              {/* Islamic Star Rosette Lattice Pattern (Middle Panel) */}
              <pattern id="gate-islamic-rosette" width="34" height="34" patternUnits="userSpaceOnUse">
                {/* 4-petal central curved star */}
                <path
                  d="M 17 0 C 17 8.5, 8.5 17, 0 17 C 8.5 17, 17 25.5, 17 34 C 17 25.5, 25.5 17, 34 17 C 25.5 17, 17 8.5, 17 0 Z"
                  fill="none"
                  stroke="url(#gate-gold-metal)"
                  strokeWidth="0.85"
                />
                {/* Overlapping circle arches forming octagram geometry */}
                <circle cx="0" cy="0" r="17" fill="none" stroke="url(#gate-gold-metal)" strokeWidth="0.7" strokeOpacity="0.85" />
                <circle cx="34" cy="0" r="17" fill="none" stroke="url(#gate-gold-metal)" strokeWidth="0.7" strokeOpacity="0.85" />
                <circle cx="0" cy="34" r="17" fill="none" stroke="url(#gate-gold-metal)" strokeWidth="0.7" strokeOpacity="0.85" />
                <circle cx="34" cy="34" r="17" fill="none" stroke="url(#gate-gold-metal)" strokeWidth="0.7" strokeOpacity="0.85" />
                {/* Central circular rosette with golden bead */}
                <circle cx="17" cy="17" r="6.5" fill="none" stroke="url(#gate-gold-metal)" strokeWidth="0.75" />
                <circle cx="17" cy="17" r="1.8" fill="url(#gate-gold-sphere)" />
                {/* Corner intersection beads */}
                <circle cx="0" cy="0" r="1.8" fill="url(#gate-gold-sphere)" />
                <circle cx="34" cy="0" r="1.8" fill="url(#gate-gold-sphere)" />
                <circle cx="0" cy="34" r="1.8" fill="url(#gate-gold-sphere)" />
                <circle cx="34" cy="34" r="1.8" fill="url(#gate-gold-sphere)" />
                {/* Fine diamond grid wireframe */}
                <path
                  d="M 0 17 L 17 0 L 34 17 L 17 34 Z"
                  fill="none"
                  stroke="url(#gate-gold-metal)"
                  strokeWidth="0.45"
                  strokeOpacity="0.6"
                />
              </pattern>

              {/* Curved Ogee / Trellis Grid (Top Arch Panel) */}
              <pattern id="gate-arch-trellis" width="22" height="22" patternUnits="userSpaceOnUse">
                <path
                  d="M 0 0 C 5.5 11, 16.5 11, 22 0 M 0 22 C 5.5 11, 16.5 11, 22 22 M 0 11 C 5.5 0, 16.5 0, 22 11 M 0 11 C 5.5 22, 16.5 22, 22 11"
                  fill="none"
                  stroke="url(#gate-gold-metal)"
                  strokeWidth="0.8"
                  strokeOpacity="0.85"
                />
                <circle cx="11" cy="11" r="1.2" fill="url(#gate-gold-sphere)" />
              </pattern>

              {/* Interlocking Circle Guilloche (Bottom Dado Panel) */}
              <pattern id="gate-guilloche-chain" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="12" cy="12" r="10" fill="none" stroke="url(#gate-gold-metal)" strokeWidth="0.9" />
                <circle cx="0" cy="12" r="10" fill="none" stroke="url(#gate-gold-metal)" strokeWidth="0.9" />
                <circle cx="24" cy="12" r="10" fill="none" stroke="url(#gate-gold-metal)" strokeWidth="0.9" />
                <circle cx="12" cy="12" r="2.2" fill="url(#gate-gold-sphere)" />
              </pattern>

              {/* Radiant Sunburst Medallion (Top Arch) */}
              <g id="gate-sunburst-arch">
                <circle cx="0" cy="0" r="26" fill="url(#gate-sun-burst-glow)" />
                {/* 24 Alternating Spikes */}
                {Array.from({ length: 24 }).map((_, i) => {
                  const angle = (i * 360) / 24;
                  const isLong = i % 2 === 0;
                  const len = isLong ? 28 : 19;
                  const w = isLong ? 1.4 : 0.8;
                  return (
                    <line
                      key={`ray-${i}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2={-len}
                      transform={`rotate(${angle})`}
                      stroke="url(#gate-gold-metal)"
                      strokeWidth={w}
                      strokeLinecap="round"
                    />
                  );
                })}
                <circle cx="0" cy="0" r="14" fill="none" stroke="url(#gate-gold-metal)" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="0" cy="0" r="8" fill="#040907" stroke="url(#gate-gold-metal)" strokeWidth="1.2" />
                <circle cx="0" cy="0" r="4.5" fill="url(#gate-gold-sphere)" />
                <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
              </g>

              {/* Star Applique (Middle Panel) */}
              <g id="gate-starburst-floral">
                <circle cx="0" cy="0" r="18" fill="url(#gate-sun-burst-glow)" opacity="0.8" />
                {Array.from({ length: 8 }).map((_, i) => (
                  <polygon
                    key={`p-${i}`}
                    points="0,-16 2.2,-6 0,0 -2.2,-6"
                    transform={`rotate(${i * 45})`}
                    fill="url(#gate-gold-metal)"
                  />
                ))}
                {Array.from({ length: 8 }).map((_, i) => (
                  <line
                    key={`l-${i}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="-10"
                    transform={`rotate(${i * 45 + 22.5})`}
                    stroke="url(#gate-gold-metal)"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                ))}
                <circle cx="0" cy="0" r="4" fill="url(#gate-gold-sphere)" />
                <circle cx="0" cy="0" r="1.2" fill="#ffffff" />
              </g>
            </defs>
          </svg>

          {/* ================= 3D HINGED DOUBLE DOOR LEAVES ================= */}
          <div className="absolute inset-0 w-full h-full flex" style={{ perspective: "1500px" }}>
            {/* LEFT DOOR LEAF */}
            <motion.div
              initial={{ rotateY: 0, x: 0 }}
              animate={
                isOpening
                  ? {
                      rotateY: -115,
                      x: "-8%",
                      z: -30,
                    }
                  : { rotateY: 0, x: 0, z: 0 }
              }
              transition={
                isOpening
                  ? {
                      duration: 1.8,
                      ease: [0.16, 1, 0.3, 1],
                    }
                  : { duration: 0.5 }
              }
              style={{
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
                width: "50%",
                height: "100%",
              }}
              className="relative h-full overflow-visible drop-shadow-[15px_0_35px_rgba(0,0,0,0.95)]"
            >
              <svg
                viewBox="0 0 250 840"
                className="w-full h-full block"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Left Door Base Plate */}
                <path
                  d="M 28 250 L 28 755 L 246 755 L 246 54 A 205 205 0 0 0 28 250 Z"
                  fill="#040c08"
                />

                {/* Outer Gold Border Moulding */}
                <path
                  d="M 28 250 L 28 755 L 246 755 L 246 54 A 205 205 0 0 0 28 250 Z"
                  fill="none"
                  stroke="url(#gate-gold-metal)"
                  strokeWidth="3.5"
                />
                <path
                  d="M 34 250 L 34 749 L 240 749 L 240 62 A 197 197 0 0 0 34 250 Z"
                  fill="none"
                  stroke="url(#gate-gold-metal)"
                  strokeWidth="1.2"
                  strokeOpacity="0.75"
                />

                {/* TOP ARCH PANEL */}
                <g>
                  <path
                    d="M 44 245 L 44 245 L 234 245 L 234 78 A 180 180 0 0 0 44 245 Z"
                    fill="#020604"
                  />
                  <path
                    d="M 44 245 L 44 245 L 234 245 L 234 78 A 180 180 0 0 0 44 245 Z"
                    fill="url(#gate-arch-trellis)"
                  />
                  <path
                    d="M 44 245 L 44 245 L 234 245 L 234 78 A 180 180 0 0 0 44 245 Z"
                    fill="none"
                    stroke="url(#gate-gold-metal)"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M 50 240 L 228 240 L 228 86 A 172 172 0 0 0 50 240 Z"
                    fill="none"
                    stroke="url(#gate-gold-metal)"
                    strokeWidth="0.8"
                    strokeOpacity="0.6"
                  />
                  <use href="#gate-sunburst-arch" x="144" y="175" />
                </g>

                {/* MIDDLE MAIN PANEL */}
                <g>
                  <rect
                    x="44"
                    y="258"
                    width="190"
                    height="405"
                    fill="#020604"
                  />
                  <rect
                    x="44"
                    y="258"
                    width="190"
                    height="405"
                    fill="url(#gate-islamic-rosette)"
                  />
                  <rect
                    x="44"
                    y="258"
                    width="190"
                    height="405"
                    fill="none"
                    stroke="url(#gate-gold-metal)"
                    strokeWidth="2.5"
                  />
                  <rect
                    x="49"
                    y="263"
                    width="180"
                    height="395"
                    fill="none"
                    stroke="url(#gate-gold-metal)"
                    strokeWidth="0.8"
                    strokeOpacity="0.6"
                  />
                  {/* 4 Islamic Starburst Appliques */}
                  <use href="#gate-starburst-floral" x="96" y="360" />
                  <use href="#gate-starburst-floral" x="182" y="360" />
                  <use href="#gate-starburst-floral" x="96" y="565" />
                  <use href="#gate-starburst-floral" x="182" y="565" />
                </g>

                {/* BOTTOM DADO PANEL */}
                <g>
                  <rect
                    x="44"
                    y="675"
                    width="190"
                    height="68"
                    fill="#020604"
                  />
                  <rect
                    x="44"
                    y="675"
                    width="190"
                    height="68"
                    fill="url(#gate-guilloche-chain)"
                  />
                  <rect
                    x="44"
                    y="675"
                    width="190"
                    height="68"
                    fill="none"
                    stroke="url(#gate-gold-metal)"
                    strokeWidth="2.5"
                  />
                  <rect
                    x="49"
                    y="680"
                    width="180"
                    height="58"
                    fill="none"
                    stroke="url(#gate-gold-metal)"
                    strokeWidth="0.8"
                    strokeOpacity="0.6"
                  />
                </g>

                {/* LEFT DOOR HANDLE / KNOCKER */}
                <g>
                  <circle cx="222" cy="433" r="14" fill="#000000" opacity="0.65" filter="blur(3px)" />
                  <circle
                    cx="222"
                    cy="435"
                    r="12.5"
                    fill="none"
                    stroke="url(#gate-gold-metal)"
                    strokeWidth="3.2"
                  />
                  <circle
                    cx="222"
                    cy="435"
                    r="12.5"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="0.6"
                    strokeOpacity="0.5"
                  />
                  <circle cx="222" cy="425" r="8.5" fill="url(#gate-gold-sphere)" stroke="#69440a" strokeWidth="0.8" />
                  <circle cx="220" cy="423" r="2.5" fill="#ffffff" opacity="0.8" />
                </g>
              </svg>

              {/* 3D Depth Shading Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpening ? 0.75 : 0 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none"
              />
            </motion.div>

            {/* RIGHT DOOR LEAF */}
            <motion.div
              initial={{ rotateY: 0, x: 0 }}
              animate={
                isOpening
                  ? {
                      rotateY: 115,
                      x: "8%",
                      z: -30,
                    }
                  : { rotateY: 0, x: 0, z: 0 }
              }
              transition={
                isOpening
                  ? {
                      duration: 1.8,
                      ease: [0.16, 1, 0.3, 1],
                    }
                  : { duration: 0.5 }
              }
              style={{
                transformOrigin: "right center",
                transformStyle: "preserve-3d",
                width: "50%",
                height: "100%",
              }}
              className="relative h-full overflow-visible drop-shadow-[-15px_0_35px_rgba(0,0,0,0.95)]"
            >
              <svg
                viewBox="250 0 250 840"
                className="w-full h-full block"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Right Door Base Plate */}
                <path
                  d="M 254 54 L 254 755 L 472 755 L 472 250 A 205 205 0 0 0 254 54 Z"
                  fill="#040c08"
                />

                {/* Outer Gold Border Moulding */}
                <path
                  d="M 254 54 L 254 755 L 472 755 L 472 250 A 205 205 0 0 0 254 54 Z"
                  fill="none"
                  stroke="url(#gate-gold-metal)"
                  strokeWidth="3.5"
                />
                <path
                  d="M 260 62 L 260 749 L 466 749 L 466 250 A 197 197 0 0 0 260 62 Z"
                  fill="none"
                  stroke="url(#gate-gold-metal)"
                  strokeWidth="1.2"
                  strokeOpacity="0.75"
                />

                {/* TOP ARCH PANEL */}
                <g>
                  <path
                    d="M 266 78 L 266 245 L 456 245 A 180 180 0 0 0 266 78 Z"
                    fill="#020604"
                  />
                  <path
                    d="M 266 78 L 266 245 L 456 245 A 180 180 0 0 0 266 78 Z"
                    fill="url(#gate-arch-trellis)"
                  />
                  <path
                    d="M 266 78 L 266 245 L 456 245 A 180 180 0 0 0 266 78 Z"
                    fill="none"
                    stroke="url(#gate-gold-metal)"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M 272 86 L 272 240 L 450 240 A 172 172 0 0 0 272 86 Z"
                    fill="none"
                    stroke="url(#gate-gold-metal)"
                    strokeWidth="0.8"
                    strokeOpacity="0.6"
                  />
                  <use href="#gate-sunburst-arch" x="356" y="175" />
                </g>

                {/* MIDDLE MAIN PANEL */}
                <g>
                  <rect
                    x="266"
                    y="258"
                    width="190"
                    height="405"
                    fill="#020604"
                  />
                  <rect
                    x="266"
                    y="258"
                    width="190"
                    height="405"
                    fill="url(#gate-islamic-rosette)"
                  />
                  <rect
                    x="266"
                    y="258"
                    width="190"
                    height="405"
                    fill="none"
                    stroke="url(#gate-gold-metal)"
                    strokeWidth="2.5"
                  />
                  <rect
                    x="271"
                    y="263"
                    width="180"
                    height="395"
                    fill="none"
                    stroke="url(#gate-gold-metal)"
                    strokeWidth="0.8"
                    strokeOpacity="0.6"
                  />
                  {/* 4 Islamic Starburst Appliques */}
                  <use href="#gate-starburst-floral" x="318" y="360" />
                  <use href="#gate-starburst-floral" x="404" y="360" />
                  <use href="#gate-starburst-floral" x="318" y="565" />
                  <use href="#gate-starburst-floral" x="404" y="565" />
                </g>

                {/* BOTTOM DADO PANEL */}
                <g>
                  <rect
                    x="266"
                    y="675"
                    width="190"
                    height="68"
                    fill="#020604"
                  />
                  <rect
                    x="266"
                    y="675"
                    width="190"
                    height="68"
                    fill="url(#gate-guilloche-chain)"
                  />
                  <rect
                    x="266"
                    y="675"
                    width="190"
                    height="68"
                    fill="none"
                    stroke="url(#gate-gold-metal)"
                    strokeWidth="2.5"
                  />
                  <rect
                    x="271"
                    y="680"
                    width="180"
                    height="58"
                    fill="none"
                    stroke="url(#gate-gold-metal)"
                    strokeWidth="0.8"
                    strokeOpacity="0.6"
                  />
                </g>

                {/* RIGHT DOOR HANDLE / KNOCKER */}
                <g>
                  <circle cx="278" cy="433" r="14" fill="#000000" opacity="0.65" filter="blur(3px)" />
                  <circle
                    cx="278"
                    cy="435"
                    r="12.5"
                    fill="none"
                    stroke="url(#gate-gold-metal)"
                    strokeWidth="3.2"
                  />
                  <circle
                    cx="278"
                    cy="435"
                    r="12.5"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="0.6"
                    strokeOpacity="0.5"
                  />
                  <circle cx="278" cy="425" r="8.5" fill="url(#gate-gold-sphere)" stroke="#69440a" strokeWidth="0.8" />
                  <circle cx="276" cy="423" r="2.5" fill="#ffffff" opacity="0.8" />
                </g>
              </svg>

              {/* 3D Depth Shading Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpening ? 0.75 : 0 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/45 to-transparent pointer-events-none"
              />
            </motion.div>
          </div>

          {/* ================= FIXED PALACE ARCH SURROUND & COLUMNS ================= */}
          <svg
            viewBox="0 0 500 840"
            className="absolute inset-0 w-full h-full pointer-events-none z-30"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Outer Grand Arch Surround */}
            <path
              d="M 18 765 L 18 250 A 232 232 0 0 1 482 250 L 482 765 L 468 765 L 468 250 A 218 218 0 0 0 32 250 L 32 765 Z"
              fill="url(#gate-gold-metal)"
            />

            {/* Decorative Beaded Studs running along the arch */}
            {Array.from({ length: 27 }).map((_, i) => {
              const angle = -180 + (i * 180) / 26;
              const rad = (angle * Math.PI) / 180;
              const cx = 250 + 225 * Math.cos(rad);
              const cy = 250 + 225 * Math.sin(rad);
              return (
                <circle
                  key={`arch-stud-${i}`}
                  cx={cx}
                  cy={cy}
                  r="2.2"
                  fill="url(#gate-gold-sphere)"
                />
              );
            })}

            {/* Left Column Studs */}
            {Array.from({ length: 14 }).map((_, i) => (
              <circle
                key={`left-stud-${i}`}
                cx="25"
                cy={285 + i * 35}
                r="2.2"
                fill="url(#gate-gold-sphere)"
              />
            ))}

            {/* Right Column Studs */}
            {Array.from({ length: 14 }).map((_, i) => (
              <circle
                key={`right-stud-${i}`}
                cx="475"
                cy={285 + i * 35}
                r="2.2"
                fill="url(#gate-gold-sphere)"
              />
            ))}

            {/* Left Springing Pillar Capital Ring */}
            <rect x="12" y="242" width="26" height="15" rx="3" fill="url(#gate-pillar-metal)" stroke="#69440a" strokeWidth="0.6" />
            {/* Right Springing Pillar Capital Ring */}
            <rect x="462" y="242" width="26" height="15" rx="3" fill="url(#gate-pillar-metal)" stroke="#69440a" strokeWidth="0.6" />

            {/* Left Base Pedestal Plinth */}
            <rect x="8" y="756" width="34" height="20" rx="4" fill="url(#gate-pillar-metal)" stroke="#69440a" strokeWidth="0.8" />
            {/* Right Base Pedestal Plinth */}
            <rect x="458" y="756" width="34" height="20" rx="4" fill="url(#gate-pillar-metal)" stroke="#69440a" strokeWidth="0.8" />

            {/* Bottom Threshold Beam */}
            <rect x="18" y="752" width="464" height="6" fill="url(#gate-gold-metal)" />
          </svg>
        </motion.div>

        {/* ================= TAP TO ENTER PROMPT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={
            isOpening
              ? {
                  opacity: 0,
                  y: -12,
                  scale: 0.95,
                  transition: { duration: 0.4, ease: "easeOut" },
                }
              : { opacity: 1, y: 0 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-30 mt-6 sm:mt-8 flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="group relative flex items-center gap-2.5 px-6 py-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md text-xs sm:text-sm font-serif tracking-[0.35em] text-gold-bright uppercase font-medium shadow-[0_0_20px_rgba(247,230,184,0.25)]">
            <span className="text-[0.65rem] text-gold animate-spin" style={{ animationDuration: "6s" }}>✦</span>
            <span className="bg-gradient-to-r from-[#ffeab0] via-[#ffffff] to-[#ffeab0] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
              Tap to Enter
            </span>
            <span className="text-[0.65rem] text-gold animate-spin" style={{ animationDuration: "6s" }}>✦</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default DoorOpener;
