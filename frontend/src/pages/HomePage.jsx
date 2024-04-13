/* eslint-disable no-unused-vars */
import { Typography } from "@mui/material";
import ResponsiveAppBar from '../components/header/header-frontend'
// import { useEffect } from "react";
import axios from "axios";
import { Button, Grid } from "@mui/material";
import { useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import BookForm from "./profile/BookForm";
import LeftBar from "../components/homepage/LeftBar";
import FeedBar from "../components/homepage/FeedBar";
import RightBar from "../components/homepage/RightBar";
import FeedbackButton from "../components/feedbackbtn";

const HomePage = () => {


    return (
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
              <Grid item>
                <LeftBar/>
              </Grid>
              <Grid item>
                <FeedBar/>
              </Grid>
              <Grid item
              pr={2}
              >
                <RightBar/>
              </Grid>
            </Grid>
            <FeedbackButton />
            
        </>
    )
}

export default HomePage;