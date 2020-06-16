import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Contact from '../Contact/Contact';
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors';
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

const mapStateToProps = state => ({
  items: getFilteredContacts(state),
});

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

export default connect(mapStateToProps, null)(ContactList);
