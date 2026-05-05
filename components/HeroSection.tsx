'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

// ── Animated counter hook ──────────────────────────────────────────────────
function useCounter(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ── Trust Badge ────────────────────────────────────────────────────────────
const TrustBadge: React.FC = () => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                  border border-[#F5A623]/40 bg-[#F5A623]/10 backdrop-blur-sm
                  text-[#F5A623] text-sm font-semibold tracking-wide">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
    Established 1995 · Lahore's Premier School
  </div>
);

// ── Stat Card ──────────────────────────────────────────────────────────────
interface StatProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  started: boolean;
}

const StatCard: React.FC<StatProps> = ({ value, suffix, label, icon, started }) => {
  const count = useCounter(value, 2000, started);
  return (
    <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl
                    bg-white/5 border border-white/10 backdrop-blur-sm
                    hover:bg-white/10 hover:border-[#F5A623]/40
                    transition-all duration-300 group flex-1 min-w-[120px]">
      <div className="text-[#F5A623] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-white font-black text-lg leading-none" style={{ fontFamily: "'Nunito', sans-serif" }}>
          {count}{suffix}
        </div>
        <div className="text-white/50 text-[10px] font-medium mt-0.5 uppercase tracking-wider leading-tight">
          {label}
        </div>
      </div>
    </div>
  );
};

// ── Main Hero Component ────────────────────────────────────────────────────
const HeroSection: React.FC = () => {
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStatsStarted(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A1628 0%, #0F2347 30%, #1E3A6E 60%, #0D2240 100%)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* ── Grid Lines Background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,166,35,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,166,35,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Radial glow centre ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(43,78,155,0.45) 0%, transparent 70%)",
        }}
      />

      {/* ── Gold corner glows ── */}
      <div className="absolute top-0 left-0 w-80 h-80 pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle at 0% 0%, #F5A623 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle at 100% 100%, #F5A623 0%, transparent 60%)" }} />

      {/* ── Floating dots ── */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#F5A623] opacity-20 animate-pulse"
          style={{
            width: `${[6, 4, 8, 3, 5, 4][i]}px`,
            height: `${[6, 4, 8, 3, 5, 4][i]}px`,
            top: `${[15, 70, 30, 80, 20, 55][i]}%`,
            left: `${[5, 90, 80, 12, 50, 95][i]}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${2 + i * 0.4}s`,
          }}
        />
      ))}

      {/* ── Two-column flex layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20
                      flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* ══ LEFT — Text Content ══ */}
        <div className="flex-1 flex flex-col items-start text-left">

          {/* Trust badge */}
          <div className="mb-6">
            <TrustBadge />
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4
                       drop-shadow-[0_2px_24px_rgba(0,0,0,0.4)]"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Shaping Tomorrow's
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #F5A623, #FFD080, #F5A623)" }}
            >
              Leaders Today
            </span>
          </h1>

          {/* School name */}
          <span
            className="text-xl md:text-2xl font-black tracking-widest uppercase
                       text-transparent bg-clip-text mb-5"
            style={{
              backgroundImage: "linear-gradient(90deg, #60A5FA, #93C5FD, #60A5FA)",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Brighton School of Lahore
          </span>

          {/* Subtext */}
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mb-8 font-medium">
            A legacy of academic excellence, character building, and holistic development.
            Nurturing curious minds from Primary through A-Levels in the heart of Lahore.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-3 mb-10">
            <a
              href="#admissions"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl
                         bg-white text-[#1E3A6E] font-bold text-sm
                         hover:bg-[#F5A623] hover:text-white
                         shadow-[0_4px_24px_rgba(255,255,255,0.2)]
                         hover:shadow-[0_4px_28px_rgba(245,166,35,0.45)]
                         hover:-translate-y-1 transition-all duration-300"
            >
              Apply for Admission
              <svg
                width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#about"
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl
                         border-2 border-white/30 text-white font-bold text-sm
                         hover:border-[#F5A623] hover:bg-[#F5A623]/10
                         hover:-translate-y-1 backdrop-blur-sm
                         transition-all duration-300"
            >
              Explore Our School
            </a>
          </div>

          {/* Stats — 2x2 grid */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-md">
            <StatCard
              value={5000} suffix="+" label="Students Enrolled"
              started={statsStarted}
              icon={
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />
            <StatCard
              value={150} suffix="+" label="Qualified Faculty"
              started={statsStarted}
              icon={
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              }
            />
            <StatCard
              value={30} suffix="+" label="Years of Excellence"
              started={statsStarted}
              icon={
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              }
            />
            <StatCard
              value={98} suffix="%" label="Board Pass Rate"
              started={statsStarted}
              icon={
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              }
            />
          </div>
        </div>

        {/* ══ RIGHT — Image ══ */}
        <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
          {/* Outer glow ring */}
          <div
            className="relative p-1 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, #F5A623 0%, #1E3A6E 50%, #F5A623 100%)",
              boxShadow: "0 0 60px rgba(245,166,35,0.25), 0 0 120px rgba(30,58,110,0.4)",
            }}
          >
            {/* Inner border frame */}
            <div className="relative rounded-[22px] overflow-hidden
                            border-2 border-white/10
                            w-[340px] h-[420px] md:w-[400px] md:h-[480px] lg:w-[440px] lg:h-[520px]">

              {/* Actual image */}
              <Image
                src="/main.png"
                alt="Brighton School of Lahore Campus"
                fill
                className="object-cover"
                priority
              />

              {/* Subtle overlay gradient on image */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, transparent 50%, rgba(10,22,40,0.6) 100%)",
                }}
              />

              {/* Bottom label on image */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl
                                bg-black/40 backdrop-blur-md border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse flex-shrink-0" />
                  <span className="text-white text-xs font-semibold tracking-wide">
                    Brighton School of Lahore · Admissions Open 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge — top right of image */}
          <div
            className="absolute translate-x-[160px] -translate-y-[200px]
                       lg:translate-x-[180px] lg:-translate-y-[220px]
                       hidden md:flex flex-col items-center justify-center
                       w-20 h-20 rounded-2xl
                       bg-[#F5A623] text-[#1E3A6E]
                       shadow-[0_8px_24px_rgba(245,166,35,0.5)]
                       rotate-6 hover:rotate-0 transition-transform duration-300"
          >
            <span className="text-2xl font-black leading-none" style={{ fontFamily: "'Nunito', sans-serif" }}>A+</span>
            <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5">Results</span>
          </div>
        </div>

      </div>

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(10,22,40,0.7))" }}
      />

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;