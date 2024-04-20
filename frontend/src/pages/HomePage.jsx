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
  /*
     # Authentication APIs
      const VIEW_PROFILE_API_URL = 'http://127.0.0.1:8000/view-users/'
      const REGISTER_URL = 'http://127.0.0.1:8000/register/'
      const LOGIN_URL = 'http://127.0.0.1:8000/login/'
      const UPDATE_PROFILE_URL = 'http://127.0.0.1:8000/update-user/'
      const VIEW_PROFILE_API_URL = 'http://127.0.0.1:8000/view-profile/'
  
      # College & Course APIs
      const CREATE_COLLEGE_API_URL = 'http://127.0.0.1:8000/create-college/'
      const VIEW_COLLEGE_API_URL = 'http://127.0.0.1:8000/view-college/'
      const CREATE_COURSE_API_URL = 'http://127.0.0.1:8000/create-course/'
      const VIEW_COURSE_API_URL = 'http://127.0.0.1:8000/view-course/'
  
      # Book Management APIs
      const VIEW_BOOKS_API_URL = 'http://127.0.0.1:8000/view-books/'
      const UPLOAD_BOOKS_API_URL = 'http://127.0.0.1:8000/create-book/'
      const UPDATE_BOOKS_API_URL = 'http://127.0.0.1:8000/update-book/'
      const DELETE_BOOKS_API_URL = 'http://127.0.0.1:8000/delete-book/'
      const SEARCH_BOOKS_URL = 'http://127.0.0.1:8000/search-book/'
      const EXPLORE_API_URL = 'http://127.0.0.1:8000/explore-books/';
      const GENRE_API_URL = 'http://127.0.0.1:8000/get-genre/'
  
      # Cart Management APIs
      const ADD_CART_API_URL = 'http://127.0.0.1:8000/add-cart/'
      const VIEW_CART_API_URL = 'http://127.0.0.1:8000/view-cart/'
      const VIEW_POSTS_API_URL = 'http://127.0.0.1:8000/view-posts/';

  */

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
            </Box>
        </>
    )
}

export default HomePage;