/* eslint-disable no-unused-vars */import { useEffect, useState } from 'react';
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
import axios from 'axios';

const VIEW_PROFILE_API_URL = 'http://127.0.0.1:8000/view-profile/';
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
    fontFamily: 'Poppins'
  },
  '& .MuiSvgIcon-root': {
    color: `${color}`,
  },
}));

function ProfileTab(props) {
  const { value, handleChange } = props;
  const [img, setImg] = useState(null);
  const [username, setUsername] = useState();
  const [name, setName] = useState();

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
        overflow: 'hidden'
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: 0, mt: '5px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Avatar
            alt=""
            src={img}
            sx={{ width: 80, height: 80, mr: 1, border: `3px solid ${color}` }}
          />
          <div>
            <Typography sx={{ width: 140, color: `${color}` }} variant="subtitle1" fontWeight='bold' fontFamily='Poppins' noWrap>@{name}</Typography>
            <Typography sx={{ width: 140, color: `${color}` }} variant="body2" fontFamily='Poppins' noWrap> {username}</Typography>
          </div>
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
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon >
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
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <Typography variant="body1">Purchase History</Typography>
            </ListItem>
          }
        />
        <Divider sx={{ mt: 1, mb: 1, borderBottom: .5, color: '#fff' }} />
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
        <Divider sx={{ mt: 1, mb: 1, borderBottom: .5, color: '#fff' }} />
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
        <Divider sx={{ mt: 1, mb: 1, borderBottom: .5, color: '#fff' }} />
        <StyledTab
          label={
            <ListItem disableGutters>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
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


// /* eslint-disable no-unused-vars */
// import { useEffect, useCallback, useState } from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import HistoryIcon from '@mui/icons-material/History';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import { styled } from '@mui/material/styles';
// import { Divider } from '@mui/material';
// import axios from 'axios';

// const VIEW_PROFILE_API_URL = 'http://127.0.0.1:8000/view-profile/';
// const token = localStorage.getItem('authToken');


// const StyledTab = styled(Tab)(({ theme }) => ({
//   '&.Mui-selected': {
//     backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#E0E0E0',
//     color: theme.palette.mode === 'dark' ? '#50623A' : '#50623A',
//   },
//   '&:hover': {
//     backgroundColor: theme.palette.mode === 'dark' ? '#3C4858' : '#F0F0F0',
//   },
//   minHeight: '40px',
//   padding: '6px 12px',
//   borderRadius: '8px',
//   '& .MuiTypography-body1': {
//     fontSize: '14px',
//     color: '#50623A',
//     fontFamily: 'Poppins'
//   },
//   '& .MuiSvgIcon-root': {
//     color: '#50623A',
//   },
// }));

// function ProfileTab(props) {
//   const { value, handleChange } = props;
//   const [img, setImg] = useState(null);
//   const [username, setUsername] = useState();
//   const [name, setName] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(VIEW_PROFILE_API_URL, {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         // console.log("View profile data", response.data);
//         setImg(response.data.profile_img);
//         setUsername(response.data.email);
//         setName(response.data.username);
//       } catch (err) {
//         console.error('Failed to view posted book information', err);
//         alert('Failed to view posted book information');
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';

//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, []);

//   // const [img, setImg] = useState(null);
//   //   const Profile_Url = img;
//   //   const pic = async () => {
//   //       // event.preventDefault();
//   //       try {
//   //       const token = localStorage.getItem('authToken');

//   //       const response = await axios.get(VIEW_PROFILE_API_URL, {
//   //           headers: {
//   //           'Content-Type': 'application/json',
//   //           'Authorization': `Bearer ${token}`,
//   //           },
//   //       });
//   //       // console.log(response.data.profile_img);
//   //       setImg(response.data.profile_img);
//   //       // Assuming the message is in response.data

//   //       } catch (error) {
//   //       console.log(error)
//   //       }
//   //   };

//   // useEffect(() => {
//   //     pic();
//   // }, []);


//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         height: '800px',
//         flexDirection: 'column',
//         overflow: 'hidden'
//       }}
//     >

//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: 0, mt: '5px' }}>
//         <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//           <Avatar
//             alt=""
//             src={img}
//             sx={{ width: 80, height: 80, mr: 1, border: '3px solid #50623A' }}
//           />

//           <div>
//             <Typography sx={{ width: 140 }} variant="subtitle1" color='#50623A' fontWeight='bold' fontFamily='Poppins' noWrap>@{name}</Typography>
//             <Typography sx={{ width: 140 }} variant="body2" color="#50623A" fontFamily='Poppins' noWrap> {username}</Typography>
//           </div>
//         </Box>
//       </Box>
//       <Divider sx={{ mt: 2, mb: 2, borderBottom: 1 }} />
//       <Tabs
//         orientation="vertical"
//         value={value}
//         onChange={handleChange}
//         aria-label="profile-tabs"
//         indicatorColor='none'
//       >
//         <StyledTab
//           sx={{ mb: 0.5 }}
//           label={
//             <ListItem disableGutters>
//               <ListItemIcon>
//                 <AccountCircleIcon />
//               </ListItemIcon >
//               <Box>
//                 <Typography variant="body1">Account</Typography>
//               </Box>
//             </ListItem>
//           }
//         />
//         {/* <Divider sx={{ mt: 1, mb: 1, borderBottom: .5 }} /> */}
//         <StyledTab
//           sx={{ mb: 0.5 }}
//           label={
//             <ListItem disableGutters>
//               <ListItemIcon>
//                 <HistoryIcon />
//               </ListItemIcon>
//               <Typography variant="body1">Purchase History</Typography>
//             </ListItem>
//           }
//         />
//         {/* <Divider sx={{ mt: 1, mb: 1, borderBottom: .5 }} /> */}
//         <StyledTab
//           sx={{ mb: 0.5 }}
//           label={
//             <ListItem disableGutters>
//               <ListItemIcon>
//                 <FavoriteIcon />
//               </ListItemIcon>
//               <Typography variant="body1">Wish List</Typography>
//             </ListItem>
//           }
//         />
//         {/* <Divider sx={{ mt: 1, mb: 1, borderBottom: .5 }} /> */}
//         <StyledTab
//           sx={{ mb: 0.5 }}
//           label={
//             <ListItem disableGutters>
//               <ListItemIcon>
//                 <LibraryBooksIcon />
//               </ListItemIcon>
//               <Typography variant="body1">Manage Book </Typography>
//             </ListItem>
//           }
//         />
//         {/* <Divider sx={{ mt: 1, mb: 1, borderBottom: .5 }} /> */}
//         <StyledTab
//           sx={{ mb: 0.5 }}
//           label={
//             <ListItem disableGutters>
//               <ListItemIcon>
//                 <BarChartIcon />
//               </ListItemIcon>
//               <Typography variant="body1">Reports and Analytics</Typography>
//             </ListItem>
//           }
//         />

//       </Tabs>
//     </Box>
//   );
// }

// ProfileTab.propTypes = {
//   value: PropTypes.number.isRequired,
//   handleChange: PropTypes.func.isRequired,
// };

// export default ProfileTab;