import React from 'react';
import styles from './ContactFilter.module.css';

const ContactFilter = () => (
  <div className={styles.container}>
    <input
      type="text"
      placeholder="Enter contact name"
      className={styles.input}
    />
  </div>
);

export default ContactFilter;
