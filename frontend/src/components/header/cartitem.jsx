// import Grid from '@mui/material/Grid';
// import { Typography, Box, Checkbox, IconButton } from '@mui/material';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';


// export default function CartItem({ cart, handleDelete, ...item }) {

//   return (
//     <Grid container sx={{ mb: 1 }}>
//       <Box
//         key={item.id}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           p: 1,
//           justifyContent: 'space-between',
//           width: '100%',
//           height: '100px',
//         }}
//       >
//         <Checkbox disableRipple color='success' />
//         <Box display='flex' flexDirection='row' alignItems='center'>
//           <img
//             src={item.book_img}
//             alt="Book Image"
//             style={{ width: '73px', height: '73px', border: '1px solid black', borderRadius: 6 }}
//           />
//           <Box
//             sx={{
//               ml: 1,
//               mr: 1,
//               width: 125,
//               height: '100%',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               pr: 1,
//             }}
//           >
//             <Box label='book-name' variant="body1" fontWeight="bold" fontFamily='Poppins'
//               sx={{
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//                 whiteSpace: 'nowrap',
//                 fontSize: '15px',
//                 color: "#2D432E"
//               }} >
//               {item.book_title}
//             </Box>
//             <Box label='author-name' variant="body2" color="textSecondary" fontFamily='Poppins'
//               sx={{
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//                 whiteSpace: 'nowrap',
//                 fontSize: '13px',
//                 color: "#2D432E"
//               }} >
//               Shop: {item.seller}
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               width: 100,
//               height: '100%',
//               fontFamily: 'Poppins',
//               alignItems: 'center',
//               fontSize: '15px'
//             }}
//           >
//             Php {item.price}
//           </Box>
//           <IconButton aria-label="delete" onClick={() => handleDelete(item.id)} disableRipple>
//             <DeleteOutlineIcon sx={{ color: "#2D432E" }} />
//           </IconButton>
//         </Box>
//       </Box>
//       {/* ))} */}
//       {/* </div>) : (
//         <p>Cart is empty.</p>
//       )} */}
//     </Grid>
//   );
// }
// CartItem.propTypes = {
//   cart: PropTypes.array
// };

// CartItem.defaultProps = {
//   cart: []  // Default prop if none is provided
// };



import React, { useState, useEffect } from 'react';
import { Grid, Box, Checkbox, IconButton, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PropTypes from 'prop-types';
import { useCart } from '../shoppingcart/CartContext';

const CartItem = ({ id, book_img, book_title, seller, price, isSelected, removeFromCart }) => {
  const { toggleItemSelection } = useCart();

  // Initialize localSelected based on localStorage or the isSelected prop
  const [localSelected, setLocalSelected] = useState(() => {
    const storedSelection = localStorage.getItem(`selected_${id}`);
    return storedSelection ? JSON.parse(storedSelection) : isSelected;
  });

  // Effect to update localStorage when localSelected changes
  useEffect(() => {
    localStorage.setItem(`selected_${id}`, localSelected);
  }, [localSelected, id]);

  // const handleCheckboxChange = (event) => {
  //   const newSelected = event.target.checked;
  //   toggleItemSelection(id, newSelected);  // Assuming this updates context or parent state
  //   setLocalSelected(newSelected);
  // };

  const handleCheckboxChange = (event) => {
    const newSelected = event.target.checked;
    toggleItemSelection(id, newSelected);
    setLocalSelected(newSelected);
  };

  // const [localSelected, setLocalSelected] = useState(isSelected);

  // useEffect(() => {
  //   localStorage.setItem(`selected_${id}`, localSelected);
  // }, [localSelected, id]);

  // const handleCheckboxChange = (event) => {
  //   const newSelected = event.target.checked;
  //   toggleItemSelection(id, newSelected);
  //   setLocalSelected(newSelected);
  // };
  return (
    <Grid container sx={{ mb: 1 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 1,
          justifyContent: 'space-between',
          width: '90%',
          height: '100px',
        }}
      >
        <Checkbox
          checked={localSelected}
          onChange={handleCheckboxChange}
          color='success'
          disableRipple
        />
        <Box display='flex' flexDirection='row' alignItems='center'>
          <img
            src={book_img}
            alt="Book Image"
            style={{ width: '73px', height: '73px', border: '1px solid black', borderRadius: 6 }}
          />
          <Box
            sx={{
              ml: 1,
              mr: 1,
              width: 100,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pr: 1,
            }}
          >
            <Typography
              sx={{
                width: 60,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontSize: '15px',
                color: "#2D432E",
                fontWeight: 'bold'
              }}
            >
              {book_title}
            </Typography>
            <Typography
              sx={{
                width: 60,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontSize: '13px',
                color: "#2D432E"
              }}
            >
              Shop: {seller}
            </Typography>
          </Box>
          <Typography
            sx={{
              width: 100,
              height: '100%',
              fontFamily: 'Poppins',
              alignItems: 'center',
              fontSize: '15px'
            }}
          >
            Php {price}
          </Typography>
          <IconButton aria-label="delete" onClick={() => removeFromCart(id)} disableRipple>
            <DeleteOutlineIcon sx={{ color: "#2D432E" }} />
          </IconButton>
        </Box>
      </Box>
    </Grid>
  );
};

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  book_img: PropTypes.string.isRequired,
  book_title: PropTypes.string.isRequired,
  seller: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;

// import React from 'react';
// import { Grid, Box, Checkbox, IconButton, Typography } from '@mui/material';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import PropTypes from 'prop-types';
// import { useCart } from '../shoppingcart/CartContext';

// const CartItem = ({ id, book_img, book_title, seller, price }) => {
//   const { toggleItemSelection, removeFromCart } = useCart();

//   const handleCheckboxChange = (event) => {
//     toggleItemSelection(id, event.target.checked);
//   };

//   return (
//     <Grid container sx={{ mb: 1 }}>
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           p: 1,
//           justifyContent: 'space-between',
//           width: '100%',
//           height: '100px',
//         }}
//       >
//         <Checkbox
//           onChange={handleCheckboxChange}
//           color='success'
//           disableRipple
//         />
//         <Box display='flex' flexDirection='row' alignItems='center'>
//           <img
//             src={book_img}
//             alt="Book Image"
//             style={{ width: '73px', height: '73px', border: '1px solid black', borderRadius: 6 }}
//           />
//           <Box sx={{ ml: 1, mr: 1, width: 125, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', pr: 1 }}>
//             <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '15px', color: "#2D432E", fontWeight: 'bold' }}>
//               {book_title}
//             </Typography>
//             <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '13px', color: "#2D432E" }}>
//               Shop: {seller}
//             </Typography>
//           </Box>
//           <Typography sx={{ width: 100, height: '100%', fontFamily: 'Poppins', alignItems: 'center', fontSize: '15px' }}>
//             Php {price}
//           </Typography>
//           <IconButton aria-label="delete" onClick={() => removeFromCart(id)} disableRipple>
//             <DeleteOutlineIcon sx={{ color: "#2D432E" }} />
//           </IconButton>
//         </Box>
//       </Box>
//     </Grid>
//   );
// };

// CartItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   book_img: PropTypes.string.isRequired,
//   book_title: PropTypes.string.isRequired,
//   seller: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

// export default CartItem;



// import React from 'react';
// import { Grid, Box, Checkbox, IconButton, Typography } from '@mui/material';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import { useCart } from '../shoppingcart/CartContext';

// const CartItem = ({ id, book_img, book_title, seller, price }) => {
//   const { toggleItemSelection, removeFromCart } = useCart();

//   const handleCheckboxChange = (event) => {
//     toggleItemSelection(id, event.target.checked);
//   };

//   return (
//     <Grid container sx={{ mb: 1 }}>
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           p: 1,
//           justifyContent: 'space-between',
//           width: '100%',
//           height: '100px',
//         }}
//       >
//         <Checkbox
//           onChange={handleCheckboxChange}
//           color='success'
//           disableRipple
//         />
//         <Box display='flex' flexDirection='row' alignItems='center'>
//           <img
//             src={book_img}
//             alt="Book Image"
//             style={{ width: '73px', height: '73px', border: '1px solid black', borderRadius: 6 }}
//           />
//           <Box sx={{ ml: 1, mr: 1, width: 125, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', pr: 1 }}>
//             <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '15px', color: "#2D432E", fontWeight: 'bold' }}>
//               {book_title}
//             </Typography>
//             <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '13px', color: "#2D432E" }}>
//               Shop: {seller}
//             </Typography>
//           </Box>
//           <Typography sx={{ width: 100, height: '100%', fontFamily: 'Poppins', alignItems: 'center', fontSize: '15px' }}>
//             Php {price}
//           </Typography>
//           <IconButton aria-label="delete" onClick={() => removeFromCart(id)} disableRipple>
//             <DeleteOutlineIcon sx={{ color: "#2D432E" }} />
//           </IconButton>
//         </Box>
//       </Box>
//     </Grid>
//   );
// };

// export default CartItem;




