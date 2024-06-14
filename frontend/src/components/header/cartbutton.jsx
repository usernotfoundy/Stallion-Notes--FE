// import { useState, useEffect } from 'react';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import Cartitem from './cartitem';
// import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
// import { Typography, Divider, Box } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const token = localStorage.getItem('authToken');
// const VIEW_CART_API_URL = 'http://127.0.0.1:8000/view-cart/'
// const DELETE_CART_API_URL = 'http://127.0.0.1:8000/delete-cart/';


// const CartButton = (color) => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const navigate = useNavigate()

//   // useEffect(() => {
//   //   try {
//   //     const response = axios.get(VIEW_CART_API_URL, {
//   //       headers: {
//   //         'Authorization': `Bearer ${token}`,
//   //         'Content-Type': 'application/json',
//   //       },
//   //     });
//   //     console.log("Viewed Cart data", response);
//   //   } catch (err) {
//   //     console.error('Failed to fetch cart', err);
//   //   }
//   // }, []);

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }

//     setIsDrawerOpen(open);
//   };

//   const [cart, setCart] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(VIEW_CART_API_URL, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//           // 'Content-Type': 'application/json',
//         },
//       });
//       console.log("Viewed Cart data", response.data);
//       // const mycart = response.data;
//       setCart(response.data);

//     } catch (err) {
//       console.error('Failed to fetch cart', err);
//     }
//   }
//   useEffect(() => {
//     if (isDrawerOpen) {
//       fetchData();
//     }
//     // fetchData();
//   }, [isDrawerOpen]);
//   console.log("cart state: ", cart);

//   const handleDelete = async (bookId) => {
//     try {
//       const response = await axios.delete(`${DELETE_CART_API_URL}${bookId}/`, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json', // Specify JSON content type
//         },
//         // data: { book: bookId }, // Pass bookId in the request body
//       });

//       // Check if the deletion was successful (assuming backend returns a success response)
//       // if (response.status === 204) {
//       // Update cart state to remove the deleted item
//       setCart(currentCart => currentCart.filter(item => item.id !== bookId));
//       console.log(`Book with ID ${bookId} deleted successfully.`);
//       // } else {
//       //   console.error('Failed to delete book:', response.statusText);
//       // }
//     } catch (error) {
//       console.error('Error deleting book:', error);
//     }
//   };

//   // Calculate total sum of prices in cart
//   const calculateTotal = () => {
//     return cart.reduce((sum, item) => sum + item.price, 0);
//   };

//   const total = calculateTotal();

//   const handleCheckout = (e) => {
//     e.preventDefault();

//     navigate('/checkout')
//   }

//   return (
//     <div >
//       <Button onClick={toggleDrawer(true)} sx={{ m: .9, fontSize: '25px' }} disableRipple>
//         <ShoppingBagOutlinedIcon sx={{ fontSize: '30px', color: '#10439F' }} />
//       </Button>
//       <Drawer
//         anchor="right"
//         open={isDrawerOpen}
//         onClose={toggleDrawer(false)}
//         BackdropProps={{ invisible: true, bgcolor: 'rgba(0, 0, 0, 0.5)' }}
//         PaperProps={{
//           sx: {
//             width: '419px',
//             borderRadius: 3,
//             backgroundColor: '#F1F1F1',
//             overflow: 'hidden',
//           }
//         }}
//       >
//         <div
//           role="presentation"
//           onClick={toggleDrawer(true)}
//           onKeyDown={toggleDrawer(false)}
//           style={{ overflow: 'hidden' }}
//         >
//           <Typography sx={{ fontSize: '24.3px', m: 1.7, fontFamily: 'Poppins', color: "#2D432E", fontWeight: 'bold' }}>
//             Cart
//           </Typography>
//           <Divider />
//           <Box sx={{
//             width: '100%',
//             height: '535px'
//           }}>
//             {cart.map((item) => (
//               <Cartitem handleDelete={handleDelete} cart={cart} {...item} />
//             ))}
//           </Box>
//           <Divider />
//           <Box display='flex' justifyContent='space-between' marginTop='5px' ml='10px' mr='25px' >
//             <Typography sx={{ color: "#2D432E" }} fontFamily='Poppins'>
//               Total:
//             </Typography>
//             <Typography sx={{ color: "#2D432E" }} fontFamily='Poppins'>
//               Php {total}
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
//             <Button variant="contained" onClick={handleCheckout} sx={{ fontFamily: 'Poppins', width: '300px', backgroundColor: `${color}`, color: 'success' }} >
//               Checkout
//             </Button>
//           </Box>
//         </div>
//       </Drawer>
//     </div>
//   );
// };
// export default CartButton

import React, { useState, useEffect } from 'react';
import { Button, Drawer, Typography, Divider, Box } from '@mui/material';
import CartItem from './cartitem';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../shoppingcart/CartContext';
import VerificationModal from "../../pages/verificationmodal";

const VIEW_PROFILE_API_URL = 'http://127.0.0.1:8000/view-profile/';

const CartButton = ({ color }) => {
  const { cart, setCart, removeFromCart } = useCart();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [user, setUser] = useState([]);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('Your acount is under review.')
  const [note, setNote] = useState("Your account has been submitted and will be reviewed by the admin. This may take up to 1-3 hours. You'll be notified once the review is complete.")
  const [status, setStatus] = useState('error')

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const token = localStorage.getItem('authToken');
  //     try {
  //       const response = await axios.get('http://127.0.0.1:8000/view-cart/', {
  //         headers: { 'Authorization': `Bearer ${token}` }
  //       });
  //       setCart(response.data.map(item => ({ ...item, isSelected: false })));
  //     } catch (err) {
  //       console.error('Failed to fetch cart', err);
  //     }
  //   };

  //   if (isDrawerOpen) fetchData();
  // }, [isDrawerOpen, setCart]);
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('authToken');
      try {
        const response = await axios.get('http://127.0.0.1:8000/view-cart/', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        // Initialize isSelected based on the localStorage or default state
        const currentSelectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
        const selectedIds = new Set(currentSelectedItems.map(item => item.id));
        setCart(response.data.map(item => ({
          ...item,
          isSelected: selectedIds.has(item.id),
        })));
      } catch (err) {
        console.error('Failed to fetch cart', err);
      }
    };

    if (isDrawerOpen) fetchData();
  }, [isDrawerOpen, setCart]);


  // const handleCheckout = () => {
  //   const selectedItems = cart.filter(item => item.isSelected);
  //   localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
  //   navigate('/checkout');
  // };
  const handleCheckout = () => {
    const selectedItems = cart.filter(item => item.isSelected);
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    // Ensure that `selectedItems` are fetched and properly used in CheckoutGrid
    if (user.is_verified)
      navigate('/checkout');
    else if (!user.is_verified && !user.is_flag) {
      setMsg('Your acount is under review.')
      setNote("Your account has been submitted and will be reviewed by the admin. This may take up to 1-3 hours. You'll be notified once the review is complete.")
      setStatus('unverified')
      handleOpen()
    } else if (user.is_flag) {
      setMsg('Verification Unsuccessful.')
      setNote("We regret to inform you that your account verification was not successful. This may be due to incorrect information provided or an inability to verify your identity at this time. \n\nYou can visit our verification hub for further assistance.")
      setStatus('flagged')
      handleOpen()
    }
  };

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


  const total = cart.reduce((sum, item) => item.isSelected ? sum + item.price : sum, 0);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{ m: .9, fontSize: '25px' }} disableRipple>
        <ShoppingBagOutlinedIcon sx={{ fontSize: '30px', color: '#10439F' }} />
      </Button>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        BackdropProps={{ invisible: true }}
        PaperProps={{
          sx: {
            width: 419,
            borderRadius: 3,
            backgroundColor: '#F1F1F1',
            overflow: 'hidden',
          }
        }}
      >
        <div role="presentation">
          <Typography sx={{ fontSize: '24.3px', m: 1.7, fontFamily: 'Poppins', color: "#2D432E", fontWeight: 'bold' }}>
            Cart
          </Typography>
          <Divider />
          <Box sx={{ width: '100%', height: '535px', overflowY: 'auto' }}>
            {cart.map(item => (
              <CartItem key={item.id} {...item} removeFromCart={removeFromCart} />
            ))}
          </Box>
          <Divider />
          <Box display='flex' justifyContent='space-between' marginTop='5px' ml='10px' mr='25px'>
            <Typography sx={{ color: "#2D432E" }} fontFamily='Poppins'>
              Total:
            </Typography>
            <Typography sx={{ color: "#2D432E" }} fontFamily='Poppins'>
              Php {total}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
            <Button variant="contained" onClick={handleCheckout} sx={{ fontFamily: 'Poppins', width: '300px', backgroundColor: `${color}`, color: 'success' }}>
              Checkout
            </Button>
          </Box>
        </div>
        <VerificationModal open={open} handleClose={handleClose} msg={msg} note={note} status={status} />
      </Drawer>
    </div>
  );
};

export default CartButton;



// import React, { useState, useEffect } from 'react';
// import { Button, Drawer, Typography, Divider, Box } from '@mui/material';
// import CartItem from './cartitem';
// import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../shoppingcart/CartContext';

// const CartButton = ({ color }) => {
//   const { cart, setCart, toggleItemSelection } = useCart();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       const token = localStorage.getItem('authToken');
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/view-cart/', {
//           headers: { 'Authorization': `Bearer ${token}` }
//         });
//         const fetchedItems = response.data.map(apiItem => {
//           const existingItem = cart.find(item => item.id === apiItem.id);
//           return existingItem ? { ...apiItem, isSelected: existingItem.isSelected } : apiItem;
//         });
//         setCart(fetchedItems);
//       } catch (err) {
//         console.error('Failed to fetch cart', err);
//       }
//     };

//     if (isDrawerOpen) fetchData();
//   }, [isDrawerOpen, setCart, cart]);

//   const handleCheckout = () => {
//     const selectedItems = cart.filter(item => item.isSelected);
//     localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
//     navigate('/checkout');
//   };

//   const total = cart.reduce((sum, item) => item.isSelected ? sum + item.price : sum, 0);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setIsDrawerOpen(open);
//   };

//   return (
//     <div>
//       <Button onClick={toggleDrawer(true)} sx={{ m: .9, fontSize: '25px' }} disableRipple>
//         <ShoppingBagOutlinedIcon sx={{ fontSize: '30px', color: '#10439F' }} />
//       </Button>
//       <Drawer
//         anchor="right"
//         open={isDrawerOpen}
//         onClose={toggleDrawer(false)}
//         BackdropProps={{ invisible: true }}
//         PaperProps={{
//           sx: {
//             width: 419,
//             borderRadius: 3,
//             backgroundColor: '#F1F1F1',
//             overflow: 'hidden',
//           }
//         }}
//       >
//         <div role="presentation">
//           <Typography sx={{ fontSize: '24.3px', m: 1.7, fontFamily: 'Poppins', color: "#2D432E", fontWeight: 'bold' }}>
//             Cart
//           </Typography>
//           <Divider />
//           <Box sx={{ width: '100%', height: '535px', overflowY: 'auto' }}>
//             {cart.map(item => (
//               <CartItem key={item.id} {...item} />
//             ))}
//           </Box>
//           <Divider />
//           <Box display='flex' justifyContent='space-between' marginTop='5px' ml='10px' mr='25px'>
//             <Typography sx={{ color: "#2D432E" }} fontFamily='Poppins'>
//               Total:
//             </Typography>
//             <Typography sx={{ color: "#2D432E" }} fontFamily='Poppins'>
//               Php {total}
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
//             <Button variant="contained" onClick={handleCheckout} sx={{ fontFamily: 'Poppins', width: '300px', backgroundColor: `${color}`, color: 'success' }}>
//               Checkout
//             </Button>
//           </Box>
//         </div>
//       </Drawer>
//     </div>
//   );
// };

// export default CartButton;
