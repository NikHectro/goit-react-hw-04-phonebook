import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

function FilterContacts({ onChange, value }) {
  return (
    <>
      <Form.Label htmlFor="fltrContacts">
        <h2>Find contact by name:</h2>
      </Form.Label>
      <Form.Control
        type="text"
        id="fltrContacts"
        aria-describedby="passwordHelpBlock"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default FilterContacts;

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
