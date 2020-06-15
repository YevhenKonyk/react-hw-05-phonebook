import React from 'react';
import styles from './Contact.module.css';

const Contact = () => (
  <>
    <div className={styles.container}>
      <p className={styles.name}>John Doe</p>
      <p className={styles.phone}>123-456-7890</p>
      <button type="button" className={styles.button}>
        Delete
      </button>
    </div>
  </>
);

export default Contact;
