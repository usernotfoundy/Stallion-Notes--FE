/*eslint-disable*/
import { useState, useEffect } from 'react';
import './header.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ProfileMenu from './profileMenu';
import Divider from '@mui/material/Divider';
import { Button, Typography, Container, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Stack, FormControl, InputLabel, Select, MenuItem, OutlinedInput, InputAdornment, Autocomplete } from '@mui/material';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SearchBar from './searchbar';
import ExploreButton from './explorebutton';
import ForYouButton from './foryourbutton';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import CartBtn from './cartbutton';
import VerificationModal from "../../pages/verificationmodal";
import NeutralPrompt from '../prompt/neutralprompt';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const VIEW_BOOKS_API_URL = 'http://127.0.0.1:8000/view-books/';
const UPLOAD_BOOKS_API_URL = 'http://127.0.0.1:8000/create-book/';
const SEARCH_BOOKS_API_URL = 'http://127.0.0.1:8000/search-book/';
const VIEW_GENRE_API_URL = 'http://127.0.0.1:8000/view-genre/';
const VIEW_PROFILE_API_URL = 'http://127.0.0.1:8000/view-profile/';
const token = localStorage.getItem('authToken');

const color = '#10439F';
const genres = [
  { label: 'Science Fiction' },
  { label: 'Fantasy' },
  { label: 'Mystery' },
  { label: 'Thriller' },
  { label: 'Romance' },
  { label: 'Horror' },
];

function ResponsiveAppBar({ searched, setSearched }) {
  const [openUpload, setOpenUpload] = useState(false);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [bookImg, setBookImg] = useState(null);
  const [error, setError] = useState('');
  const [input, setInput] = useState([]);
  const [update, setUpdate] = useState(false);
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState(null)
  const [genreOptions, setGenreOptions] = useState([]); // State to hold genre options
  const [selectedGenre, setSelectedGenre] = useState(null); // State to hold selected genre
  const [searchField, setSearchField] = useState('');

  const [open, setOpen] = useState(false);
  const [oOpen, setOopen] = useState(false);
  const handleoOpen = () => setOopen(true)
  const handleCClose = () => setOopen(false);
  const [type, setType] = useState('ERROR!')

  const [msg, setMsg] = useState('Your acount is under review.')
  const [note, setNote] = useState("Your account has been submitted and will be reviewed by the admin. This may take up to 1-3 hours. You'll be notified once the review is complete.")
  const [status, setStatus] = useState('error')

  const handleOpen = () => {
    setOpen(true)
    setType('SUCCESS!')
  }
  const handleClose = () => setOpen(false);
  const [user, setUser] = useState([]);

  const navigate = useNavigate('/');
  const location = useLocation();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  useEffect(() => {
    const fetchGenreOptions = async () => {
      try {
        const response = await axios.get(VIEW_GENRE_API_URL);
        setGenreOptions(response.data); // Set genre options from API response
        // console.log('genre data: ', response.data)
      } catch (error) {
        console.error('Failed to fetch genre options:', error);
      }
    };

    fetchGenreOptions(); // Fetch genre options when component mounts
  }, []);

  const handleGenreChange = (event, value) => {
    setSelectedGenre(value?.id || null); // Update selected genre ID
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setBookImg(event.target.files[0]);
    }
  };

  useEffect(() => {
    const reCheck = async () => {
      const token = localStorage.getItem('authToken');

      try {
        const response = await axios.get(VIEW_PROFILE_API_URL, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        setUser(response.data)
        console.log('username ', response.data)
      } catch (error) {
        console.error('reCheck: ', error)
      }

    }

    reCheck()
  }, [])

  const handleOpenUpload = () => {
    if (user.is_verified)
      setOpenUpload(true);
    else if (!user.is_verified && !user.is_flag) {
      setMsg('Your acount is under review.')
      setNote("Your account has been submitted and will be reviewed by the admin. This may take up to 1-3 hours. You'll be notified once the review is complete.")
      setStatus('unverified')
      handleOpen()
    } else if (user.is_flag) {
      setMsg('Verification Unsuccessful.')
      setNote("We regret to inform you that your account verification was not successful. This may be due to incorrect information provided or an inability to verify your identity at this time. \n\nYou can visit our verification hub for further assistance.")
      setStatus('flagged')
      handleOpen()
    } else {
      handleOpen()
    }
  };
  const handleCloseUpload = () => {
    setOpenUpload(false);
    setTitle('')
    setSubtitle('')
    setDescription('')
    setPrice('')
    setSelectedGenre('')
    setAuthor('')
  };


  const cart = (event) => {
    event.preventDefault();

    navigate('/cart');
  }

  const home = (event) => {
    event.preventDefault();

    navigate('/');
  }



  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    navigate('/explore')

    setTimeout(() => {
      if (location.pathname === '/explore')
        fetchData(searchField);
    }, 1000)

  };

  // const handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     event.preventDefault(); // Prevent the default action to avoid a form submit which reloads the page
  //     fetchData(searchField);
  //   }
  // };

  const handleClearClick = () => {
    setSearchField('');
    fetchData(searchField);
  };

  // useEffect(() => {
  //   if (searchField === '') {
  //     fetchData(searchField)
  //   }
  // })

  // console.log('Search Field is ', searched);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('price', price);
    formData.append('book_img', bookImg);
    formData.append('description', description);
    formData.append('author', author);
    formData.append('genre', selectedGenre);
    const token = localStorage.getItem('authToken');

    // Debugging: Log FormData entries
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await axios.post(UPLOAD_BOOKS_API_URL, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload successful:', response.data);
      setOpenUpload(false);
      handleoOpen()
      setUpdate(true);
    } catch (error) {
      setError('Failed to upload book. Please try again.');
      console.error('Upload failed:', error.response?.data || error.message);
    }
  };

  const fetchData = async (query) => {
    const token = localStorage.getItem('authToken');
    try {
      const url = query ? `${SEARCH_BOOKS_API_URL}query=${query}` : "http://127.0.0.1:8000/explore-books/";
      const response = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log("Viewed Searched data", response.data);
      setSearched(response.data);
    } catch (err) {
      console.error('Failed to view searched book information', err);
      alert('Failed to view searched book information');
    }
  };
  useEffect(() => {

    if (location.pathname === '/explore')
      fetchData(searchField);

  }, []);


  return (
    <>
      <AppBar
        position='sticky'
        // position='fixed'
        sx={{ background: 'white', boxShadow: 'none' }}
      >
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
                color: `${color}`,
                textDecoration: 'none',
                fontFamily: 'Poppins'
              }}
            >
              Stallion Notes
            </Typography>
            <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', mx: 'auto', marginRight: '0px' }}>
              <ForYouButton sx={{ margin: '5px', }} color={color} />
              <ExploreButton sx={{ margin: '5px', }} />
              {/* <SearchBar sx={{}} value={input} onChange={(e)=> handleInput(e.target.value)}/> */}
              <SearchBar sx={{}}
                apiUrl={SEARCH_BOOKS_API_URL}
                token={token}
                handleSearchChange={handleSearchChange}
                handleSearchClick={handleSearchClick}
                handleClearClick={handleClearClick}
                searchField={searchField} />
            </Box>
            <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'right', mx: 'auto', marginRight: '0px' }}>
              <Button variant="contained" onClick={handleOpenUpload} fontFamily='Poppins' startIcon={<CloudUploadIcon />} sx={{ margin: '5px', fontSize: '13px', backgroundColor: `${color}` }}>
                Upload
              </Button>
              <Divider orientation='vertical' flexItem />
              <Button sx={{ fontSize: '25px', margin: '5px' }}>
                <NotificationsNoneRoundedIcon sx={{ fontSize: '30px', color: `${color}` }} />
              </Button>
              <Divider orientation='vertical' flexItem />
              <CartBtn color={color} />
              <Divider orientation="vertical" flexItem />
              <ProfileMenu update={update} />
            </Box>
          </Toolbar>
        </Container>
        <Divider />
        <VerificationModal open={open} handleClose={handleClose} msg={msg} note={note} status={status} />
        {/* <NeutralPrompt oOpen={oOpen} handleClose={handleCClose} type={type} /> */}
      </AppBar>

      {/* Simple Form Modal */}
      <Dialog open={openUpload} onClose={handleCloseUpload}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Upload a Book</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill all the fields.
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
              id="author"
              name="author"
              label="Author"
              type="text"
              fullWidth
              value={author}
              onChange={handleAuthorChange}
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
              maxRows={4}
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

            <Stack flexDirection={'row'} gap={1}>
              <TextField
                margin="dense"
                id="price"
                name="price"
                label="Price"
                type="number"
                fullWidth
                value={price}
                // value={price ? price : 0}
                onChange={handlePriceChange}
              />
              <Autocomplete
                sx={{ mt: 1 }}
                onChange={handleGenreChange}
                options={genreOptions}
                value={genreOptions.find((option) => option.id === selectedGenre) || null}
                getOptionLabel={(option) => option.genre_name || ''}  // Display label in dropdown
                renderInput={(params) => (
                  <TextField {...params} label="Genre" variant="outlined" />
                )}
                fullWidth
              />
              {/* <Autocomplete
                sx={{ mt: 1 }}
                onChange={(event, newValue) => handleGenreChange(newValue ? newValue.id : null)}
                options={genreOptions}
                value={genreOptions.find((option) => option.id === selectedGenre) || null}
                getOptionLabel={(option) => option.genre_name || ''}
                renderInput={(params) => (
                  <TextField {...params} label="Genre" variant="outlined" />
                )}
                fullWidth
              /> */}

              {/* <FormControl fullWidth margin="dense">
                <InputLabel id="genre-label">Genre</InputLabel>
                <Select
                  label="Genre"
                  id="genre"
                  name="genre"
                  value={genre}
                  onChange={handleGenreChange}
                  fullWidth
                > */}
              {/* Define your dropdown options using MenuItem */}
              {/* <MenuItem value="action">Action</MenuItem>
                  <MenuItem value="adventure">Adventure</MenuItem>
                  <MenuItem value="comedy">Comedy</MenuItem>
                  <MenuItem value="drama">Drama</MenuItem> */}
              {/* Add more options as needed */}
              {/* </Select>
              </FormControl> */}

              {/* <FormControl >
                <Autocomplete
                  margin="dense"
                  id="genre"
                  name="genre"
                  options={genres}
                  value={genre}
                  onChange={handleGenreChange}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => <TextField {...params} label="Genre" />}
                />
              </FormControl> */}

            </Stack>
            <DialogContentText>
              Want to donate? Leave the price as 0.
            </DialogContentText>
            {/* <TextField
              margin="dense"
              id="price"
              name="price"
              label="Price"
              type="number"
              fullWidth
              value={price}
              onChange={handlePriceChange}
            /> */}
            <TextField
              type="file"
              // fullWidth
              onChange={handleFileChange}
              style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'secondary' }}
            />
          </DialogContent>
          <DialogActions >
            <Button onClick={handleCloseUpload} color='secondary'>Cancel</Button>
            <Button type='submit' sx={{ bgcolor: `${color}`, my: '10px' }} variant='contained'>
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default ResponsiveAppBar;