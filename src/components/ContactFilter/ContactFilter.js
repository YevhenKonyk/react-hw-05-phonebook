import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getFilter,
  getContactsLength,
} from '../../redux/contacts/contactsSelectors';
import { changeFilter } from '../../redux/contacts/contactsActions';

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

const mapStateToProps = state => ({
  filter: getFilter(state),
  contactsLength: getContactsLength(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(changeFilter(e.target.value)),
});

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  contactsLength: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
