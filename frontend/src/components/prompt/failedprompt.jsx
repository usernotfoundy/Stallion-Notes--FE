import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography, Box, Button } from '@mui/material';
import WrongIcon from '@mui/icons-material/Cancel';

const color = '#10439F';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 100,
    lineHeight: '60px',
    width: 600,
    overflow: 'hidden',
    animation: 'fadeIn 0.2s ease-in',
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
}));

// export default function FailedPrompt() {
//     const [open, setOpen] = React.useState(true);

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <Grid container>
//             {open && (
//                 <Item elevation={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: "white" }}>
//                     <Box width='100px' height='100px' bgcolor='#f2d5da' display='flex' justifyContent={'center'} alignItems={'center'} sx={{ position: 'absolute', top: '0px', left: '0px' }}>
//                         <WrongIcon color='error' sx={{ fontSize: '40px' }} />
//                     </Box>
//                     <Box display='flex' flexDirection='row' position="relative">
//                         <Box sx={{ pl: 12, m: 3, borderColor: '#f1a0ad', borderStyle: 'dashed', borderRadius: '3px', borderWidth: '2px', height: '80px', width: '485px', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', position: 'relative' }}>
//                             <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'column' }}>
//                                 <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>Woo Hoo !</Typography>
//                                 <Typography sx={{}}>Your order has been approved!</Typography>
//                                 <Button variant="contained" size='small' onClick={handleClose} sx={{ position: 'absolute', bottom: '9px', right: '10px', textTransform: 'capitalize' }}>Ok</Button>
//                             </div>
//                         </Box>
//                     </Box>
//                 </Item>
//             )}
//         </Grid>
//     );
// }

export default function FailedPrompt({ open, handleClose }) {
    if (!open) return null;

    return (
        <Grid container style={{ position: 'fixed', top: '10%', left: '100%', transform: 'translate(-40%, 0%)', zIndex: 1000 }}>
            <Item elevation={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <Box sx={{ borderColor: '#f1a0ad', borderStyle: 'dashed', borderRadius: '3px', borderWidth: '2px', width: '285px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <WrongIcon color='error' sx={{ fontSize: '40px' }} />
                    <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>Woo Hoo !</Typography>
                        <Typography sx={{ fontSize: '12px' }}>{msg}</Typography>
                        {/* <Button variant="contained" size='small' onClick={handleClose} sx={{ position: 'absolute', bottom: '9px', right: '10px', textTransform: 'capitalize' }}>Ok</Button> */}
                    </div>
                </Box>
            </Item>

        </Grid>

    );
}
