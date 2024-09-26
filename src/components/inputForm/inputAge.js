import React from 'react';
import { TextField } from '@mui/material';

export default function InputAge({ value, onChange }) {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <TextField
        autoComplete='off'
        required
        
        className='TextField'
        name='Age'
        variant='outlined'
        label="Age"
        fullWidth
        value={value}
        type='number'
        onChange={handleInputChange}
        style={{ marginBottom: "20px" }}
      />
    </div>
  );
}
