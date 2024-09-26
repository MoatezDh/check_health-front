import React from 'react';
import { FormControl, Select, MenuItem, Typography } from '@mui/material';

export default function TransportSelection({value,onChange}) {
  // Define transportation modes array of objects
  const transportModes = [
    { label: 'Automobile', value: "Automobile" },
    { label: 'Motorbike', value: "Motorbike" },
    { label: 'Public Transportation', value: "Public_Transportation" },
    { label: 'Walking', value: "Walking" },
    { label: 'Bike', value: "Bike" }
  ];

  
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
        <Typography
          variant='body1'
          style={{
            color: 'rgba(0, 0, 0, 0.6)',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.4375em',
            letterSpacing: '0.00938em',
            padding: 0,
            position: 'relative',
            marginLeft:'20px',
            marginBottom:'10px'
          }}
        >
          Select your mode of transportation
        </Typography>
      <Select
        value={value}
        onChange={handleChange}
      >
        {transportModes.map((mode, index) => (
          <MenuItem key={index} value={mode.value}>
            {mode.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
