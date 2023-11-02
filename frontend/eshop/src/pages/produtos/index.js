import React, { useState } from "react";
import { ContainerPages } from "../../components/layout/container";
import ToolBarPages from "../../components/surfaces/toolBar";
import { Box, Grid, Paper, Stack } from "@mui/material";
import { TFDefault } from "../../components/inputs/textField";
import { iniProdutos } from "../../inicialization/initial";
import { BtnCancelar, BtnSalvar } from "../../components/inputs/button";
import useProdutos from "../../hooks/useProdutos";
import { StackJustify, StackRight } from "../../components/layout/stack";
import { CardProdutos } from "../../components/surfaces/card";

export default function Produtos() {
    const { postProduto, produtos } = useProdutos();
    const [produto, setProduto] = useState(iniProdutos);
    const [showForm, setShowForm] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = () => {
        postProduto(produto)
    };

    function ListProdutos(produto, p) {
        return <Grid key={p} item xs={12} md={4} lg={3}>
            <CardProdutos tipo='cadastro'
                nome={produto.Nome}
                descricao={produto.Descricao}
                preco={produto.Preco}
                estoque={produto.Estoque}
                categoria={produto.CategoriaID}
            />
        </Grid>

    }

    return (
        <ContainerPages>
            <ToolBarPages title='Cadastro de Produtos' btnVisible={!showForm} onClickNovo={() => setShowForm(true)} />
            <br />
            <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
                <Box p={1}>
                    {showForm ?
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={1} >
                                <TFDefault fullWidth={true} name='nome' onChange={handleInputChange} value={produto.nome} label="Nome" />
                                <TFDefault fullWidth={true} name='descricao' onChange={handleInputChange} value={produto.descricao} label="Descrição" />
                                <TFDefault fullWidth={true} name='preco' onChange={handleInputChange} value={produto.preco} label="Preço" />
                                <TFDefault fullWidth={true} name='estoque' onChange={handleInputChange} value={produto.estoque} label="Estoque" />
                                <StackRight>
                                    <BtnSalvar />
                                    <BtnCancelar onClick={() => setShowForm(false)} />
                                </StackRight>
                            </Stack>
                        </form>
                        :
                        <Grid container spacing={2}>
                            {produtos ? produtos.map(ListProdutos) : <h1>Aguarde...</h1>}
                        </Grid>
                    }
                </Box>
            </Paper>
        </ContainerPages >
    )
}