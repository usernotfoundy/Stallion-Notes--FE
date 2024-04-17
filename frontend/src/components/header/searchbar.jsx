// SearchBar Component
/*eslint-disable*/
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';

export default function SearchBar({ apiUrl, token }) {
  const [searchField, setSearchField] = useState('');
  
  const fetchData = async (query) => {
    try {
      const url = query ? `${apiUrl}query=${query}` : "http://127.0.0.1:8000/explore-books/";
      const response = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log("Viewed Searched data", response.data);
    } catch (err) {
      console.error('Failed to view searched book information', err);
      alert('Failed to view searched book information');
    }
  };

  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    fetchData(searchField);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default action to avoid a form submit which reloads the page
      fetchData(searchField);
    }
  };

  const handleClearClick = () => {
    setSearchField('');
  };

  return (
    <Paper onSubmit={handleSearchClick} component="form" >
      {/* Search components here */}
      <IconButton onClick={handleSearchClick}>
        <SearchIcon />
      </IconButton>
      <InputBase value={searchField} onChange={handleSearchChange} onKeyPress={handleKeyPress} />
      <IconButton onClick={handleClearClick}>
        <ClearIcon />
      </IconButton>
    </Paper>
  );
}
