import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioCALC({value,onChange}) {
  

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl style={{ padding: '20px', margin: 'auto', maxWidth: '500px' }}>
      <FormLabel id="demo-controlled-radio-buttons-group" style={{ marginBottom: '10px' }}>Are you consuming Alcohol?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        style={{ display: 'flex', flexDirection: 'row', marginBottom: "20px" }}
      >
        <FormControlLabel value="no" control={<Radio />} label="No" style={{ marginRight: '20px' }} />
        <FormControlLabel value="Sometimes" control={<Radio />} label="Sometimes" style={{ marginRight: '20px' }} />
        <FormControlLabel value="Frequently" control={<Radio />} label="Frequently" />
      </RadioGroup>
    </FormControl>
  );
}
