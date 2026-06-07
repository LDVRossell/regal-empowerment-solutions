"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://galaxy-prod.tlcdn.com/view/user_38Rxhwj6puHTW9VpZVizHQeySzr/ab0e457a52f941248439d98573f3d836.jpg";

const highlights = [
  { label: "Mental Health & Wellness", emoji: "🧠", desc: "Individual & trauma-informed care",   bg: "from-[#4C1D95]/80 to-[#6D28D9]/60" },
  { label: "Veterans & Families",       emoji: "🎖️", desc: "VA support & resource navigation",    bg: "from-[#2D0057]/80 to-[#4C1D95]/60" },
  { label: "Training & Consulting",     emoji: "🎤", desc: "Leadership & strategic development",  bg: "from-[#6D28D9]/80 to-[#7C3AED]/60" },
  { label: "Community Engagement",      emoji: "🤝", desc: "Workshops & coalition building",       bg: "from-[#4C1D95]/80 to-[#8B5CF6]/60" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#1A0030] via-[#2D0057] to-[#4C1D95] flex items-center overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20   w-[480px] h-[480px] bg-[#6D28D9]/25 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0     w-[350px] h-[350px] bg-[#D4AF37]/12 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4  w-[500px] h-[500px] bg-[#F0D060]/8  rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-[250px] h-[250px] bg-[#A78BFA]/20 rounded-full blur-2xl" />
      </div>

      {/* Dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.9) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gold bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#F0D060] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Real logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="mb-8 flex items-center gap-5"
            >
              <div className="relative w-32 h-32 flex-shrink-0 drop-shadow-2xl">
                <Image
                  src={LOGO_URL}
                  alt="Regal Empowerment Solutions Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <div className="text-[#E8C84A] text-[10px] font-bold tracking-[0.4em] uppercase mb-0.5">── Regal ──</div>
                <div className="text-white font-black text-2xl leading-none tracking-wider">EMPOWERMENT</div>
                <div className="text-[#E8C84A] text-[10px] font-bold tracking-[0.4em] uppercase mt-0.5">── Solutions ──</div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-white font-black text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight mb-2">
                WE HELP
              </h1>
              <h2 className="font-black text-6xl lg:text-7xl xl:text-8xl leading-[0.9] italic tracking-tight mb-8 bg-gradient-to-r from-[#D4AF37] via-[#F0D060] to-[#E8C84A] bg-clip-text text-transparent">
                PEOPLE THRIVE
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[#C4B5FD] text-lg leading-relaxed mb-10 max-w-lg"
            >
              Comprehensive mental health, veteran support, training, and community
              empowerment services — grounded in faith, evidence, and compassion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="/#contact">
                <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F0D060] hover:from-[#B8960C] hover:to-[#D4AF37] text-[#1A0030] font-black text-base px-8 rounded-full h-14 shadow-xl shadow-[#D4AF37]/30">
                  Let&apos;s Work Together <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </a>
              <a href="/#services">
                <Button size="lg" variant="outline" className="border-2 border-[#A78BFA]/70 text-white hover:bg-white/10 hover:border-[#C4B5FD] font-bold text-base px-8 rounded-full h-14 bg-transparent">
                  Our Services
                </Button>
              </a>
            </motion.div>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-3 mt-10"
            >
              {["Licensed Clinical", "Faith-Informed", "Evidence-Based", "Veteran-Centered"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F0D060] bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-3 py-1.5"
                >
                  <CheckCircle className="h-3 w-3" /> {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: highlight cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.04, y: -5 }}
                className={`bg-gradient-to-br ${item.bg} backdrop-blur-sm border border-[#D4AF37]/25 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all cursor-default`}
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <div className="text-white font-bold text-sm leading-snug mb-2">{item.label}</div>
                <div className="text-[#C4B5FD] text-xs leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}

            {/* Meet the Founder teaser */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="col-span-2 bg-[#D4AF37]/15 border border-[#D4AF37]/35 rounded-2xl p-5 flex items-center gap-4 hover:bg-[#D4AF37]/22 transition-all"
            >
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src={LOGO_URL}
                  alt="RES Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="text-[#F0D060] font-black text-sm">Meet Our Founder</div>
                <div className="text-[#C4B5FD] text-xs">LaWanda VanHorn-Rossell, LICSW-S</div>
              </div>
              <Link href="/about">
                <Button size="sm" className="bg-[#D4AF37] hover:bg-[#B8960C] text-[#1A0030] font-bold rounded-full text-xs px-4 flex-shrink-0">
                  Learn More <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
