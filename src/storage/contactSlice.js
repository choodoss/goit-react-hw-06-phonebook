import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: []
}
const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, { payload }) => {
            state.contacts = [...state.contacts, payload].sort((a, b) => a.name.localeCompare(b.name));
        },
        removeContact: (state, { payload }) => {
            state.contacts = state.contacts.filter(contact => !contact.id.includes(payload));
        }
    }
});

export const reducerContact = contactSlice.reducer;

export const { addContact, removeContact } = contactSlice.actions;