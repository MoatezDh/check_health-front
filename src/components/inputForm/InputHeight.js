import React from 'react';
import { TextField } from '@mui/material';

export default function InputHeight({ value, onChange }) {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <TextField
        name='Height'
        variant='outlined'
        className='TextField'
        autoComplete='off'
        label="Height"
        fullWidth
        type='number'
        value={value}
        onChange={handleInputChange}
        style={{ marginBottom: "20px" }}
      />
    </div>
  );
}
