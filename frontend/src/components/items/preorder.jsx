import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography, Box, Chip, Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 120,
    lineHeight: '60px',
    width: 250,
    overflow: 'hidden',
}));

export default function PreOrderBox() {

    return (
        <Grid container sx={{ mb: 1, pl: 1 }}>
            <Item elevation={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 0.3, backgroundColor: "#F5F5F5" }}>
                <Box flexDirection='column'>
                    <Box sx={{ width: '250px', height: '100%', p: '1px', display: 'flex', flexDirection: 'column' }}>
                        <Box>
                            <Typography sx={{ fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
                                <strong>Title: </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Typography>
                            <Typography sx={{ fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
                                <strong>Description:</strong> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </Typography>
                            <Typography sx={{ fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
                                <strong>Price:</strong> P100
                            </Typography>
                        </Box>
                        <Button sx={{
                            width: '110px',
                            height: '30px',
                            m: 1,
                            backgroundColor: "#FFFFFF",
                            color: '#50623A',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', justifyItems: 'end'
                            , textTransform: 'capitalize'
                        }}>
                            Download
                        </Button>
                    </Box>
                </Box>
            </Item>
        </Grid>
    );
}