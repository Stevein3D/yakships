import { FadeIn } from './ui';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    name: "Lucy's Kitchen",
    role: 'Primary Client',
    text: "Steve customized our entire ordering system from cart validation to collection scheduling. Everything just works. We saw over a 10% increase in revenue in the first month compared to last year after the site updates.",
  },
  {
    name: 'Board Game Group',
    role: 'Meep Meet Users',
    text: "The game night planner made organizing sessions a breeze. It's quick, stats update instantly, and I've discovered tons of new games through it. Love the BGG integration, stat tracking, and the fun profile details.",
  },
  {
    name: 'Former Colleagues',
    role: 'Sussman Consultants',
    text: 'Steve is a joy to work with. He\'s reliable, responsive, and genuinely fun to have on the team. He communicates clearly with clients, keeps everyone in the loop, and brings a positive energy that makes even tough projects feel manageable.',
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
