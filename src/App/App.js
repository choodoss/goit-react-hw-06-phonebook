import { AppCont } from './App.styled';
import Form from '../Form/Form';
import Search from '../Search/Search';
import List from '../List/LIst';
import { addContactsAction, filterContactsAction, removeContactsAction } from '../storage/action';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const {contacts} = useSelector(state => state)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const hendleFilter = ({ currentTarget: { value } }) => {
    dispatch(filterContactsAction(value))
  };

  const getFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const hendleContactRemove = ({ currentTarget: { id } }) => {
    dispatch(removeContactsAction(id))
  };

  const SubmitFormhendler = (formData) => {
    const findeErr = contacts.find(contact => contact.name.toLowerCase() === formData.get('name').toLowerCase())
    if (findeErr) {
      alert('вийди звідси розбійник');
      return
    };
    dispatch(addContactsAction(formData))
  };

  const app =
    <AppCont>
      <h1>Phonebook</h1>
      <Form onSubmit={SubmitFormhendler} />
      <h2>Contact</h2>
      <Search hendleFilter={hendleFilter} filter={filter} />
      <List getFilterContacts={getFilterContacts()} hendleContactRemove={hendleContactRemove} />
    </AppCont>
  return app;
};



