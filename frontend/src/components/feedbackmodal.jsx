// import Modal from '@mui/material/Modal';
// import { Box, Divider, Typography, Button } from '@mui/material';
// import FBRatings from './fbratings';
// import backgroundImage from './ratingscustomicon/feedbackpic.png'; // Import your image

// const FeedbackModal = ({ open, onClose }) => {
//   return (
//     <Modal
//       open={open}
//       onClose={onClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: 566,
//           height: 388,
//           bgcolor: 'background.paper',
//           borderRadius: '10px',
//           boxShadow: 24,
//         }}
//       >
//         <Divider sx={{ mt: 5 }} />
//         <Box sx={{
//           pl: 3,
//           pr: 3,
//           pb: 1,
//           // pr:3,
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: '250px',
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'right',
//         }}>
//           <Typography sx={{ mt: 7, mb: 1, fontWeight: 'bold', fontSize: '23px', fontFamily: 'Poppins' }}>What do you think so far?</Typography>
//           <Typography sx={{ mt: 1.2, mb: 1, fontSize: '17px', fontFamily: 'Poppins' }}>We hope you’re loving Stallion Notes!</Typography>
//           <Typography sx={{ mt: 1, mb: 1, fontSize: '17px', fontFamily: 'Poppins' }}>We’d appreciate it if you let us know how you feel!</Typography>
//         </Box>
//         <Box display='flex' justifyContent='center' alignItems='center' marginTop='30px'>
//           <FBRatings />
//         </Box>
//         <Button variant='contained'>
//           Submit
//         </Button>
//       </Box>
//     </Modal>
//   );
// };

// export default FeedbackModal;

import { Box, Divider, Typography, Button, TextField, Alert } from '@mui/material';
import Modal from '@mui/material/Modal';
import FBRatings from './fbratings';
import { useState } from 'react';
import axios from 'axios';
import SuccessPrompt from './prompt/successprompt';

const RATE_API_URL = 'https://stallionnotes.pythonanywhere.com/rate-app/';
const token = localStorage.getItem('authToken');

const FeedbackModal = ({ open, onClose }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [error, setError] = useState(null); // State to track errors
  const [showSuccess, setShowSuccess] = useState(false)
  const [msg, setMsg] = useState('')
  
  const handleRatingSubmit = async () => {
    try {
      // Make a POST request to the API endpoint with the rating and comment
      const response = await axios.post(
        RATE_API_URL,
        { rating, comment },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      console.log('Rating submitted successfully:', response.data);
      setComment('');
      setMsg('Thanks for your feedback!')
      // \ngo-to profile->order tab and download your order slip')
      onClose(); // Close modal after successful submission
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false);  // Auto-hide success message after a delay
        }, 5000);

    } catch (error) {
      console.error('Error submitting rating:', error);
      setComment('');
      setError("Failed to submit feedback!")
      // setTimeout(() => {
      //   handleAlertClose()
      // }, 2000)
    }
  };
  const handleAlertClose = () => {
    setError(null); // Clear error message when closing the alert
  };


  return (
    <>
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* {!error ? */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 566,
          height: 388,
          bgcolor: 'background.paper',
          borderRadius: '10px',
          boxShadow: 24,
          padding: '20px',
        }}
      >
        <Divider sx={{ mt: 5 }} />
        <Typography sx={{ fontWeight: 'bold', fontSize: '23px', fontFamily: 'Poppins', mb: 2 }}>
          What do you think so far?
        </Typography>
        <Typography sx={{ fontSize: '17px', fontFamily: 'Poppins', mb: 2 }}>
          We hope you’re loving Stallion Notes!
        </Typography>
        <Typography sx={{ fontSize: '17px', fontFamily: 'Poppins', mb: 2 }}>
          We’d appreciate it if you let us know how you feel!
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
          <FBRatings setRating={setRating} />
        </Box>
        <TextField
        focused
          placeholder="Alumni are encoraged to make a meaningful feedback regarding to the system"
          label="Comments"
          variant='outlined'
          fullWidth
          multiline
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
          <Button variant="contained" onClick={handleRatingSubmit} sx={{ ml: 2 }}>
            Submit
          </Button>
        </Box>
        {error && (
          <Alert
          severity="error"
          sx={{
            position: 'absolute',
            top: "-20%",
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'fit-content',
            zIndex: 9999,
          }}
          onClose={handleAlertClose}
          >
            {error}
          </Alert>
        )}
      </Box>
    </Modal>
        <SuccessPrompt open={showSuccess} handleClose={() => setShowSuccess(false)} msg={msg} />  
        </>
  );
};

export default FeedbackModal;
