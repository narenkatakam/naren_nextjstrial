import { Hero } from '@/components/sections/hero';
import { Value } from '@/components/sections/value';
import { CaseStudies } from '@/components/sections/case-studies';
import { Thoughts } from '@/components/sections/thoughts';
import { Connect } from '@/components/sections/connect';

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <Value />
      <CaseStudies />
      <Thoughts />
      <Connect />
    </div>
  );
}