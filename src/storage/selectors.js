export const contactsSelector = state => ({
    contacts: state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(state.filter.toLowerCase())
    ),
    filter: state.filter
});

