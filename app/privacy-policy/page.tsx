'use client'
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section
      className="min-h-screen py-20 px-6 lg:px-12"
      style={{
        background: "linear-gradient(135deg, #0A1628 0%, #0F2347 30%, #1E3A6E 60%, #0D2240 100%)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Background Grid */}
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

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-black text-white mb-6"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Privacy Policy
        </h1>

        <p className="text-white/60 mb-10">
          Last Updated: January 2026
        </p>

        {/* Content Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-md space-y-8">

          {/* Section */}
          <div>
            <h2 className="text-xl font-bold text-[#F5A623] mb-2">
              1. Introduction
            </h2>
            <p className="text-white/70 leading-relaxed">
              Brighton School of Lahore is committed to protecting the privacy of students,
              parents, and visitors. This Privacy Policy explains how we collect, use,
              and safeguard your information.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl font-bold text-[#F5A623] mb-2">
              2. Information We Collect
            </h2>
            <p className="text-white/70 leading-relaxed">
              We may collect personal information such as student names, parent details,
              contact numbers, email addresses, and academic records when you interact
              with our website or apply for admission.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl font-bold text-[#F5A623] mb-2">
              3. How We Use Information
            </h2>
            <ul className="text-white/70 space-y-2 list-disc pl-5">
              <li>To process admissions and inquiries</li>
              <li>To communicate with parents and students</li>
              <li>To improve our services and website experience</li>
              <li>To maintain academic records</li>
            </ul>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl font-bold text-[#F5A623] mb-2">
              4. Data Protection
            </h2>
            <p className="text-white/70 leading-relaxed">
              We implement strict security measures to protect your data from unauthorized
              access, misuse, or disclosure.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl font-bold text-[#F5A623] mb-2">
              5. Cookies
            </h2>
            <p className="text-white/70 leading-relaxed">
              Our website may use cookies to enhance user experience and analyze website traffic.
              You can choose to disable cookies in your browser settings.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl font-bold text-[#F5A623] mb-2">
              6. Third-Party Services
            </h2>
            <p className="text-white/70 leading-relaxed">
              We do not sell or share your personal information with third parties, except
              where required by law or necessary for providing services.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl font-bold text-[#F5A623] mb-2">
              7. Your Rights
            </h2>
            <p className="text-white/70 leading-relaxed">
              You have the right to request access, correction, or deletion of your
              personal data by contacting us.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl font-bold text-[#F5A623] mb-2">
              8. Contact Us
            </h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions regarding this Privacy Policy, please contact us at:
              <br />
              <span className="text-[#F5A623]">info@brightonschool.edu.pk</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;