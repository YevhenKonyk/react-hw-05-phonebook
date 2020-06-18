import { connect } from 'react-redux';
import { getError } from '../../redux/contacts/contactsSelectors';
import ErrorNotification from './ErrorNotification';

const mapStateToProps = state => ({
  error: getError(state),
});

export default connect(mapStateToProps, null)(ErrorNotification);
