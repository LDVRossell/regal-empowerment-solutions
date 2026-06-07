"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LOGO_URL =
  "https://galaxy-prod.tlcdn.com/view/user_38Rxhwj6puHTW9VpZVizHQeySzr/ab0e457a52f941248439d98573f3d836.jpg";

const contactItems = [
  {
    icon: Phone,
    label: "Call Us",
    value: "205-737-3752",
    href: "tel:2057373752",
    action: "Call Now",
    gradient: "from-[#2D0057] to-[#4C1D95]",
    iconBg: "bg-gradient-to-br from-[#D4AF37] to-[#F0D060]",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "regalempower@gmail.com",
    href: "mailto:regalempower@gmail.com",
    action: "Send Email",
    gradient: "from-[#4C1D95] to-[#6D28D9]",
    iconBg: "bg-gradient-to-br from-[#E8C84A] to-[#D4AF37]",
  },
  {
    icon: Globe,
    label: "Visit Our Website",
    value: "www.regalempowerment.com",
    href: "https://www.regalempowerment.com",
    action: "Visit Site",
    gradient: "from-[#6D28D9] to-[#7C3AED]",
    iconBg: "bg-gradient-to-br from-[#F0D060] to-[#E8C84A]",
  },
];

export function ContactCTA() {
  return (
    <>
      <section
        id="contact"
        className="py-28 bg-gradient-to-b from-white via-[#FFFBEB] to-[#F5F3FF] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0    w-[500px] h-[500px] bg-[#EDE9FE]/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0  w-96        h-96       bg-[#FFF3C0]/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-[#D4AF37] text-2xl">❧</span>
              <span className="text-[#92680B] font-bold text-xs tracking-[0.4em] uppercase">Get In Touch</span>
              <span className="text-[#D4AF37] text-2xl">❧</span>
            </div>
            <h2 className="font-black text-5xl lg:text-7xl italic mb-4 bg-gradient-to-r from-[#2D0057] via-[#4C1D95] to-[#6D28D9] bg-clip-text text-transparent">
              Let&apos;s Work Together!
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F0D060] mx-auto rounded-full mb-6" />
            <p className="text-[#4C1D95]/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to take the next step toward thriving? Reach out today and
              let us help you build the life and community you deserve.
            </p>
          </motion.div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactItems.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className={`bg-gradient-to-br ${c.gradient} rounded-3xl p-8 text-center shadow-xl shadow-purple-200/60 relative overflow-hidden`}
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-white/10" />
                <div className="absolute -bottom-8 -left-8  w-32 h-32 rounded-full border border-[#D4AF37]/15" />

                <div className={`relative mx-auto mb-5 w-20 h-20 ${c.iconBg} rounded-full flex items-center justify-center shadow-lg`}>
                  <c.icon className="h-9 w-9 text-[#2D0057]" />
                </div>
                <div className="text-[#F0D060] font-black text-xs tracking-[0.25em] uppercase mb-2 relative z-10">{c.label}</div>
                <div className="text-white/90 font-semibold text-sm mb-6 break-all relative z-10">{c.value}</div>
                <a href={c.href} className="relative z-10">
                  <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F0D060] hover:from-[#B8960C] hover:to-[#D4AF37] text-[#1A0030] font-black w-full rounded-full">
                    {c.action} <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>

          {/* CTA banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#D4AF37] via-[#F0D060] to-[#E8C84A] rounded-3xl p-10 text-center shadow-2xl shadow-[#D4AF37]/30 relative overflow-hidden"
          >
            <div className="absolute -top-12 -left-12   w-48 h-48 rounded-full bg-white/10 blur-xl" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-white/10 blur-xl" />
            <h3 className="text-[#1A0030] font-black text-3xl lg:text-4xl mb-3 relative z-10">
              Ready to Transform Your Life?
            </h3>
            <p className="text-[#2D0057]/80 text-lg mb-8 font-medium max-w-xl mx-auto relative z-10">
              Join the growing community of individuals and families who have found
              support, strength, and success with Regal Empowerment Solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a href="tel:2057373752">
                <Button size="lg" className="bg-[#2D0057] hover:bg-[#1A0030] text-white font-black text-base px-10 rounded-full h-14 shadow-lg">
                  <Phone className="h-5 w-5 mr-2" /> Call 205-737-3752
                </Button>
              </a>
              <a href="mailto:regalempower@gmail.com">
                <Button size="lg" variant="outline" className="border-2 border-[#2D0057] text-[#1A0030] hover:bg-[#2D0057]/10 font-bold text-base px-10 rounded-full h-14 bg-transparent">
                  <Mail className="h-5 w-5 mr-2" /> Send a Message
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gradient-to-r from-[#1A0030] via-[#2D0057] to-[#1A0030] py-10 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Logo + name */}
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src={LOGO_URL}
                  alt="Regal Empowerment Solutions Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-white font-black text-sm tracking-widest uppercase">
                  Regal Empowerment Solutions
                </div>
                <div className="text-[#D4AF37] text-xs font-semibold italic">We Help People Thrive</div>
              </div>
            </div>

            {/* Quick links */}
            <div className="flex items-center gap-6">
              {[["/#services","Services"],["/#why-res","Why RES?"],["/#contact","Contact"],["/about","About"]].map(([href, label]) => (
                <a key={href} href={href} className="text-[#A78BFA] hover:text-[#D4AF37] text-sm font-medium transition-colors">
                  {label}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-[#7C3AED]/70 text-xs text-center md:text-right">
              <div>© 2026 Regal Empowerment Solutions</div>
              <div>All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
