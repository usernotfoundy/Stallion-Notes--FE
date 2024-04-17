/*eslint-disable no-unused-vars*/
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography, Box, IconButton } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
import axios from 'axios';

const EXPLORE_API_URL = 'http://127.0.0.1:8000/explore-books/';
const token = localStorage.getItem('authToken');


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 192,
  lineHeight: '60px',
  width: 220,
  overflow: 'hidden',
}));

export default function ExploreItemBox() {
    const [explore, setExplore] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(EXPLORE_API_URL, {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
              },
            });
            console.log("Viewed explore data", response.data);
            setExplore(response.data);  // Store all posts in state

          } catch (err) {
            console.error('Failed to view explore book information', err);
            alert('Failed to view explore book information');
          }
        };
      
        fetchData();
      }, []);
 
  return (
    <Grid container sx={{ mb: 1, pl: 1 }}>
        {explore.map((post) => (
      <Item key={post.id} elevation={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 0.3, backgroundColor: "#F5F5F5" }}>
        <Box flexDirection='column'>
          <Box
            width='220px'
            height='115px'
            borderRadius='5px'
            style={{
              backgroundImage: `url('${post.img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'start',
            }}
            sx={{ mt: 1 }}
          >
          </Box>
          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Box sx={{ width: '160px', height: '77px', p: '1px', display: 'flex', flexDirection: 'column',}}>
                <Box marginTop={2}>
                <Typography variant="subtitle2" fontWeight='bold' sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',}}>
                    {post.title}
                </Typography>
                <Typography variant="subtitle2">
                    {post.price}
                </Typography>
                </Box>
            </Box>
            <Checkbox
                icon={<FavoriteBorder style={{ fontSize: '30px' }} />}
                checkedIcon={<Favorite style={{ fontSize: '30px', color:'#50623A'}} />}
                disableRipple
                />
            </Box>
        </Box>
      </Item>
      ))}
    </Grid>
  );
}