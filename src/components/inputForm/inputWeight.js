import React from 'react';
import { TextField } from '@mui/material';

export default function InputWeight({ value, onChange }) {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <TextField
        name='Weight'
        variant='outlined'
        className='TextField'
        label="Weight"
        fullWidth
        type='number'
        autoComplete='off'
        value={value}
        onChange={handleInputChange}
        style={{ marginBottom: "20px" }}
      />
    </div>
  );
}
