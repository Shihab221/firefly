import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="px-10 sm:px-20">
        <Technologies />
        <Projects />
      </div>
    </div>
  );
}
