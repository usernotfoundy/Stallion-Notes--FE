/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function BasicMenu() {
  // MAIPAN JAY MISMO APP.JSX 
  //<Container maxWidth='full' sx={{bgcolor:'#FFFFFF', border: 1, m:0,minHeight:"100vh"}}>
  // <ProfileMenu/> 
  // </Container>
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      try {
        const response = await axios.get('your_image_url_here');
        console.log('Image loaded successfully:', response.data);
        setImageUrl(response.data.imageUrl);
      } catch (error) {
        console.error('Error loading image:', error);
        setError('Error loading image');
      }
      setLoading(false);
    };
    fetchImage();
  }, []);

  return (
    <div>
      <Typography variant="h1" color="initial"></Typography>
      <Container sx={{ width: '30px', display: 'flex', justifyContent: 'center', mx: 'auto', marginRight: '20px' }}
        id="profile-menu"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <PersonRoundedIcon sx={{ color: '#50623A', width: '35px', height: '35px' }} />
        <ArrowDropDownRoundedIcon sx={{ color: '#50623A', width: '35px', height: '35px' }} />
        {/* {loading && <p>Loading image...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {imageUrl && (
            <div>
              <PersonRoundedIcon sx={{ color: '#50623A', width: '35px', height: '35px' }} />
              <ArrowDropDownRoundedIcon sx={{ color: '#50623A', width: '35px', height: '35px' }} />
              <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
            </div>
          )} */}

      </Container>
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
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}