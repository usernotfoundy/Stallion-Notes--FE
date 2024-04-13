/* eslint-disable no-unused-vars */
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Container, Divider, Box, Avatar } from '@mui/material';

export default function WishlistTab() {

  return (
    <Box sx={{ maxHeight: '464px', overflow: 'auto' }}>
        <Box display='flex' justifyContent='space-between'>
        <Typography variant="h6" fontFamily="Poppins"  sx={{display:'flex', justifyContent:'start', fontSize:'28px'}} gutterBottom>
          Wish List
        </Typography>
        </Box>
        <Divider sx={{mt:0.7}}/>

    </Box>
  );
}