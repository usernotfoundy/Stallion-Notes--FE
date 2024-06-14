import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Typography, Box, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Item = styled(Box)(({ theme, type }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 68,
    lineHeight: '60px',
    width: 430,
    overflow: 'hidden',
    border: '2px solid',
    borderRadius: '3px',
    animation: 'fadeIn 0.2s ease-in',
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
    borderColor: type === 'INFO!' ? '#B0D0E0' :
        type === 'ERROR!' ? '#D7B7B5' :
            type === 'WARNING!' ? '#E0DBA2' :
                type === 'SUCCESS!' ? '#CEDCC7' : 'inherit',
    backgroundColor: type === 'INFO!' ? '#CDE9F6' :
        type === 'ERROR!' ? '#EEC8C5' :
            type === 'WARNING!' ? '#F8F4C3' :
                type === 'SUCCESS!' ? '#DCF3D7' : 'inherit',
}));

const NeutralPrompt = ({ type, msg, handleCClose, oOpen }) => {
    // const [open, setOpen] = useState(true);
    const Icon = {
        'INFO!': InfoIcon,
        'ERROR!': ErrorIcon,
        'WARNING!': WarningIcon,
        'SUCCESS!': CheckCircleIcon,
    }[type];

    // const handleClose = () => {
    //     setOpen(false);
    // };

    if (!{ oOpen }) return null;

    return (
        <Grid container>
            <Item elevation={1} type={type} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Icon color='#e8f5fc' sx={{ fontSize: '40px', m: 1 }} />
                    <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>{type}</Typography>
                        <Typography sx={{ fontSize: '15px' }}>{msg}</Typography>
                    </div>
                </Box>
                <IconButton onClick={handleCClose} sx={{ m: 1 }}>
                    <CloseIcon />
                </IconButton>
            </Item>
        </Grid>
    );
}
export default NeutralPrompt;