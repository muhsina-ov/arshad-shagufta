import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  CalendarPlus,
  Clock,
  MapPin,
  Navigation,
  Heart,
  Copy,
  Check,
  Sparkles,
  RotateCcw,
} from "lucide-react";

import { Aurora } from "@/components/Aurora";
import { Countdown } from "@/components/Countdown";
import { ParticlesCanvas } from "@/components/ParticlesCanvas";
import { AudioPlayer, type AudioPlayerHandle } from "@/components/AudioPlayer";
import { TimelineSection } from "@/components/TimelineSection";
import { DoorOpener } from "@/components/DoorOpener";
import { ScratchCard } from "@/components/ScratchCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Shagufta Ali & Arshad Khan — Wedding Invitation | 5 Nov 2026" },
      {
        name: "description",
        content:
          "You are warmly invited to celebrate the Nikah Ceremony of Dr. Shagufta Ali and Arshad Khan on Thursday, 5 November 2026 at Golden View Resort, Raj Nagar Extension, Ghaziabad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://shagufta-weds-arshad.invitestory.in" },
      { property: "og:site_name", content: "InviteStory" },
      { property: "og:title", content: "Dr. Shagufta Ali & Arshad Khan — Wedding Invitation | 5 Nov 2026" },
      {
        property: "og:description",
        content:
          "You are warmly invited to celebrate the Nikah Ceremony of Dr. Shagufta Ali and Arshad Khan on Thursday, 5 November 2026 at Golden View Resort, Raj Nagar Extension, Ghaziabad.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Dr. Shagufta Ali & Arshad Khan Wedding Invitation" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@invitestory.in" },
      { name: "twitter:title", content: "Dr. Shagufta Ali & Arshad Khan — Wedding Invitation | 5 Nov 2026" },
      {
        name: "twitter:description",
        content:
          "You are warmly invited to celebrate the Nikah Ceremony of Dr. Shagufta Ali and Arshad Khan on Thursday, 5 November 2026 at Golden View Resort, Raj Nagar Extension, Ghaziabad.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: Invitation,
});

const WEDDING_DATE = new Date("2026-11-05T19:00:00+05:30");
const VENUE_NAME = "Golden View Resort";
const VENUE_ADDRESS = "Golden View Resort, Raj Nagar Extension, Ghaziabad, UP";
const MAPS_URL = "https://share.google/Qs8tIqUjspcIMQKig";

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={rise}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function icsHref() {
  const end = new Date(WEDDING_DATE.getTime() + 4.5 * 3600000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]|\.\d{3}/g, "");
  const body = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    "SUMMARY:Nikah Ceremony of Dr. Shagufta Ali & Arshad Khan",
    `DTSTART:${fmt(WEDDING_DATE)}`,
    `DTEND:${fmt(end)}`,
    `LOCATION:${VENUE_ADDRESS}`,
    "DESCRIPTION:Late Mr. Murad Ali & Late Mrs. Masooman Begum request the honour of your presence on the occasion of the Nikah Ceremony of their grand-daughter Dr. Shagufta Ali with Arshad Khan.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(body)}`;
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 py-16 sm:px-6 sm:py-24"
    >
      {/* Background Image with Deep Velvet Emerald Veil */}
      <img
        src="https://media.invitestory.in/emerald-nikah/images/hero-bg.jpg"
        alt=""
        aria-hidden
        width={1024}
        height={1536}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <Aurora className="mix-blend-screen opacity-85" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} />

      {/* Floating Velvet Roses & Floral Accents */}
      <img
        src="https://media.invitestory.in/emerald-nikah/images/roses.png"
        alt=""
        aria-hidden
        loading="lazy"
        width={1024}
        height={1024}
        className="float-slow pointer-events-none absolute -left-12 -top-6 w-52 opacity-95 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] sm:w-72"
      />
      <img
        src="https://media.invitestory.in/emerald-nikah/images/daisies.png"
        alt=""
        aria-hidden
        loading="lazy"
        width={1024}
        height={1024}
        className="float-slow pointer-events-none absolute -bottom-8 -right-10 w-44 opacity-90 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] sm:w-60"
      />

      <motion.div style={{ y, opacity: fade }} className="relative z-10 w-full max-w-lg">
        {/* Royal Bismillah Arch Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Ornate Gold Arch Crest */}
          <div className="mx-auto flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <svg
              className="h-6 w-6 text-gold drop-shadow-[0_0_8px_rgba(229,193,120,0.6)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M12 2L14.5 8.5L21 9.5L16 14L17.5 20.5L12 17L6.5 20.5L8 14L3 9.5L9.5 8.5L12 2Z"
                fill="currentColor"
                fillOpacity="0.3"
              />
            </svg>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          <p className="mt-3 font-arabic text-3xl sm:text-4xl leading-loose text-gold-bright drop-shadow-[0_2px_15px_rgba(247,230,184,0.5)]">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </p>
          <p className="mt-1 font-display text-xs sm:text-sm uppercase tracking-[0.45em] font-semibold text-gold-soft">
            Save The Date
          </p>
        </motion.div>

        {/* Imperial Royal Invitation Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-7 group"
        >
          {/* Card Outer Glow & Background */}
          <div className="relative rounded-[2rem] border-2 border-gold/60 bg-[#faf5eb] p-6 sm:p-9 text-center shadow-[0_35px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(229,193,120,0.25)] overflow-hidden">
            {/* Inner Double Hairline Gold Frame */}
            <div className="pointer-events-none absolute inset-2.5 sm:inset-3.5 rounded-[1.4rem] border border-[#c49a45]/50" />
            <div className="pointer-events-none absolute inset-3.5 sm:inset-4.5 rounded-[1.2rem] border border-dashed border-[#c49a45]/30" />

            {/* Corner Ornamental Rosettes */}
            <div className="pointer-events-none absolute top-4 left-4 text-[#c49a45]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" />
              </svg>
            </div>
            <div className="pointer-events-none absolute top-4 right-4 text-[#c49a45]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" />
              </svg>
            </div>
            <div className="pointer-events-none absolute bottom-4 left-4 text-[#c49a45]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" />
              </svg>
            </div>
            <div className="pointer-events-none absolute bottom-4 right-4 text-[#c49a45]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" />
              </svg>
            </div>

            {/* Content Inside Imperial Card */}
            <div className="relative z-10 py-2">
              <p className="font-display text-[0.7rem] uppercase tracking-[0.45em] font-semibold text-[#8c6721]">
                Save The Date
              </p>

              {/* Bride & Groom Top Section */}
              <div className="mt-4 sm:mt-5">
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold italic leading-[1.05] text-[#1a382d] drop-shadow-sm">
                  Dr. Shagufta Ali
                </h1>

                {/* Royal Medallion Divider */}
                <div className="my-3.5 sm:my-4 flex items-center justify-center">
                  <div className="h-[1px] w-14 sm:w-20 bg-gradient-to-r from-transparent via-[#b88c3a] to-transparent" />
                  <div className="mx-3 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-[#b88c3a] bg-gradient-to-b from-[#faf5eb] via-[#f7e6b8] to-[#edd080] shadow-[0_2px_8px_rgba(184,140,58,0.25)]">
                    <span className="font-display italic text-sm sm:text-base font-bold text-[#7a2335] leading-none select-none">
                      weds
                    </span>
                  </div>
                  <div className="h-[1px] w-14 sm:w-20 bg-gradient-to-r from-transparent via-[#b88c3a] to-transparent" />
                </div>

                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold italic leading-[1.05] text-[#1a382d] drop-shadow-sm">
                  Arshad Khan
                </h2>
              </div>

              {/* Nikah Title */}
              <div className="mt-4">
                <span className="inline-block rounded-full bg-[#1a382d] px-6 py-1 font-display text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-gold-bright shadow-sm">
                  Nikah
                </span>
              </div>

              {/* Interactive Scratch Card for Date Reveal */}
              <div className="mt-4">
                <ScratchCard />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Date & Venue Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-7 flex flex-col items-center justify-center text-center"
        >
          <div className="gold-badge px-6 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md border border-gold/60">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] font-semibold text-gold-bright">
              Thursday · 5 November 2026
            </p>
          </div>
          <p className="mt-2.5 text-[0.68rem] uppercase tracking-[0.3em] font-medium text-cream/70">
            Golden View Resort · Raj Nagar Extension, Ghaziabad
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function FamilyInvitationSection() {
  return (
    <section className="relative mx-auto max-w-lg px-6 py-14">
      <Reveal>
        <div className="glass-tile p-8 sm:p-10 relative overflow-hidden border border-gold/45 text-center shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
          {/* Subtle Islamic Rosette Top */}
          <div className="text-gold text-2xl font-serif tracking-widest mb-3">❖</div>

          <p className="font-display text-base sm:text-lg italic font-semibold text-gold-bright">
            Late Mr. Murad Ali &amp; Late Mrs. Masooman Begum
          </p>

          <p className="mt-3 font-display text-xs sm:text-sm leading-relaxed tracking-wide text-cream/90 max-w-xs mx-auto">
            Request the honour of your presence on the occasion of the Nikah Ceremony of their grand-daughter
          </p>

          <div className="gold-rule mx-auto my-6 w-32" />

          {/* Bride Name & Parents */}
          <div className="my-2">
            <h3 className="font-display text-3xl sm:text-4xl font-bold italic text-gradient-gold">
              Dr. Shagufta Ali
            </h3>
            <p className="mt-1 font-script text-xl sm:text-2xl text-rose font-medium">
              (D/o Mrs. and Mr. M. Ali)
            </p>
          </div>

          <div className="my-4 flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <span className="font-display text-sm uppercase tracking-[0.35em] text-gold-soft font-semibold">
              with
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          {/* Groom Name & Parents */}
          <div className="my-2">
            <h3 className="font-display text-3xl sm:text-4xl font-bold italic text-gradient-gold">
              Arshad Khan
            </h3>
            <p className="mt-1 font-script text-xl sm:text-2xl text-rose font-medium">
              (S/o Mrs. and Mr. Sarfaraz Ahmad)
            </p>
          </div>

          <div className="text-gold text-2xl font-serif tracking-widest mt-6">❖</div>
        </div>
      </Reveal>
    </section>
  );
}

function QuranicVerse() {
  return (
    <section className="relative mx-auto max-w-lg px-6 py-12 text-center">
      <Reveal>
        <div className="glass-tile p-7 sm:p-9 relative overflow-hidden border border-gold/40">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10" />
          <Sparkles className="mx-auto h-5 w-5 text-gold mb-3" />
          <p className="font-arabic text-xl sm:text-3xl leading-loose text-gold-bright drop-shadow-[0_2px_12px_rgba(247,230,184,0.4)]">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>
          <div className="gold-rule mx-auto my-5 w-28" />
          <p className="font-display text-sm sm:text-base italic leading-relaxed text-cream/90">
            “And of His signs is that He created for you from yourselves mates that you may find
            tranquility in them; and He placed between you affection and mercy.”
          </p>
          <p className="mt-3 text-[0.65rem] uppercase tracking-[0.35em] font-semibold text-gold">
            Surah Ar-Rum · 30:21
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function CountdownSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      <img
        src="https://media.invitestory.in/emerald-nikah/images/mandala.png"
        alt=""
        aria-hidden
        loading="lazy"
        width={1024}
        height={1024}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-15 spin-very-slow"
      />
      <div className="relative mx-auto max-w-md text-center">
        <Reveal>
          <p className="text-[0.65rem] uppercase tracking-[0.45em] text-gold font-medium">
            Counting Every Sacred Moment
          </p>
          <h2 className="mt-2 font-display text-4xl italic text-gradient-gold sm:text-5xl">
            Until They Say Qubool hai
          </h2>
          <div className="gold-rule mx-auto mt-4 w-32" />
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <Countdown target={WEDDING_DATE.getTime()} />
        </Reveal>

        <Reveal delay={0.2} className="mt-8">
          <p className="text-xs uppercase tracking-[0.3em] font-medium text-gold-soft">
            5th November 2026 Thursday, 7:00 PM
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Details() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(VENUE_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue" className="relative mx-auto max-w-lg px-6 py-16">
      <Reveal>
        <p className="text-center text-[0.65rem] uppercase tracking-[0.45em] text-gold font-medium">
          Where &amp; When
        </p>
        <h2 className="mt-2 text-center font-display text-4xl italic text-gradient-gold sm:text-5xl">
          Venue &amp; Celebration
        </h2>
        <div className="gold-rule mx-auto mt-4 w-32" />
      </Reveal>

      {/* Main Details Card */}
      <Reveal delay={0.1} className="mt-10">
        <div className="glass-tile p-7 sm:p-9 text-center relative overflow-hidden border border-gold/40">
          <span className="gold-badge px-4 py-1 text-[0.65rem] uppercase tracking-[0.35em] font-semibold text-gold-bright">
            Nikah &amp; Dinner
          </span>

          <p className="mt-5 font-display text-3xl sm:text-4xl font-semibold text-cream">
            Thursday, 5 November 2026
          </p>

          <p className="mt-2 flex items-center justify-center gap-2 text-sm text-gold-soft">
            <Clock className="h-4 w-4 shrink-0 text-gold" />
            <span>07:00 PM onwards</span>
          </p>

          <div className="gold-rule my-6" />

          <div className="space-y-1.5">
            <p className="font-display text-2xl sm:text-3xl font-semibold text-cream">
              {VENUE_NAME}
            </p>
            <p className="flex items-start justify-center gap-2 text-xs sm:text-sm leading-relaxed text-cream/80 max-w-xs mx-auto">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>Raj Nagar Extension, Ghaziabad, UP</span>
            </p>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <motion.a
              href={icsHref()}
              download="shagufta-arshad-wedding.ics"
              whileTap={{ scale: 0.96 }}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-[#1a382d] shadow-[var(--shadow-lux)] transition-transform hover:scale-102 cursor-pointer"
              style={{ background: "var(--gradient-gold)" }}
            >
              <CalendarPlus className="h-4 w-4" />
              Add to Calendar
            </motion.a>

            <motion.button
              type="button"
              onClick={handleCopyAddress}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 bg-gold/15 px-5 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-gold-bright hover:bg-gold/25 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-green-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy Address</span>
                </>
              )}
            </motion.button>
          </div>
        </div>
      </Reveal>

      {/* Map Card */}
      <Reveal delay={0.15} className="mt-6">
        <div className="glass-tile overflow-hidden group">
          <div className="relative overflow-hidden h-48 w-full">
            <img
              src="https://media.invitestory.in/emerald-nikah/images/map.jpg"
              alt="Golden View Resort venue map"
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4">
              <span className="gold-badge px-3 py-0.5 text-[0.62rem] uppercase tracking-wider">
                Interactive Map
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <p className="font-display text-xl font-semibold text-cream">{VENUE_NAME}</p>
            <p className="mt-1 text-xs text-cream/70">
              Raj Nagar Extension, Ghaziabad, UP. Click below for live directions.
            </p>
            <motion.a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.96 }}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/45 bg-emerald-deep/80 px-6 py-3 text-xs sm:text-sm font-medium tracking-wide text-gold transition-colors hover:bg-gold/15 cursor-pointer"
            >
              <Navigation className="h-4 w-4" />
              Open in Google Maps
            </motion.a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function FamilyNote() {
  return (
    <section className="relative mx-auto max-w-lg px-6 py-14 text-center">
      <Reveal>
        <div className="glass-tile p-8 sm:p-10 relative overflow-hidden border border-gold/40">
          <p className="font-display text-xs uppercase tracking-[0.4em] font-semibold text-gold">
            A Note From The Family
          </p>

          <div className="gold-rule mx-auto my-4 w-20" />

          <p className="font-display text-base sm:text-lg italic leading-relaxed text-cream/90">
            “In the name of Allah, the Most Gracious, the Most Merciful. We are truly honoured to
            begin this beautiful chapter of our lives surrounded by the people we love most. Your
            presence and your prayers mean the world to us, and we cannot wait to celebrate this
            blessed evening with you. May Allah fill your homes with the same joy you bring to
            ours.”
          </p>

          <p className="mt-6 font-display text-lg sm:text-xl font-bold italic text-gold-bright">
            Ali Family
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Footer({ onReplay }: { onReplay?: () => void }) {
  return (
    <footer className="relative overflow-hidden px-6 pb-20 pt-16">
      <Aurora className="opacity-75" />
      <img
        src="https://media.invitestory.in/emerald-nikah/images/mandala.png"
        alt=""
        aria-hidden
        loading="lazy"
        width={1024}
        height={1024}
        className="pointer-events-none absolute -bottom-24 left-1/2 w-[160%] -translate-x-1/2 opacity-[0.14] spin-very-slow"
      />
      <img
        src="https://media.invitestory.in/emerald-nikah/images/roses.png"
        alt=""
        aria-hidden
        loading="lazy"
        width={1024}
        height={1024}
        className="float-slow pointer-events-none absolute -right-14 top-4 w-40 opacity-80"
      />
      <div className="relative mx-auto max-w-md text-center">
        <img
          src="https://media.invitestory.in/emerald-nikah/images/divider.png"
          alt=""
          aria-hidden
          loading="lazy"
          width={1024}
          height={512}
          className="mx-auto w-48 opacity-80"
        />

        <Reveal delay={0.1} className="mt-6">
          <p className="font-script text-4xl sm:text-5xl text-gradient-gold">
            Shagufta &amp; Arshad
          </p>
          <p className="mt-3 text-[0.65rem] uppercase tracking-[0.4em] font-medium text-cream/70">
            We await your precious duas &amp; presence
          </p>
        </Reveal>

        {onReplay && (
          <div className="mt-6">
            <button
              type="button"
              onClick={onReplay}
              className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-4 py-2 text-xs text-gold-soft hover:bg-gold/20 transition-all cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Replay Entrance</span>
            </button>
          </div>
        )}

        <div className="gold-rule mx-auto mt-10 w-24" />

        <p className="mt-6 inline-flex items-center gap-1.5 text-[0.62rem] uppercase tracking-[0.3em] text-cream/40">
          Crafted with <Heart className="h-3 w-3 fill-rose text-rose" /> with prayers for our families
        </p>

        <div>
          <a
            href="https://www.instagram.com/invitestory.in/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-[0.62rem] uppercase tracking-[0.35em] text-gold-soft/80 transition-colors hover:text-gold"
          >
            Follow @invitestory.in on Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

function Invitation() {
  const audioRef = useRef<AudioPlayerHandle | null>(null);
  const [doorKey, setDoorKey] = useState(0);

  const handleDoorOpen = () => {
    audioRef.current?.startAudio();
  };

  const handleReplay = () => {
    setDoorKey((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen bg-emerald-deep relative selection:bg-gold selection:text-ink">
      <DoorOpener key={doorKey} onOpen={handleDoorOpen} />
      <ParticlesCanvas />
      <AudioPlayer ref={audioRef} />

      <Hero />
      <FamilyInvitationSection />
      <QuranicVerse />
      <CountdownSection />
      <TimelineSection />
      <Details />
      <FamilyNote />
      <Footer onReplay={handleReplay} />
    </main>
  );
}
