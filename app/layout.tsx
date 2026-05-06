import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ─── BASE URL ───────────────────────────────────────────────────────────────
const BASE_URL = "https://www.brightonlahore.pk"; // ← apna domain yahan daalein

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  title: {
    default: "BSL – Brighton School of Lahore | Best School in Lahore",
    template: "%s | Brighton School of Lahore (BSL)",
  },
  description:
    "Brighton School of Lahore (BSL) – ایک بہترین تعلیمی ادارہ۔ Discover exceptional education at BSL. Academic excellence, innovative teaching, and a nurturing environment in Lahore, Pakistan.",

  // ── Keywords (helps older crawlers & Bing) ─────────────────────────────
  keywords: [
    "Brighton School Lahore",
    "Brighton School of Lahore",
    "BSL Lahore",
    "BSL school",
    "best school in Lahore",
    "top school Lahore",
    "Brighton School Pakistan",
    "BSL Pakistan",
    "admission Brighton School Lahore",
    "Brighton school fees Lahore",
    "O level school Lahore",
    "A level school Lahore",
    "private school Lahore",
    "بریٹن سکول لاہور",
  ],

  // ── Canonical ─────────────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Authors / Publisher ───────────────────────────────────────────────
  authors: [{ name: "Brighton School of Lahore", url: BASE_URL }],
  publisher: "Brighton School of Lahore",
  creator: "Brighton School of Lahore",

  // ── Open Graph (Facebook, WhatsApp, LinkedIn previews) ────────────────
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: BASE_URL,
    siteName: "Brighton School of Lahore",
    title: "BSL – Brighton School of Lahore | Best School in Lahore",
    description:
      "Discover exceptional education at Brighton School of Lahore (BSL). Academic excellence, innovative teaching methods, and a nurturing environment for every student.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`, // ← 1200×630 image apne /public folder mein rakhein
        width: 1200,
        height: 630,
        alt: "Brighton School of Lahore – BSL Campus",
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "BSL – Brighton School of Lahore",
    description:
      "Academic excellence, innovative teaching, and a nurturing environment at Brighton School of Lahore.",
    images: [`${BASE_URL}/og-image.jpg`],
    // site: "@BSLLahore",   // ← school ka Twitter handle ho tw uncomment karein
  },

  // ── Robots ───────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verification (Google / Bing Search Console mein milega) ──────────
  // verification: {
  //   google: "PASTE_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
  //   other: { "msvalidate.01": "PASTE_YOUR_BING_CODE_HERE" },
  // },

  // ── Icons ─────────────────────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // ── Manifest (PWA) ────────────────────────────────────────────────────
  manifest: "/site.webmanifest",

  // ── App-specific meta ─────────────────────────────────────────────────
  applicationName: "Brighton School of Lahore",
  category: "education",
};

// ─── STRUCTURED DATA (JSON-LD) ────────────────────────────────────────────────
// Google is krka school ko Knowledge Panel mein dikhata hai
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Brighton School of Lahore",
  alternateName: ["BSL", "BSL Lahore", "Brighton School Lahore"],
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/og-image.jpg`,
  description:
    "Brighton School of Lahore (BSL) offers exceptional education with a commitment to academic excellence, innovative teaching methods, and a nurturing environment.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Palm City Lahore", // ← apna address daalein
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    postalCode: "54000",
    addressCountry: "PK",
  },
  telephone: "+923169012297", // ← apna number daalein
  email: "smudasser36@gmail.com",
  sameAs: [
    // ← apne social media links daalein
    // "https://www.facebook.com/BSLLahore",
    // "https://www.instagram.com/BSLLahore",
    // "https://twitter.com/BSLLahore",
  ],
};

// ─── ROOT LAYOUT ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD Structured Data – School schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Geo tags – local SEO ke liye */}
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lahore" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}