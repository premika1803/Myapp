import React from 'react';
import { Button, TextField, Container, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { brown,common } from '@mui/material/colors';

const Signup = () => {
    const navigate = useNavigate();
    const handleSign = () => {
        navigate("/");
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={10} style={{ padding: '20px', marginTop: '50px', backgroundImage: 'url("https://i.pinimg.com/originals/65/4f/9a/654f9a4bfd715b2537a2b9e1e4220c0d.jpg")' }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography component="h1" variant="h5">Welcome to Signup Page</Typography>
                    <form style={{ width: '100%', marginTop: '20px' }}>
                        <TextField variant="outlined" margin="normal" required fullWidth id="firstName" label="First Name" name="firstName" autoComplete="given-name" />
                        <TextField variant="outlined" margin="normal" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
                        <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                        <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
                        <TextField variant="outlined" margin="normal" required fullWidth name="confirmPassword" label="Confirm Password" type="password" id="confirmPassword" autoComplete="new-password" />
                        <TextField variant="outlined" margin="normal" required fullWidth name="phoneNumber" label="Phone Number" type="tel" id="phoneNumber" autoComplete="tel" />
                        <Button type="submit" fullWidth variant="contained" color="primary"  sx={{backgroundColor:brown[500],color:common.white}}  style={{ marginTop: '20px' }} onClick={handleSign}>Signup</Button>
                    </form>
                </Box>
            </Paper>
        </Container>
    );
};

export default Signup;
