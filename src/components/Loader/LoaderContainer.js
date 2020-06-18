import { connect } from 'react-redux';
import { isLoading } from '../../redux/contacts/contactsSelectors';
import Loader from './Loader';

const mapStateToProps = state => ({
  loading: isLoading(state),
});

export default connect(mapStateToProps, null)(Loader);
