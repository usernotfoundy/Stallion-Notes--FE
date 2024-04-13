// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Typography, Box, Chip, Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, TextField } from '@mui/material';

// const ItemBox = ({ img, id, title, description, subtitle, onDelete, onEdit , price}) => {
//   const StatusText = "Posted";

//   const getStatusBackgroundColor = (text) => {
//     switch (text) {
//       case "Pending":
//         return "rgba(255, 212, 58, 0.7)";
//       case "Posted":
//         return "rgba(45, 67, 46, 0.7)";
//       case "Declined":
//         return "rgba(142, 0, 0, 0.7)";
//       default:
//         return "rgba(255, 255, 255, 0.7)";
//     }
//   };

//   const defaultBg = "https://tisap.pythonanywhere.com/media/books/id.png";

//   const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
//   const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
//   const [editedData, setEditedData] = useState({ title, description, subtitle, price });

//   const handleDeleteClick = () => {
//     setIsDeleteDialogOpen(true);
//   };

//   const handleConfirmDelete = () => {
//     if (typeof onDelete === 'function') {
//       onDelete(id);
//       setIsDeleteDialogOpen(false);
//     }
//   };

//   const handleCancelDelete = () => {
//     setIsDeleteDialogOpen(false);
//   };

//   const handleEditClick = () => {
//     setIsEditDialogOpen(true);
//   };

//   const handleSaveEdit = () => {
//     onEdit(id, editedData);
//     setIsEditDialogOpen(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   return (
//     <>
//       <Box flexDirection='column' key={id}>
//         <Box
//           width='195px'
//           height='115px'
//           borderRadius='5px'
//           style={{
//             backgroundImage:  img ? `url("${img}")` : defaultBg,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             display: 'flex',
//             justifyContent: 'start',
//             alignItems: 'start',
//           }}
//           sx={{ mt: 1 }}
//         >
//           <Chip
//             variant='outlined'
//             label={StatusText}
//             sx={{
//               m: 1,
//               backgroundColor: getStatusBackgroundColor(StatusText),
//               color: '#ffffff',
//               fontSize: '10px',
//               width: '65px',
//               height: '20px',
//               borderRadius: '5px',
//             }}
//           />
//         </Box>
//         <Box sx={{ width: 'inherit', height: '110px', p: '1px', display: 'flex', flexDirection: 'column' }}>
//           <Box>
//             <Typography variant="subtitle2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
//               <strong>Title: </strong>{title}
//             </Typography>
//             <Typography variant="subtitle2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
//               <strong>Description:</strong>{description}
//             </Typography>
//             <Typography variant="subtitle2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
//               <strong>Price:</strong>{price}
//             </Typography>
//           </Box>
//           <Box
//             sx={{display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               pt:"-20px",
//               px:'0'}}>
//             <Button 
//               onClick={handleDeleteClick}
//               sx={{ width: '50px', 
//               height: '25px', 
//               backgroundColor: "#FFFFFF", 
//               color: '#50623A', 
//               boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
//               // ":hover": {
//               //   transform: "translateY(-8px)",
//               //   transition: ".2s"},
//               justifyItems:'start'}}
//             >
//               delete
//             </Button>
//             <Button
//                 variant="contained"
//                 color="success"
                
//                 onClick={handleEditClick}
//                 sx={{ backgroundColor: '#50623A', width:'50px',
//                 boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
//                 height: '25px', 
//                 justifyItems:'center'
//                   }}
//                 >
//                 Edit
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//       <Dialog open={isDeleteDialogOpen} onClose={handleCancelDelete}>
//         <DialogTitle>Confirm Delete</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Are you sure you want to delete this item?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCancelDelete}>Cancel</Button>
//           <Button onClick={handleConfirmDelete} color="error">Delete</Button>
//         </DialogActions>
//       </Dialog>
//       <Dialog open={isEditDialogOpen} onClose={() => setIsEditDialogOpen(false)}>
//         <DialogTitle>Edit Item</DialogTitle>
//         <DialogContent>
//           {/* Edit item form */}
//           <TextField
//             margin="dense"
//             id="title"
//             name="title"
//             label="Title"
//             fullWidth
//             value={editedData.title}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="dense"
//             id="description"
//             name="description"
//             label="Description"
//             fullWidth
//             value={editedData.description}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="dense"
//             id="price"
//             name="price"
//             label="Price"
//             fullWidth
//             value={editedData.price}
//             onChange={handleChange}
//           />
//           {/* Add other fields for editing */}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
//           <Button onClick={handleSaveEdit} color="success">Save</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// ItemBox.propTypes = {
//   img: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   onEdit: PropTypes.func.isRequired,
// };

// export default ItemBox;

import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Chip, Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, TextField, CircularProgress } from '@mui/material';

const ItemBox = ({ img, id, title, description, price, onDelete, onEdit }) => {
  const StatusText = "Posted";
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedData, setEditedData] = useState({ title, description, price });
  const [loading, setLoading] = useState(false);
  const [editError, setEditError] = useState(null);

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
      <Box flexDirection='column' key={id}>
        <Box
          width='195px'
          height='115px'
          borderRadius='5px'
          style={{
            backgroundImage: img ? `url("${img}")` : 'url("https://tisap.pythonanywhere.com/media/books/id.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
          }}
          sx={{ mt: 1 }}
        >
          <Chip
            variant='outlined'
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
        <Box sx={{ width: 'inherit', height: '110px', p: '1px', display: 'flex', flexDirection: 'column' }}>
          <Box>
            <Typography variant="subtitle2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
              <strong>Title: </strong>{title}
            </Typography>
            <Typography variant="subtitle2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
              <strong>Description:</strong>{description}
            </Typography>
            <Typography variant="subtitle2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
              <strong>Price:</strong>{price}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 1, px: 0 }}>
            <Button onClick={handleDeleteClick} disabled={loading}>
              {loading ? <CircularProgress size={14} /> : "Delete"}
            </Button>
            <Button variant="contained" color="success" onClick={handleEditClick} disabled={loading}>
              Edit
            </Button>
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
};

export default ItemBox;
