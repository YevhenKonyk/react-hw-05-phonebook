import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/ContactContainer';
import styles from './ContactList.module.css';

const ContactList = ({ items }) => (
  <>
    {items.length > 0 && (
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.id} className={styles.listItem}>
            <Contact id={item.id} />
          </li>
        ))}
      </ul>
    )}
  </>
);

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

ContactList.defaultProps = {
  items: [],
};

export default ContactList;
