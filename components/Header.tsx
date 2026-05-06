'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#" },
  { label: "Admissions", href: "#" },
  { label: "Faculty", href: "#" },
  { label: "About", href: "about-us" },
  { label: "Contact", href: "contact-us" },
];

const SearchIcon: React.FC = () => (
  <svg
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const MenuIcon: React.FC = () => (
  <svg
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 bg-white border-b-[3px] border-[#F5A623]
        transition-shadow duration-300
        ${scrolled ? "shadow-[0_4px_24px_rgba(30,58,110,0.12)]" : "shadow-none"}
      `}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Top accent stripe */}
      <div className="h-1 w-full bg-gradient-to-r from-[#1E3A6E] via-[#F5A623] to-[#1E3A6E]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-36 h-36 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/BSLB.png"
                alt="Brighton School of Lahore Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              {/* <span
                className="text-[22px] font-black text-[#1E3A6E] tracking-wide"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                BSL
              </span> */}
              {/* <span className="text-[10px] font-semibold text-[#F5A623] tracking-wider uppercase">
                Brighton School of Lahore
              </span> */}
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveNav(item.label)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-semibold tracking-wide
                  transition-all duration-200
                  ${
                    activeNav === item.label
                      ? "bg-[#1E3A6E] text-white shadow-md"
                      : "text-[#1E3A6E] hover:bg-[#EEF3FB] hover:text-[#2B4E9B]"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop Actions ── */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search */}
            <button
              aria-label="Search"
              className="w-9 h-9 rounded-lg flex items-center justify-center
                         text-[#1E3A6E] hover:bg-[#EEF3FB]
                         transition-colors duration-200"
            >
              <SearchIcon />
            </button>

            {/* Sign In */}
            <button
              className="px-5 py-2 rounded-lg text-sm font-semibold
                         border-2 border-[#1E3A6E] text-[#1E3A6E]
                         hover:bg-[#1E3A6E] hover:text-white
                         transition-all duration-200"
            >
              Sign In
            </button>

            {/* Enroll Now */}
            <button
              className="px-5 py-2 rounded-lg text-sm font-bold
                         bg-[#F5A623] text-[#1E3A6E]
                         hover:bg-[#e09510] hover:-translate-y-0.5
                         shadow-[0_2px_10px_rgba(245,166,35,0.4)]
                         hover:shadow-[0_4px_18px_rgba(245,166,35,0.5)]
                         transition-all duration-200"
            >
              Enroll Now
            </button>
          </div>

          {/* ── Mobile Menu Button ── */}
          <button
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center
                       text-[#1E3A6E] hover:bg-[#EEF3FB] transition-colors duration-200"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown ── */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300
          ${mobileOpen ? "max-h-[500px] border-t border-[#EEF3FB]" : "max-h-0"}
        `}
      >
        <nav
          className="px-6 py-4 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveNav(item.label);
                setMobileOpen(false);
              }}
              className={`
                px-4 py-3 rounded-lg text-sm font-semibold
                transition-all duration-200
                ${
                  activeNav === item.label
                    ? "bg-[#1E3A6E] text-white"
                    : "text-[#1E3A6E] hover:bg-[#EEF3FB]"
                }
              `}
            >
              {item.label}
            </Link >
          ))}

          <div className="flex gap-3 mt-3 pt-3 border-t border-[#EEF3FB]">
            <button
              className="flex-1 py-2.5 rounded-lg text-sm font-semibold
                         border-2 border-[#1E3A6E] text-[#1E3A6E]
                         hover:bg-[#1E3A6E] hover:text-white transition-all duration-200"
            >
              Sign In
            </button>
            <button
              className="flex-1 py-2.5 rounded-lg text-sm font-bold
                         bg-[#F5A623] text-[#1E3A6E]
                         hover:bg-[#e09510] transition-all duration-200"
            >
              Enroll Now
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;