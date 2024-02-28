import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';

// New component that includes the button
const CButton = () => {
  const location = useLocation();
  if (location.pathname === '/login') {
    return null;
  }

  return (
    <Button href='/login' sx={{ display: 'flex', justifyContent: 'center', mx: 'auto' }}>
      Test
    </Button>
  );
};

export default CButton;
