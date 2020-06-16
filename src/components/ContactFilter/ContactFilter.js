import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';

const ContactFilter = ({ filter, onChangeFilter, contactsLength }) => (
  <>
    {contactsLength > 2 && (
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Enter contact name"
          className={styles.input}
          value={filter}
          onChange={onChangeFilter}
        />
      </div>
    )}
  </>
);

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  contactsLength: PropTypes.number.isRequired,
};

export default ContactFilter;
