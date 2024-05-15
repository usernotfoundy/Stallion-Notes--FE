// import { useState, useEffect } from 'react';
// import { Modal, Box, Typography, IconButton, Divider } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import axios from 'axios';
// import SuccessPrompt from '../prompt/successprompt';

// const ADD_CART_API_URL = 'http://127.0.0.1:8000/add-cart/';
// const token = localStorage.getItem('authToken');

// export default function ViewItemModal({ open, handleClose, selectedItem }) {
//     if (!selectedItem) {
//         return null;
//     }

//     const { title, author, isbn, description, price, book_img, book_img_url, genre } = selectedItem;
//     console.log('this is genre', genre)

//     const addToCart = async (id) => {
//         try {
//             const response = await axios.post(ADD_CART_API_URL, { 'book': id },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         'Content-Type': 'application/json',
//                     },
//                 }
//             );

//             console.log("data", response.data);
//             handleClose();
//             // }
//         } catch (error) {
//             console.error('Error adding item to cart:', error);
//         }
//     };

//     return (
//         <Modal open={open} onClose={handleClose}
//             BackdropProps={{
//                 invisible: true,
//                 sx: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } // Set background color with 50% opacity
//             }} sx={{ border: '0' }}
//         >
//             <Box sx={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 900, height: 500, bgcolor: 'background.paper', boxShadow: 0, p: 4, borderRadius: 2 }}>
//                 <Box
//                     width='400px'
//                     height='auto'
//                     borderRadius='3px'
//                     border='1px solid #50623A'
//                     style={{
//                         backgroundImage: book_img || book_img_url ? `url('${book_img || book_img_url}')` : 'url("https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg")',
//                         backgroundSize: 'contain',
//                         backgroundRepeat: 'no-repeat',
//                         backgroundPosition: 'center'
//                     }}
//                 />
//                 <Box ml={1}>
//                     <Box p={2} sx={{ flex: 1 }}>
//                         <Typography variant='h5' fontWeight='bold' color='#50623A' fontFamily='Poppins'>
//                             Title: {title}
//                         </Typography>
//                         <Divider sx={{ mb: 1, mt: 1 }} />
//                         <Typography fontFamily='Poppins'>
//                             Genre: {genre && genre.genre_name}
//                         </Typography>
//                         <Typography fontFamily='Poppins'>
//                             Author Name: {author}
//                         </Typography>
//                         <Typography fontFamily='Poppins'>
//                             ISBN: {isbn}
//                         </Typography>
//                         <Typography variant='h6' mt={1} color='#50623A' fontWeight='bold'>
//                             About the Book
//                         </Typography>
//                         <Divider sx={{
//                             //  mb: .5,
//                             //  mt: .5
//                         }} />
//                     </Box>
//                     <Box height='220px' width={500} p={2} sx={{ flex: 1, overflowY: 'auto' }}>
//                         <Typography sx={{ mt: 2, textAlign: 'justify', textIndent: '5em', fontSize: '15px' }}>
//                             {description}
//                         </Typography>
//                     </Box>
//                     <Box height={60} width={500} m={1} display='flex' justifyContent='space-between' alignItems='center'>
//                         <Typography fontWeight='bold' fontSize={25} fontFamily='Poppins' color='#50623A'>
//                             Php {price}
//                         </Typography>
//                         <IconButton aria-label="add to cart" sx={{ width: 45, height: 45 }} onClick={() => addToCart(selectedItem.id)} disableRipple>
//                             <ShoppingCartIcon sx={{ fontSize: 40, color: '#50623A' }} />
//                         </IconButton>
//                     </Box>
//                 </Box>
//             </Box>
//         </Modal>
//     );
// }



// import { useState, useEffect } from 'react';
// import { Modal, Box, Typography, IconButton, Divider } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import axios from 'axios';
// import SuccessPrompt from '../prompt/successprompt';

// const ADD_CART_API_URL = 'http://127.0.0.1:8000/add-cart/';
// const token = localStorage.getItem('authToken');

// export default function ViewItemModal({ open, handleClose, selectedItem }) {
//     const [showSuccess, setShowSuccess] = useState(false);

//     if (!selectedItem) {
//         return null;
//     }

//     const { id, title, author, isbn, description, price, book_img, book_img_url, genre } = selectedItem;

//     const addToCart = async () => {
//         try {
//             const response = await axios.post(ADD_CART_API_URL, { 'book': id },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         'Content-Type': 'application/json',
//                     },
//                 }
//             );
//             console.log("Response status:", response.status); // Debug log for response status
//             if (response.status === 201) {
//                 console.log("Item added to cart successfully"); // Success log
//                 setShowSuccess(true);
//                 setTimeout(() => { // Automatically close the success prompt after some time (e.g., 3000 ms)
//                     handleClose();
//                     setShowSuccess(false);
//                 }, 3000);
//             }
//         } catch (error) {
//             console.error('Error adding item to cart:', error);
//         }
//     };

//     return (
//         <>
//             <Modal open={open} onClose={() => { handleClose(); setShowSuccess(false); }}
//                 BackdropProps={{
//                     invisible: true,
//                     sx: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } // Set background color with 50% opacity
//                 }} sx={{ border: '0' }}
//             >
//                 <Box sx={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 900, height: 500, bgcolor: 'background.paper', boxShadow: 0, p: 4, borderRadius: 2 }}>
//                     <Box
//                         width='400px'
//                         height='auto'
//                         borderRadius='3px'
//                         border='1px solid #50623A'
//                         style={{
//                             backgroundImage: book_img || book_img_url ? `url('${book_img || book_img_url}')` : 'url("https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg")',
//                             backgroundSize: 'contain',
//                             backgroundRepeat: 'no-repeat',
//                             backgroundPosition: 'center'
//                         }}
//                     />
//                     <Box ml={1}>
//                         <Box p={2} sx={{ flex: 1 }}>
//                             <Typography variant='h5' fontWeight='bold' color='#50623A' fontFamily='Poppins'>
//                                 Title: {title}
//                             </Typography>
//                             <Divider sx={{ mb: 1, mt: 1 }} />
//                             <Typography fontFamily='Poppins'>
//                                 Genre: {genre && genre.genre_name}
//                             </Typography>
//                             <Typography fontFamily='Poppins'>
//                                 Author Name: {author}
//                             </Typography>
//                             <Typography fontFamily='Poppins'>
//                                 ISBN: {isbn}
//                             </Typography>
//                             <Typography variant='h6' mt={1} color='#50623A' fontWeight='bold'>
//                                 About the Book
//                             </Typography>
//                             <Divider />
//                         </Box>
//                         <Box height='220px' width={500} p={2} sx={{ flex: 1, overflowY: 'auto' }}>
//                             <Typography sx={{ mt: 2, textAlign: 'justify', textIndent: '5em', fontSize: '15px' }}>
//                                 {description}
//                             </Typography>
//                         </Box>
//                         <Box height={60} width={500} m={1} display='flex' justifyContent='space-between' alignItems='center'>
//                             <Typography fontWeight='bold' fontSize={25} fontFamily='Poppins' color='#50623A'>
//                                 Php {price}
//                             </Typography>
//                             <IconButton aria-label="add to cart" sx={{ width: 45, height: 45 }} onClick={addToCart} disableRipple>
//                                 <ShoppingCartIcon sx={{ fontSize: 40, color: '#50623A' }} />
//                             </IconButton>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Modal>
//             {/* {showSuccess && <SuccessPrompt open={showSuccess} />} */}
//             {/* Temporary check to display the success prompt */}
//             <SuccessPrompt open={showSuccess} handleClose={() => setShowSuccess(false)} />
//         </>
//     );
// }

// 
/*eslint-disable */
import React, { useState } from 'react';
import { Modal, Box, Typography, IconButton, Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';
import SuccessPrompt from '../prompt/successprompt';  // Ensure correct path
import ErrorPrompt from '../prompt/errorprompt';
import FailedPrompt from '../prompt/failedprompt';
import './viewitemmodal.css';

const ADD_CART_API_URL = 'https://stallionnotes.pythonanywhere.com/add-cart/';
const token = localStorage.getItem('authToken');

export default function ViewItemModal({ open, handleClose, selectedItem }) {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailed, setShowFailed] = useState(false);
    const [showError, setShowError] = useState(false);
    const [msg, setMsg] = useState('Opps! Something went wrong!');
    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => {
        setIsZoomed(true);
    };

    const handleMouseLeave = () => {
        setIsZoomed(false);
    };

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100 + '%';
        const y = ((e.clientY - top) / height) * 100 + '%';
        setMousePosition({ x, y });
    };

    if (!selectedItem) {
        return null;
    }
    const { id, title, author, isbn, description, price, book_img, book_img_url, genre } = selectedItem;

    const handleError = () => {
        setShowError(true);
        setShowFailed(true)
    };


    const addToCart = async () => {
        try {
            const response = await axios.post(ADD_CART_API_URL, { 'book': id }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                setShowSuccess(true);
                setMsg(`${title} has been added to the cart  `)
                handleClose()

                setTimeout(() => {
                    setShowSuccess(false);  // Auto-hide success message after a delay
                }, 3000);
                setTimeout(() => {
                    // setShowSuccess(false);  // Auto-hide success message after a delay
                    handleClose()
                }, 3000);
            }
        } catch (error) {
            console.error('Error adding item to cart:', error);
            setShowFailed(true);
            setMsg(`Opps! Error adding to the cart${error}`)
            setTimeout(() => {
                setShowFailed(false);
            }, 3000); // Hide failure prompt after 3 seconds
        }
    };

    return (
        <>
            <Modal open={open} onClose={() => { handleClose(); setShowSuccess(false); }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 900, height: 500, bgcolor: 'background.paper', boxShadow: 0, p: 4, borderRadius: 2 }}>
                    <Box
                        width="400px"
                        height="500px"
                        borderRadius="3px"
                        border="3px solid #50623A"
                        className="zoom"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        style={{
                            '--mouse-x': mousePosition.x,
                            '--mouse-y': mousePosition.y,
                        }}
                    ><img
                            src={book_img || book_img_url ? `${book_img || book_img_url}` : 'https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg'}
                            // alt="Harry Potter Book Cover"
                            className={`${isZoomed ? 'zoomed follow-cursor' : ''}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                        /></Box>
                    {/* style={{
                            backgroundImage: book_img || book_img_url ? `url('${book_img || book_img_url}')` : 'url("https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg")',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }} */}
                    <Box ml={1}>
                        <Box p={2} sx={{ flex: 1 }}>
                            <Typography variant='h5' fontWeight='bold' color='#50623A' fontFamily='Poppins'>
                                Title: {title}
                            </Typography>
                            <Divider sx={{ mb: 1, mt: 1 }} />
                            <Typography fontFamily='Poppins'>
                                Genre: {genre && genre.genre_name}
                            </Typography>
                            <Typography fontFamily='Poppins'>
                                Author Name: {author}
                            </Typography>
                            <Typography fontFamily='Poppins'>
                                ISBN: {isbn}
                            </Typography>
                            <Typography variant='h6' mt={1} color='#50623A' fontWeight='bold'>
                                About the Book
                            </Typography>
                            <Divider sx={{
                                //  mb: .5,
                                //  mt: .5
                            }} />
                        </Box>
                        <Box height='220px' width={500} p={2} sx={{ flex: 1, overflowY: 'auto' }}>
                            <Typography sx={{ mt: 2, textAlign: 'justify', textIndent: '5em', fontSize: '15px' }}>
                                {description}
                            </Typography>
                        </Box>
                        <Box height={60} width={500} m={1} display='flex' justifyContent='space-between' alignItems='center'>
                            <Typography fontWeight='bold' fontSize={25} fontFamily='Poppins' color='#50623A'>
                                Php {price}
                            </Typography>
                            <IconButton aria-label="add to cart" sx={{ width: 45, height: 45, '&:hover ': { scale: '95%' } }} onClick={() => addToCart(selectedItem.id)} disableRipple>
                                <ShoppingCartIcon sx={{ fontSize: 40, color: '#50623A' }} />
                            </IconButton>
                            {/* <button onClick={handleError}>Trigger Action</button> */}
                            {/* <FailedPrompt open={showFailed} handleClose={() => setShowFailed(false)} />
                            <SuccessPrompt open={showSuccess} handleClose={() => setShowSuccess(false)} /> */}
                        </Box>
                    </Box>
                </Box>

            </Modal>
            <SuccessPrompt open={showSuccess} handleClose={() => setShowSuccess(false)} msg={msg} />
            {showFailed && <FailedPrompt open={showFailed} handleClose={() => setShowFailed(false)} />}
        </>
    );
}