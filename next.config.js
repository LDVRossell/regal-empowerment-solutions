"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, ArrowRight, Shield, Users, BookOpen, Activity, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const credentials = [
  "Doctorate of Social Work Candidate",
  "Licensed Independent Clinical Social Worker – Supervisor (LICSW-S)",
  "Founder & CEO, Regal Empowerment Solutions",
];

const specializations = [
  { label: "Veterans",               emoji: "🎖️", color: "from-[#2D0057] to-[#4C1D95]" },
  { label: "Suicide Prevention",     emoji: "💜", color: "from-[#4C1D95] to-[#6D28D9]" },
  { label: "Behavioral Health",      emoji: "🧠", color: "from-[#6D28D9] to-[#7C3AED]" },
  { label: "Community Partnerships", emoji: "🌍", color: "from-[#3B0764] to-[#4C1D95]" },
  { label: "Program Development",    emoji: "📋", color: "from-[#4C1D95] to-[#7C3AED]" },
  { label: "Training & Education",   emoji: "🎤", color: "from-[#2D0057] to-[#6D28D9]" },
];

const values = [
  { icon: Shield,   label: "Integrity",   desc: "Operating with the highest ethical standards in every client interaction." },
  { icon: Users,    label: "Community",   desc: "Building lasting partnerships that strengthen families and neighborhoods." },
  { icon: BookOpen, label: "Faith",       desc: "Grounding every approach in spiritual wellness and holistic healing." },
  { icon: Activity, label: "Excellence",  desc: "Delivering evidence-based, measurable outcomes for lasting change." },
  { icon: Star,     label: "Empowerment", desc: "Equipping every person with the tools, knowledge, and confidence to thrive." },
];

const stats = [
  { value: "10+",    label: "Years of Experience" },
  { value: "500+",   label: "Lives Impacted" },
  { value: "LICSW-S", label: "Clinical Licensure" },
  { value: "DSW",    label: "Candidate" },
];

export function FounderPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-[#1A0030] via-[#2D0057] to-[#4C1D95] overflow-hidden">
        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0  w-[500px] h-[500px] bg-[#6D28D9]/25  rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80       h-80       bg-[#D4AF37]/10 rounded-full blur-3xl" />
        </div>
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gold bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#F0D060] to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── Photo column ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Outer glow halo */}
                <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#D4AF37]/40 via-[#F0D060]/20 to-[#A78BFA]/20 blur-xl" />

                {/* Gold border frame */}
                <div className="relative rounded-[2rem] border-4 border-[#D4AF37]/70 overflow-hidden shadow-2xl shadow-[#D4AF37]/25 w-80 h-96 bg-[#2D0057]">
                  <Image
                    src="https://galaxy-prod.tlcdn.com/view/user_38Rxhwj6puHTW9VpZVizHQeySzr/ee4e66a065bd4c518f0d4188d5397f55.jpg"
                    alt="LaWanda VanHorn-Rossell, LICSW-S — Founder of Regal Empowerment Solutions"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Crown badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[#F0D060] text-5xl drop-shadow-lg select-none">
                  ♛
                </div>

                {/* LICSW-S credential badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-br from-[#D4AF37] to-[#F0D060] rounded-2xl px-4 py-3 shadow-xl border-2 border-white/40"
                >
                  <div className="text-[#1A0030] font-black text-sm">LICSW-S</div>
                  <div className="text-[#2D0057]/80 text-xs font-semibold">Licensed Supervisor</div>
                </motion.div>

                {/* DSW badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.65 }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-br from-[#4C1D95] to-[#6D28D9] rounded-2xl px-4 py-3 shadow-xl border-2 border-[#D4AF37]/30"
                >
                  <div className="text-[#F0D060] font-black text-sm">DSW</div>
                  <div className="text-[#C4B5FD] text-xs font-semibold">Candidate</div>
                </motion.div>
              </div>
            </motion.div>

            {/* ── Text column ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <span className="inline-block text-[#F0D060] text-xs font-bold tracking-[0.4em] uppercase bg-[#D4AF37]/15 border border-[#D4AF37]/30 px-4 py-2 rounded-full mb-6">
                About the Founder
              </span>

              <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-2">
                LaWanda
              </h1>
              <h2 className="font-black text-4xl lg:text-5xl leading-tight mb-2 bg-gradient-to-r from-[#D4AF37] via-[#F0D060] to-[#E8C84A] bg-clip-text text-transparent">
                VanHorn-Rossell
              </h2>
              <h3 className="text-[#C4B5FD] text-xl font-bold mb-8">LICSW-S</h3>

              {/* Credentials */}
              <div className="space-y-3 mb-8">
                {credentials.map((cred, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-[#EDE9FE] font-semibold text-sm">{cred}</span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-[#C4B5FD] text-base leading-relaxed mb-8"
              >
                A passionate advocate for mental health, veterans, and underserved communities,
                LaWanda founded Regal Empowerment Solutions with a singular mission:
                to help people thrive — mind, body, and spirit.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="#story">
                  <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F0D060] hover:from-[#B8960C] hover:to-[#D4AF37] text-[#1A0030] font-black rounded-full px-8 h-12 shadow-xl shadow-[#D4AF37]/25">
                    Her Story <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </a>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="border-2 border-[#A78BFA]/60 text-white hover:bg-white/10 font-bold rounded-full px-8 h-12 bg-transparent">
                    Work With LaWanda
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="bg-gradient-to-r from-[#D4AF37] via-[#F0D060] to-[#E8C84A] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-[#1A0030] font-black text-3xl lg:text-4xl">{s.value}</div>
                <div className="text-[#2D0057]/70 font-semibold text-sm mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HER STORY ── */}
      <section id="story" className="py-24 bg-gradient-to-b from-white to-[#F5F3FF] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EDE9FE]/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FFF3C0]/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#B8960C] text-xs font-bold tracking-[0.4em] uppercase bg-[#FFF3C0] border border-[#E8C84A]/40 px-5 py-2 rounded-full mb-5">
              Her Story
            </span>
            <h2 className="font-black text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-[#2D0057] via-[#4C1D95] to-[#6D28D9] bg-clip-text text-transparent">
              Driven by Purpose
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F0D060] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Pull-quote card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 bg-gradient-to-br from-[#4C1D95] to-[#6D28D9] rounded-3xl p-8 text-center shadow-xl shadow-purple-200/50 border border-[#A78BFA]/20">
                <div className="text-[#F0D060] text-6xl font-black leading-none mb-4">&ldquo;</div>
                <p className="text-white font-bold text-lg leading-snug italic mb-4">
                  My mission is to empower every individual to live their most regal life.
                </p>
                <div className="text-[#E8C84A] text-6xl font-black leading-none mb-6">&rdquo;</div>
                <div className="h-px bg-[#D4AF37]/30 mb-4" />
                <div className="text-[#F0D060] font-black text-sm">LaWanda VanHorn-Rossell</div>
                <div className="text-[#C4B5FD] text-xs">LICSW-S | Founder, RES</div>
              </div>
            </motion.div>

            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2 space-y-5 text-gray-700 text-base leading-relaxed"
            >
              <p>
                LaWanda VanHorn-Rossell brings more than a decade of clinical social work experience
                to every client engagement. As a Licensed Independent Clinical Social Worker-Supervisor
                (LICSW-S) and Doctorate of Social Work Candidate, she combines advanced academic
                training with real-world expertise to deliver transformative, compassionate care.
              </p>
              <p>
                Her journey in social work was shaped by a deep calling to serve those who are
                often overlooked — veterans navigating the complex maze of VA systems, individuals
                facing mental health crises without adequate support, and communities lacking the
                resources they need to flourish.
              </p>
              <p>
                LaWanda founded Regal Empowerment Solutions on the belief that every person
                deserves to live with dignity, purpose, and hope. Her faith-informed perspective
                is woven into every service RES offers, creating an environment where spiritual,
                emotional, and psychological healing can all take place.
              </p>
              <p>
                Through keynote speaking engagements, evidence-based clinical services, community
                coalition building, and leadership development training, LaWanda is actively
                shaping a healthier, more empowered Alabama and beyond.
              </p>

              <div className="bg-[#EDE9FE] border border-[#A78BFA]/30 rounded-2xl p-6">
                <div className="text-[#4C1D95] font-black text-sm mb-3">Licensed & Credentialed In:</div>
                <div className="flex flex-wrap gap-2">
                  {["Licensed ICSW-S", "DSW Candidate", "Clinical Social Work", "Supervision", "Program Development"].map((tag) => (
                    <span key={tag} className="inline-block bg-[#4C1D95]/10 border border-[#6D28D9]/20 text-[#4C1D95] text-xs font-semibold px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SPECIALIZATIONS ── */}
      <section className="py-24 bg-gradient-to-b from-[#F5F3FF] to-[#FFFBEB] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#B8960C] text-xs font-bold tracking-[0.4em] uppercase bg-[#FFF3C0] border border-[#E8C84A]/40 px-5 py-2 rounded-full mb-5">
              Areas of Focus
            </span>
            <h2 className="font-black text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-[#2D0057] via-[#4C1D95] to-[#6D28D9] bg-clip-text text-transparent">
              Specializing In
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F0D060] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {specializations.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`bg-gradient-to-br ${s.color} rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-white/10`}
              >
                <div className="text-4xl mb-3">{s.emoji}</div>
                <div className="text-white font-black text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-24 bg-gradient-to-br from-[#2D0057] via-[#4C1D95] to-[#6D28D9] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#F0D060] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-80 h-80 bg-[#D4AF37]/8  rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#A78BFA]/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-white font-black text-4xl lg:text-5xl mb-4">
              Guided by{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F0D060] bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F0D060] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 rounded-3xl p-6 text-center transition-all"
              >
                <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37]/15 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-[#F0D060]" />
                </div>
                <h3 className="text-[#F0D060] font-black text-sm mb-2">{v.label}</h3>
                <p className="text-[#C4B5FD] text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
