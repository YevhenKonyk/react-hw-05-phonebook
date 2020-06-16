export const actionTypes = {
  FETCH_CONTACTS_START: 'FETCH_CONTACTS_START',
  FETCH_CONTACTS_SUCCESS: 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_ERROR: 'FETCH_CONTACTS_ERROR',

  DELETE_CONTACT_START: 'DELETE_CONTACT_START',
  DELETE_CONTACT_SUCCESS: 'DELETE_CONTACT_SUCCESS',
  DELETE_CONTACT_ERROR: 'DELETE_CONTACT_ERROR',

  ADD_CONTACT_START: 'ADD_CONTACT_START',
  ADD_CONTACT_SUCCESS: 'ADD_CONTACT_SUCCESS',
  ADD_CONTACT_ERROR: 'ADD_CONTACT_ERROR',

  CHANGE_FILTER: 'CHANGE_FILTER',
};

/** Fetch contacts */
export const fetchContactsStart = () => ({
  type: actionTypes.FETCH_CONTACTS_START,
});

export const fetchContactsSuccess = contacts => ({
  type: actionTypes.FETCH_CONTACTS_SUCCESS,
  payload: { contacts },
});

export const fetchContactsError = error => ({
  type: actionTypes.FETCH_CONTACTS_ERROR,
  payload: { error },
});

/** Add contact */
export const addContactStart = () => ({
  type: actionTypes.ADD_CONTACT_START,
});

export const addContactSuccess = contact => ({
  type: actionTypes.ADD_CONTACT_SUCCESS,
  payload: { contact },
});

export const addContactError = error => ({
  type: actionTypes.ADD_CONTACT_ERROR,
  payload: { error },
});

/** Delete contact */
export const deleteContactStart = () => ({
  type: actionTypes.DELETE_CONTACT_START,
});

export const deleteContactSuccess = id => ({
  type: actionTypes.DELETE_CONTACT_SUCCESS,
  payload: { id },
});

export const deleteContactError = error => ({
  type: actionTypes.DELETE_CONTACT_ERROR,
  payload: { error },
});

export const changeFilter = filter => ({
  type: actionTypes.CHANGE_FILTER,
  payload: { filter },
});
