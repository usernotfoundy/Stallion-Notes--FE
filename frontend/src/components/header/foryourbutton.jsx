import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const color = '#10439F'
const color1 = '#C1C6E6'

export default function IconLabelButtons() {
  const navigate = useNavigate();

  const foryou = (event) => {
    event.preventDefault();

    navigate('/home')
  }
  return (
    <>
      <Button onClick={foryou} startIcon={<HomeIcon />} sx={{ color: `${color}`, margin: '0px 5px', fontFamily: 'Poppins' }}>
        For You
      </Button>
    </>
  );
}