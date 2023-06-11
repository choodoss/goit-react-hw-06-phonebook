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
    }],
    filter: '',
}
const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        add: (state, { payload }) => {
            state.contacts = [...state.contacts, payload].sort((a, b) => a.name.localeCompare(b.name));
            console.log(state)
        },
        remove: (state, { payload }) => {
            state.contacts = state.contacts.filter(contact => !contact.id.includes(payload));
        },
        addFilter: (state, { payload }) => {
            state.filter = payload;
        }
    }
});

export const reducer = contactSlice.reducer;

export const { add, remove, addFilter } = contactSlice.actions;
