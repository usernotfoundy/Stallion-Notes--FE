import { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Link, Select, MenuItem, InputLabel } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserGreeting from '../components/userGreetings';

const REGISTER_API_URL = 'https://tisap.pythonanywhere.com/register/';
const COLLEGES_API_URL = 'https://tisap.pythonanywhere.com/view-college/';
const COURSES_API_URL = 'https://tisap.pythonanywhere.com/view-course/';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [college, setCollege] = useState([]);
  const [course, setCourse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [collegeOptions, setCollegeOptions] = useState([]);
  const [courseOptions, setCourseOptions] = useState([]);
  const [selectedCollegeId, setSelectedCollegeId] = useState([]);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get(COLLEGES_API_URL);
        setCollegeOptions(response.data);
      } catch (error) {
        console.error('Error fetching colleges:', error);
      }
    };
    fetchColleges();
  }, []);

  // const handleCollegeChange = async (collegeId) => {
  //   try {
  //     const response = await axios.get(COURSES_API_URL,{
  //       params: { college: collegeId }
  //     });
  //     setCourseOptions(response.data);
  //   } catch (error) {
  //     console.error('Error fetching courses:', error);
  //   }
  // };
  const handleCollegeChange = async () => {
    try {
      const response = await axios.get(COURSES_API_URL, {
        params: { college: selectedCollegeId },
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(selectedCollegeId)
      setCourseOptions(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };
  
  

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
      college,
      // course,
    };

    try {
      const response = await axios.post(REGISTER_API_URL, payload);
      console.log('Registration successful', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage('Failed to register. Please try again later.');
    }
  };

  return (
    <Box sx={{ p: 0, m: 'auto', bgcolor: '#f1f1f1', boxShadow: 'initial', my: '37px', width: '525px', borderRadius: '20px', paddingBottom: '40px', overflow: 'clip' }}>

      <Box sx={{ paddingTop: '20px' }}>
        <UserGreeting isLoggedIn={false} userName="test123" />
      </Box>

      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '423px' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }} noValidate autoComplete="off" onSubmit={handleSubmit}>

        {errorMessage && (
          <Typography color="error" sx={{ textAlign: 'center' }}>{errorMessage}</Typography>
        )}

        <TextField id="username" label="Username" variant="outlined" value={username} onChange={e => setUsername(e.target.value)} />
        <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <TextField label="Confirm Password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        <TextField label="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <TextField label="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
        <TextField label="Middle Name" value={middleName} onChange={e => setMiddleName(e.target.value)} />
        <TextField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <TextField label="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
        <InputLabel id="college-label">Select College</InputLabel>
        <Select
          labelId='college-label'
          id="college-label"
          value={college}
          onChange={(e) => {
            setCollege(e.target.value);
            console.log(college);
            setSelectedCollegeId(e.target.value);
            handleCollegeChange(e.target.value);
          }}
        >
          <MenuItem value="">None</MenuItem>
          {collegeOptions.map(college => (
            <MenuItem key={college.id} value={college.id}>{college.college_name}</MenuItem>
          ))}
        </Select>
        <InputLabel id="course-label">Select Course</InputLabel>
        <Select
          labelId='course-label'
          id="course-label"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <MenuItem value="">None</MenuItem>
          {courseOptions.map(course => (
            <MenuItem key={course.course.id} value={course.course.id}>{course.course.course_name}</MenuItem>
          ))}
        </Select>

        <Button type="submit" variant="contained" sx={{ bgcolor: 'orange', '&:hover': { backgroundColor: 'darkorange' }, width: '423px', height: '50px', m: 2 }}>Register</Button>

        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", textAlign: 'center' }}>
          <Typography variant="subtitle1" color="GrayText">Already a user?</Typography>
          <Link href="/login" sx={{ textDecoration: 'none', color: 'orange', '&:hover': { color: 'darkorange' }, my: 'auto', mx: 1, fontSize: '16px' }}>Login</Link>
        </Box>
      </Box>
    </Box>
  );
};
