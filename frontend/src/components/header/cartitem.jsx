import Grid from '@mui/material/Grid';
import { Typography, Box, Checkbox, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState, useEffect } from 'react';
import axios from 'axios';


const token = localStorage.getItem('authToken');
const VIEW_CART_API_URL = 'http://127.0.0.1:8000/view-cart/';

export default function CartItem() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(VIEW_CART_API_URL, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            // 'Content-Type': 'application/json',
          },
        });
        console.log("Viewed Cart data", response.data);
        // const mycart = response.data;
        setCart(response.data);

      } catch (err) {
        console.error('Failed to fetch cart', err);
      }
    }
    fetchData();
  }, []);
  console.log("my cart: ", cart);

  return (
    <Grid container sx={{ mb: 1 }}>
      {cart.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 1,
            justifyContent: 'space-between',
            width: '100%',
            height: '100px',
          }}
        >
          <Checkbox disableRipple color='success' />
          <Box display='flex' flexDirection='row' alignItems='center'>
            <img
              src={item.book_img}
              alt="Book Image"
              style={{ width: '73px', height: '73px', border: '1px solid black', borderRadius: 6 }}
            />
            <Box
              sx={{
                ml: 1,
                mr: 1,
                width: 125,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                pr: 1,
              }}
            >
              <Box label='book-name' variant="body1" fontWeight="bold" fontFamily='Poppins'
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  fontSize: '15px',
                  color: "#2D432E"
                }} >
                {item.book_title}
              </Box>
              <Box label='author-name' variant="body2" color="textSecondary" fontFamily='Poppins'
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  fontSize: '13px',
                  color: "#2D432E"
                }} >
                Shop: {item.seller}
              </Box>
            </Box>
            <Box
              sx={{
                width: 100,
                height: '100%',
                fontFamily: 'Poppins',
                alignItems: 'center',
                fontSize: '15px'
              }}
            >
              Php {item.price}
            </Box>
            <IconButton aria-label="delete" disableRipple>
              <DeleteOutlineIcon sx={{ color: "#2D432E" }} />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Grid>
  );
}
