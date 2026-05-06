'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

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

const MILESTONES = [
  { year: '1995', title: 'School Founded', desc: 'Brighton School of Lahore opened its doors with just 3 classrooms and a vision.' },
  { year: '2003', title: 'O-Level Wing', desc: 'Cambridge O-Level programme launched, bringing international curriculum to Lahore.' },
  { year: '2010', title: 'New Campus', desc: 'Expanded to a purpose-built campus with modern labs, library and sports complex.' },
  { year: '2018', title: 'A-Level & FSc', desc: 'Senior section introduced — offering both Cambridge A-Levels and HSSC FSc streams.' },
  { year: '2024', title: '5000+ Students', desc: 'Crossed the milestone of 5,000 enrolled students across all classes.' },
];

const VALUES = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    color: '#F5A623',
    title: 'Integrity',
    desc: 'Honesty and character are the foundation of everything we do at BSL.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    color: '#4A9EFF',
    title: 'Excellence',
    desc: 'We set high academic standards and support every student to reach them.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: '#34D399',
    title: 'Community',
    desc: 'BSL is more than a school — it is a family of students, parents and teachers.',
  },
];

export default function AboutSection() {
  const headingView = useInView();
  const founderView = useInView();
  const timelineView = useInView();
  const valuesView = useInView();

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A1628 0%, #0D1F42 40%, #0A1628 100%)',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(74,158,255,0.07) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 20% 80%, rgba(245,166,35,0.06) 0%, transparent 60%)' }} />

      {/* ════════════════════════════
          PART 1 — Intro + Founder
      ════════════════════════════ */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-24 pb-20">

        {/* Heading */}
        <div
          ref={headingView.ref}
          className="text-center mb-16"
          style={{
            opacity: headingView.inView ? 1 : 0,
            transform: headingView.inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.6s ease',
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#F5A623]/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
            <div className="w-2.5 h-2.5 rounded-full border-2 border-[#F5A623]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#F5A623]/60" />
          </div>
          <p className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Our Story
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            About{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #F5A623, #FFD080)' }}
            >
              Brighton School
            </span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-sm leading-relaxed">
            For over 30 years, BSL has been Lahore's trusted name in quality education —
            shaping confident, capable, and compassionate young people.
          </p>
        </div>

        {/* Founder + Mission two-column */}
        <div
          ref={founderView.ref}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT — Founder Image */}
          <div
            style={{
              opacity: founderView.inView ? 1 : 0,
              transform: founderView.inView ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.7s ease',
            }}
          >
            {/* Gold gradient border */}
            <div
              className="relative p-[2px] rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, #F5A623 0%, #1E3A6E 50%, #F5A623 100%)',
                boxShadow: '0 0 60px rgba(245,166,35,0.2), 0 0 120px rgba(30,58,110,0.3)',
              }}
            >
              <div className="relative rounded-[22px] overflow-hidden bg-[#0F2347]">
                {/* Image */}
                <div className="relative w-full h-[420px] md:h-[480px]">
                  <Image
                    src="/founder.png"
                    alt="Founder – Brighton School of Lahore"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Bottom gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 45%, rgba(7,16,32,0.92) 100%)',
                    }}
                  />
                  {/* Bottom name plate */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div
                      className="px-4 py-3 rounded-xl backdrop-blur-md"
                      style={{ background: 'rgba(10,22,40,0.7)', border: '1px solid rgba(245,166,35,0.25)' }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse" />
                        <span className="text-[#F5A623] text-[10px] font-bold uppercase tracking-widest">
                          Founder & Director
                        </span>
                      </div>
                      <p
                        className="text-white font-black text-lg leading-tight"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        Mr. / Mrs. Founder Name
                      </p>
                      <p className="text-white/50 text-xs mt-0.5">Brighton School of Lahore · Est. 1995</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating A+ badge */}
            <div
              className="absolute -translate-y-[300px] translate-x-4
                         w-16 h-16 rounded-2xl hidden md:flex flex-col items-center justify-center
                         rotate-[-8deg] hover:rotate-0 transition-transform duration-300"
              style={{
                background: '#F5A623',
                color: '#0A1628',
                boxShadow: '0 8px 24px rgba(245,166,35,0.45)',
              }}
            >
              <span className="text-xl font-black leading-none" style={{ fontFamily: "'Nunito', sans-serif" }}>A+</span>
              <span className="text-[8px] font-bold uppercase tracking-wider">Results</span>
            </div>
          </div>

          {/* RIGHT — Mission / Vision / Message */}
          <div
            className="flex flex-col gap-6"
            style={{
              opacity: founderView.inView ? 1 : 0,
              transform: founderView.inView ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 0.7s ease 0.15s',
            }}
          >
            {/* Founder quote */}
            <div
              className="relative p-6 rounded-2xl"
              style={{
                background: 'rgba(245,166,35,0.06)',
                border: '1px solid rgba(245,166,35,0.2)',
              }}
            >
              {/* Big quote mark */}
              <span
                className="absolute -top-4 left-5 text-6xl leading-none text-[#F5A623] opacity-40 select-none"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                "
              </span>
              <p className="text-white/70 text-base leading-relaxed italic mt-2">
                Our mission since 1995 has been simple — give every child in Lahore access to
                world-class education in a caring, values-driven environment. We don't just
                build careers, we build character.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-[#F5A623]/40 to-transparent" />
                <span className="text-[#F5A623] text-xs font-bold uppercase tracking-widest">
                  Founder's Message
                </span>
              </div>
            </div>

            {/* Mission */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#4A9EFF]" />
                <span className="text-[#4A9EFF] text-xs font-bold uppercase tracking-widest">Our Mission</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                To provide affordable, high-quality education that develops intellectual
                curiosity, ethical values, and the practical skills students need to thrive
                in a rapidly changing world.
              </p>
            </div>

            {/* Vision */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#34D399]" />
                <span className="text-[#34D399] text-xs font-bold uppercase tracking-widest">Our Vision</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                To be Lahore's most trusted school — where every student graduates not just
                with top grades, but with the confidence, compassion, and character to lead.
              </p>
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: '1995', label: 'Est.' },
                { val: '5000+', label: 'Students' },
                { val: '30+', label: 'Years' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center py-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span
                    className="text-2xl font-black text-[#F5A623]"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {s.val}
                  </span>
                  <span className="text-white/40 text-[10px] font-semibold uppercase tracking-wider mt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Thin divider */}
      <div
        className="h-px mx-12 lg:mx-24"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.25), transparent)' }}
      />

      {/* ════════════════════════════
          PART 2 — Timeline
      ════════════════════════════ */}
      <div
        ref={timelineView.ref}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-20"
      >
        <div
          className="text-center mb-12"
          style={{
            opacity: timelineView.inView ? 1 : 0,
            transform: timelineView.inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}
        >
          <p className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em] mb-2">
            30 Years of Growth
          </p>
          <h3
            className="text-3xl font-black text-white"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Our Journey
          </h3>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Centre vertical line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden lg:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(245,166,35,0.3), transparent)' }}
          />

          <div className="flex flex-col gap-8">
            {MILESTONES.map((m, i) => (
              <div
                key={m.year}
                className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                style={{
                  opacity: timelineView.inView ? 1 : 0,
                  transform: timelineView.inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease ${i * 0.1}s`,
                }}
              >
                {/* Card */}
                <div
                  className="flex-1 p-5 rounded-2xl max-w-xs lg:max-w-none"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <h4
                    className="text-white font-bold text-base mb-1"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {m.title}
                  </h4>
                  <p className="text-white/45 text-sm leading-relaxed">{m.desc}</p>
                </div>

                {/* Year bubble — centre */}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center z-10"
                  style={{
                    background: 'linear-gradient(135deg, #F5A623, #E8920F)',
                    boxShadow: '0 4px 20px rgba(245,166,35,0.35)',
                  }}
                >
                  <span
                    className="text-[#0A1628] font-black text-sm"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {m.year}
                  </span>
                </div>

                {/* Empty side spacer on desktop */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Thin divider */}
      <div
        className="h-px mx-12 lg:mx-24"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.25), transparent)' }}
      />

      {/* ════════════════════════════
          PART 3 — Core Values
      ════════════════════════════ */}
      <div
        ref={valuesView.ref}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-20"
      >
        <div
          className="text-center mb-12"
          style={{
            opacity: valuesView.inView ? 1 : 0,
            transform: valuesView.inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}
        >
          <p className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em] mb-2">
            What We Stand For
          </p>
          <h3
            className="text-3xl font-black text-white"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Our Core Values
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className="p-6 rounded-2xl text-center group transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                opacity: valuesView.inView ? 1 : 0,
                transform: valuesView.inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s, box-shadow 0.3s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 28px ${v.color}18`;
                (e.currentTarget as HTMLDivElement).style.borderColor = `${v.color}33`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              <div
                className="mx-auto mb-4 p-3 rounded-xl w-fit"
                style={{ background: `${v.color}15`, color: v.color }}
              >
                {v.icon}
              </div>
              <h4
                className="text-white font-black text-lg mb-2"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {v.title}
              </h4>
              <p className="text-white/45 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}