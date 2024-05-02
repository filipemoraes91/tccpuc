import React, { useEffect, useState } from "react";
import { ContainerPages } from "../../components/layout/container";
import { Box, Paper, TextField, Typography } from "@mui/material";
import { CardItemCar } from "../../components/surfaces/card";
import useCarrinho from "../../hooks/useCarrinho";
import ToolBarPages from "../../components/surfaces/toolBar";
import { StackRight } from "../../components/layout/stack";
import { TGPageTitle } from "../../components/dataDisplay/typography";
import { BtnFinalizar } from "../../components/inputs/button";

export default function Produtos() {
    const { getItens, deleteItens, isLoading, itens } = useCarrinho();
    let total = 0;

    useEffect(() => {
        getItens()
    }, [])

    function ListItens(item, i) {
        total = total + parseFloat(item.Preco);
        return <CardItemCar key={i}
            produto={item}
            onClickDelete={() => deleteItens(item.ID)}
        />
    }

    return (
        <ContainerPages>
            <ToolBarPages title='Meu Carrinho' />
            {itens ? itens.length > 0 ? itens.map(ListItens) : <h4>Não existem itens no carrinho</h4> : <h1>Aguarde...</h1>}
            <Paper elevation={1}>
                <Box p={1}>
                    <Box p={1}>
                        <StackRight>
                            <Typography variant="button" component="div" sx={{ flexGrow: 1, fontSize: 16, fontWeight: '600' }} >Total dos Itens</Typography>
                            <Typography variant="button" component="div" sx={{ fontSize: 16, fontWeight: '600' }} >{total.toFixed(2)}</Typography>
                        </StackRight>
                    </Box>
                    <StackRight>
                        <Box p={1}>
                            <BtnFinalizar />
                        </Box>
                    </StackRight>

                </Box>
            </Paper>
        </ContainerPages >
    )
}