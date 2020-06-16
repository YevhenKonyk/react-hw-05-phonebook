import axios from 'axios';

import {
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsError,
  addContactStart,
  addContactSuccess,
  addContactError,
  deleteContactStart,
  deleteContactSuccess,
  deleteContactError,
} from './contactsActions';

const BASE_URL = 'http://localhost:3001';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsStart());

  axios
    .get(`${BASE_URL}/contacts`)
    .then(res => {
      dispatch(fetchContactsSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchContactsError(err));
    });
};

export const addContact = contact => dispatch => {
  dispatch(addContactStart());

  axios
    .post(`${BASE_URL}/contacts`, contact)
    .then(res => {
      dispatch(addContactSuccess(res.data));
    })
    .catch(err => {
      dispatch(addContactError(err));
    });
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactStart());

  axios
    .delete(`${BASE_URL}/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactSuccess(id));
    })
    .catch(err => {
      dispatch(deleteContactError(err));
    });
};
