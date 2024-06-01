import React, { useEffect } from "react";
import ToolBarPages from "../../../components/surfaces/toolBar";
import { Box, Grid, Paper } from "@mui/material";
import useFavoritos from "../../../hooks/useFavoritos";
import { CardProdutos } from "../../../components/surfaces/card";
import { ContainerPages } from "../../../components/layout/container";
import { useParams } from "react-router-dom";
import { TGMedio } from "../../../components/dataDisplay/typography";

export default function Favoritos() {
    const { id } = useParams();
    const { getFavoritos, favoritos, deleteFavoritos } = useFavoritos();

    useEffect(() => {
        if (id > 0)
            getFavoritos(id);
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
                        {favoritos?.length > 0 ? favoritos.map(ListProdutos) : <Box p={1}><TGMedio text='Nenhum item adicionado' /></Box>}
                    </Grid>
                </Box>
            </Paper>
        </ContainerPages >
    )
}