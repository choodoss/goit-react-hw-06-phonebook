import { AppContainer } from './App.styled';
import generateId from "../tools/idRandomize";
import Form from '../Form/Form';
import Search from '../Search/Search';
import List from '../List/LIst';
import { addContactsAction, filterContactsAction, removeContactsAction } from '../storage/action';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { contactsSelector } from '../storage/selectors';

export default function App() {
  const { contacts, filter } = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const handleFilter = (value) => {
    dispatch(filterContactsAction(value));
  };

  const handleContactRemove = ({ currentTarget: { id } }) => {
    dispatch(removeContactsAction(id));
  };

  const handleSubmitForm = (formData) => {
    const findErr = contacts.find(contact => contact.name.toLowerCase() === formData.get('name').toLowerCase());
    if (findErr) {
      alert("The contact already exists in the contact book");
      return;
    }
    dispatch(addContactsAction({ id: generateId(), name: formData.get('name'), phone: formData.get('number') }));
  };

  const app =
    <AppContainer>
      <Typography sx={{ fontSize: 'clamp(4rem, 6rem, 100%)' }} variant="h1">Phonebook</Typography>
      <Form onSubmit={handleSubmitForm} />
      <Typography sx={{ marginBottom: '0.2rem', fontSize: 'clamp(3rem, 5rem, 100%)' }} variant="h2">Contacts</Typography>
      <Search handleFilter={handleFilter} filter={filter} />
      <List contacts={contacts} handleContactRemove={handleContactRemove} />
    </AppContainer>;

  return app;
}





