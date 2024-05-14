import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container, Divider, Box } from '@mui/material';
import PreOrderBox from '../items/preorder';

const color = '#10439F';

export default function ReportTab() {

    return (
        <Box sx={{ maxHeight: '464px', overflow: 'auto' }}>
            <Box display='flex' justifyContent='space-between'>
                <Typography variant="h6" fontFamily="Poppins" sx={{ display: 'flex', justifyContent: 'start', fontSize: '28px', color: `${color}` }} gutterBottom>
                    Report and Orders
                </Typography>
            </Box>
            <Divider sx={{ mt: 0.7, mb: 2 }} />
            <Typography fontFamily="Poppins" sx={{ fontWeight: '400', display: 'flex', justifyContent: 'start', fontSize: '25px', color: `${color}` }} gutterBottom>
                Pre-Orders
            </Typography>
            <PreOrderBox />
        </Box>
    );
}