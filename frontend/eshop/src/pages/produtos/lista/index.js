import React, { useEffect, useState } from "react";
import ToolBarPages from "../../../components/surfaces/toolBar";
import { Box, Grid, Paper } from "@mui/material";
import { iniProdutos } from "../../../inicialization/initial";
import useProdutos from "../../../hooks/useProdutos";
import { CardProdutos } from "../../../components/surfaces/card";
import { ContainerPages } from "../../../components/layout/container";

export default function Produtos() {
    const { getProdutos, produtos } = useProdutos();
    const [produto, setProduto] = useState(iniProdutos);

    useEffect(() => {
        getProdutos();
    }, [])

    function ListProdutos(produto, p) {
        return <Grid key={p} item xs={12} md={4} lg={3}>
            <CardProdutos tipo='cadastro'
                nome={produto.Nome}
                descricao={produto.Descricao}
                preco={produto.Preco.replace(".", ",")}
                estoque={produto.Estoque}
                categoria={produto.CategoriaID}
                id={produto.ID}
            />
        </Grid>

    }

    return (
        <ContainerPages >
            <ToolBarPages title='Cadastro de Produtos' />
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