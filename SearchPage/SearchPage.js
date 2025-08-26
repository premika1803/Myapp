import React, { useState } from 'react';
import { Container, TextField, List, ListItem, ListItemText, Paper, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { brown,common } from '@mui/material/colors';


const discounts = [
    { id: 1, name: '50% off on Shoes', description: 'Get 50% off on all shoes at XYZ store.', imageUrl: 'https://sothebys-com.brightspotcdn.com/dims4/default/07f69eb/2147483647/strip/true/crop/658x358+0+0/resize/684x372!/quality/90/?url=http:%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F00%2F76%2F0703bab14d9db8e90b9594ffa9dc%2Fsothebys-md.brightspotcdn.jpg' },
    { id: 2, name: 'Buy 1 Get 1 Free', description: 'Buy one get one free on all T-shirts at ABC store.', imageUrl: 'https://cf.shopee.com.my/file/ca1471a5cddb13672cfdda7f2835d745' },
    { id: 3, name: '20% off on Electronics', description: 'Save 20% on all electronics at DEF store.', imageUrl: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw7c3968a9/images/Titan/Catalog/1843QM02_1.jpg' },
];

const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(discounts);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            const filtered = discounts.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
            setResults(filtered);
        }
    };

    return (
        <Container component="main" maxWidth="md" sx={{height:'100vh'}}>
            <Paper elevation={10} style={{ padding: '20px', marginTop: '50px', backgroundImage: 'url("https://i.pinimg.com/originals/65/4f/9a/654f9a4bfd715b2537a2b9e1e4220c0d.jpg")' }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography component="h1" variant="h5">Search Discounts</Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="search"
                        label="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleSearch}
                    />
                    <List>
                        {results.map((discount) => (
                            <ListItem key={discount.id}>
                                <img src={discount.imageUrl} alt={discount.name} style={{ width: '50px', marginRight: '10px' }} />
                                {/* <ListItemText primary={discount.name} secondary={discount.description} /> */}
 
 <p>{discount.name} </p>    
                            <Button
                                    variant="contained"
                                    color="white"
                                    sx={{backgroundColor:brown[500],color:common.white}}
                                    
                                    onClick={() => navigate(`/product/${discount.id}`)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    View Product
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{backgroundColor:brown[500],color:common.white}} 
                        onClick={() => navigate('/home')}
                        style={{ marginTop: '20px' }}
                    >
                        Go to Home
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default SearchPage;
