import React from "react";
import Image from "next/image";
import Link from "next/link";

// ── Types ──────────────────────────────────────────────────────────────────
interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

// ── Data ───────────────────────────────────────────────────────────────────
const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Academics",
    links: [
      { label: "Primary School", href: "#" },
      { label: "Middle School", href: "#" },
      { label: "High School", href: "#" },
      { label: "O Levels", href: "#" },
      { label: "A Levels", href: "#" },
      { label: "Extra-Curricular", href: "#" },
    ],
  },
  {
    title: "School",
    links: [
      { label: "About Us", href: "#" },
      { label: "Our Faculty", href: "#" },
      { label: "Admissions", href: "#" },
      { label: "Careers", href: "#" },
      { label: "News & Events", href: "#" },
      { label: "Gallery", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "help-center" },
      { label: "Fee Structure", href: "#" },
      { label: "Parent Portal", href: "#" },
      { label: "Privacy Policy", href: "privacy-policy" },
      { label: "Terms of Use", href: "terms" },
      { label: "Accessibility", href: "#" },
    ],
  },
];

// ── Social Icons ───────────────────────────────────────────────────────────
const FacebookIcon: React.FC = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XIcon: React.FC = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YouTubeIcon: React.FC = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0D1B2A" />
  </svg>
);

const InstagramIcon: React.FC = () => (
  <svg
    width="15"
    height="15"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const AppleIcon: React.FC = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const AndroidIcon: React.FC = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0729L4.841 5.4207a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 10.891 1.0067 13.1318.3987 15.8a.4149.4149 0 00.4072.5011h22.3878a.4154.4154 0 00.4072-.5011c-.6079-2.6682-2.2902-4.9090-5.708-6.4797" />
  </svg>
);

// ── Social Button ──────────────────────────────────────────────────────────
interface SocialButtonProps {
  href?: string;
  label: string;
  children: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href = "#", label, children }) => (
  <a
    href={href}
    aria-label={label}
    className="w-9 h-9 rounded-lg flex items-center justify-center
               bg-[#12243A] border border-[#1E3A6E] text-[#8FA3C0]
               hover:bg-[#2B4E9B] hover:text-white hover:border-[#2B4E9B]
               transition-all duration-200"
  >
    {children}
  </a>
);

// ── App Badge ──────────────────────────────────────────────────────────────
interface AppBadgeProps {
  label: string;
  icon: React.ReactNode;
  href?: string;
}

const AppBadge: React.FC<AppBadgeProps> = ({ label, icon, href = "#" }) => (
  <a
    href={href}
    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg
               bg-[#12243A] border border-[#1E3A6E] text-[#B0C4DE]
               text-xs font-semibold
               hover:border-[#F5A623] hover:text-[#F5A623]
               transition-all duration-200"
  >
    {icon}
    {label}
  </a>
);

// ── Footer Component ───────────────────────────────────────────────────────
const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[#0D1B2A] text-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Gold top border */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#1E3A6E] via-[#F5A623] to-[#1E3A6E]" />

      {/* ── Main Grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-10 lg:gap-12">

          {/* Brand Column */}
          <div>
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 mb-4 group w-fit">
              <div className="relative w-11 h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/BSL.png"
                  alt="Brighton School of Lahore Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className="text-[20px] font-black text-white tracking-wide"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  BSL
                </span>
                <span className="text-[10px] font-semibold text-[#F5A623] tracking-wider uppercase">
                  Brighton School of Lahore
                </span>
              </div>
            </a>

            {/* Tagline */}
            <p className="text-[13.5px] text-[#8FA3C0] leading-[1.75] mb-6 max-w-[280px]">
              Nurturing excellence in education. Empowering students across Lahore
              to reach their highest potential since our founding.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              <SocialButton label="Facebook"><FacebookIcon /></SocialButton>
              <SocialButton label="Twitter / X"><XIcon /></SocialButton>
              <SocialButton label="YouTube"><YouTubeIcon /></SocialButton>
              <SocialButton label="Instagram"><InstagramIcon /></SocialButton>
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4
                className="text-[11px] font-extrabold uppercase tracking-[1.4px]
                           text-[#F5A623] mb-5"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-[10px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] font-medium text-[#8FA3C0]
                                 hover:text-white hover:pl-1
                                 transition-all duration-200 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-[#1E3A6E]">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8 py-5
                     flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-[12.5px] text-[#5A7096] font-medium text-center sm:text-left">
            © {new Date().getFullYear()} Brighton School of Lahore. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[12px] text-[#5A7096] font-medium">Available on:</span>
            <AppBadge label="iOS" icon={<AppleIcon />} />
            <AppBadge label="Android" icon={<AndroidIcon />} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;