import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function BasicModal({ Response, Name, onClose }) {
  const [open, setOpen] = useState(false); // Initial state: closed
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Handle modal opening based on Response value
  useEffect(() => {
    if (Response) { // Open modal only if Response has a value
      setOpen(true);
    }
  }, [Response]);

 
  const handleClick = () => {
    window.open('https://loco-gym.netlify.app', '_blank');
    setOpen(false);
    onClose()
  };

  // Responsive modal style
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isXSmall ? '90%' : isSmall ? '80%' : 800, // Responsive width
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
    height: isXSmall ? 1200 : 400, // Responsive height
    justifyContent: 'space-between',
    overflowY: 'auto' // Allows scrolling
  };

  return (
    <div>
      <Modal
        open={open}
        //onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          {/* <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton> */}
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 ,marginBottom: '20px' }} variant='h6'>
            Hello <span style={{fontSize:'19px',fontWeight:'bold',textTransform:'capitalize'}}>{Name}</span>, I've created an AI program that examines data from more than 2500 individuals to determine obesity levels.<br/> Based on this analysis, your obesity level is <span style={{fontSize:'19px',fontWeight:'bold'}}> {Response}</span>.
          </Typography>
          {Response && (
            <Typography className="typography-line-height" sx={{ fontSize: '18px', mt: 2, mb: 2 }}>
              {Response === "Overweight_Level_I" || Response === "Overweight_Level_II" || Response === "Overweight_Level_III" || Response === 'Obesity_Type_I' || Response === 'Obesity_Type_II' || Response === 'Obesity_Type_III' ?
                <>
                 <span style={{fontSize:'19px',fontWeight:'bold'}}>Consult a Healthcare Professional:</span>  Before making any significant changes to your diet or exercise routine, consult with a healthcare professional.<br/>
                 <span style={{fontSize:'19px',fontWeight:'bold'}}>Healthy Eating Habits:</span>  Focus on adopting a balanced and nutritious diet.<br/>
                 <span style={{fontSize:'19px',fontWeight:'bold'}}>Regular Exercise:</span>  Incorporate regular physical activity into your routine.<br/>
                </> : Response === "Normal_Weight" ?
                <>
                  <span style={{fontSize:'19px',fontWeight:'bold'}}>Balanced Diet:</span> Even if you're at a healthy weight, maintaining a balanced diet is crucial.<br/>
                 <span style={{fontSize:'19px',fontWeight:'bold'}}>Healthy Habits:</span>  Maintain other healthy habits such as getting enough sleep and managing stress.<br/>
                  <span style={{fontSize:'19px',fontWeight:'bold'}}>Regular Health Checkups:</span> Schedule regular checkups with your healthcare provider.<br/>
                </> :
                <>
                  <span style={{fontSize:'19px',fontWeight:'bold'}}>Consult a Healthcare Professional:</span> It's crucial to consult with a healthcare provider before making changes.<br/>
                  <span style={{fontSize:'19px',fontWeight:'bold'}}>Nutrient-Dense Diet:</span> Focus on consuming nutrient-dense foods.<br/>
                  <span style={{fontSize:'19px',fontWeight:'bold'}}>Eat Regularly:</span> Aim to eat several small meals and snacks throughout the day.<br/>
                </>
              }
              <div sx={{ display: 'flex', justifyContent: 'center', mt: 2 ,marginTop: '20px'}}>
               <Typography style={{marginTop: '20px'}}>
              I've created this app to assist you in achieving your ideal weight and improving your overall health and body <br/>
              <div style={{ display: "flex", justifyContent: 'center', marginTop: '20px' }}>
                 <Button variant='contained' onClick={handleClick } className="pulse-button">
                   Check me
                 </Button>
              </div>
              </Typography>

              </div>
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}
