import styles from './Features.module.css';

const features = [
  { title: 'Быстрая настройка', text: 'Запустите проект за минуты, без сложной конфигурации.' },
  { title: 'Адаптивность', text: 'Работает на любых устройствах — от телефона до десктопа.' },
  { title: 'TypeScript', text: 'Строгая типизация и автодополнение в редакторе.' },
  { title: 'CSS-модули', text: 'Изолированные стили без конфликтов классов.' },
  { title: 'App Router', text: 'Современная маршрутизация Next.js 14+.' },
  { title: 'Server Components', text: 'Быстрая загрузка и лучший SEO по умолчанию.' },
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <h2 className={styles.heading}>Возможности</h2>
        <p className={styles.subheading}>
          Всё, что нужно для быстрого старта вашего проекта
        </p>
        <div className={styles.grid}>
          {features.map((f) => (
            <article key={f.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardText}>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}