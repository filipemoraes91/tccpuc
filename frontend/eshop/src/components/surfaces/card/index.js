import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function CardCliente() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Box>
                    <Typography variant="h5" component="div">
                        Filipe Moraes
                    </Typography>
                    <Typography variant="body2">
                        Código: 1
                        <br />
                        CPF: 131.371.817-39
                        <br />
                        Endereço:
                        <br />
                        Cachoeiro de Itapemirim - ES
                        <br />
                        Aimoré, 151, Aquidabã
                        <br />
                        Telefone: 28 99921-3387
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button size="small">Bloquear</Button>
                <Button size="small">Editar</Button>
            </CardActions>

        </Card >
    );
}