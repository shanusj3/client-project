import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/competencies';
import FeaturedExpert from '@/components/sections/featured-expert';
import Forums from '@/components/sections/journey';
import LeadershipJourney from '@/components/sections/leadership-journey';
import ServicesSection from '@/components/sections/services';
import ProjectsSection from '@/components/sections/projects';
import Credentials from '@/components/sections/credentials';
import Education from '@/components/sections/education';
import Contact from '@/components/sections/contact';
import AIInquirer from '@/components/ai/inquirer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <FeaturedExpert />
        <Forums />
        <LeadershipJourney />
        <ServicesSection />
        <ProjectsSection />
        <Credentials />
        <Education />
        <Contact />
      </main>
      <AIInquirer />
      <Footer />
    </>
  );
}
