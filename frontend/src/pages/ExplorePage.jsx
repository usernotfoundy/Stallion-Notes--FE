/*eslint-disable no-unused-vars*/
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Header from '../components/header/header-frontend';
import LeftBar from '../components/homepage/LeftBar';
import RightBar from '../components/homepage/RightBar';
import ExploreBar from '../components/explorepage/explorebar';  
import FeedBar from '../components/homepage/FeedBar';
import FeedbackButton from "../components/feedbackbtn";
import ResponsiveAppBar from "../components/header/header-frontend";


const ExplorePage = () => {
  return (
        // <Box >
        //     <Header/>
        //     <Stack direction="row" spacing={2} justifyContent='space-between'>
        //         <LeftBar/>
        //         <ExploreBar/>
        //         <RightBar/>
        //     </Stack>
        //     <FeedbackButton />
        // </Box>

        <>
            <ResponsiveAppBar />

            {/* <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center',alignContent:'center', my: 'auto', width: '375px', fontWeight: 'medium', color: '' }}>Home</Typography> */}
            {/* <Button onClick={logout}> logout </Button> */}
            <Grid container 
                spacing={1}
                direction="row"
                justifyContent="space-between"
            //   alignItems="center"
                alignContent="center"
                >
                <Stack direction="row" spacing={2}  justifyContent='space-between'>
                <LeftBar/>
                <ExploreBar/>
                <RightBar/>
             </Stack>
            </Grid>
            <FeedbackButton />
        </>
  )
};

export default ExplorePage;