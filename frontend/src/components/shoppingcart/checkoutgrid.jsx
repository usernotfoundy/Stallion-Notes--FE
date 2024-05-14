// import Typography from '@mui/material/Typography';
// import { Box, Container, Divider, Button } from '@mui/material';
// import CheckoutItem from './checkoutitem';

// const color = '#10439f'

// export default function CheckoutGrid() {
//   return (
//     <>
//       <Box sx={{ maxHeight: '490px', overflow: 'auto', maxWidth: 'auto', position: 'relative', }}>
//         <Typography fontFamily="Poppins" fontWeight='bold' sx={{ color: `${color}`, display: 'flex', justifyContent: 'start', fontSize: '28px' }} gutterBottom>
//           Order Summary
//         </Typography>
//         <Divider sx={{ borderBottom: 1, color: `${color}` }} />
//         <Box
//           // bgcolor={'green'}
//           sx={{ width: 'stretch', pb: 2, mx: 4, display: 'flex', justifyContent: 'space-between', }}>
//           <Typography sx={{ display: 'inherit', mx: '100px' }}>
//             Title
//           </Typography>
//           <Box sx={{
//             width: '500px',
//             display: 'inherit',
//             justifyContent: 'space-between',
//             justifyItems: 'center',
//             // bgcolor: `${color}`,
//           }}>
//             <Typography sx={{ display: 'flex' }}>
//               Seller
//             </Typography>
//             <Typography sx={{ display: 'flex' }}>
//               Price
//             </Typography>
//             <Typography sx={{ display: 'flex' }}>
//               Order Number
//             </Typography>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             mt: 1,
//             mb: 1,
//             height: '338px',
//             width: '1135px',
//           }}
//         >
//           <Box
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               p: 1,
//               justifyContent: 'space-between',
//               borderRadius: 2,
//               height: 80,
//               width: 1095,
//               boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
//               backgroundColor: 'white',
//               ml: 1.3,
//             }}
//           >
//             <Box display='flex' flexDirection='row' alignItems='center'
//               sx={{
//                 // bgcolor: `green`,
//                 width: 'stretch',

//               }}>
//               <img
//                 src="your_image_url_here"
//                 alt="Book Image"
//                 style={{ width: '60px', height: '60px', border: '1px solid black', borderRadius: 6, marginLeft: 10 }}
//               />
//               <Box
//                 sx={{
//                   ml: 3,
//                   width: 460,
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   pr: 1,
//                 }}
//               >
//                 <Typography variant="body1" fontWeight="bold" fontFamily='Poppins'
//                   sx={{
//                     color: `${color}`,
//                     overflow: 'hidden',
//                     textOverflow: 'ellipsis',
//                     whiteSpace: 'nowrap',
//                     pr: '100px',

//                   }}
//                 >
//                   Book Nameaasdasdasdasdasdsadasdsadasdkjahskdjhaskdhakjshdkjsahkdjhsakj
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" fontFamily='Poppins'
//                   sx={{
//                     overflow: 'hidden',
//                     textOverflow: 'ellipsis',
//                     whiteSpace: 'nowrap',
//                   }}
//                 >
//                   Author Name
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   ml: 3,
//                   height: '100%',
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   pr: 1,
//                 }}
//               >
//                 <Box sx={{
//                   width: '500px',
//                   display: 'inherit',
//                   justifyContent: 'space-between',
//                   justifyItems: 'center',
//                   // bgcolor: `${color}`,
//                 }}>
//                   <Typography sx={{
//                     display: 'flex',
//                     overflow: 'hidden',
//                     textOverflow: 'ellipsis',
//                     whiteSpace: 'nowrap',
//                     color: `${color}`,
//                     fontFamily: 'Poppins',
//                     fontWeight: '600'
//                   }}>
//                     Gayry Gayman
//                   </Typography>
//                   <Typography sx={{
//                     display: 'flex',
//                     overflow: 'hidden',
//                     textOverflow: 'ellipsis',
//                     whiteSpace: 'nowrap',
//                     color: `${color}`,
//                     fontFamily: 'Poppins',
//                     fontWeight: '600'
//                   }}>
//                     Php: 3248
//                   </Typography>
//                   <Typography sx={{
//                     display: 'flex',
//                     width: '150px',
//                     overflow: 'hidden',
//                     textOverflow: 'ellipsis',
//                     whiteSpace: 'nowrap',
//                     color: `${color}`,
//                     fontFamily: 'Poppins',
//                     fontWeight: '600'
//                   }}>
//                     hello,sdfjlkjsdlkajshdkjsahdkjahskjdhfjlk
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//         <Divider sx={{ borderBottom: 2, color: `${color}` }} />
//       </Box>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, }}>
//         <Box display='flex' marginTop='5px' sx={{ width: 'stretch' }} >
//           <Typography fontFamily='Poppins' fontSize={20} sx={{ color: `${color}`, ml: '20px' }}>
//             Total order:
//           </Typography>
//           <Typography fontFamily='Poppins' fontSize={20} sx={{ color: `${color}`, ml: '20px' }}>
//             Php 100.00
//           </Typography>
//         </Box>
//         <Button variant="contained" sx={{ bgcolor: `${color}`, fontFamily: 'Poppins', width: '300px', mx: '20px', mt: 0 }}>
//           Place order
//         </Button>
//       </Box>
//     </>
//   );
// }
import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import CheckoutItem from './checkoutitem';
import { useCart } from './CartContext';
import axios from 'axios';
import { useState } from 'react';
import SuccessPrompt from '../prompt/successprompt';
import { useNavigate } from 'react-router-dom';

const color = '#10439f';
const authToken = localStorage.getItem('authToken')

export default function CheckoutGrid() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);
  const [msg, setMsg] = useState('Opps! Something went wrong!');

  const navigate = useNavigate();


  const { cart, removeFromCart } = useCart();
  let fromStored;
  try {
    fromStored = JSON.parse(localStorage.getItem('selectedItems'));
  } catch (e) {
    console.error('Error parsing selectedItems from localStorage:', e);
    fromStored = []; // Default to an empty array if there's an error
  }

  const total = fromStored ? fromStored.reduce((acc, item) => acc + item.price, 0) : 0;

  const handlePrePurchase = async () => {
    fromStored.forEach(async (item) => {
      const payload = {
        purchase_book: item.book_id,
        seller: item.seller_id,
      };
      try {
        const response = await axios.post('http://127.0.0.1:8000/purchase-book/', payload, {
          headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          },
        });
        console.log('Pre-purchased item', item.id, response.data);
        setMsg('Pre-order has been made!\ngo-to profile->order tab and download your order slip')
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false);  // Auto-hide success message after a delay
        }, 5000);
        setTimeout(() => {
          navigate('/profile/reports')
        }, 5000)
        removeFromCart(item.id)
      } catch (error) {
        console.error('Error purchasing item', item.id, error);
      }
    });
  };

  return (
    <>
      <Typography fontFamily="Poppins" fontWeight='bold' sx={{ color, display: 'flex', justifyContent: 'start', fontSize: '28px' }} gutterBottom>
        Order Summary
      </Typography>
      <Box paddingBottom={2}><Divider sx={{ borderBottom: 1, color }} /></Box>
      <Box sx={{ height: '380px', overflow: 'auto', maxWidth: 'auto', position: 'relative' }}>
        {fromStored.length > 0 ? (
          <CheckoutItem
            key={fromStored.id} // Unique key for each child in a list
            {...fromStored}     // Spread the item props
          />
        ) : (
          <Typography sx={{ mx: 'auto', my: '170px', display: 'flex', justifyContent: 'center', textAlign: 'center', }}>
            No items selected.
          </Typography>
        )}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
        <Box display='flex' marginTop='5px' sx={{ width: 'stretch' }}>
          <Typography fontFamily='Poppins' fontSize={20} sx={{ color, ml: '20px' }}>
            Total order:
          </Typography>
          <Typography fontFamily='Poppins' fontSize={20} sx={{ color, ml: '20px' }}>
            Php {total.toFixed(2)}
          </Typography>
        </Box>
        <Button variant="contained" sx={{ bgcolor: `${color}`, fontFamily: 'Poppins', width: '300px', display: 'flex', flexDirection: 'end', mx: '20px', mt: 0, mb: '20px' }} onClick={handlePrePurchase}>
          Place order
        </Button>
      </Box>
      <SuccessPrompt open={showSuccess} handleClose={() => setShowSuccess(false)} msg={msg} />
    </>
  );
}


// import React, { useEffect, useState } from 'react';
// import { Box, Typography, Divider, Button } from '@mui/material';
// import CheckoutItem from './CheckoutItem';
// import { useCart } from './CartContext';
// import axios from 'axios';

// const color = '#10439f';
// const authToken = localStorage.getItem('authToken');

// export default function CheckoutGrid() {
//   const { cart } = useCart();
//   const [selectedItems, setSelectedItems] = useState([]);

//   useEffect(() => {
//     const selected = cart.filter(item => localStorage.getItem(`selected_${item.id}`) === 'true');
//     setSelectedItems(selected);
//   }, [cart]);

//   const handlePrePurchase = async () => {
//     selectedItems.forEach(async (item) => {
//       const payload = {
//         purchase_book: item.book_id,
//         seller: item.seller_id,
//       };
//       try {
//         const response = await axios.post('http://127.0.0.1:8000/purchase-book/', payload, {
//           headers: {
//             'Authorization': `Bearer ${authToken}`,
//             'Content-Type': 'application/json',
//           },
//         });
//         console.log('Pre-purchased item', item.id, response.data);
//       } catch (error) {
//         console.error('Error purchasing item', item.id, error);
//       }
//     });
//   };

//   return (
//     <>
//       <Box sx={{ maxHeight: '490px', overflow: 'auto', maxWidth: 'auto', position: 'relative' }}>
//         <Typography fontFamily="Poppins" fontWeight='bold' sx={{ color, display: 'flex', justifyContent: 'start', fontSize: '28px' }} gutterBottom>
//           Order Summary
//         </Typography>
//         <Divider sx={{ borderBottom: 1, color }} />
//         {selectedItems.length > 0 ? selectedItems.map(item => (
//           <CheckoutItem
//             key={item.id}
//             {...item}
//           />
//         )) : (
//           <Typography sx={{ mx: 'auto', my: '180px', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
//             No items selected.
//           </Typography>
//         )}
//       </Box>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
//         <Box display='flex' marginTop='5px' sx={{ width: 'stretch' }}>
//           <Typography fontFamily='Poppins' fontSize={20} sx={{ color, ml: '20px' }}>
//             Total order:
//           </Typography>
//           <Typography fontFamily='Poppins' fontSize={20} sx={{ color, ml: '20px' }}>
//             Php {selectedItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
//           </Typography>
//         </Box>
//         <Button variant="contained" sx={{ bgcolor: `${color}`, fontFamily: 'Poppins', width: '300px', display: 'flex', flexDirection: 'end', mx: '20px', mt: 0, mb: '20px' }} onClick={handlePrePurchase}>
//           Pre-purchase
//         </Button>
//       </Box>
//     </>
//   );
// }


