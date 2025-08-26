import React from 'react';
import { Button, TextField, Container, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { brown,common } from '@mui/material/colors';

const Login = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/home");
    };
    const handleSign = () => {
        navigate("/signup");
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={10} style={{ padding: '20px', marginTop: '50px', backgroundImage: 'url("https://i.pinimg.com/originals/65/4f/9a/654f9a4bfd715b2537a2b9e1e4220c0d.jpg")' }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <h3>DiscountFinds %</h3>
                    <Typography component="h3" variant="h5">Welcome to Login Page</Typography>
                    <form style={{ width: '100%', marginTop: '20px' }}>
                        <TextField variant="outlined" margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" />
                        <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                        <Button type="submit" fullWidth variant="contained" color="primary" sx={{backgroundColor:brown[500],color:common.white}} onClick={handleHome} style={{ marginTop: '20px' }}>Login</Button>
                        <br />
                        <Button type="submit" fullWidth variant="contained" color="primary"  sx={{backgroundColor:brown[500],color:common.white}} onClick={handleSign} style={{ marginTop: '20px' }}>Signup</Button>
                    </form>
                </Box>
            </Paper>
        </Container>
    );
};

export default Login;
