'use client';

import { useState } from 'react';
import styles from './Marquee.module.css';

const LANGS = [
  'Shopify', 'React', 'Next.js', 
  // 'Django',
  'Liquid', 'PostgreSQL', 'JavaScript', 'E-Commerce',
  'WordPress', 'HubSpot',
];

export default function Marquee({ hoveredLang, onHoverLang }) {
  const [paused, setPaused] = useState(false);

  const handleEnter = (lang) => {
    setPaused(true);
    onHoverLang?.(lang);
  };

  const handleLeave = () => {
    setPaused(false);
    onHoverLang?.(null);
  };

  return (
    <div className={styles.wrap}>
      <div
        className={styles.track}
        style={{ animationPlayState: paused ? 'paused' : 'running' }}
      >
        {[0, 1, 2].map((copy) =>
          LANGS.map((lang) => (
            <span key={`${copy}-${lang}`} className={styles.item}>
              <span
                className={`${styles.word} ${hoveredLang === lang ? styles.wordActive : ''}`}
                onMouseEnter={() => handleEnter(lang)}
                onMouseLeave={handleLeave}
              >
                {lang}
              </span>
              <span className={styles.sep}>✦</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}
