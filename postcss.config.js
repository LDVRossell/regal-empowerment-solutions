"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  "Mental Health & Wellness",
  "Veterans & Families",
  "Training & Consulting",
  "Community Engagement",
  "General Inquiry",
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const empty: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState<FormData>(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (name: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const isValid = (field: keyof FormData) => {
    if (field === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (field === "phone") return form.phone === "" || /^[\d\s\-().+]{7,}$/.test(form.phone);
    return form[field].trim().length > 0;
  };

  const showError = (field: keyof FormData) => touched[field] && !isValid(field);

  const canSubmit =
    isValid("firstName") &&
    isValid("lastName") &&
    isValid("email") &&
    isValid("service") &&
    isValid("message");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mark all required fields touched
    setTouched({ firstName: true, lastName: true, email: true, service: true, message: true });
    if (!canSubmit) return;

    setStatus("loading");

    // ── Formspree integration ──────────────────────────────────────────────────
    // To activate real email delivery:
    // 1. Go to https://formspree.io → create a free account
    // 2. Create a new form → copy your Form ID (looks like: xrgnkpqz)
    // 3. Replace "YOUR_FORM_ID" below with your real ID
    // 4. Formspree will email submissions to regalempower@gmail.com
    // ──────────────────────────────────────────────────────────────────────────
    const FORMSPREE_ID = "YOUR_FORM_ID"; // ← replace with real ID to activate

    try {
      if (FORMSPREE_ID !== "YOUR_FORM_ID") {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: `${form.firstName} ${form.lastName}`,
            email: form.email,
            phone: form.phone || "Not provided",
            service: form.service,
            message: form.message,
          }),
        });
        if (!res.ok) throw new Error("Submission failed");
      } else {
        // Demo mode: simulate success after short delay
        await new Promise((r) => setTimeout(r, 1400));
      }
      setStatus("success");
      setForm(empty);
      setTouched({});
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact-form"
      className="py-28 bg-gradient-to-b from-[#F5F3FF] via-[#EDE9FE]/50 to-[#F5F3FF] relative overflow-hidden"
    >
      {/* Decorative accents */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      <div className="absolute top-20 left-0    w-80 h-80 bg-[#D4AF37]/8  rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-[#A78BFA]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: info panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#B8960C] text-xs font-bold tracking-[0.4em] uppercase bg-[#FFF3C0] border border-[#E8C84A]/40 px-5 py-2 rounded-full mb-6">
              Send a Message
            </span>
            <h2 className="font-black text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-[#2D0057] via-[#4C1D95] to-[#6D28D9] bg-clip-text text-transparent leading-tight">
              Start Your Journey Today
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F0D060] rounded-full mb-8" />
            <p className="text-[#4C1D95]/70 text-lg leading-relaxed mb-10">
              Whether you&apos;re seeking personal support, professional training, or
              community partnership — we&apos;re here to help. Fill out the form and
              LaWanda&apos;s team will reach out within 24–48 hours.
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              {[
                { icon: Phone,         label: "Call Direct",        value: "205-737-3752",           href: "tel:2057373752",                   bg: "from-[#2D0057] to-[#4C1D95]" },
                { icon: Mail,          label: "Email Us",            value: "regalempower@gmail.com",  href: "mailto:regalempower@gmail.com",     bg: "from-[#4C1D95] to-[#6D28D9]" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-md hover:shadow-lg border border-[#EDE9FE] transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="h-5 w-5 text-[#F0D060]" />
                  </div>
                  <div>
                    <div className="text-[#6D28D9] font-bold text-xs tracking-widest uppercase">{item.label}</div>
                    <div className="text-[#2D0057] font-semibold text-sm">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Response time note */}
            <div className="mt-8 bg-gradient-to-br from-[#D4AF37]/15 to-[#F0D060]/10 border border-[#D4AF37]/30 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#2D0057] font-black text-sm mb-1">We Respond Promptly</div>
                  <div className="text-[#4C1D95]/70 text-xs leading-relaxed">
                    All inquiries receive a personal response within 24–48 business hours. For urgent
                    matters, please call us directly.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl shadow-purple-100/60 border border-[#EDE9FE] overflow-hidden">
              {/* Form header */}
              <div className="bg-gradient-to-r from-[#2D0057] via-[#4C1D95] to-[#6D28D9] px-8 py-6">
                <h3 className="text-white font-black text-xl">Get In Touch</h3>
                <p className="text-[#C4B5FD] text-sm mt-1">All fields marked * are required</p>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-12 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F0D060] flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <CheckCircle className="h-10 w-10 text-[#1A0030]" />
                    </div>
                    <h3 className="text-[#2D0057] font-black text-2xl mb-3">Message Sent!</h3>
                    <p className="text-[#4C1D95]/70 text-base leading-relaxed mb-8">
                      Thank you for reaching out. LaWanda&apos;s team will be in touch within 24–48 hours. We look forward to connecting!
                    </p>
                    <Button
                      onClick={() => setStatus("idle")}
                      className="bg-gradient-to-r from-[#4C1D95] to-[#6D28D9] hover:from-[#2D0057] hover:to-[#4C1D95] text-white font-bold rounded-full px-8"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="p-8 space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="LaWanda"
                        icon={User}
                        value={form.firstName}
                        onChange={handleChange}
                        onBlur={() => handleBlur("firstName")}
                        error={showError("firstName") ? "First name is required" : ""}
                        required
                      />
                      <Field
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Smith"
                        icon={User}
                        value={form.lastName}
                        onChange={handleChange}
                        onBlur={() => handleBlur("lastName")}
                        error={showError("lastName") ? "Last name is required" : ""}
                        required
                      />
                    </div>

                    {/* Email */}
                    <Field
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      icon={Mail}
                      value={form.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur("email")}
                      error={showError("email") ? "Please enter a valid email" : ""}
                      required
                    />

                    {/* Phone */}
                    <Field
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="205-555-0100 (optional)"
                      icon={Phone}
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={() => handleBlur("phone")}
                      error={showError("phone") ? "Please enter a valid phone number" : ""}
                    />

                    {/* Service select */}
                    <div className="space-y-1.5">
                      <label className="block text-[#2D0057] font-bold text-sm">
                        Area of Interest <span className="text-[#D4AF37]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          onBlur={() => handleBlur("service")}
                          className={cn(
                            "w-full appearance-none rounded-xl border-2 bg-[#F5F3FF]/50 px-4 py-3 pr-10 text-sm font-medium transition-all outline-none focus:border-[#6D28D9] focus:bg-white",
                            showError("service") ? "border-red-400" : "border-[#EDE9FE]",
                            form.service ? "text-[#2D0057]" : "text-gray-400"
                          )}
                        >
                          <option value="" disabled>Select a service…</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6D28D9] pointer-events-none" />
                      </div>
                      {showError("service") && (
                        <p className="text-red-500 text-xs flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> Please select an area of interest
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="block text-[#2D0057] font-bold text-sm">
                        Your Message <span className="text-[#D4AF37]">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3.5 h-4 w-4 text-[#A78BFA]" />
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          onBlur={() => handleBlur("message")}
                          placeholder="Tell us how we can help you…"
                          rows={5}
                          className={cn(
                            "w-full rounded-xl border-2 bg-[#F5F3FF]/50 pl-10 pr-4 py-3 text-sm font-medium text-[#2D0057] placeholder:text-gray-400 transition-all outline-none focus:border-[#6D28D9] focus:bg-white resize-none",
                            showError("message") ? "border-red-400" : "border-[#EDE9FE]"
                          )}
                        />
                      </div>
                      {showError("message") && (
                        <p className="text-red-500 text-xs flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> Please enter your message
                        </p>
                      )}
                    </div>

                    {/* Error banner */}
                    {status === "error" && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-red-700 font-bold text-sm">Submission failed</div>
                          <div className="text-red-600 text-xs mt-0.5">
                            Please try again or email us at regalempower@gmail.com
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F0D060] hover:from-[#B8960C] hover:to-[#D4AF37] text-[#1A0030] font-black rounded-xl h-13 text-base shadow-lg shadow-[#D4AF37]/25 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending…
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-5 w-5" /> Send Message
                        </span>
                      )}
                    </Button>

                    <p className="text-[#6D28D9]/50 text-xs text-center">
                      Your information is kept private and never shared.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Reusable field component ── */
interface FieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  icon: React.ElementType;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  error?: string;
  required?: boolean;
}

function Field({ label, name, type, placeholder, icon: Icon, value, onChange, onBlur, error, required }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-[#2D0057] font-bold text-sm">
        {label} {required && <span className="text-[#D4AF37]">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A78BFA]" />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={cn(
            "w-full rounded-xl border-2 bg-[#F5F3FF]/50 pl-10 pr-4 py-3 text-sm font-medium text-[#2D0057] placeholder:text-gray-400 transition-all outline-none focus:border-[#6D28D9] focus:bg-white",
            error ? "border-red-400" : "border-[#EDE9FE]"
          )}
        />
      </div>
      {error && (
        <p className="text-red-500 text-xs flex items-center gap-1">
          <AlertCircle className="h-3 w-3" /> {error}
        </p>
      )}
    </div>
  );
}
