import { connect } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contactsOperations';
import ContactEditor from './ContactEditor';

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

export default connect(null, mapDispatchToProps)(ContactEditor);
