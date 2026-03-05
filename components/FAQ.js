'use client';

import { useState } from 'react';
import { FadeIn } from './ui';
import styles from './FAQ.module.css';

const FAQS = [
  {
    q: "What's your specialty?",
    a: "Shopify development and custom e-commerce solutions. I specialize in complex business logic — cart validation, scheduled collections, payment integrations, and theme customization with Liquid.",
  },
  {
    q: "What's your tech stack?",
    a: "Shopify/Liquid for e-commerce, React/Next.js for web apps, Django/Python for backend projects, and PostgreSQL for databases. I pick the right tool for each project.",
  },
  {
    q: 'How do you handle projects?',
    a: "I work iteratively — starting with requirements, building in phases, and keeping communication tight. I'm a freelancer who operates like an embedded team member.",
  },
  {
    q: 'Can you work with existing codebases?',
    a: "Absolutely. Much of my work involves extending and customizing existing Shopify themes and storefronts. I'm comfortable jumping into any codebase.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className={styles.section}>
      <FadeIn>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
      </FadeIn>

      <div className={styles.list}>
        {FAQS.map((item, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div
              className={styles.item}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className={styles.header}>
                <span className={styles.question}>{item.q}</span>
                <span
                  className={styles.toggle}
                  style={{
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </div>
              <div
                className={styles.answer}
                style={{
                  maxHeight: open === i ? 200 : 0,
                  opacity: open === i ? 1 : 0,
                  marginTop: open === i ? 12 : 0,
                }}
              >
                {item.a}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
