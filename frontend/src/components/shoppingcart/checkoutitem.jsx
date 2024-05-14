// import Grid from '@mui/material/Grid';
// import { Typography, Box } from '@mui/material';

// const color = '#10439F'

// export default function CartItemBox() {
//   return (
//     <Grid container sx={{ mb: 1 }}>
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           p: 1,
//           justifyContent: 'space-between',
//           borderRadius: 2,
//           height: 80,
//           width: 1095,
//           boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
//           backgroundColor: 'white',
//           ml: 1.3,
//         }}
//       >
//         <Box display='flex' flexDirection='row' alignItems='center'
//           sx={{
//             // bgcolor: `green`,
//             width: 'stretch',

//           }}>
//           <img
//             src="your_image_url_here"
//             alt="Book Image"
//             style={{ width: '60px', height: '60px', border: '1px solid black', borderRadius: 6, marginLeft: 10 }}
//           />
//           <Box
//             sx={{
//               ml: 3,
//               width: 460,
//               height: '100%',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               pr: 1,
//             }}
//           >
//             <Typography variant="body1" fontWeight="bold" fontFamily='Poppins'
//               sx={{
//                 color: `${color}`,
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//                 whiteSpace: 'nowrap',
//                 pr: '100px',

//               }}
//             >
//               Book Nameaasdasdasdasdasdsadasdsadasdkjahskdjhaskdhakjshdkjsahkdjhsakj
//             </Typography>
//             <Typography variant="body2" color="textSecondary" fontFamily='Poppins'
//               sx={{
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//                 whiteSpace: 'nowrap',
//               }}
//             >
//               Author Name
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               ml: 3,
//               height: '100%',
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               pr: 1,
//             }}
//           >
//             <Box sx={{
//               width: '500px',
//               display: 'inherit',
//               justifyContent: 'space-between',
//               justifyItems: 'center',
//               // bgcolor: `${color}`,
//             }}>
//               <Typography sx={{
//                 display: 'flex',
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//                 whiteSpace: 'nowrap',
//                 color: `${color}`,
//                 fontFamily: 'Poppins',
//                 fontWeight: '600'
//               }}>
//                 Gayry Gayman
//               </Typography>
//               <Typography sx={{
//                 display: 'flex',
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//                 whiteSpace: 'nowrap',
//                 color: `${color}`,
//                 fontFamily: 'Poppins',
//                 fontWeight: '600'
//               }}>
//                 Php: 3248
//               </Typography>
//               <Typography sx={{
//                 display: 'flex',
//                 width: '150px',
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//                 whiteSpace: 'nowrap',
//                 color: `${color}`,
//                 fontFamily: 'Poppins',
//                 fontWeight: '600'
//               }}>
//                 hello,sdfjlkjsdlkajshdkjsahdkjahskjdhfjlk
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Grid >
//   );
// }


import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { useCart } from './CartContext';

const CartItemBox = () => {
  const { cart } = useCart([]);

  const selectedItems = cart.filter(item => item.isSelected);
  console.log('carttt:  ', cart)
  console.log('carttt selected item:  ', selectedItems)


  if (selectedItems.length === 0) {
    return <div>No items selected.</div>;
  }

  return (
    <Grid container sx={{ mb: 1 }}>
      {selectedItems.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 1,
            justifyContent: 'space-between',
            borderRadius: 2,
            height: 80,
            width: '100%',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
            mt: 1,

          }}
        >
          <img
            src={item.book_img}
            alt="Product Image"
            style={{ width: '60px', height: '60px', border: '1px solid black', borderRadius: 6, marginLeft: 10 }}
          />
          <Typography variant="body1" fontWeight="bold"
            sx={{
              ml: 3,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              flexGrow: 1,
            }}
          >
            {item.book_title}
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
            }}
          >
            Php: {item.price}
          </Typography>
        </Box>
      ))}
    </Grid>
  );
}

export default CartItemBox;

// import Grid from '@mui/material/Grid';
// import { Typography, Box } from '@mui/material';

// const color = '#10439F'

// export default function CartItemBox() {
//   return (
//     <Grid container sx={{ mb: 1 }}>
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           p: 1,
//           justifyContent: 'space-between',
//           borderRadius: 2,
//           height: 80,
//           width: 1095,
//           boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
//           backgroundColor: 'white',
//           ml: 1.3,
//         }}
//       >
//         <Box display='flex' flexDirection='row' alignItems='center'
//           sx={{
//             // bgcolor: `green`,
//             width: 'stretch',

//           }}>
//           <img
//             src="your_image_url_here"
//             alt="Book Image"
//             style={{ width: '60px', height: '60px', border: '1px solid black', borderRadius: 6, marginLeft: 10 }}
//           />
//           <Box
//             sx={{
//               ml: 3,
//               width: 460,
//               height: '100%',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               pr: 1,
//             }}
//           >
//             <Typography variant="body1" fontWeight="bold" fontFamily='Poppins'
//               sx={{
//                 color: `${color}`,
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//                 whiteSpace: 'nowrap',
//                 pr: '100px',

//               }}
//             >
//               Book Title
//             </Typography>
//             <Typography variant="body2" color="textSecondary" fontFamily='Poppins'
//               sx={{
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//                 whiteSpace: 'nowrap',
//               }}
//             >
//               Author
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               ml: 3,
//               height: '100%',
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               pr: 1,
//             }}
//           >
//             <Box sx={{
//               width: '500px',
//               display: 'inherit',
//               justifyContent: 'space-between',
//               justifyItems: 'center',
//               // bgcolor: `${color}`,
//             }}>
//               <Typography sx={{
//                 display: 'flex',
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//                 whiteSpace: 'nowrap',
//                 color: `${color}`,
//                 fontFamily: 'Poppins',
//                 fontWeight: '600'
//               }}>
//                 John Doe
//               </Typography>
//               <Typography sx={{
//                 display: 'flex',
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//                 whiteSpace: 'nowrap',
//                 color: `${color}`,
//                 fontFamily: 'Poppins',
//                 fontWeight: '600'
//               }}>
//                 Php: 200.00
//               </Typography>
//               <Typography sx={{
//                 display: 'flex',
//                 width: '150px',
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//                 whiteSpace: 'nowrap',
//                 color: `${color}`,
//                 fontFamily: 'Poppins',
//                 fontWeight: '600'
//               }}>
//                 no. xxxxxxx
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Grid >
//   );
// }


