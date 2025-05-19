import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import AboutMeSection from '@/components/sections/about-me';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experiences';
import WorkSection from '@/components/sections/work';

export default function Home() {
  return (
    <>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutMeSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="projects">
        <WorkSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
