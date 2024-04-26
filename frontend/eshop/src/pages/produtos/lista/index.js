import React, { useEffect } from "react";
import ToolBarPages from "../../../components/surfaces/toolBar";
import { Box, Grid, Paper } from "@mui/material";
import useProdutos from "../../../hooks/useProdutos";
import { CardProdutos } from "../../../components/surfaces/card";
import { ContainerPages } from "../../../components/layout/container";

export default function Produtos() {
    const { getProdutos, produtos, deleteProduto } = useProdutos();

    useEffect(() => {
        getProdutos();
    }, [])

    function deleteProd(id) {
        deleteProduto(id);
        window.location.reload();
    }

    function ListProdutos(produto, p) {
        return <Grid key={p} item xs={12} md={4} lg={3}>
            <CardProdutos tipo='cadastro'
                produto={produto}
                onClickDelete={() => deleteProd(produto.ID)}
            />
        </Grid>
    }

    return (
        <ContainerPages >
            <ToolBarPages title='Cadastro de Produtos' btnVisible onClickNovo={() => window.location.href = '/produtos/novo'} />
            <br />
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