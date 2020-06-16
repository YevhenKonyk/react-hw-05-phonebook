import { connect } from 'react-redux';
import App from './App';
import * as contactsOperations from '../../redux/contacts/contactsOperations';

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(App);
