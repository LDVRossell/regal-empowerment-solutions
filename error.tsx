import { Navbar } from "@/components/navbar";
import { FounderPage } from "@/components/founder-page";
import { ContactCTA } from "@/components/contact-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Founder | Regal Empowerment Solutions",
  description:
    "Meet LaWanda VanHorn-Rossell, LICSW-S — Doctorate of Social Work Candidate, Licensed Independent Clinical Social Worker-Supervisor, and founder of Regal Empowerment Solutions.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <FounderPage />
      <ContactCTA />
    </main>
  );
}
