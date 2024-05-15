import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Chip, IconButton, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, TextField, CircularProgress, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ItemBox = ({ img, id, title, description, price, onDelete, onEdit, genre }) => {
  const StatusText = "Posted";
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedData, setEditedData] = useState({ title, description, price });
  const [loading, setLoading] = useState(false);
  const [editError, setEditError] = useState(null);

  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const getStatusBackgroundColor = useCallback((text) => {
    switch (text) {
      case "Pending": return "rgba(255, 212, 58, 0.7)";
      case "Posted": return "rgba(45, 67, 46, 0.7)";
      case "Declined": return "rgba(142, 0, 0, 0.7)";
      default: return "rgba(255, 255, 255, 0.7)";
    }
  }, []);

  const handleDeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    setLoading(true);
    await onDelete(id);
    setLoading(false);
    setIsDeleteDialogOpen(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteDialogOpen(false);
  };

  const handleEditClick = () => {
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = async () => {
    setLoading(true);
    try {
      await onEdit(id, editedData);
      setIsEditDialogOpen(false);
    } catch (error) {
      console.error('Error updating book:', error);
      setEditError('Failed to update book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setEditedData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }, []);

  return (
    <>
      <Box
        flexDirection="column"
        key={id}
        sx={{
          width: 'inherit',
          height: 'auto',
          margin: '10px',
          mb: 2,
        }}
      >
        <Box
          height={isSmDown ? '200px' : '200px'}
          width={isSmDown ? '300px' : '190px'}
          borderRadius="5px"
          style={{
            backgroundImage: img ? `url("${img}")` : 'url("https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
          }}
          sx={{ mt: 1 }}
        >
          <Chip
            variant="outlined"
            label={StatusText}
            sx={{
              m: 1,
              backgroundColor: getStatusBackgroundColor(StatusText),
              color: '#ffffff',
              fontSize: '10px',
              width: '65px',
              height: '20px',
              borderRadius: '5px',
            }}
          />
        </Box>
        <Box sx={{ width: '200px', p: '1px', display: 'flex', flexDirection: 'column' }}>
          <Box>
            <Typography variant="subtitle2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
              <strong>Title: </strong>{title}
            </Typography>
            <Typography variant="subtitle2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
              <strong>Description:</strong>{description}
            </Typography>
            <Typography variant="subtitle2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
              <strong>Genre:</strong>{genre}
            </Typography>
            <Typography variant="subtitle2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
              <strong>Price:</strong>{price}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end ', alignItems: 'center', pt: 1, px: 0 }}>
            <IconButton onClick={handleDeleteClick} disabled={loading}>
              {loading ? <CircularProgress size={14} /> : <DeleteIcon />}
            </IconButton>
            <IconButton onClick={handleEditClick} disabled={loading} sx={{ color: 'green' }}>
              <EditIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Dialog open={isDeleteDialogOpen} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={isEditDialogOpen} onClose={() => setIsEditDialogOpen(false)}>
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
          <TextField margin="dense" id="title" name="title" label="Title" fullWidth value={editedData.title} onChange={handleChange} />
          <TextField margin="dense" id="description" name="description" label="Description" fullWidth value={editedData.description} onChange={handleChange} />
          <TextField margin="dense" id="price" name="price" label="Price" fullWidth value={editedData.price} onChange={handleChange} />
          {editError && <Typography color="error">{editError}</Typography>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSaveEdit} color="success" disabled={loading}>
            {loading ? <CircularProgress size={14} /> : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

ItemBox.propTypes = {
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

export default ItemBox;
