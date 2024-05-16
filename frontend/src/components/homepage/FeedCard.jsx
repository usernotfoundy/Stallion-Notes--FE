/* eslint-disable no-unused-vars */
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility'

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, CircularProgress, Button } from '@mui/material';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { useLocation } from 'react-router-dom';
import ViewItemModal from '../explorepage/viewitemmodal';

// import { Divider } from '@mui/material'

const VIEW_POSTS_API_URL = 'https://stallionnotes.pythonanywhere.com/view-posts/';
const ADD_WISHLIST_API_URL = 'https://stallionnotes.pythonanywhere.com/add-wishlist/'
const token = localStorage.getItem('authToken');
const color = '#10349F';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = useState(false);
  const [postImg, setPostImg] = useState('http://127.0.0.1:8000//media/books/395368427_696500319030425_4487648936682276622_n.jpg');
  const [name, setName] = useState('user');
  const [title, setTitle] = useState('Untilted');
  const [avatar, setAvatar] = useState('http://127.0.0.1:8000//media/books/395368427_696500319030425_4487648936682276622_n.jpg')
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleWishlist = async (post, isLiked) => {
    const action = isLiked ? 'unlike' : 'like';  // Determine the action based on current like status
    try {
      const response = await axios({
        method: 'post', // Ensure the method is explicitly set
        url: ADD_WISHLIST_API_URL,
        data: {
          id: post.id,
          action: action
        },
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('Wishlist updated:', response.data);
      // Fetch the latest posts to refresh the wishlist state
      fetchData();
    } catch (err) {
      console.error('Error updating wishlist', err);
      alert('Failed to update wishlist.');
    }
  };


  const handleOpenModal = (item) => {
    setSelectedItem(item); // Set the selected item
    setOpenModal(true);
    console.log('Selected Item:', item); // Log selected item for debugging
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };



  const fetchData = async () => {
    try {
      const response = await axios.get(VIEW_POSTS_API_URL, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("Viewed post data", response.data);
      setPosts(response.data);  // Store all posts in state
    } catch (err) {
      console.error('Failed to view posted book information', err.response.status);
      // alert('Something went wrong. PLEASE Reload', err.message);
      if (err.response.status === 403)
        window.location.reload();
    } finally {
      setTimeout(() => {
        // window.location.reload();
        // fetchData();
        setLoading(false)
      }, 3000);
      // console.log('gayry', reload)
      // if (!loading)
      //   setTimeout(() => {
      //     // window.location.reload();
      //     // fetchData();
      //     window.location.reload()
      //   }, 3000);
    }
  };
  useEffect(() => {

    // if (location.pathname === '/home') {
    //   setTimeout(() => {
    //     // window.location.reload();
    //   }, 1000);
    // }
    fetchData();
  }, []);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  // if (loading) return <Typography>Loading<CircularProgress size={14} /></Typography>;

  return (
    <Container >
      {posts.map((post) => (
        <Card key={post.id}
          // color="neutral" variant="soft"
          sx={{
            // mb: 2,
            // mt: 2,
            py: 2,
            mx: 'auto',
            width: '500px',
            minHeight: '500px',
            boxShadow: 'none',
            borderBottom: 1,
            borderRadius: 0,
            borderColor: '#C1C6E6',
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe" src={post.user.profile_img_url}>

                {/* {post.user.username[0].toUpperCase()} */}
              </Avatar>
            }
            action={
              <IconButton aria-label="share" sx={{ color: `${color}` }}>
                <ShareIcon />
              </IconButton>
            }
            title={"@" + post.user.username}
            subheader={<Typography variant="body2" color="textSecondary">
              {formatDistanceToNow(parseISO(post.created_at), { addSuffix: true })}
            </Typography>}
          />
          <Box display="flex" justifyContent="center" width='inherit' maxHeight='300px'>
            <CardMedia
              component="img"
              image={post.book_img_url ? post.book_img_url : 'https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg'}
              alt={post.title}
              onClick={() => handleOpenModal(post)}
            />
          </Box>
          <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body3" color="text.primary" fontWeight={300} gutterBottom noWrap>
              {post.genre && post.genre.genre_name}
            </Typography>
            <Typography variant="body2" color="text.primary" fontWeight={600} gutterBottom noWrap>
              {post.title}
            </Typography>
            <Typography variant="body3" color="text.primary" fontWeight={300} gutterBottom noWrap>
              {post.description}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>

              <Checkbox
                onClick={() => handleWishlist(post, post.isLiked)} // Assume isLiked is a boolean indicating if the user has liked the post
                icon={<FavoriteBorder style={{ fontSize: '25px', color: '#10439F' }} />}
                checkedIcon={<Favorite style={{ fontSize: '25px', color: '#10439F' }} />}
                checked={post.isLiked}
                disableRipple
              />
              <IconButton aria-label="add to cart" sx={{ width: 45, height: 45, mx: 3, }} disableRipple>
                {/* <ShoppingCartIcon sx={{ fontSize: 25, color: '#50623A' }} /> */}
                <Button variant='contained' onClick={() => handleOpenModal(post)} sx={{ bgcolor: '#10439F', py: 1, px: 6 }} startIcon={<VisibilityIcon />}>View</Button>
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}
      {/* <Divider sx={{ borderBottom: 2 }} /> */}
      <ViewItemModal open={openModal} handleClose={handleCloseModal} selectedItem={selectedItem} />
    </Container>

  );
}


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Card, CardHeader, CardMedia, CardContent, Avatar, IconButton,
//   Typography, Checkbox, Button, Container, CircularProgress, Box
// } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import { formatDistanceToNow, parseISO } from 'date-fns';
// import ViewItemModal from '../explorepage/viewitemmodal';

// const VIEW_POSTS_API_URL = 'http://127.0.0.1:8000/view-posts/';
// const ADD_WISHLIST_API_URL = 'http://127.0.0.1:8000/add-wishlist/';
// const token = localStorage.getItem('authToken');
// const color = '#10349F';

// export default function RecipeReviewCard() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(VIEW_POSTS_API_URL, {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         if (response.data && Array.isArray(response.data)) {
//           setPosts(response.data.map(post => ({
//             ...post,
//             is_liked: post.is_liked, // Ensure this data is included by your backend
//             wishlist_count: post.wishlist,
//           })));
//         } else {
//           console.error('Unexpected data structure:', response.data);
//           throw new Error('Data fetched is not in the expected format or is undefined.');
//         }
//       } catch (err) {
//         console.error('Failed to fetch posts', err);
//       } finally {
//         setLoading(false);
//       }
//     };


//     fetchData();
//   }, []);

//   const handleWishlist = async (id, isLiked) => {
//     const action = isLiked ? 'unlike' : 'like';
//     try {
//       const response = await axios.put(
//         ADD_WISHLIST_API_URL,
//         { id, action },
//         { headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } }
//       );
//       // Assuming the response includes the new count and the new is_liked status
//       const updatedPosts = posts.map(post =>
//         post.id === id ? { ...post, is_liked: response.data.is_liked, wishlist_count: response.data.new_count } : post
//       );
//       setPosts(updatedPosts);
//     } catch (error) {
//       console.error('Error updating wishlist:', error);
//     }
//   };



//   return (
//     <Container>
//       {loading ? <CircularProgress /> : (
//         posts.map(post => (
//           <Card key={post.id}>
//             <CardHeader
//               avatar={<Avatar src={post.user.profile_img_url} />}
//               action={
//                 <IconButton aria-label="share" sx={{ color: color }}>
//                   <ShareIcon />
//                 </IconButton>
//               }
//               title={`@${post.user.username}`}
//               subheader={formatDistanceToNow(parseISO(post.created_at), { addSuffix: true })}
//             />
//             <CardMedia
//               component="img"
//               image={post.book_img_url || 'placeholder_image_url'}
//               alt={post.title}
//             />
//             <CardContent>
//               <Typography variant="body2" color="textSecondary">
//                 {post.genre && post.genre.genre_name}
//               </Typography>
//               <Typography variant="body1" gutterBottom>
//                 {post.title}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 {post.description}
//               </Typography>
//               <Box display="flex" justifyContent="end">
//                 {post.wishlist_count}
//                 <Checkbox
//                   icon={<FavoriteBorderIcon />}
//                   checkedIcon={<FavoriteIcon />}
//                   checked={post.is_liked}
//                   onChange={() => handleWishlist(post.id, post.is_liked)}
//                 />
//                 <Button variant="contained" onClick={() => handleOpenModal(post)}>
//                   View
//                 </Button>
//               </Box>
//             </CardContent>
//           </Card>
//         ))
//       )}
//       <ViewItemModal />
//     </Container>
//   );
// }
