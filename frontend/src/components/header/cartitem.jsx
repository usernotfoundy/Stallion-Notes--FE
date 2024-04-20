import Grid from '@mui/material/Grid';
import { Typography , Box, Checkbox, IconButton} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function CartItem() {
  return (
    <Grid container sx={{mb:1}}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 1,
          justifyContent: 'space-between',
          width: '100%',
          height: '100px',
        }}
      >
        <Checkbox disableRipple color='success' />
        <Box display='flex' flexDirection='row' alignItems='center'>
          <img
            src="your_image_url_here"
            alt="Book Image"
            style={{ width: '73px', height: '73px', border: '1px solid black', borderRadius: 6 }}
          />
          <Box
            sx={{
              ml: 1,
              mr: 1,
              width: 125,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pr: 1,
            }}
          >
            <Box label='book-name' variant="body1" fontWeight="bold" fontFamily='Poppins'
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontSize:'15px',
              color:"#2D432E"
              }} >
              Book of Fire
            </Box>
            <Box label='author-name' variant="body2" color="textSecondary" fontFamily='Poppins'
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontSize:'13px',
              color:"#2D432E"
              }} >
              Author Name
            </Box>
          </Box>
          <Box
            sx={{
              width: 100,
              height: '100%',
              fontFamily: 'Poppins',
              alignItems: 'center',
              fontSize:'15px'
            }}
          >
            Php 2,000.00
          </Box>
          <IconButton aria-label="delete" disableRipple>
            <DeleteOutlineIcon sx={{color:"#2D432E"}}  />
          </IconButton>
        </Box>
      </Box>
    </Grid>
  );
}
