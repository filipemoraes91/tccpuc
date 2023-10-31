import React, { useState } from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import { iniUser } from '../../inicialization/initial';
import { LogoM } from '../../images';
import { TFPassword, TFUser } from '../../components/inputs/textField';
import { BtnCadastrar } from '../../components/inputs/button';

export default function CadUser() {
  const [user, setUser] = useState(iniUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
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
                  <Typography variant="h5">Novo Cadastro</Typography>
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
                  <BtnCadastrar />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </form>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <TextField
    //     label="Nome"
    //     name="nome"
    //     value={user.nome}
    //     onChange={handleInputChange}
    //     fullWidth
    //     margin="normal"
    //   />
    //   <TextField
    //     label="Email"
    //     name="email"
    //     type="email"
    //     value={user.email}
    //     onChange={handleInputChange}
    //     fullWidth
    //     margin="normal"
    //   />
    //   <TextField
    //     label="Senha"
    //     name="senha"
    //     type="password"
    //     value={user.senha}
    //     onChange={handleInputChange}
    //     fullWidth
    //     margin="normal"
    //   />
    //   <Button type="submit" variant="contained" color="primary">
    //     Cadastrar
    //   </Button>
    // </form>
  );
};
