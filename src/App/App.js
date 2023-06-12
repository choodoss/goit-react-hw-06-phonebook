import { AppContainer } from './App.styled';
import generateId from "../tools/idRandomize";
import Form from '../Form/Form';
import Search from '../Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { contactsSelector } from '../storage/selectors';
import { add, addFilter, remove } from '../storage/contactSlice';
import ContactList from '../List/ContactList';
import { createNotification } from '../tools/nofications';
import { NotificationContainer } from 'react-notifications';

export default function App() {
  const { contacts, filter } = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const handleFilter = (value) => {
    dispatch(addFilter(value));
  };

  const handleContactRemove = ({ currentTarget: { id } }) => {
    dispatch(remove(id));
  };

  const handleSubmitForm = (formData) => {
    const findErr = contacts.find(contact => contact.name.toLowerCase() === formData.get('name').toLowerCase());
    if (findErr) {
      createNotification();
      return;
    }
    dispatch(add({ id: generateId(), name: formData.get('name'), phone: formData.get('number') }));
  };

  const app =
    <AppContainer>
      <Typography sx={{ fontSize: 'clamp(4rem, 6rem, 100%)' }} variant="h1">Phonebook</Typography>
      <Form onSubmit={handleSubmitForm} />
      <Typography sx={{ marginBottom: '0.2rem', fontSize: 'clamp(3rem, 5rem, 100%)' }} variant="h2">Contacts</Typography>
      <Search handleFilter={handleFilter} filter={filter} />
      <ContactList contacts={contacts} handleContactRemove={handleContactRemove} />
      <NotificationContainer />
    </AppContainer>;

  return app;
}





