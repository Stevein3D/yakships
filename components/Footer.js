import { FadeIn } from './ui';
import styles from './Footer.module.css';

export function ContactCTA() {
  return (
    <section id="contact" className={styles.ctaSection}>
      <FadeIn>
        <div className={styles.ctaBox}>
          <h2 className={styles.ctaTitle}>Let&apos;s collaborate</h2>
          <p className={styles.ctaSub}>
            Have a Shopify project, a web app idea, or need e-commerce expertise?
            I&apos;d love to hear about it. Let&apos;s build something great together.
          </p>
          <a href="mailto:stevein3d@gmail.com" className={styles.btnPrimary}>
            Get in Touch →
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span className={styles.footerLogo}>
          yak<span className={styles.accent}>ships</span>
        </span>
        <span className={styles.footerCopy}>© 2026 yakships.dev — Built with Next.js</span>
      </div>
    </footer>
  );
}
