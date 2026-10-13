import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>Brand</a>
        <nav className={styles.nav}>
          <a href="#features">Возможности</a>
          <a href="#pricing">Цены</a>
          <a href="#contact">Контакты</a>
        </nav>
        <button className={styles.cta}>Начать</button>
      </div>
    </header>
  );
}