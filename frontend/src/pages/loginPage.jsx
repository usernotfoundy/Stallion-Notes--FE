import { useState } from 'react';
import { Box, Typography, Button, TextField, Link } from "@mui/material";
// import DividerWithText from "../components/divider";
import UserGreeting from '../components/userGreetings';
import { useNavigate } from 'react-router-dom';
// import { red } from '@mui/material/colors';
import Axios from 'axios';
import bg from '../imgs/bg.svg'

// Replace '' with your actual backend endpoint URL for login
const LOGIN_API_URL = ' http://127.0.0.1:8000/login/';

const LoginPage = () => {
  // State hooks for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Initialize useNavigate
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const credentials = { username, password };

    try {
      // Step 2: Use Axios for the POST request
      const response = await Axios.post(LOGIN_API_URL, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Assuming the token is in response.data.token
      const { token } = response.data;

      // Step 3: Save the token
      localStorage.setItem('authToken', token);

      console.log('Login successful', response.data);
      navigate('/');

      // Step 4: Optionally, set up Axios defaults for subsequent requests
      Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Failed to login. Please check your username and password.');
    }
  };

  // const testStyle = useStyles();
  return (
    <>
      <Box
        sx={{
          backgroundColor: { xs: '#f5f5f5', sm: '#f5f5f5', md: '#f5f5f5', lg: `url(${bg})`, xl: `url(${bg})` },
          backgroundImage: { xs: 'none', sm: 'none', md: 'note', lg: `url(${bg})`, xl: `url(${bg})` },
          backgroundRepeat: 'no-repeat',
          minHeight: '99.8vh',
          mx: 0,
          p: 0,
          minWidth: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'center', md: 'center', lg: 'space-between', xl: 'space-between' },
        }}
      >
        <Typography variant="h5" color="initial"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            color: 'white',
            mt: -10,
            fontStyle: 'italic'
          }}
        >Stallion Notes: Gallop Through Pages, Trot Towards Knowledge.</Typography>
        <Box sx={{
          backgroundColor: '#f5f5f5',
          minWidth: '85vh',
          height: '99.8vh',
          display: 'flex',
          flexDirection: 'column',
        }}>

          <Box sx={{ p: 0, m: 'auto', bgcolor: '#ffffff', width: '500px', borderRadius: '20px', paddingBottom: '60px', overflow: 'clip', }}>

            {/* Greeting component, potentially for personalized messages */}
            <Box sx={{ paddingTop: '40px' }}>
              <UserGreeting isLoggedIn={true} userName="test123" />
            </Box>

            {/* Login error message display */}
            {loginError && (
              <Typography color="error" sx={{ textAlign: 'center' }}>{loginError}</Typography>
            )}

            {/* Login form */}
            <Box component="form" sx={{ '& > :not(style)': { width: '423px' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }} noValidate autoComplete="off" onSubmit={handleLogin}>
              <TextField id="username" label="Username" variant="outlined" value={username} onChange={handleUsernameChange} sx={{ m: 1, '& label.Mui-focused': { color: '#50623A', }, '& .MuiOutlinedInput-root': { '&.Mui-focused fieldset': { borderColor: '#50623A', }, }, }} />
              <TextField id="password" label="Password" variant="outlined" type="password" autoComplete="current-password" value={password} onChange={handlePasswordChange} sx={{ m: 1, '& label.Mui-focused': { color: '#50623A', }, '& .MuiOutlinedInput-root': { '&.Mui-focused fieldset': { borderColor: '#50623A', }, }, }} />
              <Button type="submit" variant="contained" onClick={handleLogin} sx={{ bgcolor: 'orange', '&:hover': { backgroundColor: 'darkorange' }, width: '423px', height: '50px', m: 2 }}>Login</Button>
            </Box>

            {/* Link to registration page */}
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", textAlign: 'center' }}>
              <Typography variant="subtitle1" color="GrayText">No account yet?</Typography>
              <Link href="/register" sx={{ textDecoration: 'none', color: 'orange', '&:hover': { color: 'darkorange' }, my: 'auto', mx: 1, fontSize: '16px' }}> Register here</Link>
            </Box>
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
