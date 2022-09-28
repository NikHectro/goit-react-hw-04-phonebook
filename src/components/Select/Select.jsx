// import PropTypes from 'prop-types'
import React, { Component } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const ages = ['0-10', '11-21', '>21'];

export default class Select extends Component {
  //   static propTypes = {second: third}

  render() {
    const { onChangeInput } = this.props;

    return (
      <Box sx={{ maxWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Age
          </InputLabel>
          <NativeSelect
            defaultValue={ages[0]}
            onChange={onChangeInput}
            name="age"
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            {ages.map(age => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
    );
  }
}
