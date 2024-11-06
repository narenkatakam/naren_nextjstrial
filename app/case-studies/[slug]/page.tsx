import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import styles from './page.module.css';

const cases = [
  {
    title: 'FireFly',
    slug: 'firefly',
    description: 'AI-powered automation platform revolutionizing workflow efficiency.',
    tags: ['Design', 'Product', 'AI/Data'],
  },
  {
    title: 'Kozmo',
    slug: 'kozmo',
    description: 'Next-generation e-commerce solution with predictive analytics.',
    tags: ['Design', 'Product', 'AI/Data'],
  },
  {
    title: 'Muko',
    slug: 'muko',
    description: 'Digital transformation platform for traditional businesses.',
    tags: ['Design', 'Product'],
  },
  {
    title: 'Trinity',
    slug: 'trinity',
    description: 'Enterprise-grade data visualization framework.',
    tags: ['Design', 'AI/Data'],
  },
  {
    title: 'Mura App',
    slug: 'mura-app',
    description: 'Mobile-first productivity suite for remote teams.',
    tags: ['Design', 'Product'],
  },
  {
    title: 'Clonify Icons',
    slug: 'clonify-icons',
    description: 'AI-generated icon system for modern applications.',
    tags: ['Design', 'AI/Data'],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((item) => (
          <Link
            key={item.slug}
            href={`/case-studies/${item.slug}`}
            className={styles.case}
          >
            <div className={styles.image} />
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.tags}>
              {item.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button
          size="lg"
          asChild
        >
          <Link
            href="https://your-substack.substack.com/c/case-studies"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Case Studies on Substack
          </Link>
        </Button>
      </div>
    </div>
  );
}