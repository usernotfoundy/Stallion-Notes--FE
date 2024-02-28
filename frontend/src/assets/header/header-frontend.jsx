/* eslint-disable no-unused-vars */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "@fontsource/poppins";
import ProfileMenu from './components/header/profileMenu';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SearchBar from './components/header/searchbar';
import ExploreButton from './components/header/explorebutton';
import ForYouButton from './components/header/foryourbutton';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar position="static" sx={{background:'white', boxShadow:'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Poppins',
              fontWeight: 700,
              color: '#50623A',
              textDecoration: 'none',
            }}
          >
            Stallion Notes
          </Typography>
          <Box sx={{flexGrow: 0, display:'flex',justifyContent:'center', mx:'auto', marginRight:'0px'}}>
           <ForYouButton sx={{margin:'5px', fontFamily:'Poppins'}}/>
           <ExploreButton sx={{margin:'5px', fontFamily:'Poppins'}}/>
          <SearchBar sx={{fontFamily:'Poppins'}}/>
          </Box>
          <Box sx={{ flexGrow: 0, display:'flex',justifyContent:'right', mx:'auto', marginRight:'0px'}}>
          <Button variant="contained" color="success" startIcon={<CloudUploadIcon/>} sx={{fontFamily:'Poppins', margin:'5px', fontSize:'13px', backgroundColor:'#50623A'}}>
            Upload
          </Button>
            <Divider orientation='vertical' flexItem/>
          <Button sx={{ fontSize: '25px', margin:'5px'}}>
                <NotificationsNoneRoundedIcon sx={{ fontSize: '30px', color: '#50623A' }} />
          </Button>
          <Divider orientation='vertical' flexItem/>
          <Button sx={{ fontSize: '25px', margin:'5px'}}>
            <ShoppingBagOutlinedIcon sx={{fontSize:'30px', color:'#50623A'}}/>
          </Button>
          <Divider orientation="vertical" flexItem />
            <ProfileMenu/>
          </Box>
        </Toolbar>
      </Container>
      <Divider></Divider>
    </AppBar>
  );
}
export default ResponsiveAppBar;