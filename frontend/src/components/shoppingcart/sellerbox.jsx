import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import CartItem from './cartitembox';


const SellerBox = ({ sellerName, checked, onChange }) => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px', mt: 2, overflowX: 'hidden' }}>
        <Checkbox
          checked={checked}
          onChange={onChange}
          color="success"
          inputProps={{ 'aria-label': 'selectallitem' }}
          disableRipple
        />
        <Avatar
          alt=""
          src="/static/images/avatar/1.jpg"
          sx={{ width: 25, height: 25, border: '2px solid #50623A', marginRight: '10px' }}
        />
        <Typography variant="body1" fontFamily='Poppins'>John Christian U. Clavel</Typography>
      </Box>
      <Box sx={{ overflowX: 'hidden', justifyContent:'center', alignItems:'center' }}> {/* Set overflowX to 'hidden' */}
        <CartItem />
      </Box>
    </>
  );
}

export default SellerBox;
