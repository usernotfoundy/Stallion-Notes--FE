// /*eslint-disable no-unused-vars*/
// import { Box, Container, Grid, Stack, Typography } from "@mui/material";
// import Header from '../components/header/header-frontend';
// import LeftBar from '../components/homepage/LeftBar';
// import RightBar from '../components/homepage/RightBar';
// import ExploreBar from '../components/explorepage/explorebar';
// import FeedBar from '../components/homepage/FeedBar';
// import FeedbackButton from "../components/feedbackbtn";
// import ResponsiveAppBar from "../components/header/header-frontend";
// import { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import { Navigate, useNavigate } from 'react-router-dom';

// // Check if authToken is available in localStorage
// const authToken = localStorage.getItem('authToken');


// const ExplorePage = () => {
//     const navigate = useNavigate('/');
//     useEffect(() => {


//         // If authToken is not available, redirect to login page
//         if (!authToken) {
//             alert("You're not Login!");
//             navigate('/login'); // Replace '/login' with the actual login page route
//         }
//     }, []);

//     const [searched, setSearched] = useState();


//     useEffect(() => {
//         console.log("Explore Page: ", searched);
//     })


//     return (
//         // <Box >
//         //     <Header/>
//         //     <Stack direction="row" spacing={2} justifyContent='space-between'>
//         //         <LeftBar/>
//         //         <ExploreBar/>
//         //         <RightBar/>
//         //     </Stack>
//         //     <FeedbackButton />
//         // </Box>

//         <>
//             <ResponsiveAppBar searched={searched} setSearched={setSearched} />

//             {/* <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center',alignContent:'center', my: 'auto', width: '375px', fontWeight: 'medium', color: '' }}>Home</Typography> */}
//             {/* <Button onClick={logout}> logout </Button> */}
//             <Grid container
//                 spacing={1}
//                 direction="row"
//                 justifyContent="space-between"
//                 //   alignItems="center"
//                 alignContent="center"
//             >
//                 <Stack direction="row" spacing={2} justifyContent='space-between'>
//                     <LeftBar />
//                     <ExploreBar searched={searched} />
//                     <RightBar />
//                 </Stack>
//             </Grid>
//             <FeedbackButton />
//         </>
//     )
// };

// export default ExplorePage;

// ExplorePage.propTypes = {
//     searched: PropTypes.array
// };

// ExplorePage.defaultProps = {
//     searched: []  // Default prop if none is provided
// };

/*eslint-disable no-unused-vars*/
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Header from '../components/header/header-frontend';
import LeftBar from '../components/homepage/LeftBar';
import RightBar from '../components/homepage/RightBar';
import ExploreBar from '../components/explorepage/explorebar';
import FeedBar from '../components/homepage/FeedBar';
import FeedbackButton from "../components/feedbackbtn";
import ResponsiveAppBar from "../components/header/header-frontend";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';


const ExplorePage = () => {
    const navigate = useNavigate('/');
    useEffect(() => {
        // Check if authToken is available in localStorage
        const authToken = localStorage.getItem('authToken');

        // If authToken is not available, redirect to login page
        if (!authToken) {
            alert("You're not Login!");
            navigate('/'); // Replace '/login' with the actual login page route
        }
    }, []);

    const [searched, setSearched] = useState();


    useEffect(() => {
        console.log("Explore Page: ", searched);
    })


    return (

        <>
            <ResponsiveAppBar searched={searched} setSearched={setSearched} />

            {/* <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center',alignContent:'center', my: 'auto', width: '375px', fontWeight: 'medium', color: '' }}>Home</Typography> */}
            {/* <Button onClick={logout}> logout </Button> */}
            <Grid container
                spacing={1}
                direction="row"
                alignContent="center"
                justifyContent='space-between'
            >
                <LeftBar />
                <ExploreBar searched={searched} />
                <RightBar />
            </Grid>
            <FeedbackButton />
        </>
    )
};

export default ExplorePage;

ExplorePage.propTypes = {
    searched: PropTypes.array
};

ExplorePage.defaultProps = {
    searched: []  // Default prop if none is provided
};