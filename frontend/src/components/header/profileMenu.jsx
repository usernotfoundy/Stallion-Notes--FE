import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Avatar from '@mui/material/Avatar';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';



// const Profile_Url = "http://localhost:8000/static/images/profile/emman_prfl.jpg";
const VIEW_PROFILE_API_URL = 'http://127.0.0.1:8000/view-profile/';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const token = localStorage.getItem('authToken');

  const [img, setImg] = useState(null);
  const Profile_Url = img;
  const pic = async () => {
    // event.preventDefault();
    try {
      const token = localStorage.getItem('authToken');

      const response = await Axios.get(VIEW_PROFILE_API_URL, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      // console.log(response.data.profile_img);
      setImg(response.data.profile_img);
      // Assuming the message is in response.data

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    pic();
  }, []);

  const color = '#10439F';

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
      localStorage.removeItem('authToken', token);
      navigate('/login');
      console.log('Logged out')
    } catch (error) {
      console.log(error)
    }
  }
  const profile = (event) => {
    event.preventDefault();

    try {
      // localStorage.removeItem('authToken');
      navigate('/profile/:tab');
      window.location.reload()
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
        <ArrowDropDownRoundedIcon sx={{ color: `${color}`, width: '35px', height: '35px' }} />
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
        {/* <MenuItem onClick={handleClose} fontFamily='Poppins'>Settings</MenuItem> */}
        <MenuItem onClick={logout} fontFamily='Poppins'>Logout</MenuItem>
        {/* <MenuItem onClick={pic}fontFamily='Poppins'>see console</MenuItem> */}
      </Menu>
    </div>
  );
}