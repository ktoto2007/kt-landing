import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <strong>Brand</strong>
          <p>© 2026 Все права защищены.</p>
        </div>
        <nav className={styles.links}>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Условия</a>
          <a href="#">Контакты</a>
        </nav>
      </div>
    </footer>
  );
  
}