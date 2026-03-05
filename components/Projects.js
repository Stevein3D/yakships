'use client';

import { useState } from 'react';
import { FadeIn } from './ui';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    title: "Lucy's Kitchen & Market",
    category: 'Shopify E-Commerce',
    description:
      'Full-stack Shopify build for a specialty food business — custom cart validation, collection closure scheduling, dynamic pickup dates, and ACH payment processing.',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'E-Commerce'],
    color: '#E8A44A',
  },
  {
    title: 'Meep Meet',
    category: 'React / Next.js App',
    description:
      'Board game night planner with BoardGameGeek API integration, user auth via Clerk, PostgreSQL with Prisma ORM, and Discord webhook notifications.',
    tags: ['Next.js', 'React', 'PostgreSQL', 'Prisma'],
    color: '#6C9BF2',
  },
  {
    title: 'The Steves Database',
    category: 'Django Application',
    description:
      'A catalog of actors named Steve and their roles across media. Built with Django, featuring comprehensive data import from Excel and a searchable interface.',
    tags: ['Django', 'Python', 'PostgreSQL', 'Data'],
    color: '#E06B75',
  },
  {
    title: 'Multi-Client Shopify Portfolio',
    category: 'Shopify Development',
    description:
      '8+ years managing client portfolios — theme customizations, payment processing, domain configuration, and complex business logic across diverse storefronts.',
    tags: ['Shopify', 'WordPress', 'CSS', 'Consulting'],
    color: '#50C4A1',
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className={styles.section}>
      <FadeIn>
        <h2 className={styles.title}>Recent Projects</h2>
        <p className={styles.subtitle}>
          A selection of work spanning e-commerce, web apps, and data projects.
        </p>
      </FadeIn>

      <div className={styles.grid}>
        {PROJECTS.map((p, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div
              className={`${styles.card} ${hovered === i ? styles.cardHover : ''}`}
              style={{
                '--project-color': p.color,
                '--project-color-faded': p.color + '44',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={styles.stripe} />
              <span className={styles.category}>{p.category}</span>
              <h3 className={styles.name}>{p.title}</h3>
              <p className={styles.desc}>{p.description}</p>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
