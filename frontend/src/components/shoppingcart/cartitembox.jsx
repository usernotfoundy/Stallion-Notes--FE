import Grid from '@mui/material/Grid';
import { Typography , Box, Checkbox, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function CartItemBox() {
  return (
    <Grid container sx={{mb:1}}>
      <Box
        sx={{
          m:'0px 1px',
          display: 'flex',
          alignItems: 'center',
          p: 1,
          justifyContent: 'space-between',
          width: 680,
          borderRadius: 2,
          height: 80,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
        }}
      >
        <Checkbox disableRipple color='success' sx={{ml:1}}/>
        <Box display='flex' flexDirection='row' alignItems='center'>
          <img
            src="your_image_url_here"
            alt="Book Image"
            style={{ width: '60px', height: '60px', border: '1px solid black', borderRadius: 6 }}
          />
          <Box
            sx={{
              ml:3,
              width: 300,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pr:1,
            }}
          >
            <Typography variant="body1" fontWeight="bold" fontFamily='Poppins' 
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',}}>
              Book Nameaasdasdasdasdasdsadasdsad
            </Typography>
            <Typography variant="body2" color="textSecondary" fontFamily='Poppins'
            sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',}}>
              Author Name
            </Typography>
          </Box>
          <Box
            sx={{
              width: 150,
              height: '100%',
              fontFamily:'Poppins'
            }}
          >
            Php 200.00
          </Box>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center' sx={{mr:1}}>
          <IconButton aria-label="delete">
            <DeleteOutlineIcon color='success'  />
          </IconButton>
          <Typography variant="body2" color="textSecondary" fontFamily='Poppins'>
            Delete
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
