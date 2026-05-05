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

// ── Badge pill ─────────────────────────────────────────────────────────────
const TrustBadge: React.FC = () => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                  border border-[#F5A623]/40 bg-[#F5A623]/10 backdrop-blur-sm
                  text-[#F5A623] text-sm font-semibold tracking-wide
                  animate-fade-in-down">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
    Established 1995 · Lahore's Premier School
  </div>
);

// ── Stat card ──────────────────────────────────────────────────────────────
interface StatProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  started: boolean;
  delay?: number;
}

const StatCard: React.FC<StatProps> = ({ value, suffix, label, icon, started, delay = 0 }) => {
  const count = useCounter(value, 2000, started);
  return (
    <div
      className="flex items-center gap-3 px-5 py-3 rounded-2xl
                 bg-white/5 border border-white/10 backdrop-blur-sm
                 hover:bg-white/10 hover:border-[#F5A623]/40
                 transition-all duration-300 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-[#F5A623] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <div className="text-white font-black text-xl leading-none" style={{ fontFamily: "'Nunito', sans-serif" }}>
          {count}{suffix}
        </div>
        <div className="text-white/50 text-[11px] font-medium mt-0.5 uppercase tracking-wider">{label}</div>
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
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
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(43,78,155,0.55) 0%, transparent 70%)",
        }}
      />

      {/* ── Gold corner accents ── */}
      <div className="absolute top-0 left-0 w-72 h-72 pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle at 0% 0%, #F5A623 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle at 100% 100%, #F5A623 0%, transparent 60%)" }} />

      {/* ── Floating dots decoration ── */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#F5A623] opacity-20 animate-pulse"
          style={{
            width: `${[6, 4, 8, 3, 5, 4][i]}px`,
            height: `${[6, 4, 8, 3, 5, 4][i]}px`,
            top: `${[15, 70, 30, 80, 20, 55][i]}%`,
            left: `${[10, 85, 75, 15, 50, 92][i]}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${2 + i * 0.4}s`,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 text-center py-24">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20 drop-shadow-[0_0_20px_rgba(245,166,35,0.4)]
                          hover:scale-105 transition-transform duration-300">
            <Image
              src="/BSL.png"
              alt="Brighton School of Lahore"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Trust badge */}
        <div className="flex justify-center mb-8">
          <TrustBadge />
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-4
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

        {/* School name pill */}
        <div className="flex justify-center mb-6">
          <span
            className="text-2xl md:text-3xl font-black tracking-widest uppercase
                       text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #60A5FA, #93C5FD, #60A5FA)",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Brighton School of Lahore
          </span>
        </div>

        {/* Subtext */}
        <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
          A legacy of academic excellence, character building, and holistic development.
          Nurturing curious minds from Primary through A-Levels in the heart of Lahore.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#admissions"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl
                       bg-white text-[#1E3A6E] font-bold text-base
                       hover:bg-[#F5A623] hover:text-white
                       shadow-[0_4px_24px_rgba(255,255,255,0.2)]
                       hover:shadow-[0_4px_28px_rgba(245,166,35,0.45)]
                       hover:-translate-y-1
                       transition-all duration-300 min-w-[200px] justify-center"
          >
            Apply for Admission
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform duration-200">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="#about"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl
                       border-2 border-white/30 text-white font-bold text-base
                       hover:border-[#F5A623] hover:bg-[#F5A623]/10
                       hover:-translate-y-1
                       backdrop-blur-sm
                       transition-all duration-300 min-w-[200px] justify-center"
          >
            Explore Our School
          </a>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <StatCard
            value={5000}
            suffix="+"
            label="Students Enrolled"
            started={statsStarted}
            delay={0}
            icon={
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />
          <StatCard
            value={150}
            suffix="+"
            label="Qualified Faculty"
            started={statsStarted}
            delay={100}
            icon={
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            }
          />
          <StatCard
            value={30}
            suffix="+"
            label="Years of Excellence"
            started={statsStarted}
            delay={200}
            icon={
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            }
          />
          <StatCard
            value={98}
            suffix="%"
            label="Board Pass Rate"
            started={statsStarted}
            delay={300}
            icon={
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            }
          />
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(10,22,40,0.6))" }}
      />

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;