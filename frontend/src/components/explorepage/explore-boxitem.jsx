/*eslint-disable no-unused-vars*/
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography, Box, IconButton, Modal, Container, Divider } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from 'react';
import axios from 'axios';

const EXPLORE_API_URL = 'http://127.0.0.1:8000/explore-books/';
const token = localStorage.getItem('authToken');


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 192,
  lineHeight: '60px',
  width: 220,
  overflow: 'hidden',
}));

export default function ExploreItemBox() {
    const [explore, setExplore] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(EXPLORE_API_URL, {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
              },
            });
            console.log("Viewed explore data", response.data);
            setExplore(response.data);  // Store all posts in state

          } catch (err) {
            console.error('Failed to view explore book information', err);
            alert('Failed to view explore book information');
          }
        };
      
        fetchData();
      }, []);

      const [openModal, setOpenModal] = useState(false);

      const handleOpenModal = () => {
        setOpenModal(true);
      };
    
      const handleCloseModal = () => {
        setOpenModal(false);
      };

  return (
    <Grid container sx={{ mb: 1, pl: 1 }}>
        {explore.map((post) => (
      <Item key={post.id} elevation={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 0.3, backgroundColor: "#F5F5F5" }}>
        <Box flexDirection='column'>
          <Box
            width='220px'
            height='115px'
            borderRadius='5px'
            style={{
              backgroundImage: `url('${post.img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'start',
            }}
            sx={{ mt: 1 }}
            onClick={handleOpenModal}
          >
          </Box>
          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Box sx={{ width: '160px', height: '77px', p: '1px', display: 'flex', flexDirection: 'column',}}>
                <Box marginTop={2}>
                <Typography variant="subtitle2" fontWeight='bold' sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',}}>
                    {post.title}
                </Typography>
                <Typography variant="subtitle2">
                    {post.price}
                </Typography>
                </Box>
            </Box>
            <Checkbox
                icon={<FavoriteBorder style={{ fontSize: '30px' }} />}
                checkedIcon={<Favorite style={{ fontSize: '30px', color:'#50623A'}} />}
                disableRipple
                />
            </Box>
        </Box>
      </Item>
      ))}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
      >
        <Box sx={{ display:'flex', flexDirection:'row' ,position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 900, height:500 , bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius:2 }}>
            <Box 
              width='400px'
              height='500px'
              borderRadius='3px'
              border='3px solid #50623A'
              style={{
              backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg")',
              backgroundSize: 'contain',
              backgroundRepeat:'no-repeat',
              backgroundPosition: 'center'}}
              >              
            </Box>
            <Box ml={1}>
              <Box height={420} width={500} p={2} sx={{ flex: 1, overflowY: 'auto' }} >
                <Typography variant='h5' fontWeight='bold' color='#50623A' fontFamily='Poppins'>
                Harry Potter and the Philosopher's Stone
                </Typography >
                <Divider sx={{mb:1,mt:1}}/>
                <Typography  fontFamily='Poppins'>
                  Author Name
                </Typography>
                <Typography fontFamily='Poppins'>
                  ISBN: #1234567890
                </Typography>
                <Typography variant='h6'mt={1} color='#50623A' fontWeight='bold'>
                About the Book
                </Typography>
                <Divider sx={{mb:.5,mt:.5}}/>
                <Typography sx={{ textAlign: 'justify', textIndent: '5em',fontSize:'15px' }}>
                  Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school and with the help of his friends, Ron Weasley and Hermione Granger, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.
                </Typography>
                <Typography variant='h6'mt={1} color='#50623A' fontWeight='bold'>
                 Book Contents
                </Typography>
                <Divider sx={{mb:.5,mt:.5}}/>
                <Typography component="div" fontSize={15}>
                  <ul style={{ paddingLeft: '20px', textAlign:'justify' }}>
                    <li>The power of love and sacrifice: Harry's mother's love for him protected him from Voldemort's curse, and his own willingness to sacrifice himself for others allows him to survive.</li>
                    <li>The importance of friendship: Harry, Ron, and Hermione's friendship is crucial in overcoming obstacles and defeating Voldemort.</li>
                    <li>The value of bravery and loyalty: Characters like Harry, Ron, Hermione, and Neville demonstrate bravery in standing up against evil, and they remain loyal to each other despite challenges.</li>
                    <li>The significance of standing up for what's right: Dumbledore emphasizes the importance of making the right choices, even when they're difficult.</li>
                    <li>The danger of arrogance and prejudice: Characters like Draco Malfoy and Severus Snape demonstrate the negative consequences of arrogance and prejudice, while characters like Hagrid and Dumbledore teach acceptance and kindness.</li>
                    <li>The existence of magic and the wizarding world: The book introduces readers to the magical world of Hogwarts and its various creatures, spells, and enchantments.</li>
                  </ul>
                </Typography>
              </Box>
              <Box height={60} width={500} m={1} display='flex' justifyContent='space-between' alignItems='center' >
                <Typography fontWeight='bold' fontSize={25} fontFamily='Poppins' color='#50623A'>
                  Php 1,000.00
                </Typography>
                <IconButton aria-label="add to cart" sx={{ width: 45, height: 45 }} disableRipple>
                  <ShoppingCartIcon sx={{ fontSize: 40, color:'#50623A' }} />
                </IconButton>
              </Box>
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
}