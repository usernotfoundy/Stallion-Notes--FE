/* eslint-disable no-unused-vars */


// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Checkbox from '@mui/material/Checkbox';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Box, Container, CircularProgress, Button } from '@mui/material';
// import { formatDistanceToNow, parseISO } from 'date-fns';
// import { useLocation } from 'react-router-dom';
// import ViewItemModal from '../explorepage/viewitemmodal';

// const VIEW_POSTS_API_URL = 'http://127.0.0.1:8000/view-posts/';
// const CREATE_WISHLIST_API_URL = 'http://127.0.0.1:8000/create-wishlist/';
// const ADD_WISHLIST_API_URL = 'http://127.0.0.1:8000/add-wishlist/';
// const VIEW_WISHLIST_API_URL = 'http://127.0.0.1:8000/view-wishlist/';
// const token = localStorage.getItem('authToken');
// const color = '#10349F';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = useState(false);
//   const [posts, setPosts] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const fetchData = async () => {
//     try {
//       const [postsResponse, wishlistResponse] = await Promise.all([
//         axios.get(VIEW_POSTS_API_URL, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'multipart/form-data',
//           },
//         }),
//         axios.get(VIEW_WISHLIST_API_URL, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }),
//       ]);

//       const wishlistData = wishlistResponse.data;
//       const postsData = postsResponse.data.map((post) => ({
//         ...post,
//         isLiked: wishlistData.some((item) => item.id === post.id),
//       }));

//       setPosts(postsData);
//       setWishlist(wishlistData);
//     } catch (err) {
//       console.error('Failed to fetch data', err.response?.status);
//       if (err.response?.status === 403) window.location.reload();
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCreateWishlist = async (post) => {
//     const isLiked = wishlist.some((item) => item.id === post.id);
//     const action = isLiked ? 'unlike' : 'like';
//     try {
//       if (!isLiked) {
//         await axios.post(
//           CREATE_WISHLIST_API_URL,
//           { book: post.id },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               'Content-Type': 'application/json',
//             },
//           }
//         );
//       }
//       await handleAddWishlist(post.id, action);
//     } catch (err) {
//       console.error('Error creating wishlist', err);
//       alert('Failed to create wishlist.');
//     }
//   };

//   const handleAddWishlist = async (id, action) => {
//     try {
//       await axios.put(
//         ADD_WISHLIST_API_URL,
//         { book_id: id, action: action },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       setWishlist((prevWishlist) => {
//         if (action === 'like') {
//           return [...prevWishlist, { id }];
//         } else {
//           return prevWishlist.filter((item) => item.id !== id);
//         }
//       });
//       setPosts((prevPosts) =>
//         prevPosts.map((post) =>
//           post.id === id
//             ? {
//               ...post,
//               wishlist: action === 'like' ? post.wishlist + 1 : post.wishlist - 1,
//               isLiked: action === 'like',
//             }
//             : post
//         )
//       );
//     } catch (err) {
//       console.error('Error updating wishlist', err);
//       alert('Failed to update wishlist.');
//     }
//   };

//   const handleOpenModal = (item) => {
//     setSelectedItem(item);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [location]);

//   if (loading) {
//     return (
//       <Container>
//         <CircularProgress />
//       </Container>
//     );
//   }

//   return (
//     <Container>
//       {posts.map((post) => (
//         <Card
//           key={post.id}
//           sx={{
//             py: 2,
//             mx: 'auto',
//             width: '500px',
//             minHeight: '500px',
//             boxShadow: 'none',
//             borderBottom: 1,
//             borderRadius: 0,
//             borderColor: '#C1C6E6',
//           }}
//         >
//           <CardHeader
//             avatar={
//               <Avatar
//                 sx={{ bgcolor: 'red' }}
//                 aria-label="recipe"
//                 src={post.user.profile_img_url}
//               />
//             }
//             action={
//               <IconButton aria-label="share" sx={{ color: `${color}` }} />
//             }
//             title={'@' + post.user.username}
//             subheader={
//               <Typography variant="body2" color="textSecondary">
//                 {formatDistanceToNow(parseISO(post.created_at), {
//                   addSuffix: true,
//                 })}
//               </Typography>
//             }
//           />
//           <Box display="flex" justifyContent="center" width="inherit" maxHeight="300px">
//             <CardMedia
//               component="img"
//               image={post.book_img_url || 'https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg'}
//               alt={post.title}
//               onClick={() => handleOpenModal(post)}
//             />
//           </Box>
//           <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
//             <Typography variant="body3" color="text.primary" fontWeight={300} gutterBottom noWrap>
//               {post.genre}
//             </Typography>
//             <Typography variant="body2" color="text.primary" fontWeight={600} gutterBottom noWrap>
//               {post.title}
//             </Typography>
//             <Typography variant="body3" color="text.primary" fontWeight={300} gutterBottom noWrap>
//               {post.description}
//             </Typography>
//             <Box sx={{ display: 'flex', justifyContent: 'end' }}>
//               <Box sx={{ mt: '10px' }}>{post.wishlist}</Box>
//               <Checkbox
//                 onClick={() => handleCreateWishlist(post)}
//                 icon={<FavoriteBorder style={{ fontSize: '25px', color: '#10439F' }} />}
//                 checkedIcon={<Favorite style={{ fontSize: '25px', color: '#10439F' }} />}
//                 checked={post.isLiked} // Ensure checked is always boolean
//                 disableRipple
//               />
//               <IconButton aria-label="add to cart" sx={{ width: 45, height: 45, mx: 3 }} disableRipple>
//                 <Button
//                   variant="contained"
//                   onClick={() => handleOpenModal(post)}
//                   sx={{ bgcolor: '#10439F', py: 1, px: 6 }}
//                   startIcon={<VisibilityIcon />}
//                 >
//                   View
//                 </Button>
//               </IconButton>
//             </Box>
//           </CardContent>
//         </Card>
//       ))}
//       <ViewItemModal open={openModal} handleClose={handleCloseModal} selectedItem={selectedItem} />
//     </Container>
//   );
// }


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
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Button } from '@mui/material';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { useLocation } from 'react-router-dom';
import ViewItemModal from '../explorepage/viewitemmodal';

const VIEW_POSTS_API_URL = 'http://127.0.0.1:8000/view-posts/';
const CREATE_WISHLIST_API_URL = 'http://127.0.0.1:8000/create-wishlist/';
const ADD_WISHLIST_API_URL = 'http://127.0.0.1:8000/add-wishlist/';
const DELETE_WISHLIST_API_URL = 'http://127.0.0.1:8000/delete-wishlist/';
const VIEW_WISHLIST_API_URL = 'http://127.0.0.1:8000/view-wishlist/';
const VIEW_PROFILE_API_URL = 'http://127.0.0.1:8000/view-profile/';
const color = '#10349F';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform',
    {
      duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = useState(false);
  const [postImg, setPostImg] = useState('http://127.0.0.1:8000//media/books/395368427_696500319030425_4487648936682276622_n.jpg');
  const [name, setName] = useState('user');
  const [title, setTitle] = useState('Untilted');
  const [avatar, setAvatar] = useState('http://127.0.0.1:8000//media/books/395368427_696500319030425_4487648936682276622_n.jpg');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [list, setList] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const reCheck = async () => {
      const token = localStorage.getItem('authToken');

      try {
        const response = await axios.get(VIEW_PROFILE_API_URL, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        setUser(response.data)
        console.log('username ', response.data)
      } catch (error) {
        console.error('reCheck: ', error)
      }

    }

    reCheck()
  }, [])

  const handleCreateWishlist = async (post, isLiked) => {
    const token = localStorage.getItem('authToken');
    const action = list.some((item) => item.book_id === post.id) ? 'unlike' : 'like';
    try {
      if (action === 'like') {
        const response = await axios({
          method: 'post',
          url: CREATE_WISHLIST_API_URL,
          data: {
            book: post.id,
          },
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log('Wishlist Created:', response.data);
      }
      handleAddWishlist(post.id, action);
    } catch (err) {
      console.error('Error creating wishlist', err);
      alert('Failed to create wishlist.');
    }
  };

  const handleAddWishlist = async (bookId, action) => {
    const token = localStorage.getItem('authToken');
    try {
      let response;
      if (action === 'unlike') {
        const wishlistItem = list.find((item) => item.book_id === bookId);
        if (!wishlistItem) {
          throw new Error('Wishlist item not found');
        }
        const wishlistItemId = wishlistItem.id;
        response = await axios({
          method: 'delete',
          url: `${DELETE_WISHLIST_API_URL}${wishlistItemId}/`,
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log('Wishlist item deleted:', response.data);
        response = await axios({
          method: 'put',
          url: ADD_WISHLIST_API_URL,
          data: {
            book_id: bookId,
            action: action,
          },
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      } else {
        response = await axios({
          method: 'put',
          url: ADD_WISHLIST_API_URL,
          data: {
            book_id: bookId,
            action: action,
          },
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log('Wishlist updated:', response.data);
      }

      setCount(response.data.wishlist_count);
      setIsLiked(action === 'like');

      // Update the local state
      handleViewWishlist();
      fetchData();
    } catch (err) {
      console.error('Error updating wishlist', err);
      alert('Failed to update wishlist.');
    }
  };

  const handleViewWishlist = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios({
        method: 'get',
        url: VIEW_WISHLIST_API_URL,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Wishlist Data:', response.data);
      setList(response.data);
      fetchData();
    } catch (err) {
      console.error('Error viewing wishlist', err);
      alert('Failed to view wishlist.');
    }
  };

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
    console.log('Selected Item:', item);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const fetchData = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.get(VIEW_POSTS_API_URL, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Viewed post data', response.data);
      setPosts(response.data);
    } catch (err) {
      console.error('Failed to view posted book information', err.response.status);
      if (err.response.status === 403) window.location.reload();
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setTimeout(() => {
        fetchData();
      }, 1000);
    }
    handleViewWishlist();
  }, []);

  return (
    <Container>
      {posts.map((post) => (
        <Card
          key={post.id}
          sx={{
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
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe" src={post.user.profile_img_url}></Avatar>
            }
            action={
              <IconButton aria-label="share" sx={{ color: `${color}` }}></IconButton>
            }
            title={'@' + post.seller}
            // title={'@' + post.user.username}
            subheader={
              <Typography variant="body2" color="textSecondary">
                {formatDistanceToNow(parseISO(post.created_at), { addSuffix: true })}
              </Typography>
            }
          />
          <Box display="flex" justifyContent="center" width="inherit" maxHeight="300px">
            <CardMedia
              component="img"
              image={
                post.book_img_url
                  ? post.book_img_url
                  : 'https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg'
              }
              alt={post.title}
              onClick={() => handleOpenModal(post)}
            />
          </Box>
          <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body3" color="text.primary" fontWeight={300} gutterBottom noWrap>
              {post.genre}
            </Typography>
            <Typography variant="body2" color="text.primary" fontWeight={600} gutterBottom noWrap>
              {post.title}
            </Typography>
            <Typography variant="body3" color="text.primary" fontWeight={300} gutterBottom noWrap>
              {post.description}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <Box sx={{ mt: '10px' }}>{post.wishlist}</Box>
              <Checkbox
                onClick={() => handleCreateWishlist(post, list.some((item) => item.book_id === post.id))}
                icon={<FavoriteBorder style={{ fontSize: '25px', color: '#10439F' }} />}
                checkedIcon={<Favorite style={{ fontSize: '25px', color: '#10439F' }} />}
                checked={list.some((item) => item.book_id === post.id)}
                disableRipple
              />
              <IconButton aria-label="add to cart" sx={{ width: 45, height: 45, mx: 3 }} disableRipple>
                <Button
                  variant="contained"
                  onClick={() => handleOpenModal(post)}
                  sx={{ bgcolor: '#10439F', py: 1, px: 6 }}
                  startIcon={<VisibilityIcon />}
                >
                  View
                </Button>
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}
      <ViewItemModal open={openModal} handleClose={handleCloseModal} user={user.username} selectedItem={selectedItem} />
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
