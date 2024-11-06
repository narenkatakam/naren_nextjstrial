import { Button } from '@/components/ui/button';
import styles from './connect.module.css';

export function Connect() {
  return (
    <section className={styles.connect}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Let's connect and turn great ideas into powerful experiences.
        </h2>
        <Button size="lg" className={styles.button}>
          Get in touch →
        </Button>
      </div>
      <div className={styles.footer}>
        <div className={styles.links}>
          <a href="#">Home</a>
          <a href="#">Case studies</a>
          <a href="#">About</a>
          <a href="#">Thoughts</a>
          <a href="#">Contact</a>
        </div>
        <p className={styles.copyright}>© 2024 Portfolio Website</p>
      </div>
    </section>
  );
}