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

// ── Contact Info Items ─────────────────────────────────────────────────────
const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.09 6.09l.99-.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    color: '#F5A623',
    label: 'Phone',
    value: '+92-42-XXXXXXX',
    href: 'tel:+9242XXXXXXX',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: '#4A9EFF',
    label: 'Email',
    value: 'info@brightonschoollahore.edu.pk',
    href: 'mailto:info@brightonschoollahore.edu.pk',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    color: '#34D399',
    label: 'Address',
    value: 'Your Street Address, Lahore, Punjab, Pakistan',
    href: 'https://maps.google.com',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: '#A78BFA',
    label: 'School Hours',
    value: 'Mon – Sat: 7:30 AM – 2:30 PM',
    href: null,
  },
];

// ── Form Field ─────────────────────────────────────────────────────────────
interface FieldProps {
  label: string;
  type?: string;
  placeholder: string;
  textarea?: boolean;
}

const Field: React.FC<FieldProps> = ({ label, type = 'text', placeholder, textarea }) => {
  const [focused, setFocused] = useState(false);
  const base =
    'w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-all duration-300';
  const borderClass = focused ? 'border-[#F5A623]/60' : 'border-white/10';
  const shadow = focused ? '0 0 0 3px rgba(245,166,35,0.12)' : 'none';

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">{label}</label>
      {textarea ? (
        <textarea
          rows={4}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${base} ${borderClass} resize-none`}
          style={{ boxShadow: shadow }}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${base} ${borderClass}`}
          style={{ boxShadow: shadow }}
        />
      )}
    </div>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────
export default function ContactSection() {
  const { ref, inView } = useInView();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 px-6 lg:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #071020 0%, #0A1628 60%, #071020 100%)',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(245,166,35,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Section Heading ── */}
        <div
          className="text-center mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
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
            Get In Touch
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Contact{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #F5A623, #FFD080)' }}
            >
              Us
            </span>
          </h2>
          <p className="text-white/45 max-w-md mx-auto text-sm leading-relaxed">
            Have a question about admissions or our programmes? We'd love to hear from you.
          </p>
        </div>

        {/* ── Three Column Grid ── */}
        <div className="grid lg:grid-cols-[1fr_1.6fr_1fr] gap-8 items-start">

          {/* ══ LEFT — Founder Card ══ */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-32px)',
              transition: 'all 0.65s ease 0.1s',
            }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Founder image */}
              <div
                className="relative w-full h-64"
                style={{
                  background: 'linear-gradient(135deg, #0F2347 0%, #1E3A6E 100%)',
                }}
              >
                <Image
                  src="/founder.png"
                  alt="Founder – Brighton School of Lahore"
                  fill
                  className="object-cover object-top"
                />
                {/* Gradient overlay at bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent 40%, rgba(7,16,32,0.85) 100%)',
                  }}
                />
                {/* Gold badge */}
                <div
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.4)', color: '#F5A623' }}
                >
                  Founder
                </div>
              </div>

              {/* Founder info */}
              <div className="p-5">
                <h3
                  className="text-white font-black text-lg mb-0.5"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  Mr. / Mrs. Founder Name
                </h3>
                <p className="text-[#F5A623] text-xs font-semibold mb-3 uppercase tracking-wider">
                  Founder & Director, BSL
                </p>
                <p className="text-white/45 text-xs leading-relaxed">
                  "Our mission since 1995 has been simple — give every child in Lahore access
                  to world-class education in a caring, values-driven environment."
                </p>

                {/* Divider */}
                <div
                  className="my-4 h-px"
                  style={{ background: 'linear-gradient(90deg, rgba(245,166,35,0.3), transparent)' }}
                />

                {/* Social links */}
                <div className="flex gap-2">
                  {[
                    { label: 'Facebook', href: '#', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                    { label: 'LinkedIn', href: '#', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="p-2 rounded-lg text-white/40 hover:text-[#F5A623] hover:bg-[#F5A623]/10 transition-all duration-200"
                    >
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ══ CENTRE — Contact Form ══ */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(32px)',
              transition: 'all 0.65s ease 0.2s',
            }}
          >
            <div
              className="p-7 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <h3
                className="text-white font-black text-xl mb-6"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Send us a Message
              </h3>

              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(52,211,153,0.15)', border: '2px solid #34D399' }}
                  >
                    <svg width="28" height="28" fill="none" stroke="#34D399" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-lg" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Message Sent!
                  </p>
                  <p className="text-white/45 text-sm">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Your Name" placeholder="e.g. Ahmed Khan" />
                    <Field label="Phone Number" type="tel" placeholder="+92 300 0000000" />
                  </div>
                  <Field label="Email Address" type="email" placeholder="email@example.com" />
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                      Enquiry About
                    </label>
                    <select
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                                 text-white/70 text-sm outline-none transition-all duration-300
                                 focus:border-[#F5A623]/60"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="">Select a topic…</option>
                      <option>Admissions 2026</option>
                      <option>Fee Structure</option>
                      <option>O-Level / A-Level</option>
                      <option>Transport & Facilities</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <Field label="Message" placeholder="Write your message here…" textarea />
                  <button
                    type="submit"
                    className="mt-1 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl
                               font-bold text-sm text-[#0A1628] bg-[#F5A623]
                               hover:bg-[#FFD080] hover:-translate-y-0.5
                               shadow-[0_4px_20px_rgba(245,166,35,0.3)]
                               hover:shadow-[0_4px_28px_rgba(245,166,35,0.5)]
                               transition-all duration-300"
                  >
                    Send Message
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ══ RIGHT — Contact Info ══ */}
          <div
            className="flex flex-col gap-4"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(32px)',
              transition: 'all 0.65s ease 0.3s',
            }}
          >
            {CONTACT_ITEMS.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl group transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = item.color + '44';
                      (e.currentTarget as HTMLAnchorElement).style.background = `${item.color}08`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.07)';
                      (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.03)';
                    }}
                  >
                    <div className="p-2 rounded-lg flex-shrink-0" style={{ background: `${item.color}15`, color: item.color }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-white text-sm font-medium leading-snug">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <div className="p-2 rounded-lg flex-shrink-0" style={{ background: `${item.color}15`, color: item.color }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-white text-sm font-medium leading-snug">{item.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 py-3.5 rounded-xl
                         font-bold text-sm text-white
                         hover:-translate-y-0.5 transition-all duration-300 mt-1"
              style={{
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                boxShadow: '0 4px 20px rgba(37,211,102,0.25)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}