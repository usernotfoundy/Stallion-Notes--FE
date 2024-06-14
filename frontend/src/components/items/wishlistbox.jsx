/*eslint-disable*/
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography, Box, Checkbox, Button } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SuccessPrompt from '../prompt/successprompt';  // Import the SuccessPrompt component
import FailedPrompt from '../prompt/failedprompt';  // Import the FailedPrompt component
import ViewItemModal from '../explorepage/viewitemmodal';  // Import the ViewItemModal component

const ADD_CART_API_URL = 'http://127.0.0.1:8000/add-cart/';

const VIEW_WISHLIST_API_URL = 'http://127.0.0.1:8000/view-wishlist/';
const CREATE_WISHLIST_API_URL = 'http://127.0.0.1:8000/create-wishlist/';
const ADD_WISHLIST_API_URL = 'http://127.0.0.1:8000/add-wishlist/';
const DELETE_WISHLIST_API_URL = 'http://127.0.0.1:8000/delete-wishlist/';
const token = localStorage.getItem('authToken');
const color = '#10439F';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     height: 300,
//     lineHeight: '60px',
//     width: 250,
//     overflow: 'hidden',
// }));
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

export default function WishlistBox() {
    const [wishlist, setWishlist] = useState([]);
    const [list, setList] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailed, setShowFailed] = useState(false);
    const [msg, setMsg] = useState('Oops! Something went wrong!');


    useEffect(() => {
        handleViewWishlist();
    }, []);

    const handleViewWishlist = async () => {
        try {
            const response = await axios.get(VIEW_WISHLIST_API_URL, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log('Wishlist Data:', response.data);
            setList(response.data);
            setWishlist(response.data);
        } catch (err) {
            console.error('Error viewing wishlist', err);
            alert('Failed to view wishlist.');
        }
    };

    const handleCreateWishlist = async (item, isLiked) => {
        const action = list.some((wishItem) => wishItem.book_id === item.book_id) ? 'unlike' : 'like';
        try {
            if (action === 'like') {
                const response = await axios.post(CREATE_WISHLIST_API_URL, {
                    book: item.book_id,
                }, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                console.log('Wishlist Created:', response.data);
            }
            handleAddWishlist(item.book_id, action);
        } catch (err) {
            console.error('Error creating wishlist', err);
            alert('Failed to create wishlist.');
        }
    };

    const handleAddWishlist = async (bookId, action) => {
        try {
            if (action === 'unlike') {
                const wishlistItem = list.find((item) => item.book_id === bookId);
                if (!wishlistItem) {
                    throw new Error('Wishlist item not found');
                }
                const wishlistItemId = wishlistItem.id;
                await axios.delete(`${DELETE_WISHLIST_API_URL}${wishlistItemId}/`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                console.log('Wishlist item deleted');
            }

            await axios.put(ADD_WISHLIST_API_URL, {
                book_id: bookId,
                action: action,
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log('Wishlist updated');

            // Update the local state
            handleViewWishlist();
        } catch (err) {
            console.error('Error updating wishlist', err);
            alert('Failed to update wishlist.');
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

    const addToCart = async (id) => {
        try {
            const response = await axios.post(ADD_CART_API_URL, { 'book': id }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log('The item has been added to cart', response.data.book);
            if (response.status === 201) {
                setShowSuccess(true);
                setMsg(`An item has been added to the cart.`);
            }
            setTimeout(() => {
                setShowSuccess(false);
                setShowFailed(false);
            }, 3000);
        } catch (error) {
            console.error('Error adding item to cart:', error);
            setShowFailed(true);
            setMsg(`Oops! Error adding to the cart: ${error}`);
            setTimeout(() => {
                setShowFailed(false);
            }, 3000);
        }
    };

    // return (
    //     <Grid container sx={{ mb: 1, pl: 1 }} spacing={2}>
    //         {wishlist.map((item) => (
    //             <Grid item key={item.book_id}>
    //                 <Item elevation={1} sx={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', p: 0.3 }}>
    //                     <Box flexDirection='column'>
    //                         <Box sx={{ width: '250px', height: '100%', p: '1px', display: 'flex', flexDirection: 'column' }}>
    //                             <Box
    //                                 alt="Book Image"
    //                                 style={{
    //                                     backgroundImage: `url(${item.book_img_url})`,
    //                                     width: '250px',
    //                                     height: '200px',
    //                                     borderRadius: 6,
    //                                     backgroundSize: 'cover',
    //                                     backgroundPosition: 'center',
    //                                     display: 'flex'
    //                                 }}
    //                             />
    //                             <Box>
    //                                 <Typography sx={{ fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
    //                                     <strong>Title: </strong>{item.title}
    //                                 </Typography>
    //                                 <Typography sx={{ fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
    //                                     <strong>Description: </strong>{item.description}
    //                                 </Typography>
    //                                 <Typography sx={{ fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
    //                                     <strong>Price: </strong>P{item.price}
    //                                 </Typography>
    //                             </Box>
    //                             <Checkbox
    //                                 sx={{ position: 'absolute' }}
    //                                 icon={<FavoriteBorder style={{ fontSize: '40px', color: `${color}` }} />}
    //                                 checkedIcon={<Favorite style={{ fontSize: '40px', color: `red` }} />}
    //                                 disableRipple
    //                                 checked={list.some((i) => i.book_id === item.book_id)}
    //                                 onClick={() => handleCreateWishlist(item, list.some((i) => i.book_id === item.book_id))}
    //                             />
    //                         </Box>
    //                     </Box>
    //                 </Item>
    //             </Grid>
    //         ))}
    //     </Grid>
    // );


    return (

        <Grid container sx={{ mb: 1, pl: 1 }}>
            {wishlist.map((post) => (
                <Item key={post.id} sx={{ m: 1 }}>
                    <Box flexDirection='column'>
                        <ImageBox
                            style={{
                                backgroundImage: post.book_img_url ? `url('${post.book_img_url}')` : "https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg",
                            }}
                            sx={{ mt: 1 }}
                        >
                            <Box className="image" sx={{ width: '100%', height: '100%' }} />
                            <Overlay className="overlay" borderRadius='5px'>
                                <Button
                                    variant="contained"
                                    sx={{ textTransform: 'capitalize', backgroundColor: `${color}`, borderRadius: 4 }}
                                    onClick={() => addToCart(post.book_id)}
                                >
                                    Add to Cart
                                </Button>
                            </Overlay>
                        </ImageBox>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ width: '110px', height: '90px', p: '1px', display: 'flex', flexDirection: 'start' }}>
                                <Box sx={{ ml: 1, mt: 2, width: '150px' }}>
                                    <Typography variant="subtitle2" fontWeight='bold' sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {post.title}
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        Php {post.price}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box marginTop={1}>
                                <Checkbox
                                    // sx={{ position: 'absolute' }}
                                    icon={<FavoriteBorder style={{ fontSize: '24px', color: `${color}` }} />}
                                    checkedIcon={<Favorite style={{ fontSize: '24px', color: `${color}` }} />}
                                    disableRipple
                                    checked={list.some((i) => i.book_id === post.book_id)}
                                    onClick={() => handleCreateWishlist(post, list.some((i) => i.book_id === post.book_id))}
                                />
                                <Button
                                    variant='contained'
                                    sx={{
                                        m: 0,
                                        p: 0,
                                        height: 30,
                                        width: 10,
                                        bgcolor: `${color}`,
                                        textTransform: 'capitalize',
                                        fontSize: 10,
                                    }}
                                    onClick={() => handleOpenModal(post)}
                                >
                                    See More
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <SuccessPrompt open={showSuccess} handleClose={() => setShowSuccess(false)} msg={msg} />
                    {showFailed && <FailedPrompt open={showFailed} handleClose={() => setShowFailed(false)} msg={msg} />}
                </Item>
            ))}
            <ViewItemModal open={openModal} handleClose={handleCloseModal} selectedItem={selectedItem} />
        </Grid>
    );
}
