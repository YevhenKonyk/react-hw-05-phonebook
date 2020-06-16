import { connect } from 'react-redux';
import {
  getFilter,
  getContactsLength,
} from '../../redux/contacts/contactsSelectors';
import { changeFilter } from '../../redux/contacts/contactsActions';
import ContactFilter from './ContactFilter';

const mapStateToProps = state => ({
  filter: getFilter(state),
  contactsLength: getContactsLength(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
