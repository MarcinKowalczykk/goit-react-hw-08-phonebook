import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsStore.contacts.items;
export const selectContactsIsLoading = state =>
  state.contactsStore.contacts.isLoading;
export const selectContactsError = state => state.contactsStore.contacts.error;
export const selectContactsFilter = state => state.contactsStore.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
