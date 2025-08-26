import React from 'react';
import { Container, Paper, Box, Typography, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { brown,common } from '@mui/material/colors';
const discounts = [
    { id: 1, name: '50% off on Shoes', description: 'Get 50% off on all shoes at XYZ store.', imageUrl: 'https://sothebys-com.brightspotcdn.com/dims4/default/07f69eb/2147483647/strip/true/crop/658x358+0+0/resize/684x372!/quality/90/?url=http:%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F00%2F76%2F0703bab14d9db8e90b9594ffa9dc%2Fsothebys-md.brightspotcdn.jpg' },
    { id: 2, name: 'Buy 1 Get 1 Free', description: 'Buy one get one free on all T-shirts at ABC store.', imageUrl: 'https://example.com/tshirts.jpg' },
    { id: 3, name: '20% off on Electronics', description: 'Save 20% on all electronics at DEF store.', imageUrl: 'https://example.com/electronics.jpg' },
];

const ProductDisplay = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = discounts.find(item => item.id === parseInt(id));

    if (!product) return <Typography variant="h6">Product not found</Typography>;

    return (
        <Container component="main" maxWidth="md" >
            <Paper elevation={10} style={{ padding: '20px', marginTop: '50px', backgroundImage: 'url("https://i.pinimg.com/originals/65/4f/9a/654f9a4bfd715b2537a2b9e1e4220c0d.jpg")' }}>
            
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography component="h1" variant="h5">{product.name}</Typography>
                    <img src={product.imageUrl} alt={product.name} style={{ width: '200px', margin: '20px 0' }} />
                    <Typography component="h2" variant="h6" style={{ marginTop: '20px' }}>{product.description}</Typography>
                    {/* <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>Add to Cart</Button> */}
                    <br></br>
                    <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{backgroundColor:brown[500],color:common.white}} 
                                    onClick={() => navigate(`/cart`)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Go To Cart
                                </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default ProductDisplay;








