import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BarChartIcon from '@mui/icons-material/BarChart';
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';

const StyledTab = styled(Tab)(({ theme }) => ({
  '&.Mui-selected': {
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#E0E0E0',
    color: theme.palette.mode === 'dark' ? '#50623A' : '#50623A',
  },
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#3C4858' : '#F0F0F0',
  },
  minHeight: '40px',
  padding: '6px 12px',
  borderRadius: '8px',
  '& .MuiTypography-body1': {
    fontSize: '14px',
    color:'#50623A',
    fontFamily:'Poppins'
  },
  '& .MuiSvgIcon-root': {
    color: '#50623A',
  },
}));

function ProfileTab(props) {
  const { value, handleChange } = props;

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        height: '800px',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: 0, mt:'5px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Avatar
            alt=""
            src="/static/images/avatar/1.jpg"
            sx={{ width: 80, height: 80, mr: 1, border:'3px solid #50623A'}}
          />
          
          <div>
            <Typography variant="subtitle1" color='#50623A' fontWeight='bold' fontFamily='Poppins'>Full Name/Username</Typography>
            <Typography variant="body2" color="#50623A" fontFamily='Poppins'> user@example.com</Typography>
          </div>
        </Box>
      </Box>
      <Divider sx={{mt:2, mb:2, borderBottom:2}}/>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="profile-tabs"
        indicatorColor='none'
      >
        <StyledTab
          label={
            <ListItem disableGutters>
              <ListItemIcon>
                <AccountCircleIcon  />
              </ListItemIcon >
              <Box>
              <Typography variant="body1">Account</Typography>
              </Box>
            </ListItem>
          }
        />
        <Divider sx={{mt:1, mb:1, borderBottom:.5}}/>
        <StyledTab
          label={
            <ListItem disableGutters>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <Typography variant="body1">Purchase History</Typography>
            </ListItem>
          }
        />
        <Divider sx={{mt:1, mb:1, borderBottom:.5}}/>
        <StyledTab
          label={
            <ListItem disableGutters>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <Typography variant="body1">Wish List</Typography>
            </ListItem>
          }
        />
        <Divider sx={{mt:1, mb:1, borderBottom:.5}}/>
        <StyledTab
          label={
            <ListItem disableGutters>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <Typography variant="body1">Book Management</Typography>
            </ListItem>
          }
        />
        <Divider sx={{mt:1, mb:1, borderBottom:.5}}/>
        <StyledTab
          label={
            <ListItem disableGutters>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <Typography variant="body1">Reports and Analytics</Typography>
            </ListItem>
          }
        />
        
      </Tabs>
      </Box>
  );
}

ProfileTab.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ProfileTab;