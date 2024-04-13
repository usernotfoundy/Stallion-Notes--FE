import Modal from '@mui/material/Modal';
import { Box, Divider, Typography } from '@mui/material';
import FBRatings from './fbratings';
import backgroundImage from './ratingscustomicon/feedbackpic.png'; // Import your image

const FeedbackModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
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
        }}
      >
        <Divider sx={{ mt: 5 }} />
        <Box sx={{
          pl:3,
          pr:3,
          pb:1,
          // pr:3,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize:'250px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
        }}>
          <Typography sx={{ mt: 7, mb: 1, fontWeight: 'bold', fontSize:'23px', fontFamily:'Poppins' }}>What do you think so far?</Typography>
          <Typography sx={{ mt: 1.2, mb: 1, fontSize:'17px', fontFamily:'Poppins' }}>We hope you’re loving Stallion Notes!</Typography>
          <Typography sx={{ mt: 1, mb: 1, fontSize:'17px', fontFamily:'Poppins' }}>We’d appreciate it if you let us know how you feel!</Typography>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center' marginTop='30px'>
          <FBRatings/>
        </Box>
      </Box>
    </Modal>
  );
};

export default FeedbackModal;
