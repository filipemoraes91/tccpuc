import React, { useState } from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import { iniUser } from '../../../inicialization/initial';
import { LogoM } from '../../../images';
import { TFPassword, TFText, TFUser } from '../../../components/inputs/textField';
import { BtnCadastrar } from '../../../components/inputs/button';
import useUsuarios from '../../../hooks/useUsuarios';

export default function CadUser() {
  const [user, setUser] = useState(iniUser);
  const { postUsuario } = useUsuarios();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    postUsuario({
      Nome: user.Nome,
      Email: user.Email,
      Senha: user.Senha,
      PerfilID: parseInt(0)
    });
    e.preventDefault();
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
                    <TFText name='Nome' label='Nome' value={user.Nome}
                      onChange={handleInputChange}
                    />
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
                  <BtnCadastrar />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </form>
    </div>
  );
};
