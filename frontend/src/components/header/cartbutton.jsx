import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Cartitem from './cartitem';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Typography, Divider, Box } from '@mui/material';

const CartButton = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{m:.9,fontSize:'25px'}} disableRipple>
        <ShoppingBagOutlinedIcon sx={{fontSize:'30px', color:'#50623A'}} />
      </Button>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        BackdropProps={{ invisible: true }}
        PaperProps={{
          sx: {
            width:'419px',
            borderRadius:3,
            backgroundColor:'#F1F1F1',
            overflow: 'hidden',
          }
        }}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(true)}
          onKeyDown={toggleDrawer(false)}
          style={{ overflow: 'hidden' }}
        >
          <Typography sx={{fontSize:'24.3px', m:1.7, fontFamily:'Poppins', color:"#2D432E", fontWeight:'bold'}}>
            Cart
          </Typography>
          <Divider/>
          <Box sx={{
            width:'100%',
            height:'535px'
          }}>
            <Cartitem/>
          </Box>
          <Divider/>
          <Box display='flex' justifyContent='space-between' marginTop='5px' ml='10px' mr='25px' >
            <Typography sx={{color:"#2D432E"}} fontFamily='Poppins'>
              Total:
            </Typography>
            <Typography sx={{color:"#2D432E"}} fontFamily='Poppins'>
              Php 100.00
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
            <Button variant="contained" sx={{fontFamily:'Poppins', width:'300px', backgroundColor:'#2D432E'}} color='success'>
              Checkout
            </Button>
          </Box>
        </div>
      </Drawer>
    </div>
  );
};

export default CartButton;
