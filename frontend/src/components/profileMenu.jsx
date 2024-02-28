import * as React from 'react';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Typography from '@mui/material/Typography'

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

  return (
    <div>
      <Typography variant="h1" color="initial"></Typography>
          <Container sx={{ width:'30px', display:'flex',justifyContent:'center', mx:'auto', marginRight:'20px'}}
            id="profile-menu"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
          <PersonRoundedIcon sx={{color:'#50623A', width:'35px', height:'35px'}}/>
          <ArrowDropDownRoundedIcon sx={{color:'#50623A', width:'35px', height:'35px'}}/>

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