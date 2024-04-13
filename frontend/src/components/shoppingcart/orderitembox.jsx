import Grid from '@mui/material/Grid';
import { Typography , Box} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function CartItemBox() {
  return (
    <Grid container sx={{mb:1}}>
      <Box
        sx={{
          ml: 1.4,
          display: 'flex',
          alignItems: 'center',
          p: 1,
          justifyContent: 'space-between',
          width: 327,
          borderRadius: 2,
          height: 50,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
        }}
      >
        <Box display='flex' flexDirection='row' alignItems='center'>
          <img
            src="your_image_url_here"
            alt="Book Image"
            style={{ width: '50px', height: '50px', border: '1px solid black', borderRadius: 6 }}
          />
          <Box
            sx={{
              ml: 1,
              mr: 2,
              width: 140,
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
              }} >
              Book Nameasdasdasdasdasdasdasdasd
            </Box>
            <Box label='author-name' variant="body2" color="textSecondary" fontFamily='Poppins'
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              }} >
              Author Name
            </Box>
          </Box>
          <Box
            sx={{
              width: 100,
              height: '100%',
              fontFamily: 'Poppins',
              alignItems: 'center'
            }}
          >
            Php 2,000.00
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
