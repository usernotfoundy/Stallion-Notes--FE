import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

const color = '#10439F';

export default function SearchBar({ handleSearchChange, handleClearClick, handleSearchClick, searchField }) {

  return (
    <Paper
      onSubmit={handleSearchClick}
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        borderColor: `${color}`,
        borderWidth: '2px',
        borderStyle: 'solid',
        height: 35,
        boxShadow: 'none'
      }}
    >
      <IconButton
        type="button"
        sx={{ p: '10px', color: `${color}` }}
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
          color: `${color}`
        }}
        placeholder="Search Items"
        inputProps={{ 'aria-label': 'Search Items' }}
        value={searchField}
        onChange={handleSearchChange}
      />
      <IconButton
        sx={{
          p: '10px', color: `${color}`
        }}
        aria-label="clear"
        onClick={handleClearClick}
      >
        {/* <InputBase value={searchField} onChange={handleSearchChange} /> */}
        {/* <IconButton onClick={handleClearClick}> */}
        <ClearIcon />
      </IconButton>
    </Paper>
  );
}