import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import StepOne from './stepsForm/stepOne';
import StepTwo from './stepsForm/stepTwo';
import StepThree from './stepsForm/stepThree';
import axios from 'axios';
import Modal from './modal/modal';
import LoadingGif from '../../src/load.gif'; // Ensure this path points to where you store load.gif
import '../styles.css'; // Import the global styles
import { message } from 'antd';

export default function Formulaire() {
  const [activeStep, setActiveStep] = useState(0);
  const [Response, setResponse] = useState(null); // Set initial Response to null
  const [Name, setName] = useState("")
  const [loading, setLoading] = useState(false); // Added loading state
  

  
  const [formData, setFormData] = useState({
    Gender: 'Female',
    Age: 0,
    Height: 0,
    Weight: 0,
    family_history_with_overweight: 'yes',
    FAVC: 'yes',
    FCVC: 'no',
    NCP: 0,
    CAEC: 'no',
    SMOKE: 'yes',
    CH2O: 0,
    SCC: 'no',
    FAF: 0,
    TUE: 0,
    CALC: 'no',
    MTRANS: 'Automobile',
  });

  const steps = ['Step 1', 'Step 2', 'Step 3'];
    const handleSubmit = async (e) => {
      if (activeStep===2 && (formData.NCP <= 0 || isNaN(formData.NCP)) ) {
        message.warning("Are you sure you haven't eaten anything?");
        return;
      } 
    e.preventDefault();
    setLoading(true); // Start loading
    try {
     
      const response = await axios.post('https://checkhealthapp.azurewebsites.net/api/predict', formData);
      setResponse(response.data.predicted_class);
      setLoading(false); // Stop loading when response is received
    } catch (error) {
      setLoading(false); // Ensure loading is false on error as well
      console.log(error);
    }
  };
  const handleNext = () => {
    if (formData.Age <= 0 || isNaN(formData.Age)) {
      message.warning('Age: Must be greater than 0 and less than 165. Please verify!');
      return;
    }if (formData.Height <= 0 || isNaN(formData.Height) ||formData.Height >2.90 ) {
      message.warning('Height must be in meters. Please verify!');
      return;
   }if (formData.Weight <= 0 || isNaN(formData.Weight) ) {
      message.warning('Are you sure your weight is less than 0 kg?');
    return;
    }if (activeStep===1 && (formData.CH2O <= 0 || isNaN(formData.CH2O))  ) {
    message.warning("Are you sure you haven't drunk  water ");
      return;
    } 
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    window.scrollTo(0, 0);
   
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    window.scrollTo(0, 0);
  };

  const handleReset = () => {
    setActiveStep(0);
    setResponse(null); 
    setName("")
   const formData={
    Gender: 'Female',
    Age: 0,
    Height: 0,
    Weight: 0,
    family_history_with_overweight: 'yes',
    FAVC: 'yes',
    FCVC: 'no',
    NCP: 0,
    CAEC: 'no',
    SMOKE: 'yes',
    CH2O: 0,
    SCC: 'no',
    FAF: 0,
    TUE: 0,
    CALC: 'no',
    MTRANS: 'Automobile',

   }
   setFormData(formData);
   window.scrollTo(0, 0);
    // Reset Response on reset
  };
 
  // Function to reset state and return to Step One on modal close
  const handleCloseModal = () => {
    window.scrollTo(0, 0);
    setActiveStep(0);
    setResponse(null);
    setName("")
    const formData={
      Gender: 'Female',
      Age: 0,
      Height: 0,
      Weight: 0,
      family_history_with_overweight: 'yes',
      FAVC: 'yes',
      FCVC: 'no',
      NCP: 0,
      CAEC: 'no',
      SMOKE: 'yes',
      CH2O: 0,
      SCC: 'no',
      FAF: 0,
      TUE: 0,
      CALC: 'no',
      MTRANS: 'Automobile',
  
     }
     setFormData(formData);
  };
       

  
  return (
  <div className="container">
    <Stepper activeStep={activeStep} alternativeLabel style={{ marginBottom: '10px' }}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
    <div style={{ position: 'relative', minHeight: '200px' }}>
      {/* Display Modal conditionally based on Response */}
      {loading && (
        <div className="loader-overlay" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
          zIndex: 1000, // Ensures the loader is above other content
        }}>
          <img src={LoadingGif} alt="Loading..." style={{ 
            width: '100px', // Adjust as needed
          }} repeat/>
        </div>
      )}

        {Response && <Modal Response={Response} Name={Name} onClose={handleCloseModal} />}
        <div>
          {activeStep === 0 ? (
            <StepOne formData={formData} setFormData={setFormData} Name={Name} setName={setName} />
          ) : activeStep === 1 ? (
            <StepTwo formData={formData} setFormData={setFormData} />
          ) : activeStep === 2 ? (
            <StepThree formData={formData} setFormData={setFormData} />
          ) : null}
          <div
            className="form-controls"
           /* style={{
              display: 'flex',
              width: '600px',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              margin: 'auto',
            }}*/
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', // Creates as many columns as needed
              gap: '20px',
              padding: '20px'
            }}
          >
            <Button variant='outlined' disabled={activeStep < 2} onClick={handleReset}>
              Reset
            </Button>
            <Button variant='outlined' disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            {activeStep === 2 ? (
              <Button variant="contained" onClick={handleSubmit}>
                Check
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
