import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Avatar from '@mui/material/Avatar';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const pic = async (event) => {
  event.preventDefault();
  try {
    const token = localStorage.getItem('authToken');

    const response = await Axios.get('http://127.0.0.1:8000/???/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    // Assuming the message is in response.data
    const { message } = response.data;

    console.log('Response:', message);
  } catch (error) {
    console.log(error)
  }
}

const Profile_Url = "http://localhost:8000/static/images/profile/emman_prfl.jpg";

export default function BasicMenu() {
  // MAIPAN JAY MISMO APP.JSX 
  //<Container maxWidth='full' sx={{bgcolor:'#FFFFFF', border: 1, m:0,minHeight:"100vh"}}>
  // <ProfileMenu/> 
  // </Container>
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const logout = (event) => {
    event.preventDefault();

    try {
      localStorage.removeItem('authToken');
      navigate('/login');
      console.log('Logged out')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Button sx={{}}
        id="profile-menu"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {/* <PersonRoundedIcon sx={{color:'#50623A', width:'35px', height:'35px'}}/> */}
        <Avatar alt="" src={Profile_Url} />
        <ArrowDropDownRoundedIcon sx={{ color: '#50623A', width: '35px', height: '35px' }} />

      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'profile-menu',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
        <MenuItem onClick={pic}>see console</MenuItem>
      </Menu>
    </div>
  );
}