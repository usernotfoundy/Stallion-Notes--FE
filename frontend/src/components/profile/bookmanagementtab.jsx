// import { useState, useEffect, useCallback } from 'react';
// import Typography from '@mui/material/Typography';
// import { Divider, Box, Chip, Grid, CircularProgress } from '@mui/material';
// import ItemBox from '../items/itembox';
// import axios from 'axios';

// const BookmanagementTab = () => {
//   const [chipVariant, setChipVariant] = useState('outlined');
//   const [books, setBooks] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem('authToken');

//   const viewBooks = useCallback(async () => {
//     try {
//       const res = await axios.get('https://tisap.pythonanywhere.com/view-books/', {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//       });
//       console.log('Fetched books:', res.data); // Log fetched books for debugging
//       setBooks(res.data);
//       setLoading(false); // Set loading to false when data is fetched
//     } catch (error) {
//       console.error('Error fetching books:', error);
//       setError(error);
//       setLoading(false); // Set loading to false when there's an error
//     }
//   }, [token]);


//   useEffect(() => {
//     viewBooks();
//   }, [viewBooks]);

//   const handleClick = () => {
//     setChipVariant((prevVariant) => (prevVariant === 'outlined' ? 'filled' : 'outlined'));
//   };

//   const handleDelete = async (id) => {
//     console.log('Current book ID:', id); // Add this console log
//     if (!id) {
//       console.error('Invalid book ID:', id);
//       return;
//     }

//     try {
//       const res = await axios.delete(`https://tisap.pythonanywhere.com/delete-book/${id}`, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//       });
//       console.log('Book deleted:', res.data);
//       // Remove the book from the local state
//       setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
//     } catch (error) {
//       console.error('Error deleting book:', error);
//       setError(error);
//     }
//   };
  
//   const handleEdit = async (id, newData) => {
//     try {
//       const res = await axios.patch('https://tisap.pythonanywhere.com/update-book/', {
//         id: id,
//         ...newData
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//       });
//       setBooks(prevBooks =>
//         prevBooks.map(book => (book.id === id ? { ...book, ...newData } : book))
//       );
//       console.log('Book has been updated:', res.data);
//     } catch (error) {
//       console.error('Error updating the book:', error);
//       setError(error);
//     }
//   };

//   return (
//     <Box sx={{ maxHeight: '464px', overflow: 'auto' }}>
//       {loading ? (
//         <Typography variant='h5' color='inherit' mt="100px" fontWeight={700}>
//           STALLION NOTES<br/><CircularProgress color='inherit'/></Typography>
//       ) : books !== null && books.length > 0 ? (
//         <>
//           <Grid sx={{ position: 'sticky', top: '0', zIndex: '1', backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
//             <Typography variant="h6" fontFamily="Poppins" sx={{ display: 'flex', justifyContent: 'start', fontSize: '28px' }} gutterBottom>
//               Book Management
//             </Typography>
//           </Grid>
//           <Divider sx={{ mt: 0.7, mb: 1 }} />
//           <Box maxWidth='auto' height={40} mb='10px' sx={{ display: 'flex', justifyItems: 'start', alignItems: 'center', pl: 5, mb: 1 }}>
//             <Chip label="Clickable Chip" variant={chipVariant} onClick={handleClick} />
//           </Box>
//           <Grid container spacing={2}>
//             {books.map((book) => {
//               console.log('Current book:', book); // Log current book for debugging
//               return (
//                 <Grid key={book.id} item xs={3}>
//                   <ItemBox
//                     key={book.id}
//                     id={book.id}
//                     title={book.title}
//                     description={book.description}
//                     subtitle={book.subtitle}
//                     price={book.price}
//                     img={book.img}
//                     onDelete={handleDelete}
//                     onEdit={handleEdit} 
//                   />
//                 </Grid>
//               );
//             })}
//           </Grid>
//         </>
//       ) : error ? (
//         <Typography variant="body1" color="error">{error.message}</Typography>
//       ) : (
//         <Typography variant="body1" color="inherit">
//           {books === null ? "No books uploaded." : "No books available."}
//         </Typography>
//       )}
//     </Box>
//   );
// };

// export default BookmanagementTab;

import { Box, Typography, Grid, CircularProgress, Chip, Divider } from '@mui/material';
import ItemBox from '../items/ItemBox';  // Ensure the import path matches your project structure
import useBooks from '../hooks/useBooks';  // Ensure the import path matches your project structure
import axios from 'axios';

const BookmanagementTab = () => {
  const token = localStorage.getItem('authToken');
  const { books, setBooks, loading, error } = useBooks(token);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://tisap.pythonanywhere.com/delete-book/${id}`, {
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
    try {
      const response = await axios.patch(`https://tisap.pythonanywhere.com/update-book/${id}`, updatedData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setBooks(currentBooks => currentBooks.map(book => book.id === id ? { ...book, ...updatedData } : book));
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error.message}</Typography>;

  return (
    <Box sx={{ maxHeight: '464px', overflow: 'auto' }}>
      {books.length > 0 ? (
        <>
          <Divider sx={{ mt: 0.7, mb: 1 }} />
          <Grid container spacing={2}>
            {books.map(book => (
              <Grid key={book.id} item xs={12} sm={6} md={4} lg={3}>
                <ItemBox
                  key={book.id}
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