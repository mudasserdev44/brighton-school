'use client';
import React, { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const REASONS = [
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    color: '#F5A623',
    title: '30+ Years of Trust',
    desc: 'Established in 1995, thousands of BSL alumni are today&apos;s doctors, engineers, and leaders across Pakistan and abroad.',
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    color: '#4A9EFF',
    title: '98% Board Pass Rate',
    desc: 'Consistent top results in BISE Lahore and Cambridge exams — year after year, our students shine.',
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: '#34D399',
    title: 'Qualified Faculty',
    desc: '150+ experienced, subject-specialist teachers who genuinely invest in every &apos;s growth and confidence.',
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    color: '#A78BFA',
    title: 'Modern Learning',
    desc: 'Smart classrooms, digital resources, and blended-learning methods that make education engaging and effective.',
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    color: '#F472B6',
    title: 'Safe & Nurturing Campus',
    desc: 'CCTV-monitored, secure premises with a warm community culture where every child feels welcomed and valued.',
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    color: '#F5A623',
    title: 'Holistic Development',
    desc: 'Sports, arts, debates, and co-curricular clubs — because great character matters as much as great grades.',
  },
];

export default function WhyBSL() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      id="why-bsl"
      className="relative py-24 px-6 lg:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A1628 0%, #071020 100%)',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Subtle bg glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,166,35,0.05) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <div
          className="text-center mb-16"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease' }}
        >
          {/* Gold line + dots */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#F5A623]/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
            <div className="w-2.5 h-2.5 rounded-full border-2 border-[#F5A623]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#F5A623]/60" />
          </div>

          <p className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            The BSL Difference
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Why Choose{' '}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #F5A623, #FFD080)' }}>
              BSL?
            </span>
          </h2>
          <p className="text-white/45 max-w-lg mx-auto text-sm leading-relaxed">
            Parents across Lahore choose Brighton School because we deliver on our promise —
            every single year.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className="group relative p-6 rounded-2xl transition-all duration-500 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.5s ease ${i * 0.09}s, transform 0.5s ease ${i * 0.09}s, box-shadow 0.3s, border-color 0.3s, background 0.3s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = r.color + '44';
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 28px ${r.color}18`;
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${r.color}, transparent)` }} />

              {/* Icon */}
              <div className="mb-4 p-2.5 rounded-xl w-fit"
                style={{ background: `${r.color}15`, color: r.color }}>
                {r.icon}
              </div>

              <h3
                className="text-white font-bold text-base mb-2"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {r.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6
                     px-8 py-6 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(245,166,35,0.08) 0%, rgba(30,58,110,0.3) 100%)',
            border: '1px solid rgba(245,166,35,0.2)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.55s',
          }}
        >
          <div>
            <p
              className="text-white font-black text-lg"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Ready to join the BSL family?
            </p>
            <p className="text-white/45 text-sm mt-0.5">Admissions open for 2026 — limited seats available.</p>
          </div>
          <a
            href="#admissions"
            className="flex-shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-xl
                       bg-[#F5A623] text-[#0A1628] font-bold text-sm
                       hover:bg-[#FFD080] hover:-translate-y-0.5
                       shadow-[0_4px_20px_rgba(245,166,35,0.35)]
                       transition-all duration-300"
          >
            Apply Now
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}