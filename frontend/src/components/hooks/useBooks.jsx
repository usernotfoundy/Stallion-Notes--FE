import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const VIEW_BOOKS_API_URL = 'https://stallionnotes.pythonanywhere.com/view-books/'

const useBooks = (token) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(VIEW_BOOKS_API_URL, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setBooks(response.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return { books, loading, error, setBooks };
};

export default useBooks;
