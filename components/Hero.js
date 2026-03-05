'use client';

import { FadeIn, Counter } from './ui';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.glow} />

      <FadeIn>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Available for freelance work
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className={styles.title}>
          Crafting <span className={styles.titleAccent}>E-Commerce</span>
          <br />
          Experiences That Convert
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className={styles.subtitle}>
          Steve Sikoryak — Freelance Shopify Developer &amp; Full-Stack Builder.
          8+ years transforming ideas into polished, high-performing storefronts
          and web applications.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('contact')}>
            Let&apos;s Talk
          </button>
          <button className={styles.btnSecondary} onClick={() => scrollTo('projects')}>
            View My Work
          </button>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className={styles.counters}>
          <Counter end={8} suffix="+" label="YEARS EXPERIENCE" />
          <div className={styles.counterDivider} />
          <Counter end={20} suffix="+" label="PROJECTS COMPLETED" />
          <div className={styles.counterDivider} />
          <Counter end={10} suffix="+" label="HAPPY CLIENTS" />
        </div>
      </FadeIn>

      <FadeIn delay={0.5}>
        <p className={styles.location}>📍 New Jersey, US</p>
      </FadeIn>
    </section>
  );
}
