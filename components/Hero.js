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
        <div className={styles.avatarWrap}>
          <img src="/steve-portfolio-1.jpg" alt="Steve" className={styles.avatarImg1} />
          <img src="/steve-portfolio-2.jpg" alt="Steve" className={styles.avatarImg2} />
        </div>
      </FadeIn>

      <FadeIn>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Available for new opportunities
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
          Steve Sikoryak — Shopify Developer &amp; Full-Stack Builder 
          with 9+ years of experience crafting high-performing storefronts 
          and web applications. Detail-oriented, collaborative, and known for 
          shipping clean, thoughtful solutions.
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
          <Counter end={9} suffix="+" label="YEARS EXPERIENCE" />
          <div className={styles.counterDivider} />
          <Counter end={30} suffix="+" label="HAPPY CLIENTS" />
          <div className={styles.counterDivider} />
          <Counter end={50} suffix="+" label="PROJECTS COMPLETED" />
        </div>
      </FadeIn>

      <FadeIn delay={0.5}>
        <p className={styles.location}>📍 New Jersey, US</p>
      </FadeIn>
    </section>
  );
}
