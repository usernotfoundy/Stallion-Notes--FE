// /*eslint-disable no-unused-vars*/
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// import { Typography, Box, IconButton, Modal, Container, Divider } from '@mui/material';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import Checkbox from '@mui/material/Checkbox';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';
// import ViewItemModal from './viewitemmodal';

// const EXPLORE_API_URL = 'http://127.0.0.1:8000/explore-books/';
// const token = localStorage.getItem('authToken');


// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   height: 192,
//   lineHeight: '60px',
//   width: 220,
//   overflow: 'hidden',
// }));

// export default function ExploreItemBox({ searched }) {
//   const [explore, setExplore] = useState([]);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   // const [searched, setSearched] = useState({ items: [] });

//   // const handleOpenModal = () => {
//   //   setOpenModal(true);
//   // };
//   const handleOpenModal = (item) => {
//     setSelectedItem(item); // Set the selected item
//     setOpenModal(true);
//     console.log('Selected Item:', item); // Log selected item for debugging
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   useEffect(() => {
//     setExplore(searched);
//   },);
//   // console.log(explore && explore.genre && explore.genre.id)

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await axios.get(EXPLORE_API_URL, {
//   //         headers: {
//   //           'Authorization': `Bearer ${token}`,
//   //           'Content-Type': 'multipart/form-data',
//   //         },
//   //       });
//   //       console.log("Viewed explore data", searched);
//   //       setExplore(response.data);  // Store all posts in state

//   //     } catch (err) {
//   //       console.error('Failed to view explore book information', err);
//   //       alert('Failed to view explore book information');
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);

//   console.log('BoxItem', explore);

//   return (
//     <Grid container sx={{ mb: 1, pl: 1 }} >
//       {/* {explore.length > 0 ? (
//         <> */}
//       {explore.map((post) => (
//         <Item key={post.id} elevation={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: "#F5F5F5", m: 1 }}>
//           <Box flexDirection='column'>
//             <Box
//               width='220px'
//               height='115px'
//               borderRadius='5px'
//               style={{
//                 backgroundImage: post.book_img ? `url('${post.book_img}')` : " https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg",
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 display: 'flex',
//                 justifyContent: 'start',
//                 alignItems: 'start',
//               }}
//               sx={{ mt: 1 }}
//               // onClick={handleOpenModal}
//               onClick={() => handleOpenModal(post)}
//             >
//             </Box>
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <Box sx={{ width: '160px', height: '90px', p: '1px', display: 'flex', flexDirection: 'start', }}>
//                 <Box sx={{ mt: 2, pl: 2 }}>
//                   <Typography variant="subtitle2" fontWeight='bold' sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', }}>
//                     {post.title}
//                   </Typography>
//                   <Typography variant="subtitle2">
//                     {post.price}
//                     {/* {post.genre} */}
//                     {/* || {post.genre && post.genre.genre_name} */}
//                   </Typography>
//                   <Typography variant="subtitle2" sx={{}}>
//                     {/* {post.genre && post.genre.genre_name} */}
//                   </Typography>
//                 </Box>
//               </Box>
//               <Checkbox
//                 icon={<FavoriteBorder style={{ fontSize: '30px' }} />}
//                 checkedIcon={<Favorite style={{ fontSize: '30px', color: '#50623A' }} />}
//                 disableRipple
//               />
//             </Box>
//           </Box>
//         </Item>
//       ))}
//       {/* </>) : (
//         <p>No results found</p>
//       )} */}
//       {/* <ViewItemModal open={openModal} handleClose={handleCloseModal} explore={explore} /> */}
//       <ViewItemModal open={openModal} handleClose={handleCloseModal} selectedItem={selectedItem} />
//     </Grid>
//   );
// }

// ExploreItemBox.propTypes = {
//   searched: PropTypes.array
// };

// ExploreItemBox.defaultProps = {
//   searched: []  // Default prop if none is provided
// };


/*eslint-disable no-unused-vars*/
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Typography, Box, IconButton, Modal, Container, Divider, Button } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ViewItemModal from './viewitemmodal';
import SuccessPrompt from '../prompt/successprompt';
import FailedPrompt from '../prompt/failedprompt';


const EXPLORE_API_URL = 'https://stallionnotes.pythonanywhere.com/explore-books/';
const ADD_CART_API_URL = 'http://127.0.0.1:8000/add-cart/';
const VIEW_PROFILE_API_URL = 'http://127.0.0.1:8000/view-profile/';

const color = '#10439F';




const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'left',
  color: theme.palette.text.secondary,
  height: 192,
  width: 220,
  overflow: 'hidden',
}));

const ImageBox = styled(Box)({
  width: '220px',
  height: '115px',
  borderRadius: '2px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '&:hover .overlay': {
    opacity: 1,
  },
  '&:hover .image': {
    filter: 'blur(5px)',
  },
});

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease',
});

export default function ExploreItemBox({ searched }) {
  const [explore, setExplore] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);
  const [msg, setMsg] = useState('Opps! Something went wrong!');
  const [user, setUser] = useState('');
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
  }, [searched]);

  const addToCart = async (id) => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.post(ADD_CART_API_URL, { 'book': id }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('the item has been added to cart', response.data.book)
      if (response.status === 201) {
        setShowSuccess(true);
        setMsg(`An item has been added to the cart  `)
        // setMsg(`Book ID:${response.data.book} has been added to the cart  `)

      }
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      setTimeout(() => {
      }, 3000);
    } catch (error) {
      console.error('Error adding item to cart:', error);
      setShowFailed(true);
      setMsg(`Opps! Error adding to the cart${error}`)
      setTimeout(() => {
        setShowFailed(false);
      }, 3000); // Hide failure prompt after 3 seconds
    }
  }
  console.log('BoxItem', explore);


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



  return (
    <Grid container sx={{ mb: 1, pl: 1 }}>
      {/* {explore.length > 0 ? (
        <> */}
      {explore.map((post) => (
        <Item key={post.id} sx={{ m: 1 }}>
          <Box flexDirection='column'>
            <ImageBox
              style={{
                backgroundImage: post.book_img ? `url('${post.book_img}')` : "https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg",
              }}
              sx={{ mt: 1 }}
            >
              <Box className="image" sx={{ width: '100%', height: '100%', }} />
              <Overlay className="overlay" borderRadius='5px' >
                <Button
                  variant="contained"
                  sx={{ textTransform: 'capitalize', backgroundColor: `${color}`, borderRadius: 4 }}
                  onClick={() => addToCart(post.id)}
                  disabled={user.username === post.seller}
                >
                  Add to Cart
                </Button>
              </Overlay>
            </ImageBox>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box sx={{ width: '160px', height: '90px', p: '1px', display: 'flex', flexDirection: 'start' }}>
                <Box sx={{ ml: 1, mt: 2, minWidth: '50px' }}>
                  <Typography variant="subtitle2" fontWeight='bold' sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle2">
                    Php {post.price}
                    {/* || {post.genre && post.genre.genre_name} */}
                  </Typography>
                  <Typography variant="subtitle2">
                    {/* {post.genre && post.genre.genre_name} */}
                  </Typography>
                </Box>
              </Box>
              <Button
                variant='contained'
                sx={{
                  mr: 1,
                  p: 0,
                  height: 30,
                  width: 10,
                  bgcolor: `${color}`,
                  textTransform: 'capitalize',
                  fontSize: 10,
                }}
                onClick={() => handleOpenModal(post)}>
                See More
              </Button>
            </Box>
          </Box>
          <SuccessPrompt open={showSuccess} handleClose={() => setShowSuccess(false)} msg={msg} />
          {showFailed && <FailedPrompt open={showFailed} handleClose={() => setShowFailed(false)} msg={msg} />}
        </Item>
      ))
      }
      {/* </>) : (
        <p>No results found</p>
      )} */}
      {/* <ViewItemModal open={openModal} handleClose={handleCloseModal} explore={explore} /> */}
      <ViewItemModal open={openModal} handleClose={handleCloseModal} selectedItem={selectedItem} user={user.username} />
    </Grid >
  )
}


ExploreItemBox.propTypes = {
  searched: PropTypes.array
};

ExploreItemBox.defaultProps = {
  searched: []  // Default prop if none is provided
};
