import React from 'react';
import InputTUE from '../inputForm/inputTUE';
import RadioSCC from '../radioCheck/radioSCC';
import { Paper } from '@mui/material';
import InputFAF from '../inputForm/inputFAF';
import RadioFCVC from '../radioCheck/radioFCVC';
import RadioFAVC from '../radioCheck/radioFAVC';
import InputNCP from '../inputForm/inputNCP'
export default function StepThree({ formData={}, setFormData }) {
  const {  FCVC="no",SCC='no',TUE=0,FAF=0,FAVC='no',NCP=0 } = formData;

   
  const handleChange = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto', alignContent: 'space-evenly', marginBottom: "20px" }}>
      <RadioSCC value={SCC} onChange={value=>handleChange('SCC', value)} />
      <InputTUE value={TUE} onChange={value => handleChange('TUE', value)} />
      <InputNCP value={NCP} onChange={value=>handleChange('NCP',value)} />
      <InputFAF value={FAF} onChange={value => handleChange('FAF', value)} />
      <RadioFCVC value={FCVC} onChange={value => handleChange('FCVC', value)} />
      <RadioFAVC value={FAVC} onChange={value => handleChange('FAVC', value)} />
    </Paper>
  );
}
