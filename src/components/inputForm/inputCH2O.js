import React from 'react';
import { TextField } from '@mui/material';

export default function InputCH2O({ value, onChange }) {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <TextField
        className='TextField'
        autoComplete='off'
        name='CH2O'
        variant='outlined'
        label="How much water do you typically consume daily in liters?"
        fullWidth
        type='number'
        value={value}
        onChange={handleInputChange}
        style={{ marginBottom: "20px" }}
      />
    </div>
  );
}
