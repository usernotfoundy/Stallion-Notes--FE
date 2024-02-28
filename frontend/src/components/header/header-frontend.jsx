/* eslint-disable no-unused-vars */
import * as React from 'react';
import './header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ProfileMenu from './profileMenu';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SearchBar from './searchbar';
import ExploreButton from './explorebutton';
import ForYouButton from './foryourbutton';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const Upload_Url = '';

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post(Upload_Url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image uploaded successfully');
      // Handle success
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error
    }
  };

  return (
    <AppBar position="static" sx={{ background: 'white', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              //
              fontWeight: 700,
              color: '#50623A',
              textDecoration: 'none',
            }}
          >
            Stallion Notes
          </Typography>
          <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', mx: 'auto', marginRight: '0px' }}>
            <ForYouButton sx={{ margin: '5px', }} />
            <ExploreButton sx={{ margin: '5px', }} />
            <SearchBar sx={{}} />
          </Box>
          <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'right', mx: 'auto', marginRight: '0px' }}>
            <Button variant="contained" component="label" role={undefined} onClick={handleUpload} color="success" startIcon={<CloudUploadIcon />} sx={{ margin: '5px', fontSize: '13px', backgroundColor: '#50623A' }}>
              Upload
              <VisuallyHiddenInput type="file" onChange={handleImageChange} />
            </Button>
            <Divider orientation='vertical' flexItem />
            <Button sx={{ fontSize: '25px', margin: '5px' }}>
              <NotificationsNoneRoundedIcon sx={{ fontSize: '30px', color: '#50623A' }} />
            </Button>
            <Divider orientation='vertical' flexItem />
            <Button sx={{ fontSize: '25px', margin: '5px' }}>
              <ShoppingBagOutlinedIcon sx={{ fontSize: '30px', color: '#50623A' }} />
            </Button>
            <Divider orientation="vertical" flexItem />
            <ProfileMenu />
          </Box>
        </Toolbar>
      </Container>
      <Divider></Divider>
    </AppBar>
  );
}
export default ResponsiveAppBar;