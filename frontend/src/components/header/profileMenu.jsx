import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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
  const profile = (event) => {
    event.preventDefault();

    try {
      localStorage.removeItem('authToken');
      navigate('/profile');
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
        <MenuItem onClick={profile} fontFamily='Poppins'>Profile</MenuItem>
        <MenuItem onClick={handleClose} fontFamily='Poppins'>Settings</MenuItem>
        <MenuItem onClick={logout}fontFamily='Poppins'>Logout</MenuItem>
        <MenuItem onClick={pic}fontFamily='Poppins'>see console</MenuItem>
      </Menu>
    </div>
  );
}