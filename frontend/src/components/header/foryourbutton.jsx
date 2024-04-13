import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';


export default function IconLabelButtons() {
  const navigate  =useNavigate();

  const foryou = (event) => {
    event.preventDefault();

    navigate('/')
  }
  return (
      <Button onClick={foryou} startIcon={<HomeIcon />} sx={{color:'#50623A', margin:'0px 5px', fontFamily:'Poppins'}}>
        For You
      </Button>
  );
}