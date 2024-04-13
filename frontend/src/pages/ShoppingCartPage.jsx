/*eslint-disable no-unused-vars*/
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../components/header/header-frontend';
import { Container } from '@mui/material';
import LeftGrids from '../components/shoppingcart/leftgrid';
import RightGrids from '../components/shoppingcart/rightgrid';

const LeftGridBox = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height:500,
  color:'#50623A',
}));

const RightGridBox = styled(Paper)(({ theme }) => ({
  backgroundColor: '#EFF5EE',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: 500,
  color: '#50623A',
}));
export default function ShoppingCartPage() {
  return (
    <>
      <ResponsiveAppBar />
      <Container >
          <Grid container spacing={0} display='flex' justifyContent='center' alignItems='center' minHeight="90vh">
            <Grid item xs={8} >
              <LeftGridBox>
                <LeftGrids/>
              </LeftGridBox>
            </Grid>
            <Grid item xs={4} >
              <RightGridBox>
                <RightGrids/>
              </RightGridBox>
            </Grid>
          </Grid>
      </Container>
    </>
  );
}
