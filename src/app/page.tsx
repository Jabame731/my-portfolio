import Hero from '@/components/organisms/Hero/Hero';
import TechStack from '@/components/organisms/TechStack/TechStack';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TechStack />
    </div>
  );
}
