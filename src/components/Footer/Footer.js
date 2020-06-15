import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <>
    <footer>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; 2020 Phonebook by:&nbsp;
          <span className={styles.author}>Yevhen Konyk</span>
        </p>
      </div>
    </footer>
  </>
);

export default Footer;
