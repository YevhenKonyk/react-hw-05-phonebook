export const getAllContacts = state => state.contacts.items;
export const getContactsLength = state => state.contacts.items.length;
export const getFilter = state => state.contacts.filter;
export const isLoading = state => state.contacts.loading;
export const getError = state => state.contacts.error;

export const getContactById = (state, id) => {
  const contacts = getAllContacts(state);

  return contacts.find(contact => contact.id === id);
};

export const getFilteredContacts = state => {
  const contacts = getAllContacts(state);
  const filter = getFilter(state);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return filteredContacts.length > 0 ? filteredContacts : [];
};
