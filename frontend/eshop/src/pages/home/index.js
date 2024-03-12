import React, { useEffect, useState } from "react";
import { ContainerPages } from "../../components/layout/container";
import { Box, Grid, Paper } from "@mui/material";
import useProdutos from "../../hooks/useProdutos";
import { CardProdutos } from "../../components/surfaces/card";
import useCarrinho from "../../hooks/useCarrinho";

export default function Produtos() {
    const { getProdutos, produtos } = useProdutos();
    const { postItemCarrinho } = useCarrinho()

    useEffect(() => {
        getProdutos();
    }, [])

    function ListProdutos(produto, p) {
        return <Grid key={p} item xs={12} md={4} lg={3}>
            <CardProdutos
                produto={produto}
                addCarrinho={() => postItemCarrinho(produto)}
            />
        </Grid>

    }

    return (
        <ContainerPages>
            <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
                <Box p={1}>
                    <Grid container spacing={2}>
                        {produtos ? produtos.map(ListProdutos) : <h1>Aguarde...</h1>}
                    </Grid>
                </Box>
            </Paper>
        </ContainerPages >
    )
}