import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import FeedbackModal from './feedbackmodal';

const FeedbackButton = () => {
  const [openModal, setOpenModal] = useState(false);

  // Load modal state from local storage on component mount
  useEffect(() => {
    const storedState = localStorage.getItem('modalState');
    setOpenModal(storedState === 'true');
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
    localStorage.setItem('modalState', 'true');
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    localStorage.setItem('modalState', 'false');
  };

  return (
    <>
      <Button
        onClick={handleOpenModal}
        variant="contained"
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 60,
          right: -5,
          fontFamily: 'Poppins'
        }}
      >
        Feedback
      </Button>
      <FeedbackModal open={openModal} onClose={handleCloseModal} />
    </>
  );
};

export default FeedbackButton;
