import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import ResponsiveAppBar from '../components/header/header-frontend';
import ProfileTab from '../components/profile/profiletabs';
import TabPanel from '../components/profile/tabpanels';
import { Box, Paper, Grid, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const authToken = localStorage.getItem('authToken');
const color = '#10349F'
const ProfileContainer = styled(Box)({
  overflow: 'hidden',
});

const ProfilePage = () => {
  const navigate = useNavigate();
  const { tab } = useParams(); // Get the tab parameter from the URL

  useEffect(() => {
    if (!authToken) {
      alert("You're not logged in!");
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const getTabIndex = (tab) => {
    switch (tab) {
      case 'account':
        return 0;
      case 'purchasehistory':
        return 2;
      case 'wishlist':
        return 4;
      case 'bookmanagement':
        return 6;
      case 'reports':
        return 8;
      default:
        return 0;
    }
  };

  const [value, setValue] = useState(getTabIndex(tab));

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const newTab = ['account', 'purchasehistory', 'wishlist', 'bookmanagement', 'reports'][newValue / 2];
    navigate(`/profile/${newTab}`);
  };

  useEffect(() => {
    setValue(getTabIndex(tab));
  }, [tab]);

  return (
    <>
      <ResponsiveAppBar position='sticky' />
      <ProfileContainer sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="start"
          alignItems="start"
          // position='sticky'  
          ml='10px'
        >
          <Grid item xs={2} mt='40px' mr='25px'>
            <Item>
              <ProfileTab value={value} handleChange={handleChange} />
            </Item>
          </Grid>
          {/* `${color}` */}
          <Grid item xs={8.8} position='sticky' mt='40px'>
            <Typography sx={{ fontSize: 36, fontFamily: 'Poppins', fontWeight: 'bold', color: 'GrayText' }}>Profile Settings</Typography>
            <Item>
              <TabPanel value={value} index={0}></TabPanel>
              <TabPanel value={value} index={2}></TabPanel>
              <TabPanel value={value} index={4}></TabPanel>
              <TabPanel value={value} index={6}></TabPanel>
              <TabPanel value={value} index={8}></TabPanel>
            </Item>
          </Grid>
        </Grid>
      </ProfileContainer>
    </>
  );
};

export default ProfilePage;


// import { Routes, Route, useParams } from 'react-router-dom';
// import ResponsiveAppBar from '../components/header/header-frontend';
// import ProfileTab from '../components/profile/profiletabs';
// import TabPanel from '../components/profile/tabpanels';
// import AccountTab from '../components/profile/accounttab';
// import PurchaseHistory from '../components/profile/purchasehistory';
// import BMTab from '../components/profile/bookmanagementtab';
// import WLTab from '../components/profile/wishlisttab';
// import ReportTab from '../components/profile/reporttab';

// const ProfilePage = () => {
//   const { tabpanel } = useParams();

//   const getTabIndex = (tabpanel) => {
//     switch (tabpanel) {
//       case 'account':
//         return 0;
//       case 'purchasehistory':
//         return 2;
//       case 'wishlist':
//         return 4;
//       case 'bookmanagement':
//         return 6;
//       case 'report':
//         return 8;
//       default:
//         return 0;
//     }
//   };

//   const tabIndex = getTabIndex(tabpanel);

//   return (
//     <div>
//       <Routes>
//         <Route path="account" element={<TabPanel value={tabIndex} index={0} />} />
//         <Route path="purchasehistory" element={<TabPanel value={tabIndex} index={2} />} />
//         <Route path="wishlist" element={<TabPanel value={tabIndex} index={4} />} />
//         <Route path="bookmanagement" element={<TabPanel value={tabIndex} index={6} />} />
//         <Route path="report" element={<TabPanel value={tabIndex} index={8} />} />
//       </Routes>
//     </div>
//   );
// };

// export default ProfilePage;
