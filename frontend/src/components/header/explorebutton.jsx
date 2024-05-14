import Button from '@mui/material/Button';
import ExploreIcon from '@mui/icons-material/Explore';
import { useNavigate } from 'react-router-dom';

const color = '#10439F'

export default function IconLabelButtons() {
  const navigate = useNavigate();

  const explore = (event) => {
    event.preventDefault();

    navigate('/explore')
  }

  return (
    <Button onClick={explore} startIcon={<ExploreIcon />} sx={{ color: `${color}`, margin: '0px 5px', fontFamily: 'Poppins' }}>
      Explore
    </Button>
  );
}