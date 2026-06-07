import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { WhyRES } from "@/components/why-res";
import { ContactForm } from "@/components/contact-form";
import { ContactCTA } from "@/components/contact-cta";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <WhyRES />
      <ContactForm />
      <ContactCTA />
    </main>
  );
}
