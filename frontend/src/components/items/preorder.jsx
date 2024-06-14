import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography, Box, Button } from '@mui/material';
import QRCode from 'react-qr-code';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { toPng } from 'html-to-image';
import { format } from 'date-fns';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 'fit',
    lineHeight: '60px',
    width: 250,
    overflow: 'hidden',
}));

const StyledQRCode = styled(QRCode)({
    width: 128, // Adjust size as needed
    height: 128, // Adjust size as needed
});

const VIEW_PURCHASE_API_URL = 'http://127.0.0.1:8000/view-purchase/';


export default function PreOrderBox() {
    const [orders, setOrders] = useState([]);
    const qrCodeRefs = useRef([]);

    const fetchData = async () => {
        const token = localStorage.getItem('authToken');
        try {
            const response = await axios.get(VIEW_PURCHASE_API_URL, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            setOrders(response.data);
            console.log('Orders: ', response.data)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDownload = async (index, bookName) => {
        try {
            const dataUrl = await toPng(qrCodeRefs.current[index], { backgroundColor: '#FFFFFF' });
            const link = document.createElement('a');
            link.download = `${bookName.replace(/\s+/g, '-')}.png`; // Replacing spaces with dashes for a valid filename
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error('Failed to download QR code:', error);
        }
    };

    return (
        <Grid container sx={{ mb: 1, pl: 1 }} spacing={2}>
            {orders.map((item, index) => (
                <Grid item key={index}>
                    <Item elevation={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 0.3, backgroundColor: "#F5F5F5" }}>
                        <Box flexDirection='column'>
                            <Box
                                sx={{ width: '250px', height: '100%', p: '1px', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF' }}
                                ref={el => qrCodeRefs.current[index] = el}
                            >
                                <Typography sx={{ padding: '10px 20px 10px 20px', fontSize: '14px', textAlign: 'center', bgcolor: '#c1c6e6', margin: '0 0 20px', whiteSpace: 'pre-wrap' }}>
                                    Please present this to the {'\n'}{item.claim_hub}
                                </Typography>
                                <Box>
                                    <StyledQRCode value={`${item.transaction_hash}`} />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'center' }}>
                                        <strong>{item.purchase_book}</strong>
                                    </Typography>
                                    <Typography sx={{ fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'center' }}>
                                        {`@${item.seller}`}
                                    </Typography>
                                    <Typography sx={{ fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'center' }}>
                                        {format(new Date(item.created_at), 'MM-dd-yy')}
                                    </Typography>
                                </Box>
                            </Box>
                            <Button
                                sx={{
                                    width: '110px',
                                    height: '30px',
                                    m: 1,
                                    backgroundColor: "#10439f",
                                    color: 'white', "&:hover": { scale: '95%', color: '#10439f', background: '#c1c6e6' },
                                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                    justifyItems: 'end',
                                    textTransform: 'capitalize',

                                }}
                                onClick={() => handleDownload(index, item.purchase_book)}
                            >
                                Download
                            </Button>
                        </Box>
                    </Item>
                </Grid>
            ))}
        </Grid>
    );
}
