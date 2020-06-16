import { connect } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  items: getFilteredContacts(state),
});

export default connect(mapStateToProps, null)(ContactList);
