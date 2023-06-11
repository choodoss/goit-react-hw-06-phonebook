import generateId from "../tools/idRandomize";
import { ADD_CONTACTS, FILTER_CONTACTS, REMOVE_CONTACTS } from "./constant";

const initState = {
    contacts: [],
    filter: '',
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_CONTACTS:
            return {
                ...state,
                contacts: [...state.contacts, { id: generateId(), name: payload.get('name'), phone: payload.get('number') }]
            };
        case REMOVE_CONTACTS:
            return {
                ...state,
                contacts: state.contacts.filter(contact => !contact.id.includes(payload))
            };
        case FILTER_CONTACTS:
            return {
                ...state, filter: payload
            };
        default:
            return state;
    }
};