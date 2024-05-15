/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountTab from './accounttab';
import PurchaseHistory from './purchasehistory';
import BMTab from './bookmanagementtab';
import WLTab from './wishlisttab';
import ReportTab from './reporttab';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const getContent = (index) => {
    switch (index) {
      case 0:
        return <AccountTab />;
      case 2:
        return <PurchaseHistory />;
      case 4:
        return <WLTab />;
      case 6:
        return <BMTab />;
      case 8:
        return <ReportTab />;
      default:
        return null;
    }
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          p={isLgUp ? 2 : isMdUp ? 2 : 2} // Adjust padding based on screen size
          height={isLgUp ? '63vh' : isMdUp ? '63vh' : '63vh'} // Adjust minHeight based on screen size
          // maxHeight={isLgUp ? '800px' : isMdUp ? '700px' : '660px'} // Adjust maxHeight based on screen size
          width='auto'
        >
          <Typography>{getContent(index)}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default TabPanel;
