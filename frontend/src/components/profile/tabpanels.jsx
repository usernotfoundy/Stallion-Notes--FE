import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountTab from './accounttab';
import PurchaseHistory from './purchasehistory';
import BMTab from './bookmanagementtab';
import WLTab from './wishlisttab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  const getContent = (index) => {
    switch (index) {
      case 0:
        return <AccountTab/>;
      case 2:
        return <PurchaseHistory/>;
      case 4:
        return <WLTab/>;
      case 6:
        return <BMTab/>;
      case 8:
        return 'Reports and Analytics Content';
      default:
        return '';
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
        <Box p={3} height='450px' width='auto'>
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
