import * as React from 'react';
import Button from '@mui/material/Button';
import ExploreIcon from '@mui/icons-material/Explore';

export default function IconLabelButtons() {
  return (
    <Button startIcon={<ExploreIcon/>} sx={{ color: '#50623A', margin: '0px 5px' }}>
      Explore
    </Button>
  );
}