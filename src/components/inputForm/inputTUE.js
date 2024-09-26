import React from 'react';
import { TextField } from '@mui/material';

export default function InputTUE({ value, onChange }) {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <TextField
        name='TUE'
        variant='outlined'
        label="How much time do you use technological devices?"
        className='TextField'
        fullWidth
        autoComplete='off'
        value={value}
        type='number'
        onChange={handleInputChange}
        style={{ marginBottom: "20px" }}
      />
    </div>
  );
}
