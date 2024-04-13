import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ResponsiveAppBar from '../components/header/header-frontend';
import ProfileTab from '../components/profile/profiletabs';
import TabPanel from '../components/profile/tabpanels';
import { Box, Paper, Grid, Typography } from '@mui/material';

const ProfileContainer = styled(Box)({
  overflow: 'hidden',
});

const ProfilePage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ResponsiveAppBar position='sticky' />
      <ProfileContainer sx={{ flexGrow: 1}}>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="start"
          alignItems="start"
          position='sticky'
          ml='10px'
          
        >
          <Grid item xs={2.6} mt='40px' mr='25px'>
            <Item>
              <ProfileTab value={value} handleChange={handleChange} />
            </Item>
          </Grid>

          <Grid item xs={8.8} position='sticky' mt='40px' >
            <Typography sx={{fontSize:36, fontFamily:'Poppins',fontWeight:'bold', color:'#50623A'}}>Profile Settings</Typography>
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