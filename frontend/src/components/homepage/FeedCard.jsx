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
import { useState } from 'react';

import { Box, Container } from '@mui/material';


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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            E
          </Avatar>
        }
        action={
          <IconButton aria-label="share" >
          <ShareIcon/>
        </IconButton>
        }
        title="Emmanuel Adonay II"
        subheader={
            <Typography variant="body2" color="textSecondary" fontSize='12px'>
              Yesterday at 17:50
            </Typography>
            }
      />
            <Box display="flex" justifyContent="center">
            <CardMedia
        component="img"
        sx={{
          width: '300px',
          height: 'auto',
          alignItems: 'center',
        }}
        image="https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
        alt="Untitled Book"
      />
      </Box>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
          <Typography variant="body2" color="text.primary" fontWeight={600} fontSize={25}>
            Harry Potter and the Philosophers Stone
          </Typography>
          <Checkbox
      icon={<FavoriteBorder style={{ fontSize: '30px' }} />}
      checkedIcon={<Favorite style={{ fontSize: '30px', color:'350623A' }} />}
    />
        </Box>
        
      </CardContent>
    </Card>
  );
}