import React from 'react';
import { Container, Paper, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { brown,common } from '@mui/material/colors';

const PaymentSuccess = () => {
    const nav = useNavigate();
    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={10} style={{ padding: '20px', marginTop: '50px', backgroundImage: 'url("https://i.pinimg.com/originals/65/4f/9a/654f9a4bfd715b2537a2b9e1e4220c0d.jpg")' }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography component="h1" variant="h5">Payment Successful</Typography>
                    <Typography component="h2" variant="h6" style={{ marginTop: '20px' }}>Thank you for your purchase!</Typography>
                    <Button variant="contained" color="primary" sx={{backgroundColor:brown[500],color:common.white}} style={{ marginTop: '20px' }} onClick={()=>{nav('/home')}}>Back to Home</Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default PaymentSuccess;
