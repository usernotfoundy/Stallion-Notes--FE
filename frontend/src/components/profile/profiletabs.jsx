import { useEffect, useState } from 'react';
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
import { styled, useTheme } from '@mui/material/styles';
import { Divider } from '@mui/material';
import axios from 'axios';

const VIEW_PROFILE_API_URL = 'https://stallionnotes.pythonanywhere.com/view-profile/';
const token = localStorage.getItem('authToken');
const color = '#10439F';

const StyledTab = styled(Tab)(({ theme }) => ({
  '&.Mui-selected': {
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#E0E0E0',
    color: theme.palette.mode === 'dark' ? `${color}` : `${color}`,
  },
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#3C4858' : '#F0F0F0',
  },
  minHeight: '40px',
  padding: '6px 12px',
  borderRadius: '8px',
  '& .MuiTypography-body1': {
    fontSize: '14px',
    color: `${color}`,
    fontFamily: 'Poppins',
  },
  '& .MuiSvgIcon-root': {
    color: `${color}`,
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiTypography-body1': {
      display: 'none',
    },
    '& .MuiListItemIcon-root': {
      minWidth: 'auto',
    },
    justifyContent: 'center',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  marginRight: theme.spacing(1),
  border: `3px solid ${color}`,
  [theme.breakpoints.down('md')]: {
    // width: 50,
    // height: 50,
    // border: `2px solid ${color}`,
    display: 'none'
  },
}));

const ProfileInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const LargeIconListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    '& .MuiSvgIcon-root': {
      fontSize: '2rem',
    },
  },
}));

function ProfileTab(props) {
  const { value, handleChange } = props;
  const [img, setImg] = useState(null);
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(VIEW_PROFILE_API_URL, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        setImg(response.data.profile_img);
        setUsername(response.data.email);
        setName(response.data.username);
      } catch (err) {
        console.error('Failed to view profile information', err);
        alert('Failed to view profile information');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
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
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
          alignItems: 'center',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, mt: '5px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <StyledAvatar alt="" src={img} />
          <ProfileInfo>
            <Typography sx={{ width: 140, color: `${color}` }} variant="subtitle1" fontWeight='bold' fontFamily='Poppins' noWrap>@{name}</Typography>
            <Typography sx={{ width: 140, color: `${color}` }} variant="body2" fontFamily='Poppins' noWrap> {username}</Typography>
          </ProfileInfo>
        </Box>
      </Box>
      <Divider sx={{ mt: 2, mb: 2, borderBottom: 1 }} />
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
              <LargeIconListItemIcon>
                <AccountCircleIcon />
              </LargeIconListItemIcon>
              <Box>
                <Typography variant="body1">Account</Typography>
              </Box>
            </ListItem>
          }
        />
        <Divider sx={{ mt: 1, mb: 1, borderBottom: .5, color: '#fff' }} />
        <StyledTab
          label={
            <ListItem disableGutters>
              <LargeIconListItemIcon>
                <HistoryIcon />
              </LargeIconListItemIcon>
              <Typography variant="body1">Purchase History</Typography>
            </ListItem>
          }
        />
        <Divider sx={{ mt: 1, mb: 1, borderBottom: .5, color: '#fff' }} />
        <StyledTab
          label={
            <ListItem disable disableGutters>
              <LargeIconListItemIcon>
                <FavoriteIcon />
              </LargeIconListItemIcon>
              <Typography variant="body1">Wish List</Typography>
            </ListItem>
          }
        />
        <Divider sx={{ mt: 1, mb: 1, borderBottom: .5, color: '#fff' }} />
        <StyledTab
          label={
            <ListItem disableGutters>
              <LargeIconListItemIcon>
                <LibraryBooksIcon />
              </LargeIconListItemIcon>
              <Typography variant="body1">Book Management</Typography>
            </ListItem>
          }
        />
        <Divider sx={{ mt: 1, mb: 1, borderBottom: .5, color: '#fff' }} />
        <StyledTab
          label={
            <ListItem disableGutters>
              <LargeIconListItemIcon>
                <BarChartIcon />
              </LargeIconListItemIcon>
              <Typography variant="body1">Reports and Orders</Typography>
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
