import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactList/ContactList';
// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import * as actions from 'redux/actions';
export default function App() {
  // const contacts = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.contacts.filter);
  // const dispatch = useDispatch();

  // const contact = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ];

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contact')) || contact;
  // });
  // // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contact', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = newContact => {
  //   const searchContactByName = contacts
  //     .map(contact => contact.name)
  //     .includes(newContact.name);

  //   if (searchContactByName) {
  //     alert(`${newContact.name} is already in contacts.`);
  //     return;
  //   }
  //   dispatch(actions.addContact(newContact));
  //   // setContacts([...contacts, newContact]);
  // };

  // const handleFilter = event => {
  //   dispatch(actions.handleFilter(event));

  //   // setFilter(event.currentTarget.value);
  // };

  // const deletaClick = nameId => dispatch(actions.deleteContact(nameId));

  // setContacts(prevState => prevState.filter(contact => contact.id !== nameId));

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
