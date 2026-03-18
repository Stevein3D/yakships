'use client';

import { useState } from 'react';
import { FadeIn } from './ui';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    title: "Lucy's Kitchen & Market",
    category: 'Shopify E-Commerce',
    description:
      'Full-stack Shopify build for a specialty food business — custom cart validation, collection closure scheduling, dynamic pickup and delivery system, and integrated flexible content areas.',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'E-Commerce'],
    color: '#E8A44A',
    image: '/preview-lucys.jpg',
    url: 'https://lucystogo.com',
  },
  {
    title: 'Meep Meet',
    category: 'React / Next.js App',
    description:
      'Board game night planner with BoardGameGeek API integration for, user auth via Clerk, PostgreSQL with Prisma ORM, and custom statistics and gameplay tracking logic.',
    tags: ['Next.js', 'React', 'PostgreSQL', 'Prisma'],
    color: '#6C9BF2',
    image: '/preview-meepmeet.jpg',
    url: 'https://meepmeet.club',
  },
  {
    title: 'Prepara',
    category: 'Shopify Theme Development',
    description:
      'Shopify theme overhaul — rebuilt product and collection pages, integrated flexible content areas for ongoing client updates, and restructured navigation with a custom menu system.',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'E-Commerce'],
    color: '#50C4A1',
    image: '/preview-prepara.jpg',
    url: 'https://prepara.com',
  },
  {
    title: 'On Demand Air',
    category: 'WordPress Development',
    description:
      'Full WordPress build for a private aviation company — features a multi-step flight planning form with dynamic routing, passenger details, and trip configuration.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'Forms'],
    color: '#5BAFD6',
    image: '/preview-ondemandair.jpg',
    url: 'https://www.ondemandair.co/',
  },
  {
    title: 'Imperial Design',
    category: 'HubSpot CMS',
    description:
      'Marketing site built within HubSpot CMS — custom modules, theme development, and CRM integration to support lead capture and client engagement workflows.',
    tags: ['HubSpot', 'CSS', 'JavaScript', 'CMS'],
    color: '#A87FE8',
    image: '/preview-imperial.jpg',
    url: 'https://imperial.design/',
  },
  // {
  //   title: 'The Steves Database',
  //   category: 'Django Application',
  //   description:
  //     'A catalog of actors named Steve and their roles across media. Built with Django, featuring comprehensive data import from Excel and a searchable interface.',
  //   tags: ['Django', 'Python', 'PostgreSQL', 'Data'],
  //   color: '#E06B75',
  //   image: '/preview-steves.jpg',
  //   url: null,
  // },
  {
    title: 'GenInterlock',
    category: 'WooCommerce Development',
    description:
      'WooCommerce build handling complex product groupings, component relationships, and compatibility logic. Focus on stability and reliable purchasing flows.',
    tags: ['WordPress', 'JavaScript', 'PHP', 'E-Commerce'],
    color: '#E06B75',
    image: '/preview-geninterlock.jpg',
    url: 'https://geninterlock.com',
  },
];

export default function Projects({ hoveredLang }) {
  const [hovered, setHovered] = useState(null);

  const tagMatches = (tag) => {
    if (!hoveredLang) return false;
    const t = tag.toLowerCase();
    const l = hoveredLang.toLowerCase();
    return t === l || l.includes(t) || t.includes(l);
  };

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
              <div className={styles.imageArea}>
                <div className={styles.stripe} />
                {p.image && (
                  <img src={p.image} alt={p.title} className={styles.slideImg} />
                )}
                <div className={styles.dimOverlay} />
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewBtn}
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                  </a>
                ) : (
                  <span className={`${styles.viewBtn} ${styles.viewBtnDev}`}>
                    In Development
                  </span>
                )}
              </div>

              <div className={styles.content}>
                <span className={styles.category}>{p.category}</span>
                <h3 className={styles.name}>{p.title}</h3>
                <p className={styles.desc}>{p.description}</p>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className={`${styles.tag} ${tagMatches(t) ? styles.tagHighlighted : ''}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
