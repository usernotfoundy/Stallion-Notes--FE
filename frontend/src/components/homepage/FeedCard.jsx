/* eslint-disable no-unused-vars */
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container } from '@mui/material';
import { formatDistanceToNow, parseISO } from 'date-fns';

const VIEW_POSTS_API_URL = 'http://127.0.0.1:8000/view-posts/';
const token = localStorage.getItem('authToken');

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = useState(false);
  const [postImg, setPostImg] = useState('http://127.0.0.1:8000//media/books/395368427_696500319030425_4487648936682276622_n.jpg');
  const [name, setName]= useState('user');
  const [title, setTitle] = useState('Untilted');
  const [avatar, setAvatar] = useState('http://127.0.0.1:8000//media/books/395368427_696500319030425_4487648936682276622_n.jpg')
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(VIEW_POSTS_API_URL, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log("Viewed post data", response.data);
        setPosts(response.data);  // Store all posts in state
      } catch (err) {
        console.error('Failed to view posted book information', err);
        alert('Failed to view posted book information');
      }
    };
  
    fetchData();
  }, []);
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      {posts.map((post) => (
        <Card key={post.id} sx={{ 
          mb: 2,  // sets margin-bottom to 16px (theme spacing * 2)
          mt: 2,  // sets margin-top to 16px (theme spacing * 2)
          mx: 'auto',  // sets margin-left and margin-right to 'auto' for centering
          width: '450px',  // sets the width to 80% of the parent container
          height: '500px',  // sets the width to 80% of the parent container
          boxShadow: 3  // apply some shadow for better UI presentation
        }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe" src={post.user.profile_img_url}>
                
                {/* {post.user.username[0].toUpperCase()} */}
              </Avatar>
            }
            action={
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            }
            title={"@" + post.user.username}
            subheader={<Typography variant="body2" color="textSecondary">
                        {formatDistanceToNow(parseISO(post.created_at), { addSuffix: true })}
                      </Typography>}
          />
          <Box display="flex" justifyContent="center">
            <CardMedia
              component="img"
              sx={{ width: 300, height: 350, alignItems: 'center' }}
              image={post.book_img_url}
              alt={post.title}
            />
          </Box>
          <CardContent>
            <Typography variant="body2" color="text.primary" fontWeight={600} gutterBottom noWrap>
              {post.title}
            </Typography>
            <Typography variant="body3" color="text.primary" fontWeight={300} gutterBottom noWrap>
              {post.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>

  );
}