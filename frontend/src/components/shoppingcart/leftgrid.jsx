import Typography from '@mui/material/Typography';
import { Box, Container, Divider } from '@mui/material';
import Sellerbox from '../shoppingcart/sellerbox';

export default function LeftGrid() {
  return (
    <Box sx={{ maxHeight: '490px', overflow: 'auto', maxWidth: 'auto', position: 'relative' }}>
      <Box sx={{ position: 'sticky', top: '0', backgroundColor: 'white', zIndex: '1' }}>
        <Typography fontFamily="Poppins" fontWeight='bold' color='' sx={{ display: 'flex', justifyContent: 'start', fontSize: '28px' }} gutterBottom>
          Purchase History
        </Typography>
        <Divider sx={{ borderBottom: 2 }} />
      </Box>
      
      <Container>
        <Sellerbox />
        <Sellerbox />
        <Sellerbox />
        <Sellerbox />
        <Sellerbox />
        <Sellerbox />
      </Container>
    </Box>
  );
}
