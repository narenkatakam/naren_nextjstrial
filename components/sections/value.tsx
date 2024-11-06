'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './value.module.css';

const values = [
  {
    title: 'Data & AI Product Management',
    description: 'Leading and developing AI-powered solutions that drive business value through data-driven insights and automation.',
  },
  {
    title: 'Digital Transformation',
    description: 'Guiding organizations through digital evolution, implementing modern technologies and processes for enhanced efficiency.',
  },
  {
    title: 'Product Thinking',
    description: 'Strategic approach to product development focusing on user needs, market fit, and sustainable growth.',
  },
  {
    title: 'Design Thinking',
    description: 'Human-centered approach to innovation that integrates user needs, technological possibilities, and business success.',
  },
  {
    title: 'Visualization',
    description: 'Creating compelling visual representations of data and concepts to communicate complex ideas effectively.',
  },
];

export function Value() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={styles.value}>
      <h2 className={styles.title}>VALUE</h2>
      <div className={styles.list}>
        {values.map((value, index) => (
          <div key={value.title} className={styles.item}>
            <button 
              onClick={() => toggleExpand(index)}
              className={styles.itemButton}
            >
              <span>{value.title}</span>
              {expandedIndex === index ? (
                <Minus className="h-5 w-5" />
              ) : (
                <Plus className="h-5 w-5" />
              )}
            </button>
            {expandedIndex === index && (
              <div className={styles.description}>
                {value.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}