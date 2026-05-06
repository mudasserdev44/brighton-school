'use client';
import React, { useEffect, useRef, useState } from 'react';

// ── Intersection Observer Hook ─────────────────────────────────────────────
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

// ── Data ───────────────────────────────────────────────────────────────────
const PROGRAMS = [
  {
    level: 'Pre-School',
    grades: 'Nursery – KG',
    age: 'Ages 3–5',
    color: '#F5A623',
    description:
      'Play-based learning that sparks curiosity, creativity, and social skills in a warm, safe environment.',
    subjects: ['Phonics & Literacy', 'Numeracy', 'Arts & Crafts', 'Physical Play'],
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" strokeLinecap="round" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    level: 'Primary',
    grades: 'Grade 1–5',
    age: 'Ages 5–10',
    color: '#4A9EFF',
    description:
      'Building strong foundations in literacy, numeracy, science and arts with interactive, project-based methods.',
    subjects: ['English & Urdu', 'Mathematics', 'General Science', 'Islamic Studies', 'Computer Basics'],
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    level: 'Middle School',
    grades: 'Grade 6–8',
    age: 'Ages 10–13',
    color: '#34D399',
    description:
      'Deepening knowledge across disciplines while developing critical thinking, research, and presentation skills.',
    subjects: ['Advanced English', 'Algebra & Geometry', 'Biology, Chemistry, Physics', 'History & Geography', 'ICT'],
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    level: 'Secondary (Matric)',
    grades: 'Grade 9–10',
    age: 'Ages 13–15',
    color: '#A78BFA',
    description:
      'BISE-affiliated Matric program with Science and Arts streams, preparing students for board exams with distinction.',
    subjects: ['Physics, Chemistry, Bio / Maths', 'English & Urdu', 'Pakistan Studies', 'Islamiyat'],
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    level: 'O-Levels',
    grades: 'Grade 9–10',
    age: 'Ages 13–16',
    color: '#F472B6',
    description:
      'Cambridge O-Level programme offering globally recognised qualifications with experienced subject specialists.',
    subjects: ['CAIE O-Level Subjects', 'English Language & Literature', 'Sciences & Maths', 'Humanities'],
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    level: 'A-Levels / FSc',
    grades: 'Grade 11–12',
    age: 'Ages 16–18',
    color: '#F5A623',
    description:
      'University-pathway programmes — Cambridge A-Levels & HSSC FSc — with dedicated university counselling.',
    subjects: ['A-Level Science / Commerce', 'FSc Pre-Medical / Pre-Engineering', 'University Counselling', 'SAT / IELTS Prep'],
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

const FACILITIES = [
  {
    title: 'Science & Computer Labs',
    desc: 'Fully equipped Physics, Chemistry, Biology labs and a modern computer suite with high-speed internet.',
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
      </svg>
    ),
    color: '#4A9EFF',
  },
  {
    title: 'Library & Resource Centre',
    desc: '15,000+ volumes, digital catalogue, reading rooms, and a dedicated research section for senior students.',
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    color: '#34D399',
  },
  {
    title: 'Sports Complex',
    desc: 'Cricket ground, basketball & badminton courts, swimming pool, and a fully equipped fitness gymnasium.',
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
    color: '#F472B6',
  },
  {
    title: 'Arts & Music Studio',
    desc: 'Dedicated spaces for fine arts, calligraphy, drama, and music — because creativity is part of the curriculum.',
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    color: '#A78BFA',
  },
  {
    title: 'Smart Classrooms',
    desc: 'Interactive whiteboards, projectors, and blended-learning tools in every classroom from Grade 1 upward.',
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    color: '#F5A623',
  },
  {
    title: 'Cafeteria & Safe Transport',
    desc: 'Hygienic, canteen with nutritious meals and a fleet of GPS-tracked school buses covering all Lahore routes.',
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    color: '#34D399',
  },
];

// ── Section Divider ────────────────────────────────────────────────────────
const GoldDivider = () => (
  <div className="flex items-center gap-3 mb-4">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#F5A623]/40" />
    <div className="w-2 h-2 rounded-full bg-[#F5A623]" />
    <div className="w-3 h-3 rounded-full border-2 border-[#F5A623]" />
    <div className="w-2 h-2 rounded-full bg-[#F5A623]" />
    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#F5A623]/40" />
  </div>
);

// ── Program Card ───────────────────────────────────────────────────────────
interface ProgramCardProps {
  program: (typeof PROGRAMS)[0];
  index: number;
  inView: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, index, inView }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-default transition-all duration-500"
      style={{
        background: hovered
          ? `linear-gradient(135deg, rgba(${program.color === '#F5A623' ? '245,166,35' : program.color === '#4A9EFF' ? '74,158,255' : program.color === '#34D399' ? '52,211,153' : program.color === '#A78BFA' ? '167,139,250' : '244,114,182'},0.12) 0%, rgba(15,35,71,0.95) 100%)`
          : 'rgba(255,255,255,0.04)',
        border: `1px solid ${hovered ? program.color + '55' : 'rgba(255,255,255,0.08)'}`,
        boxShadow: hovered ? `0 8px 32px ${program.color}22` : 'none',
        transform: inView
          ? hovered ? 'translateY(-6px)' : 'translateY(0)'
          : 'translateY(32px)',
        opacity: inView ? 1 : 0,
        transition: `transform 0.5s ease ${index * 0.08}s, opacity 0.5s ease ${index * 0.08}s, box-shadow 0.3s, background 0.3s, border-color 0.3s`,
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${program.color}, transparent)`, opacity: hovered ? 1 : 0 }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="p-2.5 rounded-xl transition-all duration-300"
            style={{
              background: `${program.color}18`,
              color: program.color,
              boxShadow: hovered ? `0 0 16px ${program.color}44` : 'none',
            }}
          >
            {program.icon}
          </div>
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ background: `${program.color}18`, color: program.color }}
          >
            {program.age}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-black text-white mb-0.5"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {program.level}
        </h3>
        <p className="text-xs font-semibold mb-3" style={{ color: program.color }}>
          {program.grades}
        </p>
        <p className="text-white/55 text-sm leading-relaxed mb-4">{program.description}</p>

        {/* Subjects */}
        <div className="flex flex-wrap gap-1.5">
          {program.subjects.map((s) => (
            <span
              key={s}
              className="text-[10px] px-2 py-0.5 rounded-full font-medium"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Facility Card ──────────────────────────────────────────────────────────
interface FacilityCardProps {
  facility: (typeof FACILITIES)[0];
  index: number;
  inView: boolean;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ facility, index, inView }) => (
  <div
    className="flex gap-4 p-5 rounded-2xl transition-all duration-500 group"
    style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      transform: inView ? 'translateX(0)' : index % 2 === 0 ? 'translateX(-24px)' : 'translateX(24px)',
      opacity: inView ? 1 : 0,
      transition: `transform 0.55s ease ${index * 0.1}s, opacity 0.55s ease ${index * 0.1}s`,
    }}
  >
    <div
      className="flex-shrink-0 p-3 rounded-xl h-fit transition-all duration-300 group-hover:scale-110"
      style={{ background: `${facility.color}15`, color: facility.color }}
    >
      {facility.icon}
    </div>
    <div>
      <h4
        className="text-white font-bold text-base mb-1"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        {facility.title}
      </h4>
      <p className="text-white/50 text-sm leading-relaxed">{facility.desc}</p>
    </div>
  </div>
);

// ── Main Component ─────────────────────────────────────────────────────────
const ProgramsSection: React.FC = () => {
  const programsView = useInView();
  const facilitiesView = useInView();

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #0A1628 0%, #0D1F42 50%, #0A1628 100%)',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* ════════════════════════════════════════════
          SECTION 1 — PROGRAMS & CLASSES
      ════════════════════════════════════════════ */}
      <section
        ref={programsView.ref}
        id="programs"
        className="relative py-24 px-6 lg:px-12 overflow-hidden"
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(74,158,255,0.08) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(245,166,35,0.08) 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <GoldDivider />
            <p className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.25em] mb-3">
              Academic Pathways
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-4"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Programs &{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #F5A623, #FFD080)' }}
              >
                Classes
              </span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
              From Nursery through A-Levels — every stage of your child's journey is guided by
              qualified, passionate educators at BSL.
            </p>
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROGRAMS.map((prog, i) => (
              <ProgramCard
                key={prog.level}
                program={prog}
                index={i}
                inView={programsView.inView}
              />
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-12 text-center"
            style={{
              opacity: programsView.inView ? 1 : 0,
              transform: programsView.inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.5s',
            }}
          >
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm
                         bg-[#F5A623] text-[#0A1628] hover:bg-[#FFD080]
                         shadow-[0_4px_24px_rgba(245,166,35,0.35)]
                         hover:shadow-[0_4px_32px_rgba(245,166,35,0.55)]
                         hover:-translate-y-1 transition-all duration-300"
            >
              Apply for Admission 2026
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          DIVIDER
      ════════════════════════════════════════════ */}
      <div
        className="h-px mx-12 lg:mx-24"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.3), transparent)' }}
      />

      {/* ════════════════════════════════════════════
          SECTION 2 — FACILITIES
      ════════════════════════════════════════════ */}
      <section
        ref={facilitiesView.ref}
        id="facilities"
        className="relative py-24 px-6 lg:px-12 overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 50%, rgba(52,211,153,0.06) 0%, transparent 50%),
                              radial-gradient(circle at 20% 80%, rgba(167,139,250,0.06) 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Two-column layout: heading left, cards right */}
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">

            {/* Left — sticky heading block */}
            <div
              className="lg:sticky lg:top-24"
              style={{
                opacity: facilitiesView.inView ? 1 : 0,
                transform: facilitiesView.inView ? 'translateX(0)' : 'translateX(-32px)',
                transition: 'all 0.6s ease',
              }}
            >
              <GoldDivider />
              <p className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.25em] mb-3">
                World-Class Infrastructure
              </p>
              <h2
                className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Our{' '}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(90deg, #34D399, #4A9EFF)' }}
                >
                  Facilities
                </span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-8">
                BSL's campus is designed to inspire. Every facility — from our science labs to
                sports complex — reflects our commitment to all-round student development.
              </p>

              {/* Mini stat */}
              <div
                className="inline-flex flex-col gap-1 px-6 py-4 rounded-2xl"
                style={{
                  background: 'rgba(245,166,35,0.08)',
                  border: '1px solid rgba(245,166,35,0.2)',
                }}
              >
                <span
                  className="text-4xl font-black text-[#F5A623]"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  20+
                </span>
                <span className="text-white/60 text-sm font-medium">
                  Dedicated facilities across<br />our Lahore campuses
                </span>
              </div>
            </div>

            {/* Right — facilities grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {FACILITIES.map((f, i) => (
                <FacilityCard
                  key={f.title}
                  facility={f}
                  index={i}
                  inView={facilitiesView.inView}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsSection;