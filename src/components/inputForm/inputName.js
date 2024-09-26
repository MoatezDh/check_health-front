import React from 'react';
import { TextField } from '@mui/material';

export default function InputName({ value, onChange }) {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <TextField
      name='Name'
      className='TextField'
      variant='outlined'
      autoComplete='off'
      label="Name"
      fullWidth
      value={value}
      onChange={handleInputChange}
      style={{ marginBottom: "20px" }}
    />
  );
}
