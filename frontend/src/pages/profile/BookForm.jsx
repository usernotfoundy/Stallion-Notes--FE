import { useState, useEffect } from 'react';
import {
    TextField,
    Button,
    Grid,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
} from '@mui/material';
import axios from 'axios';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [isbn, setIsbn] = useState('');
    const [publisher, setPublisher] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    // const [author, setAuthor] = useState('');
    // const [genre, setGenre] = useState('');

    const Book_URL = 'http://127.0.0.1:8000/create-book/';

    const token = localStorage.getItem('authToken')
    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a new book object
        const Book = {
            title,
            subtitle,
            isbn,
            publisher,
            description,
            price,
            // author,
            // genre,
        };


        // Send POST request to backend
        axios.post(Book_URL, Book, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(response => {
                console.log('Book created:', response.data);
                // Reset form fields
                setTitle('');
                setSubtitle('');
                setIsbn('');
                setPublisher('');
                setDescription('');
                setPrice('');
                // setAuthor('');
                // setGenre('');
            })
            .catch(error => {
                console.error('Error creating book:', error);
            });
    };

    const [books, setBooks] = useState([]);

    const viewBooks = async () => {

        try {
            const res = await axios.get('http://127.0.0.1:8000/view-books/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            // console.log('All Books:', res.data);
            setBooks(res.data);
            // Process the data or update state with the received books
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    useEffect(() => {
        viewBooks();
    }, []);



    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="title"
                            variant="outlined"
                            label="Title"
                            fullWidth
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="subtitle"
                            variant="outlined"
                            label="Subtitle"
                            fullWidth
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="isbn"
                            variant="outlined"
                            label="ISBN"
                            fullWidth
                            value={isbn}
                            onChange={(e) => setIsbn(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="publisher"
                            variant="outlined"
                            label="Publisher"
                            fullWidth
                            value={publisher}
                            onChange={(e) => setPublisher(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="description"
                            variant="outlined"
                            label="Description"
                            fullWidth
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="price"
                            variant="outlined"
                            label="Price"
                            fullWidth
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel>Author</InputLabel>
                        <Select
                            name="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            label="Author"
                        >
                            <MenuItem value="author1">Author 1</MenuItem>
                            <MenuItem value="author2">Author 2</MenuItem>
                            <MenuItem value="author3">Author 3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel>Genre</InputLabel>
                        <Select
                            name="genre"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            label="Genre"
                        >
                            <MenuItem value="genre1">Genre 1</MenuItem>
                            <MenuItem value="genre2">Genre 2</MenuItem>
                            <MenuItem value="genre3">Genre 3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid> */}
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                            Add Book
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <div>
                {/* <h1>All Books</h1>
                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            <h3>{book.title}</h3>
                            <p>{book.description}</p>
                            <p>Author: {book.author}</p>
                            <p>Genre: {book.genre.genre_name}</p>
                            <br />
                        </li>
                    ))}
                </ul> */}

                <Typography variant="h1">All Books</Typography>
                <List>
                    {books.map(book => (
                        <ListItem key={book.id}>
                            <ListItemText
                                primary={book.title}
                                secondary={
                                    <>
                                        <Typography variant="body2">{book.description}</Typography>
                                        <Typography variant="body2">Author: {book.author}</Typography>
                                        <Typography variant="body2">Genre: {book.genre.genre_name}</Typography>
                                    </>
                                }
                            />
                            {/* You can add a delete button here if needed */}
                            {/* <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction> */}
                        </ListItem>
                    ))}
                </List>
            </div>

        </>
    );
};

export default BookForm;
