'use client';

import { useState } from 'react';
import { FadeIn } from './ui';
import styles from './Tools.module.css';

const TOOLS = [
  { name: 'Shopify', desc: 'E-Commerce Platform', icon: '🛍️' },
  { name: 'Liquid', desc: 'Template Language', icon: '💧' },
  { name: 'WordPress', desc: 'CMS Platform', icon: '📝' },
  { name: 'PHP', desc: 'Server-Side Language', icon: '🔷' },
  { name: 'React', desc: 'UI Framework', icon: '⚛️' },
  { name: 'Next.js', desc: 'Full-Stack React', icon: '▲' },
  { name: 'PostgreSQL', desc: 'Database', icon: '🐘' },
  // { name: 'Django', desc: 'Python Framework', icon: '🐍' },
  { name: 'Git', desc: 'Version Control', icon: '⎇' },
  { name: 'JavaScript', desc: 'Core Language', icon: '✦' },
  { name: 'CSS / Tailwind', desc: 'Styling', icon: '🎨' },

  
];

export default function Tools({ onHoverLang }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="tools" className={styles.section}>
      <FadeIn>
        <h2 className={styles.title}>Tools &amp; Technologies</h2>
        <p className={styles.subtitle}>The stack I reach for daily.</p>
      </FadeIn>

      <div className={styles.grid}>
        {TOOLS.map((t, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div
              className={`${styles.card} ${hovered === i ? styles.cardHover : ''}`}
              onMouseEnter={() => { setHovered(i); onHoverLang?.(t.name); }}
              onMouseLeave={() => { setHovered(null); onHoverLang?.(null); }}
            >
              <span className={styles.icon}>{t.icon}</span>
              <span className={styles.name}>{t.name}</span>
              <span className={styles.desc}>{t.desc}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
