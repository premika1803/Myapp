import React, { useState } from 'react';
import { Container, Paper, Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { brown,common } from '@mui/material/colors';
const discounts = [
    { id: 1, name: '50% off on Shoes', description: 'Get 50% off on all shoes at XYZ store.', imageUrl: 'https://example.com/shoes.jpg' },
    { id: 2, name: 'Buy 1 Get 1 Free', description: 'Buy one get one free on all T-shirts at ABC store.', imageUrl: 'https://example.com/tshirts.jpg' },
    { id: 3, name: '20% off on Electronics', description: 'Save 20% on all electronics at DEF store.', imageUrl: 'https://example.com/electronics.jpg' },
];
const Cart = () => {
    const [cartItems, setCartItems] = useState([...discounts]); // Replace with actual cart data
const nav = useNavigate();
    const handleCheckout = () => {
        // Logic for checkout
        nav('/payment-success')
    };

    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={10} style={{ padding: '20px', marginTop: '50px', backgroundImage: 'url("https://i.pinimg.com/originals/65/4f/9a/654f9a4bfd715b2537a2b9e1e4220c0d.jpg")' }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography component="h1" variant="h5">Your Cart</Typography>
                    <List>
                        {cartItems.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={item.name} secondary={item.description} />
                            </ListItem>
                        ))}
                    </List>
                    <Button variant="contained" color="primary" sx={{backgroundColor:brown[500],color:common.white}} style={{ marginTop: '20px' }} onClick={handleCheckout}>Checkout</Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Cart;
