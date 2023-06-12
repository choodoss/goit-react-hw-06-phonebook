import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [{
        id: "1",
        name: 'Андрій Коваль',
        phone: '+380501234567'
    },
    {
        id: "2",
        name: 'Софія Шевченко',
        phone: '+380631234567'
    },
    {
        id: "4",
        name: 'Юлія Мартинюк',
        phone: '+380991234567'
    },
    {
        id: "5",
        name: 'Василь Іванов',
        phone: '+380501112233'
    }]
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