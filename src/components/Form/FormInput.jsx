import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { nanoid } from 'nanoid';

// const nameInputId = nanoid();
// const numberInputId = nanoid();

export function FormInput({ onBtnSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInputName = event => {
    const inputName = event.target.value;
    setName(inputName);
  };

  const onChangeInputNumber = event => {
    const inputNumber = event.target.value;
    setNumber(inputNumber);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onBtnSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label> {/*htmlFor={nameInputId} */}
          <Form.Control
            onChange={onChangeInputName}
            name="name"
            // id={nameInputId}
            type="text"
            value={name}
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Form.Label>Number</Form.Label> {/*htmlFor={numberInputId} */}
          <Form.Control
            onChange={onChangeInputNumber}
            name="number"
            // id={numberInputId}
            type="tel"
            value={number}
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />{' '}
          <Button
            variant="primary"
            type="submit"
            style={{
              marginTop: '20px',
            }}
          >
            Add contacts
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
FormInput.propTypes = {
  onBtnSubmit: PropTypes.func.isRequired,
};
