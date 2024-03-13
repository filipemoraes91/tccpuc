import React, { useEffect } from "react";
import ToolBarPages from "../../../components/surfaces/toolBar";
import { Box, Grid, Paper } from "@mui/material";
import useFavoritos from "../../../hooks/useFavoritos";
import { CardProdutos } from "../../../components/surfaces/card";
import { ContainerPages } from "../../../components/layout/container";

export default function Favoritos() {
    const { getFavoritos, favoritos, deleteFavoritos } = useFavoritos();

    useEffect(() => {
        getFavoritos();
    }, [])

    function ListProdutos(produto, p) {
        return <Grid key={p} item xs={12} md={4} lg={3}>
            <CardProdutos 
                produto={produto}
                addFavorito={() => deleteFavoritos(produto.ID)}
            />
        </Grid>
    }

    return (
        <ContainerPages >
            <ToolBarPages title='Meus Favoritos' />
            <br />
            <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
                <Box p={1}>
                    <Grid container spacing={2}>
                        {favoritos ? favoritos.map(ListProdutos) : <h1>Aguarde...</h1>}
                    </Grid>
                </Box>
            </Paper>
        </ContainerPages >
    )
}