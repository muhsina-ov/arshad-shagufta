import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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
            transition: { duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] },
          }}
          onClick={handleOpen}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#030705] select-none cursor-pointer"
          style={{ perspective: "1400px" }}
        >
          {/* Ambient Background & Particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-radial from-[#071d14]/70 via-[#030a07] to-[#010403]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80vh] w-[80vw] max-w-[650px] rounded-full bg-gold/10 blur-[130px] animate-pulse" />

            {/* Subtle floating gold dust */}
            <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 rounded-full bg-gold/60 blur-[1px] animate-ping" style={{ animationDuration: "4s" }} />
            <div className="absolute top-2/3 right-1/4 w-1 h-1 rounded-full bg-gold/50 blur-[0.5px] animate-ping" style={{ animationDuration: "5.5s" }} />
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-gold/40 blur-[1px] animate-ping" style={{ animationDuration: "6s" }} />
            <div className="absolute top-1/3 right-1/5 w-2 h-2 rounded-full bg-gold/50 blur-[1px] animate-ping" style={{ animationDuration: "4.5s" }} />
          </div>

          {/* Golden Divine Light Burst behind doors when opening */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={
              isOpen
                ? {
                    opacity: [0, 1, 0.8, 0],
                    scale: [0.6, 1.4, 2.2],
                    transition: { duration: 1.4, ease: "easeOut" },
                  }
                : { opacity: 0 }
            }
            className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[700px] h-[90vh] pointer-events-none flex items-center justify-center"
          >
            <div className="w-full h-full rounded-full bg-[radial-gradient(circle,#fffef0_0%,#fde293_25%,#e5a93c_50%,transparent_75%)] blur-2xl opacity-90" />
            <div className="absolute w-[180%] h-4 bg-gradient-to-r from-transparent via-[#ffffff] to-transparent rotate-45 blur-md" />
            <div className="absolute w-[180%] h-4 bg-gradient-to-r from-transparent via-[#ffffff] to-transparent -rotate-45 blur-md" />
            <div className="absolute w-[180%] h-6 bg-gradient-to-r from-transparent via-[#fff5d0] to-transparent blur-sm" />
          </motion.div>

          {/* MAIN GATEWAY PORTAL CONTAINER */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{
              scale: 1.16,
              transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 w-[92vw] max-w-[390px] sm:max-w-[420px] aspect-[500/840] max-h-[80vh] sm:max-h-[82vh] flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* SVG DEFINITIONS FOR TEXTURES & GRADIENTS */}
            <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
              <defs>
                {/* Gold Metallic Linear Gradient */}
                <linearGradient id="door-gold-linear" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff8db" />
                  <stop offset="20%" stopColor="#f7d479" />
                  <stop offset="45%" stopColor="#cf9e38" />
                  <stop offset="65%" stopColor="#fff1c2" />
                  <stop offset="85%" stopColor="#9e6f1a" />
                  <stop offset="100%" stopColor="#f3cf73" />
                </linearGradient>

                {/* Pillar Horizontal Gold Gradient */}
                <linearGradient id="door-pillar-gold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9e6f1a" />
                  <stop offset="25%" stopColor="#fde49a" />
                  <stop offset="55%" stopColor="#fffaf0" />
                  <stop offset="75%" stopColor="#dfad42" />
                  <stop offset="100%" stopColor="#7a520e" />
                </linearGradient>

                {/* Vertical Gold Stroke Gradient */}
                <linearGradient id="door-gold-vert" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fff5d1" />
                  <stop offset="30%" stopColor="#d8a53a" />
                  <stop offset="70%" stopColor="#fff0b8" />
                  <stop offset="100%" stopColor="#946513" />
                </linearGradient>

                {/* Bright Radial Gold */}
                <radialGradient id="door-gold-radial" cx="40%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="35%" stopColor="#fde089" />
                  <stop offset="70%" stopColor="#cf9a2e" />
                  <stop offset="100%" stopColor="#69440a" />
                </radialGradient>

                {/* Starburst Central Glow */}
                <radialGradient id="door-star-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="25%" stopColor="#fff3cf" />
                  <stop offset="60%" stopColor="#e5b244" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#cf9a2e" stopOpacity="0" />
                </radialGradient>

                {/* Islamic Rosette Pattern for Middle Panel */}
                <pattern id="door-islamic-rosette" width="34" height="34" patternUnits="userSpaceOnUse">
                  {/* Central 4-point curved star */}
                  <path
                    d="M 17 0 C 17 8.5, 8.5 17, 0 17 C 8.5 17, 17 25.5, 17 34 C 17 25.5, 25.5 17, 34 17 C 25.5 17, 17 8.5, 17 0 Z"
                    fill="none"
                    stroke="url(#door-gold-linear)"
                    strokeWidth="0.85"
                  />
                  {/* Outer circle rings creating 8-leaf petals */}
                  <circle cx="0" cy="0" r="17" fill="none" stroke="url(#door-gold-linear)" strokeWidth="0.7" strokeOpacity="0.85" />
                  <circle cx="34" cy="0" r="17" fill="none" stroke="url(#door-gold-linear)" strokeWidth="0.7" strokeOpacity="0.85" />
                  <circle cx="0" cy="34" r="17" fill="none" stroke="url(#door-gold-linear)" strokeWidth="0.7" strokeOpacity="0.85" />
                  <circle cx="34" cy="34" r="17" fill="none" stroke="url(#door-gold-linear)" strokeWidth="0.7" strokeOpacity="0.85" />
                  {/* Center floral ring */}
                  <circle cx="17" cy="17" r="6.5" fill="none" stroke="url(#door-gold-linear)" strokeWidth="0.75" />
                  <circle cx="17" cy="17" r="1.8" fill="url(#door-gold-radial)" />
                  {/* Corner floral points */}
                  <circle cx="0" cy="0" r="1.8" fill="url(#door-gold-radial)" />
                  <circle cx="34" cy="0" r="1.8" fill="url(#door-gold-radial)" />
                  <circle cx="0" cy="34" r="1.8" fill="url(#door-gold-radial)" />
                  <circle cx="34" cy="34" r="1.8" fill="url(#door-gold-radial)" />
                  {/* Diamond connecting lattice */}
                  <path
                    d="M 0 17 L 17 0 L 34 17 L 17 34 Z"
                    fill="none"
                    stroke="url(#door-gold-linear)"
                    strokeWidth="0.45"
                    strokeOpacity="0.6"
                  />
                </pattern>

                {/* Curved Ogee / Lattice Grid for Top Arch Panel */}
                <pattern id="door-arch-trellis" width="22" height="22" patternUnits="userSpaceOnUse">
                  <path
                    d="M 0 0 C 5.5 11, 16.5 11, 22 0 M 0 22 C 5.5 11, 16.5 11, 22 22 M 0 11 C 5.5 0, 16.5 0, 22 11 M 0 11 C 5.5 22, 16.5 22, 22 11"
                    fill="none"
                    stroke="url(#door-gold-linear)"
                    strokeWidth="0.8"
                    strokeOpacity="0.85"
                  />
                  <circle cx="11" cy="11" r="1.2" fill="url(#door-gold-radial)" />
                </pattern>

                {/* Interlocking Circle Guilloche for Bottom Dado Panel */}
                <pattern id="door-guilloche-chain" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="url(#door-gold-linear)" strokeWidth="0.9" />
                  <circle cx="0" cy="12" r="10" fill="none" stroke="url(#door-gold-linear)" strokeWidth="0.9" />
                  <circle cx="24" cy="12" r="10" fill="none" stroke="url(#door-gold-linear)" strokeWidth="0.9" />
                  <circle cx="12" cy="12" r="2.2" fill="url(#door-gold-radial)" />
                </pattern>

                {/* Sunburst Medallion (for top arch) */}
                <g id="door-sunburst-arch">
                  <circle cx="0" cy="0" r="26" fill="url(#door-star-glow)" />
                  {/* Radiant 24 Rays */}
                  {Array.from({ length: 24 }).map((_, i) => {
                    const angle = (i * 360) / 24;
                    const isLong = i % 2 === 0;
                    const len = isLong ? 28 : 19;
                    const w = isLong ? 1.4 : 0.8;
                    return (
                      <line
                        key={i}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2={-len}
                        transform={`rotate(${angle})`}
                        stroke="url(#door-gold-linear)"
                        strokeWidth={w}
                        strokeLinecap="round"
                      />
                    );
                  })}
                  <circle cx="0" cy="0" r="14" fill="none" stroke="url(#door-gold-linear)" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="0" cy="0" r="8" fill="#040907" stroke="url(#door-gold-linear)" strokeWidth="1.2" />
                  <circle cx="0" cy="0" r="4.5" fill="url(#door-gold-radial)" />
                  <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
                </g>

                {/* Star Applique (for middle panel) */}
                <g id="door-starburst-floral">
                  <circle cx="0" cy="0" r="18" fill="url(#door-star-glow)" opacity="0.8" />
                  {/* 8 Primary Diamond Rays */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <polygon
                      key={`ray-${i}`}
                      points="0,-16 2.2,-6 0,0 -2.2,-6"
                      transform={`rotate(${i * 45})`}
                      fill="url(#door-gold-linear)"
                    />
                  ))}
                  {/* 8 Secondary Intermediate Fine Rays */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={`fine-${i}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="-10"
                      transform={`rotate(${i * 45 + 22.5})`}
                      stroke="url(#door-gold-linear)"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  ))}
                  <circle cx="0" cy="0" r="4" fill="url(#door-gold-radial)" />
                  <circle cx="0" cy="0" r="1.2" fill="#ffffff" />
                </g>
              </defs>
            </svg>

            {/* 3D DOOR HINGE WRAPPER */}
            <div className="absolute inset-0 w-full h-full flex" style={{ perspective: "1400px" }}>
              {/* LEFT DOOR LEAF */}
              <motion.div
                initial={{ rotateY: 0, x: 0 }}
                exit={{
                  rotateY: -115,
                  x: "-12%",
                  z: -30,
                  transition: { duration: 1.5, ease: [0.2, 0.95, 0.3, 1] },
                }}
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                  width: "50%",
                  height: "100%",
                }}
                className="relative h-full overflow-visible drop-shadow-[15px_0_30px_rgba(0,0,0,0.9)]"
              >
                <svg
                  viewBox="0 0 250 840"
                  className="w-full h-full block"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Left Door Backing Panel */}
                  <path
                    d="M 28 250 L 28 755 L 246 755 L 246 54 A 205 205 0 0 0 28 250 Z"
                    fill="#050d09"
                  />

                  {/* Outer Gold Leaf Border */}
                  <path
                    d="M 28 250 L 28 755 L 246 755 L 246 54 A 205 205 0 0 0 28 250 Z"
                    fill="none"
                    stroke="url(#door-gold-linear)"
                    strokeWidth="3.5"
                  />
                  <path
                    d="M 34 250 L 34 749 L 240 749 L 240 62 A 197 197 0 0 0 34 250 Z"
                    fill="none"
                    stroke="url(#door-gold-linear)"
                    strokeWidth="1.2"
                    strokeOpacity="0.75"
                  />

                  {/* TOP ARCH PANEL (Left) */}
                  <g>
                    <path
                      d="M 44 245 L 44 245 L 234 245 L 234 78 A 180 180 0 0 0 44 245 Z"
                      fill="#030806"
                    />
                    <path
                      d="M 44 245 L 44 245 L 234 245 L 234 78 A 180 180 0 0 0 44 245 Z"
                      fill="url(#door-arch-trellis)"
                    />
                    <path
                      d="M 44 245 L 44 245 L 234 245 L 234 78 A 180 180 0 0 0 44 245 Z"
                      fill="none"
                      stroke="url(#door-gold-linear)"
                      strokeWidth="2.5"
                    />
                    {/* Inner Hairline */}
                    <path
                      d="M 50 240 L 228 240 L 228 86 A 172 172 0 0 0 50 240 Z"
                      fill="none"
                      stroke="url(#door-gold-linear)"
                      strokeWidth="0.8"
                      strokeOpacity="0.6"
                    />
                    {/* Central Sunburst Medallion */}
                    <use href="#door-sunburst-arch" x="144" y="175" />
                  </g>

                  {/* MIDDLE MAIN PANEL (Left) */}
                  <g>
                    <rect
                      x="44"
                      y="258"
                      width="190"
                      height="405"
                      fill="#030806"
                    />
                    <rect
                      x="44"
                      y="258"
                      width="190"
                      height="405"
                      fill="url(#door-islamic-rosette)"
                    />
                    <rect
                      x="44"
                      y="258"
                      width="190"
                      height="405"
                      fill="none"
                      stroke="url(#door-gold-linear)"
                      strokeWidth="2.5"
                    />
                    {/* Inner Hairline border */}
                    <rect
                      x="49"
                      y="263"
                      width="180"
                      height="395"
                      fill="none"
                      stroke="url(#door-gold-linear)"
                      strokeWidth="0.8"
                      strokeOpacity="0.6"
                    />
                    {/* 4 Islamic Starburst Appliques */}
                    <use href="#door-starburst-floral" x="96" y="360" />
                    <use href="#door-starburst-floral" x="182" y="360" />
                    <use href="#door-starburst-floral" x="96" y="565" />
                    <use href="#door-starburst-floral" x="182" y="565" />
                  </g>

                  {/* BOTTOM DADO PANEL (Left) */}
                  <g>
                    <rect
                      x="44"
                      y="675"
                      width="190"
                      height="68"
                      fill="#030806"
                    />
                    <rect
                      x="44"
                      y="675"
                      width="190"
                      height="68"
                      fill="url(#door-guilloche-chain)"
                    />
                    <rect
                      x="44"
                      y="675"
                      width="190"
                      height="68"
                      fill="none"
                      stroke="url(#door-gold-linear)"
                      strokeWidth="2.5"
                    />
                    <rect
                      x="49"
                      y="680"
                      width="180"
                      height="58"
                      fill="none"
                      stroke="url(#door-gold-linear)"
                      strokeWidth="0.8"
                      strokeOpacity="0.6"
                    />
                  </g>

                  {/* LEFT DOOR HANDLE / KNOCKER */}
                  <g>
                    {/* Cast shadow */}
                    <circle cx="222" cy="433" r="14" fill="#000000" opacity="0.6" filter="blur(3px)" />
                    {/* Golden Drop Ring */}
                    <circle
                      cx="222"
                      cy="435"
                      r="12.5"
                      fill="none"
                      stroke="url(#door-gold-linear)"
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
                    {/* Mounting Boss (Round Sphere) */}
                    <circle cx="222" cy="425" r="8.5" fill="url(#door-gold-radial)" stroke="#69440a" strokeWidth="0.8" />
                    <circle cx="220" cy="423" r="2.5" fill="#ffffff" opacity="0.75" />
                  </g>
                </svg>

                {/* 3D Depth Shading Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  exit={{
                    opacity: 0.65,
                    transition: { duration: 1.5, ease: "easeOut" },
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none"
                />
              </motion.div>

              {/* RIGHT DOOR LEAF */}
              <motion.div
                initial={{ rotateY: 0, x: 0 }}
                exit={{
                  rotateY: 115,
                  x: "12%",
                  z: -30,
                  transition: { duration: 1.5, ease: [0.2, 0.95, 0.3, 1] },
                }}
                style={{
                  transformOrigin: "right center",
                  transformStyle: "preserve-3d",
                  width: "50%",
                  height: "100%",
                }}
                className="relative h-full overflow-visible drop-shadow-[-15px_0_30px_rgba(0,0,0,0.9)]"
              >
                <svg
                  viewBox="250 0 250 840"
                  className="w-full h-full block"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Right Door Backing Panel */}
                  <path
                    d="M 254 54 L 254 755 L 472 755 L 472 250 A 205 205 0 0 0 254 54 Z"
                    fill="#050d09"
                  />

                  {/* Outer Gold Leaf Border */}
                  <path
                    d="M 254 54 L 254 755 L 472 755 L 472 250 A 205 205 0 0 0 254 54 Z"
                    fill="none"
                    stroke="url(#door-gold-linear)"
                    strokeWidth="3.5"
                  />
                  <path
                    d="M 260 62 L 260 749 L 466 749 L 466 250 A 197 197 0 0 0 260 62 Z"
                    fill="none"
                    stroke="url(#door-gold-linear)"
                    strokeWidth="1.2"
                    strokeOpacity="0.75"
                  />

                  {/* TOP ARCH PANEL (Right) */}
                  <g>
                    <path
                      d="M 266 78 L 266 245 L 456 245 A 180 180 0 0 0 266 78 Z"
                      fill="#030806"
                    />
                    <path
                      d="M 266 78 L 266 245 L 456 245 A 180 180 0 0 0 266 78 Z"
                      fill="url(#door-arch-trellis)"
                    />
                    <path
                      d="M 266 78 L 266 245 L 456 245 A 180 180 0 0 0 266 78 Z"
                      fill="none"
                      stroke="url(#door-gold-linear)"
                      strokeWidth="2.5"
                    />
                    {/* Inner Hairline */}
                    <path
                      d="M 272 86 L 272 240 L 450 240 A 172 172 0 0 0 272 86 Z"
                      fill="none"
                      stroke="url(#door-gold-linear)"
                      strokeWidth="0.8"
                      strokeOpacity="0.6"
                    />
                    {/* Central Sunburst Medallion */}
                    <use href="#door-sunburst-arch" x="356" y="175" />
                  </g>

                  {/* MIDDLE MAIN PANEL (Right) */}
                  <g>
                    <rect
                      x="266"
                      y="258"
                      width="190"
                      height="405"
                      fill="#030806"
                    />
                    <rect
                      x="266"
                      y="258"
                      width="190"
                      height="405"
                      fill="url(#door-islamic-rosette)"
                    />
                    <rect
                      x="266"
                      y="258"
                      width="190"
                      height="405"
                      fill="none"
                      stroke="url(#door-gold-linear)"
                      strokeWidth="2.5"
                    />
                    {/* Inner Hairline border */}
                    <rect
                      x="271"
                      y="263"
                      width="180"
                      height="395"
                      fill="none"
                      stroke="url(#door-gold-linear)"
                      strokeWidth="0.8"
                      strokeOpacity="0.6"
                    />
                    {/* 4 Islamic Starburst Appliques */}
                    <use href="#door-starburst-floral" x="318" y="360" />
                    <use href="#door-starburst-floral" x="404" y="360" />
                    <use href="#door-starburst-floral" x="318" y="565" />
                    <use href="#door-starburst-floral" x="404" y="565" />
                  </g>

                  {/* BOTTOM DADO PANEL (Right) */}
                  <g>
                    <rect
                      x="266"
                      y="675"
                      width="190"
                      height="68"
                      fill="#030806"
                    />
                    <rect
                      x="266"
                      y="675"
                      width="190"
                      height="68"
                      fill="url(#door-guilloche-chain)"
                    />
                    <rect
                      x="266"
                      y="675"
                      width="190"
                      height="68"
                      fill="none"
                      stroke="url(#door-gold-linear)"
                      strokeWidth="2.5"
                    />
                    <rect
                      x="271"
                      y="680"
                      width="180"
                      height="58"
                      fill="none"
                      stroke="url(#door-gold-linear)"
                      strokeWidth="0.8"
                      strokeOpacity="0.6"
                    />
                  </g>

                  {/* RIGHT DOOR HANDLE / KNOCKER */}
                  <g>
                    {/* Cast shadow */}
                    <circle cx="278" cy="433" r="14" fill="#000000" opacity="0.6" filter="blur(3px)" />
                    {/* Golden Drop Ring */}
                    <circle
                      cx="278"
                      cy="435"
                      r="12.5"
                      fill="none"
                      stroke="url(#door-gold-linear)"
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
                    {/* Mounting Boss (Round Sphere) */}
                    <circle cx="278" cy="425" r="8.5" fill="url(#door-gold-radial)" stroke="#69440a" strokeWidth="0.8" />
                    <circle cx="276" cy="423" r="2.5" fill="#ffffff" opacity="0.75" />
                  </g>
                </svg>

                {/* 3D Depth Shading Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  exit={{
                    opacity: 0.65,
                    transition: { duration: 1.5, ease: "easeOut" },
                  }}
                  className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent pointer-events-none"
                />
              </motion.div>
            </div>

            {/* OUTER PALACE ARCH FRAME & SIDE PILLARS (Fixed Frame overlay) */}
            <svg
              viewBox="0 0 500 840"
              className="absolute inset-0 w-full h-full pointer-events-none z-30"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Outer Grand Arch Surround */}
              <path
                d="M 18 765 L 18 250 A 232 232 0 0 1 482 250 L 482 765 L 468 765 L 468 250 A 218 218 0 0 0 32 250 L 32 765 Z"
                fill="url(#door-gold-linear)"
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
                    fill="url(#door-gold-radial)"
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
                  fill="url(#door-gold-radial)"
                />
              ))}

              {/* Right Column Studs */}
              {Array.from({ length: 14 }).map((_, i) => (
                <circle
                  key={`right-stud-${i}`}
                  cx="475"
                  cy={285 + i * 35}
                  r="2.2"
                  fill="url(#door-gold-radial)"
                />
              ))}

              {/* Left Springing Pillar Capital Ring */}
              <rect x="12" y="242" width="26" height="15" rx="3" fill="url(#door-pillar-gold)" stroke="#69440a" strokeWidth="0.6" />
              {/* Right Springing Pillar Capital Ring */}
              <rect x="462" y="242" width="26" height="15" rx="3" fill="url(#door-pillar-gold)" stroke="#69440a" strokeWidth="0.6" />

              {/* Left Base Pedestal Plinth */}
              <rect x="8" y="756" width="34" height="20" rx="4" fill="url(#door-pillar-gold)" stroke="#69440a" strokeWidth="0.8" />
              {/* Right Base Pedestal Plinth */}
              <rect x="458" y="756" width="34" height="20" rx="4" fill="url(#door-pillar-gold)" stroke="#69440a" strokeWidth="0.8" />

              {/* Bottom Threshold Beam */}
              <rect x="18" y="752" width="464" height="6" fill="url(#door-gold-linear)" />
            </svg>
          </motion.div>

          {/* TAP TO ENTER PROMPT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -10,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-30 mt-6 sm:mt-8 flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-serif tracking-[0.35em] text-gold-bright uppercase font-medium drop-shadow-[0_0_12px_rgba(247,230,184,0.6)] animate-pulse">
              <span className="text-[0.65rem] text-gold">✦</span>
              <span>Tap to Enter</span>
              <span className="text-[0.65rem] text-gold">✦</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DoorOpener;
