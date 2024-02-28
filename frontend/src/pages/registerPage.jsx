// import { Box,Typography,Button,TextField, Link } from "@mui/material";
// import '@fontsource/poppins';
// import { useState } from "react";
// import  { useNavigate } from "react-router-dom";



// // Replace with your actual backend endpoint URL for registration
// const REGISTER_API_URL = 'YOUR_BACKEND_REGISTER_ENDPOINT';

// export const RegisterPage = () => {
//   // State hooks for each field
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   // Initialize navigate
//   const navigate = useNavigate();

//   // Handler for form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Basic validation for password match
//     if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match.");
//       return;
//     }

//     // Reset error message if the validation passes
//     setErrorMessage('');

//     // Construct the payload with the form data
//     const payload = {
//       username: username,
//       password: username, // Make sure your backend handles password encryption
//       first_name: firstName,
//       last_name: lastName,
//       email: email,
//       phone_number: phoneNumber,
//       // Include additional fields here as necessary
//     };

//     try {
//       // Make a POST request to your backend API
//       const response = await fetch(REGISTER_API_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         // If the HTTP status code is not OK, throw an error
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       // Parse the JSON response body
//       const data = await response.json();
//       console.log('Registration successful', data);

//       // Navigate to the login page or other appropriate page on successful registration
//       navigate('/login');
//     } catch (error) {
//       console.error('Registration error:', error);
//       // Update the UI to display the error message
//       setErrorMessage('Failed to register. Please try again later.');
//     }
//   };



//   return (
//     <div>
//         <Box sx={{p:0,m:'auto',bgcolor:'#f1f1f1',  boxShadow:'initial', my:'37px', width:'525px', borderRadius:'20px',height: '700px', overflow:'clip'}}>
//         <Box sx={{display: 'flex', justifyContent:'space-evenly', boxShadow: 1 , width:'100%',height:'78px',mx:0,p:0}}>
//           <Typography sx={{display:'flex',justifyContent:'center',my:'auto', width:'375px', fontWeight:'medium'}}>Register</Typography>
//           <Typography sx={{textAlign: 'center',width:'24px', heigth: '24px',my:'auto',ml:-7,mr:-7}}>X</Typography>
//         </Box>

//         <Box sx={{}}>
//           <Typography variant="h5" sx={{textAlign:'center', my:'44px', color:'#698152', fontFamily:'Poppins'}}>
//             Welcome to <span style={{
//               fontFamily:"Poppins",
//               color:"#f1f1f1",
//               background: "#698152",
//               paddingLeft: "10px",
//               paddingRight: "10px",
//               borderRadius:"5px",
//             }}>Stallion Notes</span>
//           </Typography>
//         </Box>
        
//         <Box component="form" sx={{'& > :not(style)': { m: 1, width: '423px' }, display:'flex' , justifyContent:'center'}} noValidate autoComplete="off">
//           <TextField id="outlined-basic" label="Username" variant="outlined" 
//             sx={{
//               '& label.Mui-focused': {
//                 color: '#50623A', // Change label color when focused
//               },
//               '& .MuiOutlinedInput-root': {
//                 '&.Mui-focused fieldset': {
//                   borderColor: '#50623A', // Change border color when focused
//                 },
//               },
//             }}
//           />
//         </Box>
//         <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '423px' }, display:'flex' , justifyContent:'center'}} noValidate autoComplete="off">
//           <TextField id="outlined-password-input" label="Password" variant="outlined" type='password' autoComplete=''
//             sx={{
//               '& label.Mui-focused': {
//                 color: 'green', // Change label color when focused
//               },
//               '& .MuiOutlinedInput-root': {
//                 '&.Mui-focused fieldset': {
//                   borderColor: 'green', // Change border color when focused
//                 },
//               },
//             }}
//           />
//         </Box>
//         <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '423px' }, display:'flex' , justifyContent:'center'}} noValidate autoComplete="off">
//           <TextField id="outlined-password-input" label="Confirm Password" variant="outlined" type='password' autoComplete=''
//             sx={{
//               '& label.Mui-focused': {
//                 color: 'green', // Change label color when focused
//               },
//               '& .MuiOutlinedInput-root': {
//                 '&.Mui-focused fieldset': {
//                   borderColor: 'green', // Change border color when focused
//                 },
//               },
//             }}
//           />
//         </Box>
        
//         <Button type="submit" variant="contained" sx={{ bgcolor:'orange', '&:hover': { backgroundColor: 'darkorange' },display:'flex',mx:'auto',width:'423px',height:'50px',marginTop:'20px' }}>Register</Button>

//         <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", textAlign:'center'}} >
//           <Typography variant="subtitle1" color="GrayText">Already have an account?</Typography><Link rel="stylesheet" href="/login"  sx={{color:'orange',textDecoration:'none', my:'auto',mx:1,fontSize:'16px'}}> Login</Link>
//         </Box>
//       </Box>
//     </div>
//   )
// }

import { useState } from 'react';
import { Box, Typography, Button, TextField, Link } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import UserGreeting from '../components/userGreetings';

// Replace with your actual backend endpoint URL for registration
const REGISTER_API_URL = 'http://127.0.0.1:8000/register/';

export const RegisterPage = () => {
  const navigate = useNavigate();

  // State hooks for each field
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [profileImg, setProfileImg] = useState(''); // Assuming you will handle file uploads separately
  // State for course is not included as it's typically selected from a list
  const [errorMessage, setErrorMessage] = useState('');

  // Handlers for each field
  // ...

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    setErrorMessage('');

    const payload = {
      username,
      password,
      first_name: firstName,
      last_name: lastName,
      middle_name: middleName,
      email,
      phone_number: phoneNumber,
      // profile_img, // Handle file upload appropriately
      // course would typically be a selected value, not a text input
    };

    try {
      const response = await fetch(REGISTER_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Registration failed');
        return;
      }

      const data = await response.json();
      console.log('Registration successful', data);
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage('Failed to register. Please try again later.');
    }
  };

  return (
    <Box sx={{ p:0, m:'auto', bgcolor:'#f1f1f1', boxShadow:'initial', my:'37px', width:'525px', borderRadius:'20px', paddingBottom:'40px', overflow:'clip' }}>
      
      {/* Login form heading */}
      {/* <Box sx={{ display: 'flex', justifyContent:'space-evenly', boxShadow: 1, width:'100%', height:'78px', mx:0, p:0 }}>
        <Typography variant="h5" sx={{ display:'flex', justifyContent:'center', my:'auto', width:'375px', fontWeight:'medium', color:'#296E4C' }}>Register</Typography>
      </Box> */}

      {/* Greeting component, potentially for personalized messages */}
      <Box sx={{ paddingTop:'20px' }}>
        <UserGreeting isLoggedIn={false} userName="test123" />
      </Box>

      <Box component="form" sx={{ '& > :not(style)': {m:1, width: '423px' }, display:'flex', flexDirection: 'column', alignItems: 'center' }} noValidate autoComplete="off" onSubmit={handleSubmit}>
        
        {errorMessage && (
          <Typography color="error" sx={{ textAlign: 'center' }}>{errorMessage}</Typography>
        )}

        <TextField id="username" label="Username" variant="outlined" value={username} onChange={e => setUsername(e.target.value)}
          sx={{
            '& label.Mui-focused': {
              color: '#50623A', // Change label color when focused
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#50623A', // Change border color when focused
              },
            },
          }}
        />
        <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} sx={{'& label.Mui-focused': {color: '#50623A',},'& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: '#50623A',},},}} />
        <TextField label="Confirm Password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}sx={{'& label.Mui-focused': {color: '#50623A',},'& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: '#50623A',},},}} />
        <TextField label="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} sx={{'& label.Mui-focused': {color: '#50623A',},'& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: '#50623A',},},}}/>
        <TextField label="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} sx={{'& label.Mui-focused': {color: '#50623A',},'& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: '#50623A',},},}}/>
        <TextField label="Middle Name" value={middleName} onChange={e => setMiddleName(e.target.value)} sx={{'& label.Mui-focused': {color: '#50623A',},'& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: '#50623A',},},}}/>
        <TextField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} sx={{'& label.Mui-focused': {color: '#50623A',},'& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: '#50623A',},},}}/>
        <TextField label="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} sx={{'& label.Mui-focused': {color: '#50623A',},'& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: '#50623A',},},}}/>

        {/* Additional fields for profile image and course should be added based on your form design */}
        <Button type="submit" variant="contained" sx={{ bgcolor:'orange', '&:hover': { backgroundColor: 'darkorange' }, width:'423px', height:'50px',m:2 }}>Register</Button>
        
        {/* Link to registration page */}
        <Box sx={{ display:"flex", flexDirection:"row", justifyContent:"center", textAlign:'center' }}>
          <Typography variant="subtitle1" color="GrayText">Already a user?</Typography>
          <Link href="/login" sx={{ textDecoration:'none', color:'orange', '&:hover': { color: 'darkorange' }, my:'auto', mx:1, fontSize:'16px' }}>Login</Link>
        </Box>
      </Box>
    </Box>
  );
};
