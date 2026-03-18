'use client';

import { useState } from 'react';
import { FadeIn } from './ui';
import styles from './FAQ.module.css';

const FAQS = [
  {
    q: "What's your specialty?",
    a: "Shopify development and custom e-commerce solutions. I focus on building robust, tailored setups that integrate seamlessly with how my clients actually run their business so they can manage their site day-to-day with confidence, not confusion.",
  },
  {
    q: "Are you a web designer?",
    a: "I'm a developer first, but I have a strong eye for what looks good and what works. I'm very comfortable in the Adobe suite (especially Photoshop) and I approach every build with a mobile-first mindset, focusing on clean layouts, intuitive UX, and responsive design that works across all devices. You won't need to hand me pixel-perfect mockups to get a polished result.",
  },
  {
    q: 'How do you handle projects?',
    a: "I work iteratively, starting with requirements, building in phases, and keeping communication tight throughout. I like to stay closely embedded with the team so nothing falls through the cracks. You'll always know where things stand and what's coming next.",
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
