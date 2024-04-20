import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';

export default function CartItemBox() {
  return (
    <Grid container sx={{ mb: 1}}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 1,
          justifyContent: 'space-between',
          borderRadius: 2,
          height: 80,
          width:1095,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
          ml: 1.3,
        }}
      >
        <Box display='flex' flexDirection='row' alignItems='center'>
          <img
            src="your_image_url_here"
            alt="Book Image"
            style={{ width: '60px', height: '60px', border: '1px solid black', borderRadius: 6, marginLeft:10}}
          />
          <Box
            sx={{
              ml: 3,
              width: 460,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pr: 1,
            }}
          >
            <Typography variant="body1" fontWeight="bold" fontFamily='Poppins'
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              Book Nameaasdasdasdasdasdsadasdsad
            </Typography>
            <Typography variant="body2" color="textSecondary" fontFamily='Poppins'
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              Author Name
            </Typography>
          </Box>
          <Box
            sx={{
              ml: 3,
              width: 220,
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pr: 1,
            }}
          >
            <Typography fontFamily='Poppins'
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontWeight:'bold'
              }}
            >
              Seller Name
            </Typography>
          </Box>
          <Box
            sx={{
              width: 150,
              height: '100%',
              fontFamily: 'Poppins',
              display: 'flex',
              justifyContent: 'center',
              fontWeight:'bold'
            }}
          >
            Php 200.00
          </Box>
          <Box
            sx={{
              width: 150,
              height: '100%',
              fontFamily: 'Poppins',
              display: 'flex',
              justifyContent: 'center',
              fontWeight:'bold'
            }}
          >
            no.123456890
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
