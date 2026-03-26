import { Hero } from '@/components/sections/Hero';
import { Hook } from '@/components/sections/Hook';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Tracker } from '@/components/sections/MVP';
import { Benefits } from '@/components/sections/Benefits';
import { Partners } from '@/components/sections/Partners';
import { About } from '@/components/sections/About';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Hook />
      <Problem />
      <Solution />
      <HowItWorks />
      <Tracker />
      <Benefits />
      <Partners />
      <About />
      <CTA />
    </>
  );
}
