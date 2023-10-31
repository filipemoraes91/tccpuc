import React, { useState } from 'react';
import { Button, Container, Typography, Paper, Box, Grid } from '@mui/material';
import './index.css'
import { LogoM } from '../../images';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { TFPassword, TFUser } from '../../components/inputs/textField';
import { iniUser } from '../../inicialization/initial';
import { BtnLogin } from '../../components/inputs/button';

function Login() {
    const [user, setUser] = useState(iniUser);
    const { login } = useAuth();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(user.email, user.senha);

    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <Container component="main" maxWidth="xs">
                    <Paper elevation={3}>
                        <Box p={2} style={{ background: 'black', padding: '10px', borderRadius: '5px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} align="center">
                                    <LogoM />
                                    <Typography variant="h5" style={{ color: '#fff', fontStyle: 'bold' }} >Login</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
                                        <TFUser value={user.email}
                                            onChange={handleInputChange}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
                                        <TFPassword value={user.senha}
                                            onChange={handleInputChange}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <BtnLogin/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button component={Link} to="/cadastrar" fullWidth variant="contained" color="info">Cadastre-se</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Container>
            </form>
        </div>
    );
}

export default Login;
