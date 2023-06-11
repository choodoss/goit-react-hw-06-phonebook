import { ADD_CONTACTS, FILTER_CONTACTS, REMOVE_CONTACTS } from "./constant";

export const filterContactsAction = value => {
  return {
    type: FILTER_CONTACTS,
    payload: value,
  };
};
export const addContactsAction = value => {
  return {
    type: ADD_CONTACTS,
    payload: value,
  };
};
export const removeContactsAction = idContact => {
  return {
    type: REMOVE_CONTACTS,
    payload: idContact,
  };
};
