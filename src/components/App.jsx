import React, { Component } from 'react';
import { FormInput } from './Form/FormInput';
import ContactsList from './ContactsList/ContactsList';
import FilterContacts from './FilterContacts/FilterContacts';
// import { nanoid } from 'nanoid';
// import CheckBox from './CheckBox/CheckBox';
// import Select from './Select/Select';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    value: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('Обновились контакти');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    const isDuplicate = this.state.contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({ contacts: [...prevState.contacts, data] }));
    // this.state.contacts.push({ data });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  onChange = e => this.setState({ value: e.currentTarget.value });

  render() {
    const { formSubmitHandler } = this;
    const { contacts, value } = this.state;
    const filteredContacts = value
      ? contacts.filter(el =>
          el.name.toLowerCase().includes(value.toLowerCase())
        )
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
        <FilterContacts onChange={this.onChange} value={value} />
        <h2>Contacts:</h2>
        <ContactsList
          contacts={filteredContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
        {/* {this.state.contacts.map(contact => (
          <p>{contact[0]}</p>
        ))} */}

        {/* <CheckBox />
        <Select onChangeInput={this.onChangeInput} /> */}
      </div>
    );
  }
}
