import { Typography } from "@mui/material";
import ResponsiveAppBar from '../components/header/header-frontend'
// import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import BookForm from "./profile/BookForm";


const HomePage = () => {

    const butt = async () => {
        // event.preventDefault();

        try {
            // Step 1: Get the token from local storage
            const token = localStorage.getItem('authToken');

            // // Step 2: Set the token in the request headers
            // const headers = {
            //     'Content-Type': 'application/json',
            //     'Authorization': `Bearer ${token}`
            // };

            // Step 3: Use Axios for the GET request with the token in headers
            const response = await axios.get('http://127.0.0.1:8000/test-header/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            // Assuming the message is in response.data
            const { message } = response.data;

            console.log('Response:', message);
        } catch (error) {
            console.error('Test error:', error);
        }
    };

    useEffect(() => {
        // butt();
    }, []);



    return (
        <>
            <ResponsiveAppBar />

            <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', my: 'auto', width: '375px', fontWeight: 'medium', color: '' }}>Home</Typography>
            {/* <Button onClick={logout}> logout </Button> */}
            <BookForm />
        </>
    )
}

export default HomePage;