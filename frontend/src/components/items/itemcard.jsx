/* eslint-disable no-unused-vars */
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Typography , Box, Chip} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 80,
  lineHeight: '60px',
  width:1030
}));

export default function Elevation() {
  return (
    <Grid container sx={{mb:1}}>
      <Item elevation={1} sx={{ display: 'flex', alignItems: 'center', p:1, justifyContent:'space-between'}}>
        <Box display='flex' flexDirection='row'>
        <img
          src="your_image_url_here"
          alt="Book Image"
          style={{ width: '80px', height: '80px', border:'1px solid black', borderRadius:6 }}
        />
        <Box sx={{backgroundColor:"yellow", margin:1, width:350 }}>
          <Typography variant="h6">
            Harry Potter 
          </Typography>
          <Typography variant="subtitle2">
            Subtitle
          </Typography>
        </Box>
        </Box>
        <Box>
          <Typography>
            P100
          </Typography>
        </Box>
        <Box >
          <Typography>
            December 7, 2024
          </Typography>
        </Box>
        <Box mr='30px'>
          <Typography>
            #123456789
          </Typography>
        </Box>
        </Item>
    </Grid>
  );
}