import Typography from '@mui/material/Typography';
import { Box, Container, Divider, Button } from '@mui/material';
import CheckoutItem from './checkoutitem';

export default function CheckoutGrid() {
  return (
    <Box sx={{ maxHeight: '490px', overflow: 'auto', maxWidth: 'auto', position: 'relative' }}>
      <Typography fontFamily="Poppins" fontWeight='bold' color='' sx={{ display: 'flex', justifyContent: 'start', fontSize: '28px' }} gutterBottom>
        Order Summary
      </Typography>
      <Divider sx={{ borderBottom: 2 }} />
      <Box
        sx={{
          mt: 1,
          mb: 1,
          height: '338px',
          width: '1135px',
        }}
      >
        <CheckoutItem />
      </Box>
      <Divider sx={{ borderBottom: 2 }} />
      <Box display='flex' justifyContent='space-between' marginTop='5px' >
        <Typography fontFamily='Poppins' fontSize={20}>
          Total:
        </Typography>
        <Typography fontFamily='Poppins' fontSize={20}>
          Php 100.00
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
        <Button variant="contained" color="success" sx={{fontFamily:'Poppins', width:'500px'}}>
          Proceed
        </Button>
      </Box>
    </Box>
  );
}
