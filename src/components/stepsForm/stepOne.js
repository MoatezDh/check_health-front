import React from 'react';
import InputName from '../inputForm/inputName';
import RadioGender from '../radioCheck/radioGender';
import { Paper } from '@mui/material';
import InputAge from '../inputForm/inputAge';
import InputHeight from '../inputForm/InputHeight';
import InputWeight from '../inputForm/inputWeight';
import RadioFamilyHis from '../radioCheck/radioFamilyHis';


export default function StepOne({ formData={}, setFormData,Name,setName }) {
  const {  Gender = 'Female', Age=0, Height=0, Weight=0, family_history_with_overweight="yes" } = formData;
  //const [Name, setName] = useState("")
 
  const handleChange = (key, value) => {
    if (key === 'Name') {
      // If the key is 'Name', set the name separately
      setName(value);
    } else {
      // Otherwise, update the form data state
      setFormData(prevData => ({
        ...prevData,
        [key]: value
      }));
    }
  };


  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto', alignContent: 'space-evenly', marginBottom: "20px" }}>
      <InputName value={Name} onChange={value=>handleChange('Name',value)} />
      <RadioGender value={Gender} onChange={value => handleChange('Gender', value)} />
      <InputAge value={Age} onChange={value => handleChange('Age', value)} />
      <InputHeight value={Height} onChange={value => handleChange('Height', value)} />
      <InputWeight value={Weight} onChange={value => handleChange('Weight', value)} />
      <RadioFamilyHis value={family_history_with_overweight} onChange={value => handleChange('family_history_with_overweight', value)} />
    </Paper>
  );
}
