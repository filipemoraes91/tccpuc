import React, { useState } from "react";
import { ContainerPages } from "../../components/layout/container";
import ToolBarPages from "../../components/surfaces/toolBar";
import { Box, Grid, Paper, Stack } from "@mui/material";
import { TFDefault } from "../../components/inputs/textField";
import { iniProdutos } from "../../inicialization/initial";
import { BtnCadastrar } from "../../components/inputs/button";
import useProdutos from "../../hooks/useProdutos";

export default function Produtos() {
    const [produto, setProduto] = useState(iniProdutos);
    const { postProduto } = useProdutos();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postProduto(produto)
    };

    return (
        <ContainerPages>
            <ToolBarPages title='Cadastro de Clientes' />
            <br />
            <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={1}>
                        <TFDefault fullWidth={true} name='nome' onChange={handleInputChange} value={produto.nome}/>
                        <TFDefault fullWidth={true} name='descricao' onChange={handleInputChange} value={produto.descricao}/>
                        <TFDefault fullWidth={true} name='preco' onChange={handleInputChange} value={produto.preco}/>
                        <TFDefault fullWidth={true} name='estoque' onChange={handleInputChange} value={produto.estoque}/>
                        <BtnCadastrar />
                    </Stack>
                </form>
            </Paper>
        </ContainerPages >
    )
}