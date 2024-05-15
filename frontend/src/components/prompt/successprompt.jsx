import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography, Box, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const color = '#10439F';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 70,
    lineHeight: '60px',
    width: 'fit',
    paddingInline: '10px',
    overflow: 'hidden',
    animation: 'fadeIn 0.2s ease-in',
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
}));


export default function SuccessPrompt({ open, handleClose, msg }) {
    if (!open) return null;

    return (
        <Grid container style={{ position: 'fixed', top: '10%', left: '115%', transform: 'translate(-40%, 0%)', zIndex: 1000 }}>
            <Item elevation={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <Box sx={{ borderColor: '#68d2c3', borderStyle: 'dashed', borderRadius: '3px', borderWidth: '2px', width: '285px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <CheckCircleIcon color='success' sx={{ fontSize: '40px' }} />
                    <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>Woo Hoo !</Typography>
                        <Typography sx={{ fontSize: '12px', ml:'10px' }}>{msg}</Typography>
                        {/* <Button variant="contained" size='small' onClick={handleClose} sx={{ position: 'absolute', bottom: '9px', right: '10px', textTransform: 'capitalize' }}>Ok</Button> */}
                    </div>
                </Box>
            </Item>

        </Grid>
    );
}

{/* <Button variant="contained" size='small' onClick={handleClose} sx={{ position: 'absolute', bottom: '9px', right: '10px', textTransform: 'capitalize' }}>Ok</Button> */ }

// import React from 'react';
// import { Grid, Typography, Box, Button, Paper } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { styled } from '@mui/material/styles';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     height: 100,
//     lineHeight: '60px',
//     width: 600,
//     overflow: 'hidden',
//     animation: 'fadeIn 0.2s ease-in',
//     '@keyframes fadeIn': {
//         '0%': { opacity: 0 },
//         '100%': { opacity: 1 },
//     },
// }));

// const color = '#10439F';

// export default function SuccessPrompt({ open, handleClose }) {
//     if (!open) return null;

//     return (
//         <Grid container sx={{ position: 'fixed', top: '10%', left: '50%', transform: 'translate(-50%, -10%)', zIndex: 1000 }}>
//             <Item elevation={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: "white" }}>
//                 <Box width='100px' height='100px' bgcolor='#f1f1f1' display='flex' justifyContent={'center'} alignItems={'center'} sx={{ position: 'absolute', top: '0px', left: '0px' }}>
//                     <CheckCircleIcon color='success' sx={{ fontSize: '40px' }} />
//                 </Box>
//                 <Box display='flex' flexDirection='row' position="relative">
//                     <Box sx={{ pl: 12, m: 3, borderColor: '#68d2c3', borderStyle: 'dashed', borderRadius: '3px', borderWidth: '2px', height: '80px', width: '485px', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', position: 'relative' }}>
//                         <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'column' }}>
//                             <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>Woo Hoo !</Typography>
//                             <Typography>Your order has been approved!</Typography>
//                             <Button variant="contained" size='small' onClick={handleClose} sx={{ position: 'absolute', bottom: '9px', right: '10px', textTransform: 'capitalize' }}>Ok</Button>
//                         </div>
//                     </Box>
//                 </Box>
//             </Item>
//         </Grid>
//     );
// }
