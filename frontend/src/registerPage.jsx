// import { useState, useEffect } from 'react';
// import { Box, Typography, Button, TextField, Link, Select, MenuItem, InputLabel } from "@mui/material";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import UserGreeting from '../components/userGreetings';

// // const REGISTER_API_URL = 'https://tisap.pythonanywhere.com/register/';
// // const COLLEGES_API_URL = 'https://tisap.pythonanywhere.com/view-college/';
// // const COURSES_API_URL = 'https://tisap.pythonanywhere.com/view-course/';

// const REGISTER_API_URL = 'http://127.0.0.1:8000/register/';
// const COLLEGES_API_URL = 'http://127.0.0.1:8000/view-college/';
// const COURSES_API_URL = 'http://127.0.0.1:8000/view-course/';



// export const RegisterPage = () => {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [middleName, setMiddleName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [college, setCollege] = useState([]);
//   const [course, setCourse] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [collegeOptions, setCollegeOptions] = useState([]);
//   const [courseOptions, setCourseOptions] = useState([]);
//   const [selectedCollegeId, setSelectedCollegeId] = useState([]);

//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         const response = await axios.get(COLLEGES_API_URL);
//         setCollegeOptions(response.data);
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//       }
//     };
//     fetchColleges();
//   }, []);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get(COURSES_API_URL, {
//           params: { college: selectedCollegeId },
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         });
//         setCourseOptions(response.data);
//         console.log("courses" + response.data);
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//       }
//     };
//     fetchCourses();
//   }, [selectedCollegeId]); // Add selectedCollegeId as a dependency


//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match.");
//       return;
//     }
//     setErrorMessage('');

//     const payload = {
//       username,
//       password,
//       first_name: firstName,
//       last_name: lastName,
//       middle_name: middleName,
//       email,
//       phone_number: phoneNumber,
//       // college,
//       course,
//     };

//     try {
//       const response = await axios.post(REGISTER_API_URL, payload);
//       console.log('Registration successful', response.data);
//       navigate('/login');
//     } catch (error) {
//       console.error('Registration error:', error);
//       setErrorMessage('Failed to register. Please try again later.');
//     }
//   };

//   return (
//     <Box sx={{ p: 0, m: 'auto', bgcolor: '#f1f1f1', boxShadow: 'initial', my: '37px', width: '525px', borderRadius: '20px', paddingBottom: '40px', overflow: 'clip' }}>

//       <Box sx={{ paddingTop: '20px' }}>
//         <UserGreeting isLoggedIn={false} userName="test123" />
//       </Box>

//       <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '423px' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }} noValidate autoComplete="off" onSubmit={handleSubmit}>

//         {errorMessage && (
//           <Typography color="error" sx={{ textAlign: 'center' }}>{errorMessage}</Typography>
//         )}

//         <TextField id="username" label="Username" variant="outlined" value={username} onChange={e => setUsername(e.target.value)} />
//         <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
//         <TextField label="Confirm Password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
//         <TextField label="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
//         <TextField label="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
//         <TextField label="Middle Name" value={middleName} onChange={e => setMiddleName(e.target.value)} />
//         <TextField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
//         <TextField label="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
//         <InputLabel id="college-label">Select College</InputLabel>
//         <Select
//           labelId='college-label'
//           id="college-label"
//           value={college}
//           onChange={(e) => {
//             setCollege(e.target.value);
//             setSelectedCollegeId(e.target.value);
//             console.log(selectedCollegeId);
//             // handleCollegeChange(e.target.value);
//           }}
//         >
//           <MenuItem value="none">None</MenuItem>
//           {collegeOptions.map(college => (
//             <MenuItem key={college.id} value={college? college.id : "none"}>{college? college.college_name : "none"}</MenuItem>
//           ))}
//         </Select>
//         <InputLabel id="course-label">Select Course</InputLabel>
//         <Select
//           labelId='course-label'
//           id="course-label"
//           value={course}
//           onChange={(e) => setCourse(e.target.value)}
//         >
//           <MenuItem value="none">None</MenuItem>
//           {courseOptions.map(course => (
//             <MenuItem key={course.id} value={course.id}>{course.Course}</MenuItem>
//           ))}
//         </Select>

//         <Button type="submit" variant="contained" sx={{ bgcolor: 'orange', '&:hover': { backgroundColor: 'darkorange' }, width: '423px', height: '50px', m: 2 }}>Register</Button>

//         <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", textAlign: 'center' }}>
//           <Typography variant="subtitle1" color="GrayText">Already a user?</Typography>
//           <Link href="/login" sx={{ textDecoration: 'none', color: 'orange', '&:hover': { color: 'darkorange' }, my: 'auto', mx: 1, fontSize: '16px' }}>Login</Link>
//         </Box>
//       </Box>
//     </Box>
//   );
// };
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Link, Select, MenuItem, InputLabel, Divider } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserGreeting from './components/userGreetings';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const REGISTER_API_URL = 'https://stallionnotes.pythonanywhere.com/register/';
const COLLEGES_API_URL = 'https://stallionnotes.pythonanywhere.com/view-college/';
const COURSES_API_URL = 'https://stallionnotes.pythonanywhere.com/view-course/';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [college, setCollege] = useState('');
  const [course, setCourse] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [collegeOptions, setCollegeOptions] = useState([]);
  const [courseOptions, setCourseOptions] = useState([]);
  const [genres] = useState([
    "Engineering",
    "Finance",
    "Health",
    "Programming",
    "Psychology",
    "Arts",
    "Communication",
    "Languages",
    "Accountancy"]);

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

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(COURSES_API_URL, {
          params: { college },
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setCourseOptions(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error.message);
      }
    };
    if (college !== '') {
      fetchCourses();
    }
  }, [college]);

  const handleNext = () => {
    let hasError = false;
    switch (currentPage) {
      case 1: // Validate account details
        // Validate account details
        if (!username || !password || !confirmPassword) {
          setErrorMessage("Please fill all fields correctly.");
          hasError = true;
        } else if (password !== confirmPassword) {
          setErrorMessage("Passwords don't match.");
          hasError = true;
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
          setErrorMessage("Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.");
          hasError = true;
        }
        break;

      case 2: // Validate personal information
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d+$/; // Allows only digits, any length
        // const phoneRegex = /^\d{10}$/; // This regex matches exactly 10 digits
        if (!firstName || !lastName || !email || !phoneNumber) {
          setErrorMessage("Please fill all required fields.");
          hasError = true;
        } else if (!emailRegex.test(email)) {
          setErrorMessage("Invalid email.");
          hasError = true;
        } else if (!phoneRegex.test(phoneNumber)) {
          setErrorMessage("Invalid phone number.");
          hasError = true;
        }
        break;
      case 3: // Validate genre selection
        if (selectedGenres.length === 0) {
          setErrorMessage("Please select at least one genre.");
          hasError = true;
        }
        break;
      case 4: // Validate student information
        if (!college || !course) {
          setErrorMessage("Please select both college and course.");
          hasError = true;
        }
        break;
      default:
        setErrorMessage("");
        break;
    }

    if (!hasError) {
      setCurrentPage(currentPage + 1);
      setErrorMessage('');
    }
  };


  const handleBack = () => {
    setCurrentPage(currentPage - 1);
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
      course,
      gender,
      birthdate,
      genres: selectedGenres.join(",") // Convert array to comma-separated string
    };

    try {
      const response = await axios.post(REGISTER_API_URL, payload);
      console.log('Registration successful', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      if (error.response && error.response.data && error.response.data.username) {
        setErrorMessage(`Failed to register: ${error.response.data.username[0]}`);
      }
      else if (error.response && error.response.data && error.response.data.course) {
        setErrorMessage(`Failed to register: 'College and Course' ${error.response.data.course[0]}`);
      }
      else if (error.config && error.response.data && error.response.username) {
        setErrorMessage(`Failed to register: ${error.response.data.username[0]}`);
      }
      else {
        setErrorMessage('Failed to register. Please try again later.',);
        // console.error('Registration error:', error);
      }
    }

  };

  const handleGenreSelect = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      if (selectedGenres.length < 4) {
        setSelectedGenres([...selectedGenres, genre]);
      }
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', height: 'auto' }} >
            <Typography variant="h6" sx={{ color: "#002f1b", fontFamily: 'Poppins' }}>Account Details</Typography>
            {/* <Divider sx={{mb:1}}/>             */}
            <TextField sx={{ mb: 2, mt: 1, }} id="username" label="Username" variant="outlined" value={username} onChange={e => setUsername(e.target.value)} />
            <TextField sx={{ mb: 2, }} label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <TextField sx={{ mb: 2, }} label="Confirm Password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          </Box>
        );
      case 2:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', height: 'auto' }}>
            <Typography variant="h6" sx={{ color: "#002f1b", fontFamily: 'Poppins' }}>Personal Information</Typography>
            {/* <Divider sx={{mb:1}}/> */}
            <TextField sx={{ mb: 2, mt: 1, }} label="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <TextField sx={{ mb: 2, }} label="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
            <TextField sx={{ mb: 2, }} label="Middle Name" value={middleName} onChange={e => setMiddleName(e.target.value)} />
            {/* <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: 1, mb: 2 }}>
              <TextField
                sx={{ width: 200, '& label.Mui-focused': { color: 'orange', }, '& .MuiOutlinedInput-root': { '&.Mui-focused fieldset': { borderColor: 'orange', }, }, }}
                select
                size="small"
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
              <TextField
                sx={{ width: 200, '& label.Mui-focused': { color: 'orange', }, '& .MuiOutlinedInput-root': { '&.Mui-focused fieldset': { borderColor: 'orange', }, }, }}
                size="small"
                label="Birthdate"
                type="date"
                value={birthdate}
                onChange={e => setBirthdate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box> */}
            <TextField sx={{ mb: 2, }} label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <TextField sx={{}} label="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
          </Box>
        );
      case 3:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', height: 'auto', }}>
            <Box>
              <Typography variant="h6" sx={{ color: "#002f1b", fontFamily: 'Poppins' }}>What genre are you interested in?</Typography>
              {/* <Divider sx={{ mb: 1 }} /> */}
            </Box>
            <Box sx={{ columns: '3 auto' }} >
              {genres.map((genre) => (
                <Button
                  key={genre}
                  variant={selectedGenres.includes(genre) ? "contained" : "outlined"}
                  onClick={() => handleGenreSelect(genre)}
                  style={{
                    padding: 12,
                    marginTop: 15,
                    borderRadius: 50,
                    width: 130,
                    fontSize: 10,
                    borderColor: '#002f1b',
                    // color: selectedGenres.includes(genre) ? '#f1f1f1' : '#002f1b',
                    // backgroundColor: selectedGenres.includes(genre) ? '#698152' : '#f1f1f1',
                  }}
                >
                  {genre}
                </Button>
              ))}
            </Box>
          </Box>
        );
      case 4:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', height: 'auto', }}>
            <Typography variant="h6" sx={{ color: "#002f1b", fontFamily: 'Poppins' }}>Student Information</Typography>
            {/* <Divider sx={{mb:1}}/> */}
            <InputLabel id="college-label">Select College</InputLabel>
            <Select
              labelId='college-label'
              id="college-label"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              sx={{
                mb: 2, mt: 1,
                // '& .MuiOutlinedInput-root': {
                // '&:hover .MuiOutlinedInput-notchedOutline': {
                //   borderColor: 'orange', // Correctly sets hover border color to orange
                // },
                // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                //   borderColor: 'orange', // Correctly sets focus border color to orange
                // },
                // }
              }}

            >
              <MenuItem value="">None</MenuItem>
              {collegeOptions.map(college => (
                <MenuItem key={college.id} value={college.id}>{college.college_name}</MenuItem>
              ))}
            </Select>
            <InputLabel id="course-label" >Select Course</InputLabel>
            <Select
              labelId='course-label'
              id="course-label"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              sx={{
                mb: 2, mt: 1,
                // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                //   borderColor: 'orange', // Correctly sets focus border color to orange
                // },
              }}
            >
              <MenuItem value="">None</MenuItem>
              {courseOptions.map(course => (
                <MenuItem key={course.id} value={course.id}>{course.Course}</MenuItem>
              ))}
            </Select>
          </Box>
        );
      default:
        return null;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Box height='100vh' sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column', pt: '20px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }} >
        <Link href="#" sx={{ textDecoration: 'none', color: currentPage === 1 ? 'default' : 'inherit', cursor: 'pointer' }}>
          Account Details
        </Link>
        <NavigateNextIcon sx={{ mx: 1 }} />
        <Link href="#" sx={{ textDecoration: 'none', color: currentPage === 2 ? 'default' : 'inherit', cursor: 'pointer' }}>
          Personal Information
        </Link>
        <NavigateNextIcon sx={{ mx: 1 }} />
        <Link href="#" sx={{ textDecoration: 'none', color: currentPage === 3 ? 'default' : 'inherit', cursor: 'pointer' }}>
          Genre Selection
        </Link>
        <NavigateNextIcon sx={{ mx: 1 }} />
        <Link href="#" sx={{ textDecoration: 'none', color: currentPage === 4 ? 'default' : 'inherit', cursor: 'pointer' }}>
          Student Information
        </Link>
      </Box>
      <Box sx={{ bgcolor: '#f1f1f1', boxShadow: 'initial', width: '525px', height: 'auto', borderRadius: '20px', overflow: 'clip', pb: '32px', mt: '50px' }}>
        <Box>
          <UserGreeting isLoggedIn={false} userName="test123" />
        </Box>
        <Box component="form" sx={{ '& > :not(style)': { width: '423px', }, height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', }} noValidate autoComplete="off">
          {errorMessage && (
            <Typography color="error" sx={{ textAlign: 'center', fontSize: '14px' }}>{errorMessage}</Typography>
          )}
          {renderPage()}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, mt: 2, width: 525, height: 35 }}>
            {currentPage > 1 && (
              <Button onClick={handleBack} variant="outlined" sx={{ mr: 2, pr: 3.1, pt: 2.5, pb: 2.5, width: '100px', borderRadius: 2, textAlign: 'center', textTransform: 'capitalize' }}>
                <KeyboardArrowLeftIcon /> back
              </Button>
            )}
            {currentPage < 4 && (
              <Button onClick={handleNext} variant="contained" sx={{ mr: 2, pt: 2.5, pb: 2.5, pr: .9, width: '100px', borderRadius: 2, textAlign: 'center', textTransform: 'capitalize' }}>
                next <KeyboardArrowRightIcon />
              </Button>
            )}
            {currentPage === 4 && (
              <Button onClick={handleSubmit} variant="contained" sx={{ mr: 2, pt: 2.5, pb: 2.5, pl: 3, width: '130px', textAlign: 'center', borderRadius: 2, textTransform: 'capitalize' }}>
                register <ArrowForwardIcon sx={{ fontSize: 20 }} />
              </Button>
            )}
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", textAlign: 'center' }}>
          <Typography variant="subtitle1" color="GrayText">Already a user?</Typography>
          <Link href="/login" sx={{ textDecoration: 'none', my: 'auto', mx: 1, fontSize: '16px' }}>Login</Link>
        </Box>
      </Box>
    </Box >
  );
};
