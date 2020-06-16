import { combineReducers } from 'redux';
import { actionTypes } from './contactsActions';

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_CONTACTS_SUCCESS:
      return action.payload.contacts;

    case actionTypes.DELETE_CONTACT_SUCCESS:
      return state.filter(item => item.id !== action.payload.id);

    case actionTypes.ADD_CONTACT_SUCCESS:
      return [...state, action.payload.contact];

    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CONTACTS_START:
    case actionTypes.DELETE_CONTACT_START:
    case actionTypes.ADD_CONTACT_START:
      return true;

    case actionTypes.FETCH_CONTACTS_SUCCESS:
    case actionTypes.FETCH_CONTACTS_ERROR:
    case actionTypes.DELETE_CONTACT_SUCCESS:
    case actionTypes.DELETE_CONTACT_ERROR:
    case actionTypes.ADD_CONTACT_SUCCESS:
    case actionTypes.ADD_CONTACT_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CONTACTS_START:
    case actionTypes.FETCH_CONTACTS_SUCCESS:
    case actionTypes.DELETE_CONTACT_START:
    case actionTypes.DELETE_CONTACT_SUCCESS:
    case actionTypes.ADD_CONTACT_START:
    case actionTypes.ADD_CONTACT_SUCCESS:
      return null;

    case actionTypes.FETCH_CONTACTS_ERROR:
    case actionTypes.DELETE_CONTACT_ERROR:
    case actionTypes.ADD_CONTACT_ERROR:
      return action.payload.error;

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.CHANGE_FILTER:
      return action.payload.filter;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
});
