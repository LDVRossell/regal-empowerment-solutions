"use client";

import { motion } from "framer-motion";
import { Shield, Users, Globe, BookOpen, Activity } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    label: "Licensed Clinical Expertise",
    desc: "Credentialed professionals delivering evidence-based, quality care",
    emoji: "🏅",
    iconColor: "text-[#F0D060]",
    ring: "border-[#F0D060]",
    bg: "bg-[#F0D060]/10",
  },
  {
    icon: Users,
    label: "Veteran-Centered Perspective",
    desc: "Deep understanding of military culture, service, and family needs",
    emoji: "🎖️",
    iconColor: "text-[#E8C84A]",
    ring: "border-[#E8C84A]",
    bg: "bg-[#E8C84A]/10",
  },
  {
    icon: Globe,
    label: "Community-Focused Solutions",
    desc: "Rooted in local relationships with lasting, systemic impact",
    emoji: "🌍",
    iconColor: "text-[#D4AF37]",
    ring: "border-[#D4AF37]",
    bg: "bg-[#D4AF37]/10",
  },
  {
    icon: BookOpen,
    label: "Faith-Informed Approach",
    desc: "Integrating spiritual wellness as a cornerstone of healing",
    emoji: "✝️",
    iconColor: "text-[#FFF3C0]",
    ring: "border-[#FFF3C0]/80",
    bg: "bg-white/10",
  },
  {
    icon: Activity,
    label: "Evidence-Based Practices",
    desc: "Research-driven methods proven to produce real, lasting results",
    emoji: "💡",
    iconColor: "text-[#E8C84A]",
    ring: "border-[#E8C84A]",
    bg: "bg-[#E8C84A]/10",
  },
];

export function WhyRES() {
  return (
    <section
      id="why-res"
      className="py-28 relative overflow-hidden bg-gradient-to-br from-[#2D0057] via-[#4C1D95] to-[#6D28D9]"
    >
      {/* Top / bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#F0D060] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Layered background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0     w-96 h-96 bg-[#D4AF37]/8  rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#A78BFA]/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[700px] h-[700px] bg-white/3 rounded-full blur-3xl" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(240,208,96,0.9) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-white font-black text-4xl lg:text-6xl mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F0D060] bg-clip-text text-transparent">
              RES?
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F0D060] mx-auto rounded-full mb-6" />
          <p className="text-[#C4B5FD] text-lg max-w-xl mx-auto leading-relaxed">
            We bring together clinical expertise, community heart, and
            faith-driven purpose — all in service of your journey.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -6 }}
              className="bg-white/10 backdrop-blur border border-white/10 hover:border-[#D4AF37]/40 rounded-3xl p-7 text-center transition-all"
            >
              {/* Icon + emoji */}
              <div className="relative mx-auto mb-5 w-16 h-16">
                <div className={`w-16 h-16 rounded-full border-2 ${r.ring} ${r.bg} flex items-center justify-center`}>
                  <r.icon className={`h-7 w-7 ${r.iconColor}`} />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#2D0057] border-2 border-[#D4AF37] flex items-center justify-center text-sm">
                  {r.emoji}
                </div>
              </div>

              <h3 className="text-white font-black text-sm leading-snug mb-3">{r.label}</h3>
              <p className="text-[#C4B5FD] text-xs leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
