/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Box, Typography, Button, TextField, Link } from "@mui/material";
// import DividerWithText from "../components/divider";
import UserGreeting from './components/userGreetings';
import { useNavigate } from 'react-router-dom';
// import { red } from '@mui/material/colors';
import Axios from 'axios';
// import bg from '../imgs/bg.svg'


// Replace '' with your actual backend endpoint URL for login
const LOGIN_API_URL = 'https://stallionnotes.pythonanywhere.com/login/';

const LoginPage = () => {
  const [logged, setLogged] = useState(false);
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
      setLogged(true);

      navigate('/home');

      // Step 4: Optionally, set up Axios defaults for subsequent requests
      Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      console.error('Login error:', error);
      setLoginError(`Failed to login. ${error.response.data.non_field_errors}`);
    }
  };

  // const testStyle = useStyles();
  return (
    <>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Box height='100vh' sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>

          <Box sx={{ bgcolor: '#f1f1f1', boxShadow: 'initial', width: '525px', height: 'auto', borderRadius: '20px', paddingBottom: '40px', overflow: 'clip' }}>

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
              <TextField id="username" label="Username" variant="outlined" value={username} onChange={handleUsernameChange} sx={{ m: 1, }} />
              <TextField id="password" label="Password" variant="outlined" type="password" autoComplete="current-password" value={password} onChange={handlePasswordChange} sx={{ m: 1, }} />
              <Button type="submit" variant="contained" onClick={handleLogin} sx={{ pt: 2.5, pb: 2.5, pl: 3, width: '423px', height: '50px', m: 2.5 }}>Login</Button>
            </Box>

            {/* Link to registration page */}
            <Box sx={{ pb: '32px', display: "flex", flexDirection: "row", justifyContent: "center", textAlign: 'center' }}>
              <Typography variant="subtitle1" color="GrayText">No account yet?</Typography>
              <Link href="/register" sx={{ textDecoration: 'none', my: 'auto', mx: 1, fontSize: '16px' }}>Register here</Link>
            </Box>
          </Box>

        </Box>
      </Box >
    </>
  );
};

export default LoginPage;
