import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import ECommerceApp from '../../components/surfaces/appBar';

function HomePage() {
  return (
    <Container maxWidth="xl">
        <ECommerceApp/>
      <br/>

      <Grid container spacing={2}>
        {/* Exemplo de produtos */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://via.placeholder.com/150"
              alt="Produto 1"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Produto 1
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Descrição do Produto 1
              </Typography>
              <Typography variant="h6" color="textSecondary">
                $10.00
              </Typography>
              <Button variant="contained" color="primary">
                Adicionar ao Carrinho
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Adicione mais produtos semelhantes conforme necessário */}
      </Grid>
    </Container>
  );
}

export default HomePage;
