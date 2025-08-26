import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { brown,common } from '@mui/material/colors';

const discounts = [
    { id: 1, name: '50% off on Shoes', description: 'Get 50% off on all shoes at XYZ store.' },
    { id: 2, name: 'Buy 1 Get 1 Free', description: 'Buy one get one free on all T-shirts at ABC store.' },
    { id: 3, name: '20% off on Electronics', description: 'Save 20% on all electronics at DEF store.' },
];

const Home = () => {
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/search");
    };
  
    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={10} style={{ padding: '20px', marginTop: '50px', backgroundImage: 'url("https://i.pinimg.com/originals/65/4f/9a/654f9a4bfd715b2537a2b9e1e4220c0d.jpg")' }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography component="h1" variant="h5">Welcome to DiscountFinds</Typography>
                    <Typography component="h2" variant="h6" style={{ marginTop: '20px' }}>Latest Discounts</Typography>
                    <List>
                        {discounts.map((discount) => (
                            <ListItem key={discount.id}>
                                <ListItemText primary={discount.name} secondary={discount.description} />
                            </ListItem>
                        ))}
                    </List>
                    <Button type="submit" smallWidth variant="contained" color="primary" sx={{backgroundColor:brown[500],color:common.white}} style={{ marginTop: '20px' }} onClick={handleSearch}>Search Discounts</Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Home;
