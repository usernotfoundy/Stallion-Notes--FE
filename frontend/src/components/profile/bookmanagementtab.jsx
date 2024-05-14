/* eslint-disable no-unused-vars */
import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import ItemBox from '../items/itembox';  // Ensure the import path matches your project structure
import useBooks from '../hooks/useBooks';  // Ensure the import path matches your project structure
import axios from 'axios';
import { useEffect, useState } from 'react';

const UPDATE_BOOK_API_URL = 'http://127.0.0.1:8000/update-book/'
const DELETE_BOOKS_API_URL = 'http://127.0.0.1:8000/delete-book/'
const VIEW_BOOKS_API_URL = 'http://127.0.0.1:8000/view-books/'

const BookmanagementTab = () => {
  const token = localStorage.getItem('authToken');
  const { books, setBooks, loading, error } = useBooks(token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(VIEW_BOOKS_API_URL, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log("Viewed book data", response.data);
      } catch (err) {
        console.error('Failed to fetch books', err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(DELETE_BOOKS_API_URL + id, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setBooks(currentBooks => currentBooks.filter(book => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleEdit = async (id, updatedData) => {
    const formData = new FormData();
    // Add the ID to the formData body
    formData.append('id', id);
    // formData.append('wishlist', wishlist);
    Object.keys(updatedData).forEach(key => {
      formData.append(key, updatedData[key]);
    });

    try {
      const response = await axios.patch(UPDATE_BOOK_API_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });

      // Update local state to reflect changes
      setBooks(prevBooks => prevBooks.map(book => book.id === id ? { ...book, ...updatedData } : book));
      console.log('Book updated:', response.data);
    } catch (error) {
      console.error('Error updating the book:', error);
    }
  };


  if (loading) return <Typography>Loading<CircularProgress size={14} /></Typography>;
  if (error) return <Typography color="error"><CircularProgress size={14} />{error.message}</Typography>;

  return (
    <Box sx={{ maxHeight: '464px', overflow: 'auto' }}>
      {books.length > 0 ? (
        <>
          <Grid container spacing={2}>
            {books.map(book => (
              <Grid key={book.id} item xs={12} sm={6} md={4} lg={3}>
                <ItemBox
                  {...book}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Typography variant="body1" color="inherit">No books available.</Typography>
      )}
    </Box>
  );
};

export default BookmanagementTab;
