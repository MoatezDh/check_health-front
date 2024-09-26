import React from 'react';
import { TextField } from '@mui/material';

export default function InputNCP({ value, onChange }) {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <TextField
        name='NCP'
        variant='outlined'
        className='TextField'
        label="Number of main meals"
        fullWidth
        autoComplete='off'
        type='number'
        value={value}
        onChange={handleInputChange}
        style={{ marginBottom: "20px" }}
      />
    </div>
  );
}
