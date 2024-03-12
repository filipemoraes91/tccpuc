import React, { useEffect, useState } from "react";
import { ContainerPages } from "../../components/layout/container";
import { Box, Grid, Paper } from "@mui/material";
import useProdutos from "../../hooks/useProdutos";
import { CardItemCar } from "../../components/surfaces/card";
import useCarrinho from "../../hooks/useCarrinho";

export default function Produtos() {
    const { getItens, deleteItens, isLoading, itens } = useCarrinho();

    useEffect(() => {
        getItens()
    }, [])

    const delItem = (ID) => {
        deleteItens(ID)
    }

    function ListItens(item, i) {
        return <CardItemCar key={i}
            nome={item.Nome}
            descricao={item.Descricao}
            preco={item.Preco}
            estoque={item.Estoque}
            categoria={item.CategoriaID}
            qtde={item.Quantidade}
            onClickDelete={() => delItem(item.ID)}
        />

    }

    return (
        <ContainerPages>
            <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
                <Box p={1}>
                    {itens ? itens > 0 ? itens.map(ListItens) : <h4>Não existem itens no carrinho</h4> : <h1>Aguarde...</h1>}
                </Box>
            </Paper>
        </ContainerPages >
    )
}