"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  {
    emoji: "🧠",
    title: "Mental Health & Wellness",
    items: ["Individual Support", "Resilience Building", "Stress Management", "Trauma Recovery"],
    headerBg: "from-[#4C1D95] to-[#6D28D9]",
    checkColor: "text-[#6D28D9]",
    borderColor: "border-[#A78BFA]/30",
    cardBg: "bg-white",
    badgeBg: "bg-[#EDE9FE] text-[#4C1D95]",
  },
  {
    emoji: "🎖️",
    title: "Veterans & Families",
    items: ["Resource Navigation", "VA Enrollment Assistance", "Suicide Prevention", "Care Coordination Support"],
    headerBg: "from-[#2D0057] to-[#4C1D95]",
    checkColor: "text-[#4C1D95]",
    borderColor: "border-[#C4B5FD]/30",
    cardBg: "bg-[#FAFAFF]",
    badgeBg: "bg-[#F5F3FF] text-[#2D0057]",
  },
  {
    emoji: "🎤",
    title: "Training & Consulting",
    items: ["Keynote Speaking", "Leadership Development", "Strategic Planning", "Organizational Growth"],
    headerBg: "from-[#6D28D9] to-[#7C3AED]",
    checkColor: "text-[#7C3AED]",
    borderColor: "border-[#8B5CF6]/30",
    cardBg: "bg-white",
    badgeBg: "bg-[#EDE9FE] text-[#6D28D9]",
  },
  {
    emoji: "🤝",
    title: "Community Engagement",
    items: ["Workshops", "Program Development", "Coalition Building", "Capacity Building"],
    headerBg: "from-[#3B0764] to-[#4C1D95]",
    checkColor: "text-[#4C1D95]",
    borderColor: "border-[#A78BFA]/30",
    cardBg: "bg-[#FAFAFF]",
    badgeBg: "bg-[#F5F3FF] text-[#3B0764]",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 bg-gradient-to-b from-[#F5F3FF] via-white to-[#FFFBEB] relative overflow-hidden">
      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Subtle BG shapes */}
      <div className="absolute top-20 right-0       w-96  h-96  bg-[#A78BFA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0     w-72  h-72  bg-[#F0D060]/15  rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[600px] h-[600px] bg-[#EDE9FE]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#B8960C] text-xs font-bold tracking-[0.4em] uppercase bg-[#FFF3C0] border border-[#E8C84A]/40 px-5 py-2 rounded-full mb-5">
            What We Offer
          </span>
          <h2 className="font-black text-4xl lg:text-6xl mb-4 bg-gradient-to-r from-[#2D0057] via-[#4C1D95] to-[#6D28D9] bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F0D060] mx-auto rounded-full mb-6" />
          <p className="text-[#6D28D9]/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive, compassionate solutions designed to empower individuals,
            families, veterans, and communities to thrive.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`${svc.cardBg} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border ${svc.borderColor}`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${svc.headerBg} p-7 flex items-center gap-5 relative overflow-hidden`}>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/5 border border-white/10" />
                <div className="absolute right-16 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#D4AF37]/10" />
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F0D060] border-4 border-white/20 flex items-center justify-center text-4xl shadow-lg flex-shrink-0 relative z-10">
                  {svc.emoji}
                </div>
                <h3 className="text-white font-black text-xl leading-snug relative z-10">{svc.title}</h3>
              </div>

              {/* Body */}
              <div className="p-7 space-y-4">
                {svc.items.map((item, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + j * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className={`h-5 w-5 ${svc.checkColor} flex-shrink-0`} />
                    <span className="text-gray-700 font-semibold text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
