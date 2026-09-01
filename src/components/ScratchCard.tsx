import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Eye, Check } from "lucide-react";

interface ScratchCardProps {
  onRevealed?: () => void;
}

export function ScratchCard({ onRevealed }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercentage, setScratchPercentage] = useState(0);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  // Initialize canvas with rich gold foil gradient & ornaments
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    // Reset composite operation
    ctx.globalCompositeOperation = "source-over";

    // Gold foil metallic gradient
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, "#b88628");
    grad.addColorStop(0.2, "#edd080");
    grad.addColorStop(0.4, "#fff6db");
    grad.addColorStop(0.6, "#cf9e46");
    grad.addColorStop(0.8, "#fae5ab");
    grad.addColorStop(1, "#9e6f1d");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Decorative inner border on canvas
    ctx.strokeStyle = "rgba(70, 45, 10, 0.4)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(6, 6, w - 12, h - 12);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.lineWidth = 1;
    ctx.strokeRect(9, 9, w - 18, h - 18);

    // Prompt Text on foil
    ctx.fillStyle = "#3d2708";
    ctx.font = "bold 13px Jost, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("✨ SCRATCH TO REVEAL DATE ✨", w / 2, h / 2 - 8);

    ctx.font = "11px Cormorant Garamond, serif";
    ctx.fillStyle = "#593c10";
    ctx.fillText("( Rub with finger or mouse )", w / 2, h / 2 + 12);
  }, []);

  useEffect(() => {
    initCanvas();
    const handleResize = () => {
      if (!isRevealed) {
        initCanvas();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initCanvas, isRevealed]);

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    try {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let transparentPixels = 0;
      const totalPixels = pixels.length / 4;

      // Sample every 4th pixel for performance
      for (let i = 3; i < pixels.length; i += 16) {
        if (pixels[i]! < 128) {
          transparentPixels++;
        }
      }

      const percentage = Math.round((transparentPixels / (totalPixels / 4)) * 100);
      setScratchPercentage(percentage);

      if (percentage >= 38 && !isRevealed) {
        revealCard();
      }
    } catch {
      // Ignore security errors if any
    }
  };

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 36;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (lastPointRef.current) {
      ctx.beginPath();
      ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.fill();
    }

    lastPointRef.current = { x, y };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isRevealed) return;
    isDrawingRef.current = true;
    const target = e.currentTarget;
    target.setPointerCapture(e.pointerId);
    scratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || isRevealed) return;
    scratch(e.clientX, e.clientY);
    checkScratchPercentage();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDrawingRef.current = false;
    lastPointRef.current = null;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // pass
    }
    checkScratchPercentage();
  };

  const revealCard = () => {
    setIsRevealed(true);
    setScratchPercentage(100);
    if (onRevealed) {
      onRevealed();
    }
  };

  return (
    <div className="relative mx-auto my-5 w-full max-w-sm">
      {/* Outer Card Container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl border-2 border-gold/70 bg-gradient-to-b from-[#fbf7ee] via-[#faf4e6] to-[#f4ebd6] p-4 text-center shadow-[0_12px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(229,193,120,0.25)]"
      >
        {/* Subtle Ornamental Frame */}
        <div className="pointer-events-none absolute inset-1.5 rounded-xl border border-dashed border-[#b88c3a]/40" />

        {/* Revealed Content Underneath */}
        <div className="relative z-10 py-2.5 px-3 flex flex-col items-center justify-center min-h-[90px]">
          <div className="flex items-center gap-2 text-[#8c6721]">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="font-display text-xs uppercase tracking-[0.3em] font-semibold">
              Save The Sacred Date
            </span>
            <Sparkles className="h-3.5 w-3.5" />
          </div>

          <p className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-wide text-[#123829] drop-shadow-sm">
            5<sup className="text-base">th</sup> November 2026
          </p>

          <div className="mt-1 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#7a2335]">
            <span>Thursday</span>
            <span>·</span>
            <span>7:00 PM</span>
            <span>·</span>
            <span>Golden View Resort</span>
          </div>
        </div>

        {/* Scratch Canvas Overlay */}
        <AnimatePresence>
          {!isRevealed && (
            <motion.canvas
              ref={canvasRef}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)", transition: { duration: 0.5 } }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="absolute inset-0 z-20 h-full w-full cursor-grab active:cursor-grabbing touch-none select-none"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Helper Controls & Guidance */}
      <div className="mt-2.5 flex items-center justify-between px-2 text-[0.7rem]">
        {!isRevealed ? (
          <>
            <span className="inline-flex items-center gap-1.5 text-gold-soft font-medium animate-pulse">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>Scratch gold surface above ({scratchPercentage}%)</span>
            </span>
            <button
              type="button"
              onClick={revealCard}
              className="inline-flex items-center gap-1 font-medium text-gold hover:text-gold-bright hover:underline transition-colors cursor-pointer"
            >
              <Eye className="h-3.5 w-3.5" />
              <span>Reveal Now</span>
            </button>
          </>
        ) : (
          <div className="mx-auto inline-flex items-center gap-1.5 text-gold-soft font-medium text-[0.72rem]">
            <Check className="h-3.5 w-3.5 text-green-400" />
            <span>Date Revealed: Thursday, 5 November 2026</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScratchCard;
