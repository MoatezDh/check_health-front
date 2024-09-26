import React from 'react';
import RadioCAEC from '../radioCheck/radioCAEC';
import RadioSmoke from '../radioCheck/radioSmoke';
import { Paper } from '@mui/material';
import InputCH2O from '../inputForm/inputCH2O';
import RadioCALC from '../radioCheck/radioCALC';
import TransportSelection from '../selectOption/selectTransports';


export default function StepTwo({ formData = {}, setFormData }) {
  const {
    CAEC = 'no',
    SMOKE = 'yes',
    CH2O =0,
    CALC = 'No',
    MTRANS = 'Automobile',
   
  } = formData;

  const handleChange = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto', alignContent: 'space-evenly', marginBottom: "20px" }}>
      <RadioCAEC value={CAEC} onChange={value => handleChange('CAEC', value)} />
      <RadioSmoke value={SMOKE} onChange={value => handleChange('SMOKE', value)} />
      <InputCH2O value={CH2O} onChange={value => handleChange('CH2O', value)} />
      <RadioCALC value={CALC} onChange={value => handleChange('CALC', value)} />
      <TransportSelection value={MTRANS} onChange={value => handleChange('MTRANS', value)} />

     

    </Paper>
  );
}
