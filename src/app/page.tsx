import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteShell } from "@/components/layout/site-shell";
import { AllProjectsSection } from "@/components/sections/all-projects-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";

export default function Home() {
  return (
    <SiteShell>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <TechnologiesSection />
        <FeaturedProjectsSection />
        <AllProjectsSection />
        <ExperienceSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </SiteShell>
  );
}
