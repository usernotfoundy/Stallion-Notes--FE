import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../components/header/header-frontend';
import { Container } from '@mui/material';
import CheckoutGrid from '../components/shoppingcart/checkoutgrid';

const CheckoutGridBox = styled(Paper)(({ theme }) => ({
  backgroundColor: '#EFF5EE',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: 500,
  color: '#50623A',
  borderRadius:10
}));
export default function ShoppingCartPage() {
  return (
    <>
      <ResponsiveAppBar />
      <Container >
          <Grid container spacing={0} display='flex' justifyContent='center' alignItems='center' minHeight="90vh">
            <Grid item xs={15} >
              <CheckoutGridBox>
                <CheckoutGrid/>
              </CheckoutGridBox>
            </Grid>
          </Grid>
      </Container>
    </>
  );
}
