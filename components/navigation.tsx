'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import styles from './navigation.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/thoughts', label: 'Thoughts' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className={styles.logoImage}
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.menuButton}
          aria-label="Toggle menu"
        >
          <Image
            src={isOpen ? '/images/close.png' : '/images/menu.png'}
            alt={isOpen ? 'Close menu' : 'Open menu'}
            width={24}
            height={24}
          />
        </button>

        <div
          className={cn(
            styles.menuContainer,
            isOpen ? styles.menuOpen : styles.menuClosed
          )}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}