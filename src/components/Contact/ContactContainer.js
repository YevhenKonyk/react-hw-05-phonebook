import { connect } from 'react-redux';
import { getContactById } from '../../redux/contacts/contactsSelectors';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import Contact from './Contact';

const mapStateToProps = (state, props) => ({
  contact: getContactById(state, props.id),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
