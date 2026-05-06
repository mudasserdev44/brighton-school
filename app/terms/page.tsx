'use client'
import React from "react";

const TermsOfUse = () => {
  return (
    <section
      className="min-h-screen py-20 px-6 lg:px-12 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A1628 0%, #0F2347 30%, #1E3A6E 60%, #0D2240 100%)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Grid Background */}
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

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle at 0% 0%, #F5A623, transparent 60%)" }} />
      <div className="absolute bottom-0 right-0 w-72 h-72 opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle at 100% 100%, #F5A623, transparent 60%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-black text-white mb-6"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Terms of Use
        </h1>

        <p className="text-white/60 mb-10">
          Last Updated: January 2026
        </p>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-md space-y-8">

          {/* 1 */}
          <div>
            <h2 className="text-xl font-bold text-[#F5A623] mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-white/70 leading-relaxed">
              By accessing and using the Brighton School of Lahore website,
              you agree to comply with and be bound by these Terms of Use.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-bold text-[#F5A623] mb-2">
              2. Use of Website
            </h2>
            <p className="text-white/70 leading-relaxed">
              This website is intended for informational purposes related to
              admissions, academics, and school activities. You agree not to
              misuse the website or engage in unlawful activities.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-bold text-[#F5A623] mb-2">
              3. Intellectual Property
            </h2>
            <p className="text-white/70 leading-relaxed">
              All content, including text, images, logos, and design elements,
              are the property of Brighton School of Lahore and may not be
              reproduced without permission.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-bold text-[#F5A623] mb-2">
              4. User Conduct
            </h2>
            <ul className="text-white/70 space-y-2 list-disc pl-5">
              <li>Do not attempt to gain unauthorized access</li>
              <li>Do not upload harmful or malicious content</li>
              <li>Respect the integrity of the website</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-bold text-[#F5A623] mb-2">
              5. Limitation of Liability
            </h2>
            <p className="text-white/70 leading-relaxed">
              The school is not liable for any damages arising from the use
              or inability to use the website.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-bold text-[#F5A623] mb-2">
              6. External Links
            </h2>
            <p className="text-white/70 leading-relaxed">
              Our website may contain links to external websites. We are not
              responsible for the content or privacy practices of those sites.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-bold text-[#F5A623] mb-2">
              7. Changes to Terms
            </h2>
            <p className="text-white/70 leading-relaxed">
              We reserve the right to update these Terms at any time. Continued
              use of the website constitutes acceptance of the updated Terms.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl font-bold text-[#F5A623] mb-2">
              8. Contact Information
            </h2>
            <p className="text-white/70 leading-relaxed">
              For any questions regarding these Terms, contact us at:
              <br />
              <span className="text-[#F5A623]">
                info@brightonschool.edu.pk
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;