import React, { useState } from 'react';
import { Button, Container, Typography, Paper, Box, Grid } from '@mui/material';
import './index.css'
import { LogoP, LogoM } from '../../images';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { TFDefault, TFPassword, TFPasswordConfirme, TFUser } from '../../components/inputs/textField';
import { iniUser } from '../../inicialization/initial';
import { BtnLogin } from '../../components/inputs/button';
import useUsuarios from '../../hooks/useUsuarios';

export default function Login() {
    const { login } = useAuth();
    const { postUsuario } = useUsuarios();
    const [user, setUser] = useState(iniUser);
    const [novo, setNovo] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    function handleSubmitLogin(e) {
        e.preventDefault();
        login(user);
    }

    function handleSubmitNovoLogin(e) {
        e.preventDefault();
        if (user.Senha !== user.ConfirmarSenha) {
            alert('As senhas não conferem!');
            return '';
        } else
            if (user.Email === '' || user.Nome === '') {
                alert('Nome e Email obrigatorios!');
                return '';
            } else {
                postUsuario(user);
                // window.location.reload();
            }
    }

    return (
        novo ?
            <form onSubmit={handleSubmitNovoLogin} style={{ marginTop: '50px' }}>
                < Container component="main" maxWidth="xs" >
                    <Paper elevation={3}>
                        <Box p={2} style={{ background: 'black', padding: '10px', borderRadius: '5px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} align="center">
                                    <LogoP />
                                    <Typography variant="h5" style={{ color: '#fff', fontStyle: 'bold' }} >Novo Usuário</Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Box style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
                                        <TFDefault fullWidth={true} name="Nome" label="Nome" value={user.Nome} onChange={handleInputChange} />
                                    </Box>
                                </Grid>

                                <Grid item xs={12}>
                                    <Box style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
                                        <TFDefault fullWidth={true} name="CPF" label="CPF" value={user.CPF} onChange={handleInputChange} />
                                    </Box>
                                </Grid>

                                <Grid item xs={12}>
                                    <Box style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
                                        <TFUser value={user.Email}
                                            onChange={handleInputChange}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
                                        <TFPassword value={user.Senha}
                                            onChange={handleInputChange}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
                                        <TFPasswordConfirme value={user.ConfirmarSenha}
                                            onChange={handleInputChange}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button onClick={() => setNovo(true)} type='submit' fullWidth variant="contained" color="info">Cadastrar</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button onClick={() => setNovo(false)} fullWidth variant="contained" color="red">Cancelar</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Container >
            </form >
            :
            <div className="container">
                <form onSubmit={handleSubmitLogin} >
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
                                            <TFUser value={user.Email}
                                                onChange={handleInputChange}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
                                            <TFPassword value={user.Senha}
                                                onChange={handleInputChange}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <BtnLogin />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button onClick={() => setNovo(true)} type='button' fullWidth variant="contained" color="info">Cadastre-se</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Container>
                </form>
            </div >)
}