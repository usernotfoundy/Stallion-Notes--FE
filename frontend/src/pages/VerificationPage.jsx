import { Typography, Box, Button, Modal } from "@mui/material";
// import UnderReviewIcon from '../components/imgs/overdue.png';
// import UnderReview from '../components/imgs/undraw_authentication.svg';
import VerificationModal from "./verificationmodal";
import { useState } from 'react';

const color = '#10439F';

const VerificationPage = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box minHeight='100vh' minWidth='100vw' bgcolor='inherit' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {/* <Box component="img" src={UnderReview} alt="Under Review" sx={{ mb: 2, width: '150px', height: '150px' }} /> */}
                <Box marginBottom={3} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography fontFamily='inherit' fontSize='30px' fontWeight='700'>
                        Your account is under review.
                    </Typography>
                    <Typography fontFamily='inherit' width='800px' textAlign='center' sx={{ mb: 2 }}>
                        Your account has been submitted and will be reviewed by the admin. This may take up to 1-3 hours. You'll be notified once the review is complete.
                    </Typography>
                </Box>
                <Button href="/login" fontFamily='inherit' variant="contained" fontSize='15px' sx={{ textTransform: 'none', width: '200px', borderRadius: '30px', bgcolor: `${color}`, p: '10px 0px', boxShadow: 'none' }}>
                    Back to Log-in
                </Button>
                {/* <Button onClick={handleOpen}>
                    test
                </Button> */}
                <VerificationModal open={open} handleClose={handleClose} />
            </Box>
        </>
    );
}

export default VerificationPage;
