import { Box,Typography } from "@mui/material";

export default function DividerWithText() {
    return (
      <Box sx={{display: 'flex',alignItems: 'center',textAlign: 'center',my: 2,}}>
        <Box sx={{ flexGrow: 1, height: '1px', bgcolor: 'text.secondary', ml:4 }} />
        <Typography sx={{mx:2, color: 'text.secondary',fontWeight:'redular' }}>
          or
        </Typography>
        <Box sx={{ flexGrow: 1, height: '1px', bgcolor: 'text.secondary' ,mr:4}} />
      </Box>
    );
  }