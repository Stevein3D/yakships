import styles from './Marquee.module.css';

export default function Marquee() {
  const content =
    'Shopify \u00a0✦\u00a0 React \u00a0✦\u00a0 Next.js \u00a0✦\u00a0 Django \u00a0✦\u00a0 Liquid \u00a0✦\u00a0 PostgreSQL \u00a0✦\u00a0 JavaScript \u00a0✦\u00a0 E-Commerce \u00a0✦\u00a0 ';

  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {[0, 1, 2].map((i) => (
          <span key={i} className={styles.content}>
            {content}
          </span>
        ))}
      </div>
    </div>
  );
}
