import React from 'react';
import { useState, useEffect } from 'react';
import { FormInput } from './Form/FormInput';
import ContactsList from './ContactsList/ContactsList';
import FilterContacts from './FilterContacts/FilterContacts';
import { nanoid } from 'nanoid';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [value, setValue] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const isDuplicate = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = { id: nanoid(), name, number };

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const handleDeleteContact = id => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };

  const onChange = e => setValue(e.currentTarget.value);

  const filteredContacts = value
    ? contacts.filter(el => el.name.toLowerCase().includes(value.toLowerCase()))
    : contacts;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        width: '80vw',
        gap: '40px',
      }}
    >
      <h1>Phonebook</h1>
      <FormInput onBtnSubmit={formSubmitHandler} />
      <FilterContacts onChange={onChange} value={value} />
      <h2>Contacts:</h2>
      <ContactsList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}
