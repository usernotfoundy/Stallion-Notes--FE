/* eslint-disable no-unused-vars */
import Container from "@mui/material/Container";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import { Box } from '@mui/material';
import CButton from './components/CButton';
import ResponsiveAppBar from './components/header/header-frontend';

function App() {
  return (
    <>
      {/* <ResponsiveAppBar/> */}
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mx: 'auto', backgroundColor: '#f5f5f5' }}>
        {/* <BasicMenu/> */}
        <Router>

          {/* routes goes  here */}
          <AppRouter />

          {/* test button that hides when loggedin */}
          {/* <CButton name="ems" /> */}
        </Router>

      </Box>

      {/* <Container maxWidth='full' sx={{bgcolor:'#50623A',border:1,m:0,p:0,minHeight:"100vh", overflow:'hidden'}}>
    </Container> */}
    </>

  );
}

export default App
