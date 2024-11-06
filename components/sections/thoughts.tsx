import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import styles from './thoughts.module.css';

const thoughts = [
  {
    title: 'How to find inspiration and solve big design problems',
    url: 'https://your-substack.substack.com/p/inspiration-and-design-problems',
    image: '/images/thoughts/inspiration.png',
    platform: 'Substack',
    date: 'March 2024',
  },
  {
    title: 'What makes your design awesome?',
    url: 'https://medium.com/@your-username/awesome-design',
    image: '/images/thoughts/awesome.png',
    platform: 'Medium',
    date: 'March 2024',
  },
  {
    title: 'How to create SVG-ready icon symbols in Figma',
    url: 'https://your-substack.substack.com/p/svg-icons-figma',
    image: '/images/thoughts/figma.png',
    platform: 'Substack',
    date: 'March 2024',
  },
];

export function Thoughts() {
  return (
    <section className={styles.thoughts}>
      <h2 className={styles.title}>THOUGHTS</h2>
      <div className={styles.thoughtGrid}>
        {thoughts.map((thought) => (
          <Link
            key={thought.title}
            href={thought.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.thought}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={thought.image}
                alt={thought.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.thoughtTitle}>{thought.title}</h3>
              <p className={styles.meta}>
                {thought.platform} • {thought.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.buttons}>
        <Button asChild variant="outline" size="lg">
          <Link
            href="https://your-substack.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More on Substack
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link
            href="https://medium.com/@your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More on Medium
          </Link>
        </Button>
      </div>
    </section>
  );
}