import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography, Box, Chip, Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 220,
  lineHeight: '60px',
  width: 195,
  overflow: 'hidden', // Add overflow property
}));

export default function ItemBox() {
  const StatusText = "Posted";

  const getStatusBackgroundColor = (text) => {
    switch (text) {
      case "Pending":
        return "rgba(255, 212, 58, 0.7)";
      case "Posted":
        return "rgba(45, 67, 46, 0.7)";
      case "Declined":
        return "rgba(142, 0, 0, 0.7)";
      default:
        return "rgba(255, 255, 255, 0.7)";
    }
  };

  return (
    <Grid container sx={{ mb: 1, pl: 1 }}>
      <Item elevation={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 0.3, backgroundColor: "#F5F5F5" }}>
        <Box flexDirection='column'>
          <Box
            width='195px'
            height='115px'
            borderRadius='5px'
            style={{
              backgroundImage: 'url("https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'start',
            }}
            sx={{ mt: 1 }}
          >
            <Chip
              variant='outlined'
              label={StatusText}
              sx={{
                m: 1,
                backgroundColor: getStatusBackgroundColor(StatusText),
                color: '#fffff',
                fontSize: '10px',
                width: '65px',
                height: '20px',
                borderRadius: '5px',
              }}
            />
          </Box>
          <Box sx={{ width: '195px', height: '110px', p: '1px', display: 'flex', flexDirection: 'column' }}>
            <Box>
              <Typography variant="subtitle2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
                <strong>Title: </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Typography>
              <Typography variant="subtitle2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
              <strong>Description:</strong> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </Typography>
              <Typography variant="subtitle2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
                <strong>Price:</strong> P100
              </Typography>
            </Box>
            <Button sx={{ width: '50px', 
            height: '25px', 
            m: 1, 
            backgroundColor: "#FFFFFF", 
            color: '#50623A', 
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', justifyItems:'end'}}>
              View
            </Button>
          </Box>
        </Box>
      </Item>
    </Grid>
  );
}