import { Typography, Box, Button, Modal } from "@mui/material";
import UnderReview from '../components/imgs/undraw_authentication_re_svpt.svg';
import Flagged from '../components/imgs/undraw_cancel_re_pkdm.svg';

const color = '#10439F';

const VerificationModal = ({ open, handleClose, msg, note, status }) => {
    const getImage = () => {
        if (status === 'unverified') {
            return <Box component="img" src={UnderReview} alt="Under Review" sx={{ mb: 2, width: '100px', height: '100px' }} />;
        } else if (status === 'flagged') {
            return <Box component="img" src={Flagged} alt="Flagged" sx={{ mb: 2, width: '100px', height: '100px' }} />;
        }
        return null;
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="verification-modal-title"
            aria-describedby="verification-modal-description"
        >
            <Box
                bgcolor='white'
                borderRadius='15px'
                p={4}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: 24,
                    size: 'content'
                }}
            >
                {/* <Box component="img" src={UnderReview} alt="Under Review" sx={{ mb: 2, width: '100px', height: '100px' }} /> */}
                {getImage()}
                <Box marginBottom={3} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography id="verification-modal-title" fontFamily='inherit' variant="h6" fontWeight='700' mb={2}>
                        {msg}
                    </Typography>
                    <Typography id="verification-modal-description" variant="subtitle2" fontFamily='inherit' fontWeight='300 ' textAlign='justify' sx={{ mb: 2, width: '500px', whiteSpace: 'pre-wrap' }}>
                        {note}
                    </Typography>
                </Box>
                <Button
                    onClick={handleClose}
                    fontFamily='inherit'
                    fontSize='15px'
                    variant="contained"
                    sx={{
                        textTransform: 'none',
                        width: '200px',
                        bgcolor: color,
                        borderRadius: '30px',
                        p: '10px 0px',
                        boxShadow: 'none'
                    }}
                >
                    Close
                </Button>
            </Box>
        </Modal>
    );
}

export default VerificationModal;
