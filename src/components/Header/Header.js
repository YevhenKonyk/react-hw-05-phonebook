import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <>
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <a href="\" className={styles.logo}>
            <img src="" alt="Phonebook logo" />
          </a>
          <ul className={styles.list}>
            <li>Home</li>
          </ul>
        </nav>
      </div>
    </header>
  </>
);

export default Header;
