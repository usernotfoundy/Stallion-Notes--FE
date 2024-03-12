import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Divider, Box, Chip, Grid } from '@mui/material';
import Itembox from '../items/itembox';

export default function BookmanagementTab() {
  const [chipVariant, setChipVariant] = React.useState('outlined'); // Initial variant

  const handleClick = () => {
    setChipVariant(chipVariant === 'outlined' ? 'filled' : 'outlined');
  };

  return (
    <Box sx={{ maxHeight: '464px', overflow: 'auto' }}>
      <Box display='flex' justifyContent='space-between'>
        <Typography variant="h6" fontFamily="Poppins" sx={{ display: 'flex', justifyContent: 'start', fontSize: '28px' }} gutterBottom>
          Book Management
        </Typography>
      </Box>
      <Divider sx={{ mt: 0.7, mb: 1 }} />
      <Box maxWidth='auto' height={40} mb='10px' sx={{ display: 'flex', justifyItems: 'start', alignItems: 'center', pl: 5, mb: 1 }}>
        <Chip label="Clickable Chip" variant={chipVariant} onClick={handleClick} />
      </Box>
      <Grid container spacing={2}>
        {[...Array(8)].map((_, index) => (
          <Grid key={index} item xs={3}>
            <Itembox />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
