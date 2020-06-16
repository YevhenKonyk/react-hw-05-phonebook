import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => (
  <>
    <div className={styles.container}>
      <p className={styles.name}>{contact.name}</p>
      <p className={styles.phone}>{contact.phoneNumber}</p>
      <button
        type="button"
        className={styles.button}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  </>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
