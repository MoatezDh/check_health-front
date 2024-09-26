import React from 'react';
import { TextField } from '@mui/material';

export default function InputFAF({ value, onChange }) {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <TextField
        name='FAF'
        className='TextField'
        autoComplete='off'
        variant='outlined'
        label="How much time do you exercise per day?"
        type='number'
        fullWidth
        value={value}
        onChange={handleInputChange}
        style={{ marginBottom: "20px" }}
      />
    </div>
  );
}
