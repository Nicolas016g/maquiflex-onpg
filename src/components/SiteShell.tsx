import { BackToTop } from "./extras/BackToTop";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { AboutSection } from "./sections/AboutSection";
import { EngineeringSection } from "./sections/EngineeringSection";
import { EventsSection } from "./sections/EventsSection";
import { ExpansionSection } from "./sections/ExpansionSection";
import { HeroSection } from "./sections/HeroSection";
import { StatsBar } from "./sections/StatsBar";
import { TechnologySection } from "./sections/TechnologySection";
import { VideoShowcaseSection } from "./sections/VideoShowcaseSection";
import { WhySection } from "./sections/WhySection";

export function SiteShell() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <VideoShowcaseSection />
        <EventsSection />
        <ExpansionSection />
        <TechnologySection />
        <EngineeringSection />
        <WhySection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
