/*eslint-disable  no-unused-vars*/
import React, { useState } from 'react';
import './header.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ProfileMenu from './profileMenu';
import Divider from '@mui/material/Divider';
import { Button, Typography, Container, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SearchBar from './searchbar';
import ExploreButton from './explorebutton';
import ForYouButton from './foryourbutton';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [openUpload, setOpenUpload] = useState(false);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [bookImg, setBookImg] = useState(null);
  const [error, setError] = useState('');

  const navigate = useNavigate('/');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setBookImg(event.target.files[0]);
    }
  };

  const handleOpenUpload = () => {
    setOpenUpload(true);
  };
  const handleCloseUpload = () => {
    setOpenUpload(false);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('price', price);
    formData.append('book_img', bookImg);
    formData.append('description', description);

    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post('https://tisap.pythonanywhere.com/create-book/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Upload successful:', response.data);
    } catch (error) {
      setError('Failed to upload book. Please try again.');
      console.error('Upload failed:', error);
    }
  };
  const cart = (event) => {
    event.preventDefault();

    navigate('/cart');
  }

  const home = (event) => {
    event.preventDefault();

    navigate('/');
  }


  return (
    <>
      <AppBar position="static" sx={{ background: 'white', boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={home}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: '#50623A',
                textDecoration: 'none',
                fontFamily: 'Poppins'
              }}
            >
              Stallion Notes
            </Typography>
            <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', mx: 'auto', marginRight: '0px' }}>
              <ForYouButton  sx={{ margin: '5px', }} />
              <ExploreButton sx={{ margin: '5px', }} />
              <SearchBar sx={{}} />
            </Box>
            <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'right', mx: 'auto', marginRight: '0px' }}>
              <Button variant="contained" onClick={handleOpenUpload} color="success" fontFamily='Poppins' startIcon={<CloudUploadIcon />} sx={{ margin: '5px', fontSize: '13px', backgroundColor: '#50623A' }}>
                Upload
              </Button>
              <Divider orientation='vertical' flexItem />
              <Button sx={{ fontSize: '25px', margin: '5px' }}>
                <NotificationsNoneRoundedIcon  sx={{ fontSize: '30px', color: '#50623A' }} />
              </Button>
              <Divider orientation='vertical' flexItem />
              <Button sx={{ fontSize: '25px', margin: '5px' }}>
                <ShoppingBagOutlinedIcon onClick={cart} sx={{ fontSize: '30px', color: '#50623A' }} />
              </Button>
              <Divider orientation="vertical" flexItem />
              <ProfileMenu />
            </Box>
          </Toolbar>
        </Container>
        <Divider />
      </AppBar>

      {/* Simple Form Modal */}
      <Dialog open={openUpload} onClose={handleCloseUpload}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Upload a Book</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the book form:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            label="Title"
            type="text"
            fullWidth
            value={title}
            onChange={handleTitleChange}
            variant='standard'
          />
          <TextField
            margin="dense"
            id="subtitle"
            name="subtitle"
            label="Subtitle"
            type="text"
            fullWidth
            value={subtitle}
            onChange={handleSubtitleChange}
            variant='standard'
          />
          <TextField
            margin="dense"
            id="description"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={description}
            onChange={handleDescriptionChange}
            multiline
            rows={4}
            variant='standard'
          />
          {/* <TextField
            margin="dense"
            id="description"
            name="description"
            label="Description"
            type="text"
            fullWidth
            // value={description}
            // onChange={handleChange}
          /> */}
          <TextField
            margin="dense"
            id="price"
            name="price"
            label="Price"
            type="number"
            fullWidth
            value={price}
            onChange={handlePriceChange}
          />
          <TextField
            type="file"
            // fullWidth
            onChange={handleFileChange}
            style={{ marginTop: '20px' , display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'secondary'}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUpload} color='secondary'>Cancel</Button>
          <Button type='submit' color="success" variant='contained' onClick={handleCloseUpload}>
            Submit
          </Button>
        </DialogActions>
      </form>
      </Dialog>
    </>
  );
}

export default ResponsiveAppBar;
