import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class FormInput extends Component {
  state = INITIAL_STATE;

  // nameInputId = nanoid();
  // numberInputId = nanoid();

  onChangeInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onBtnSubmit({ id: nanoid(), ...this.state });
    this.reset();
  };

  reset = () => this.setState(INITIAL_STATE);

  render() {
    // const contactsList = this.state.contacts;
    // console.log(contactsList);

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label htmlFor={this.nameInputId}>Name</Form.Label>
            <Form.Control
              onChange={this.onChangeInput}
              name="name"
              id={this.nameInputId}
              type="text"
              value={this.state.name}
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <Form.Label htmlFor={this.numberInputId}>Number</Form.Label>
            <Form.Control
              onChange={this.onChangeInput}
              value={this.state.number}
              placeholder="Numer"
              type="tel"
              name="number"
              id={this.numberInputId}
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
}

FormInput.propTypes = {
  onBtnSubmit: PropTypes.func.isRequired,
};
