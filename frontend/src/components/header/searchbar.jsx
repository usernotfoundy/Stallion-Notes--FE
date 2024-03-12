import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  const textFieldProps = {
    InputProps: {
      style: {
        fontFamily: 'Poppins',
      },
    },
  };
  
  const [searchField, setSearchField] = React.useState('');

  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleSearchClick = () => {
    console.log('Search Clicked');
  };

  const handleClearClick = () => {
    setSearchField('');
  };

  return (
    <Paper
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        borderColor: '#50623A',
        borderWidth: '2px',
        borderStyle: 'solid',
        height: 35,
      }}
    >
      <IconButton
        type="button"
        sx={{ p: '10px', color: '#50623A' }}
        aria-label="search"
        onClick={handleSearchClick}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          fontFamily: 'Poppins',
        }}
        placeholder="Search Items"
        inputProps={{ 'aria-label': 'Search Items' }}
        value={searchField}
        onChange={handleSearchChange}
      />
      <IconButton
        sx={{ p: '10px' }}
        aria-label="clear"
        onClick={handleClearClick}
      >
        <ClearIcon />
      </IconButton>
    </Paper>
  );
}