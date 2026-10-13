import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <span className={styles.badge}>Новинка 2026</span>
        <h1 className={styles.title}>Ваш продукт здесь</h1>
        <p className={styles.subtitle}>
          Краткое описание преимуществ продукта. Одно-два предложения.
        </p>
        <div className={styles.actions}>
          <button className={styles.cta}>Попробовать бесплатно</button>
          <a href="#features" className={styles.secondary}>Узнать больше →</a>
        </div>
      </div>
    </section>
  );
}