'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = ['Projects', 'Tools', 'Testimonials', 'FAQ', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <div className={styles.logo} onClick={() => scrollTo('hero')}>
            yak<span className={styles.accent}>ships</span>
          </div>

          <div className={styles.links}>
            {NAV_LINKS.map((link) => (
              <span
                key={link}
                className={styles.link}
                onClick={() => scrollTo(link.toLowerCase())}
              >
                {link}
              </span>
            ))}
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`${styles.hamLine} ${mobileOpen ? styles.hamOpen1 : ''}`} />
            <span className={`${styles.hamLine} ${mobileOpen ? styles.hamOpen2 : ''}`} />
            <span className={`${styles.hamLine} ${mobileOpen ? styles.hamOpen3 : ''}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className={styles.mobileOverlay}>
          {NAV_LINKS.map((link) => (
            <span
              key={link}
              className={styles.mobileLink}
              onClick={() => scrollTo(link.toLowerCase())}
            >
              {link}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
