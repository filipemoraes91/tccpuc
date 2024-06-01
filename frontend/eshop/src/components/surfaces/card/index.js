import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BtnAddCart, BtnDelete, BtnEditar, BtnOnFavotiro } from '../../inputs/button';
import { StackCenter, StackJustify } from '../../layout/stack';

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

export function CardProdutos(props) {
    const produto = props.produto;


    return (
        <Card sx={{ minWidth: 275, minHeight: 400 }}>
            <CardContent>
                <Box>
                    <Typography variant="button" component="div" style={{ fontWeight: '600', fontSize: 18 }}>
                        {produto.Nome}aaaa
                    </Typography>
                    <Typography variant="body2">
                        {produto.Descricao}
                        <br />
                        R$ {produto.Preco}
                        <br />
                        Estoque:{produto.Estoque}
                        <br />
                        Categoria:{produto.Categoria}
                    </Typography>
                    <p />
                    <StackCenter>
                        <img src={produto.LinkImg ? produto.LinkImg : 'https://img.freepik.com/vetores-gratis/ilustracao-de-galeria-icone_53876-27002.jpg?t=st=1710210992~exp=1710214592~hmac=8fd0c7965707fe14d785ae4861d2cd4125041f32ae63cf32f4cb1c960b8aa6f3&w=740'} width={200} height={140} />
                    </StackCenter>
                </Box>
            </CardContent>
            <StackCenter>
                <CardActions disableSpacing >
                    {props.tipo === 'cadastro' ?
                        <>
                            <BtnEditar onClick={() => window.location.href = `/produtos/editar/${produto.ID}`} />
                            <span style={{ margin: '5px' }} />
                            <BtnDelete onClick={props.onClickDelete} />
                        </>
                        :
                        <>
                            <BtnAddCart onClick={props.addCarrinho} />
                            <span style={{ margin: '5px' }} />
                            <BtnOnFavotiro onClick={props.addFavorito} />
                        </>
                    }
                </CardActions>
            </StackCenter>
        </Card >
    );
}

export function CardItemCar(props) {
    const produto = props.produto;
    return (
        <Card sx={{ margin: '10px' }}>
            <CardContent>
                <StackJustify>
                    <img src={produto.LinkImg ? produto.LinkImg : 'https://img.freepik.com/vetores-gratis/ilustracao-de-galeria-icone_53876-27002.jpg?t=st=1710210992~exp=1710214592~hmac=8fd0c7965707fe14d785ae4861d2cd4125041f32ae63cf32f4cb1c960b8aa6f3&w=740'} width={200} height={140} />
                    <Box>
                        <Typography variant="button" component="div" style={{ fontWeight: '600', fontSize: 18 }}>
                            {produto.Nome}
                        </Typography>
                        <Typography variant="body2">
                            {produto.Descricao}
                            <br />
                            R$ {produto.Preco}
                            <br />
                            {produto.Categoria}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2">{produto.Quantidade}</Typography><br />
                        {props.showBtn ? <BtnDelete onClick={props.onClickDelete} /> : ''}
                    </Box>
                </StackJustify>
            </CardContent>
        </Card >
    );
}
