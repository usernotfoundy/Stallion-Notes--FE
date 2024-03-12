import * as React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';


export default function IconLabelButtons() {
  return (
      <Button startIcon={<HomeIcon />} sx={{color:'#50623A', margin:'0px 5px', fontFamily:'Poppins'}}>
        For You
      </Button>
  );
}