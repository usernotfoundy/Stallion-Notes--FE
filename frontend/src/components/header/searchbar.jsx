// import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  const handleSearchButtonClick = () => {
    // You can perform additional actions when the search button is clicked
    // For example, you might want to trigger the search immediately
    // onSearch(searchTerm);
  };

  return (
    <TextField
      placeholder="Search Items"
      InputProps={{
        startAdornment: (
          <IconButton
            color="primary"
            aria-label="search"
            onClick={handleSearchButtonClick}
          >
            <SearchIcon sx={{color: '#50623A' }} />
          </IconButton>
        ),
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderColor: '#50623A',
          borderWidth: '3px',
          height: '35px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        }, margin:'0px 5px'
      }}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
