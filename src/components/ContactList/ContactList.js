import React from 'react';
import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = () => (
  <>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Contact />
      </li>
    </ul>
  </>
);

export default ContactList;
