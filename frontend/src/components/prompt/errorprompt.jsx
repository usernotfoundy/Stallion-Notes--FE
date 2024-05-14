// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// import { Typography, Box, Button } from '@mui/material';
// import WarningIcon from '@mui/icons-material/Warning';

// const color = '#10439F';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     height: 250,
//     lineHeight: '60px',
//     width: 300,
//     overflow: 'hidden',
//     animation: 'fadeIn 0.2s ease-in',
//     '@keyframes fadeIn': {
//         '0%': { opacity: 0 },
//         '100%': { opacity: 1 },
//     },
// }));

// export default function ErrorPrompt() {
//     const [open, setOpen] = React.useState(true);

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <Grid container>
//             {open && (
//                 <Item elevation={1} sx={{ display: 'flex', alignItems: 'center', backgroundColor: "white", flexDirection: 'column' }}>
//                     <Box display='flex' flexDirection='column' justifyContent={'center'} alignItems={'center'} sx={{ height: '200px' }}>
//                         <WarningIcon color='error' sx={{ fontSize: '50px' }} />
//                         <div style={{ width: '250px' }}>
//                             <Typography sx={{ fontWeight: '600', }}>
//                                 Oh Snap!
//                             </Typography>
//                             <Typography>
//                                 An error has occured while creating an error report.
//                             </Typography>
//                         </div>
//                     </Box>
//                     <Button onClick={handleClose} variant='contained' color='error' sx={{ position: 'absolute', bottom: '0px', textTransform: 'capitalize', width: '100%', height: '50px', borderRadius: '0px' }}>
//                         Dismiss
//                     </Button>
//                 </Item>
//             )}
//         </Grid>
//     );
// }



import React from 'react';
import { Grid, Paper, Typography, Box, Button } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 250,
    lineHeight: '60px',
    width: 300,
    overflow: 'hidden',
    animation: 'fadeIn 0.2s ease-in',
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
}));

export default function ErrorPrompt({ open, handleClose }) {
    return (
        <Grid container style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000 }}>
            {open && (
                <Item elevation={1} sx={{ display: 'flex', alignItems: 'center', backgroundColor: "white", flexDirection: 'column' }}>
                    <Box display='flex' flexDirection='column' justifyContent={'center'} alignItems={'center'} sx={{ height: '200px' }}>
                        <WarningIcon color='error' sx={{ fontSize: '50px' }} />
                        <div style={{ width: '250px' }}>
                            <Typography sx={{ fontWeight: '600' }}>
                                Oh Snap!
                            </Typography>
                            <Typography>
                                An error has occurred while creating an error report.
                            </Typography>
                        </div>
                    </Box>
                    <Button onClick={handleClose} variant='contained' color='error' sx={{ position: 'absolute', bottom: '0px', textTransform: 'capitalize', width: '100%', height: '50px', borderRadius: '0px' }}>
                        Dismiss
                    </Button>
                </Item>
            )}
        </Grid>
    );
}
