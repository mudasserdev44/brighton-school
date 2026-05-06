'use client'
import React from "react";

const HelpCenter = () => {
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

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-black text-white mb-4"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Help Center
        </h1>

        <p className="text-white/60 mb-10">
          Need help? We're here to assist you. Contact us anytime.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Phone */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-[#F5A623]/40 transition">
            <h2 className="text-lg font-bold text-[#F5A623] mb-2">Call Us</h2>
            <p className="text-white/70 mb-3">
              Speak directly with our support team.
            </p>
            <a
              href="tel:03169012297"
              className="text-white font-semibold hover:text-[#F5A623] transition"
            >
              📞 0316 9012297
            </a>
          </div>

          {/* Email */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-[#F5A623]/40 transition">
            <h2 className="text-lg font-bold text-[#F5A623] mb-2">Email Us</h2>
            <p className="text-white/70 mb-3">
              Send us your query anytime.
            </p>
            <a
              href="mailto:smudasser36@gmail.com"
              className="text-white font-semibold hover:text-[#F5A623] transition"
            >
              ✉️ smudasser36@gmail.com
            </a>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-md space-y-6">

          <h2 className="text-2xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>

          <div>
            <h3 className="text-[#F5A623] font-semibold">How can I apply for admission?</h3>
            <p className="text-white/70">
              You can apply through our admissions section on the website or contact us directly.
            </p>
          </div>

          <div>
            <h3 className="text-[#F5A623] font-semibold">What classes do you offer?</h3>
            <p className="text-white/70">
              We offer classes from Primary to A-Levels with a focus on academic excellence.
            </p>
          </div>

          <div>
            <h3 className="text-[#F5A623] font-semibold">What are your office hours?</h3>
            <p className="text-white/70">
              Our support team is available Monday to Saturday, 9 AM to 5 PM.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HelpCenter;