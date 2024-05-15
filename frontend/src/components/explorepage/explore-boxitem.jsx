/*eslint-disable no-unused-vars*/
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography, Box, IconButton, Modal, Container, Divider } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ViewItemModal from './viewitemmodal';

const EXPLORE_API_URL = 'https://stallionnotes.pythonanywhere.com/explore-books/';
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

export default function ExploreItemBox({ searched }) {
  const [explore, setExplore] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // const [searched, setSearched] = useState({ items: [] });

  // const handleOpenModal = () => {
  //   setOpenModal(true);
  // };
  const handleOpenModal = (item) => {
    setSelectedItem(item); // Set the selected item
    setOpenModal(true);
    console.log('Selected Item:', item); // Log selected item for debugging
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    setExplore(searched);
  },);
  // console.log(explore && explore.genre && explore.genre.id)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(EXPLORE_API_URL, {
  //         headers: {
  //           'Authorization': `Bearer ${token}`,
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       });
  //       console.log("Viewed explore data", searched);
  //       setExplore(response.data);  // Store all posts in state

  //     } catch (err) {
  //       console.error('Failed to view explore book information', err);
  //       alert('Failed to view explore book information');
  //     }
  //   };
  //   fetchData();
  // }, []);

  console.log('BoxItem', explore);

  return (
    <Grid container sx={{ mb: 1, pl: 1 }} >
      {/* {explore.length > 0 ? (
        <> */}
      {explore.map((post) => (
        <Item key={post.id} elevation={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: "#F5F5F5", m: 1 }}>
          <Box flexDirection='column'>
            <Box
              width='220px'
              height='115px'
              borderRadius='5px'
              style={{
                backgroundImage: post.book_img ? `url('${post.book_img}')` : " https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'start',
              }}
              sx={{ mt: 1 }}
              // onClick={handleOpenModal}
              onClick={() => handleOpenModal(post)}
            >
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box sx={{ width: '160px', height: '90px', p: '1px', display: 'flex', flexDirection: 'start', }}>
                <Box sx={{ mt: 2, pl: 2 }}>
                  <Typography variant="subtitle2" fontWeight='bold' sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', }}>
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle2">
                    {post.price} || {post.genre && post.genre.genre_name}
                  </Typography>
                  <Typography variant="subtitle2" sx={{}}>
                    {/* {post.genre && post.genre.genre_name} */}
                  </Typography>
                </Box>
              </Box>
              <Checkbox
                icon={<FavoriteBorder style={{ fontSize: '30px' }} />}
                checkedIcon={<Favorite style={{ fontSize: '30px', color: '#50623A' }} />}
                disableRipple
              />
            </Box>
          </Box>
        </Item>
      ))}
      {/* </>) : (
        <p>No results found</p>
      )} */}
      {/* <ViewItemModal open={openModal} handleClose={handleCloseModal} explore={explore} /> */}
      <ViewItemModal open={openModal} handleClose={handleCloseModal} selectedItem={selectedItem} />
    </Grid>
  );
}

ExploreItemBox.propTypes = {
  searched: PropTypes.array
};

ExploreItemBox.defaultProps = {
  searched: []  // Default prop if none is provided
};