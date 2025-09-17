import AboutMe from '@/components/organisms/AboutMe/AboutMe';
import Footer from '@/components/organisms/Footer/Footer.';
import Hero from '@/components/organisms/Hero/Hero';
import TechStack from '@/components/organisms/TechStack/TechStack';
import WorkProjects from '@/components/organisms/WorkProjects/WorkProjects';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TechStack />
      <WorkProjects />
      <AboutMe />
      <Footer />
    </div>
  );
}
