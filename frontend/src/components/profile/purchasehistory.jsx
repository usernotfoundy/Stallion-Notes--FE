/* eslint-disable no-unused-vars */
import Typography from '@mui/material/Typography';
import { Container, Divider, Box, TableHead, TableRow, TableCell, Table } from '@mui/material';
import ItemCard from '../items/itemcard';

export default function PurchaseHistory() {

  return (
    <Box sx={{ maxHeight: '464px', overflow: 'auto', maxWidth: 'auto' }}>
      <Box>
        <Typography variant="h6" fontFamily="Poppins" sx={{ display: 'flex', justifyContent: 'start', fontSize: '28px' }} gutterBottom>
          Puchase History
        </Typography>
      </Box>
      <Divider sx={{ mt: 1.9, mb: 1 }} />
      <Box ml='8px'>
        <TableRow sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TableCell sx={{ border: 'none', ml: 30 }}>Items</TableCell>
          <TableCell sx={{ border: 'none', ml: 10 }}>Price</TableCell>
          <TableCell sx={{ border: 'none' }}>Date</TableCell>
          <TableCell sx={{ border: 'none', mr: 3 }}>Transaction No.</TableCell>
        </TableRow>
        <Box sx={{ mt: 1, mb: 2 }}>
          <ItemCard />
          <ItemCard />
        </Box>
      </Box>
    </Box>
  );
}