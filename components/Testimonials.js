import { FadeIn } from './ui';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    name: "Lucy's Kitchen",
    role: 'Primary Client',
    text: "Steve built our entire ordering system from scratch — cart validation, collection scheduling, everything. It just works.",
  },
  {
    name: 'Board Game Group',
    role: 'Meep Meet Users',
    text: "The game night planner made organizing sessions effortless. Love the BGG integration and Discord notifications.",
  },
  {
    name: 'Consulting Clients',
    role: 'Various Projects',
    text: 'Reliable, thorough, and always finds creative solutions to complex e-commerce problems. A true specialist.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <FadeIn>
        <h2 className={styles.title}>What People Say</h2>
      </FadeIn>

      <div className={styles.grid}>
        {TESTIMONIALS.map((t, i) => (
          <FadeIn key={i} delay={i * 0.12}>
            <div className={styles.card}>
              <div className={styles.quote}>&ldquo;</div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.name.charAt(0)}</div>
                <div>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
