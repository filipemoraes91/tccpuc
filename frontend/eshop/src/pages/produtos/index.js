import React, { useState } from "react";
import { ContainerPages } from "../../components/layout/container";
import ToolBarPages from "../../components/surfaces/toolBar";
import { Box, Paper, Stack } from "@mui/material";
import { TFDefault } from "../../components/inputs/textField";
import { iniProdutos } from "../../inicialization/initial";
import { BtnCancelar, BtnSalvar, BtnVoltar } from "../../components/inputs/button";
import useProdutos from "../../hooks/useProdutos";
import { StackCenter, StackJustify, StackRight } from "../../components/layout/stack";

export default function Produtos() {
    const { postProduto, produtos } = useProdutos();
    const [produto, setProduto] = useState(iniProdutos);
    const [showForm, setShowForm] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postProduto(produto)
    };

    function ListProdutos(produto, p) {
        return <h1 key={p}>{produto.Nome}</h1>
    }

    function FormProduto() {
        return <form onSubmit={handleSubmit}>
            <Stack spacing={1}>
                <TFDefault fullWidth={true} name='nome' onChange={handleInputChange} value={produto.nome} />
                <TFDefault fullWidth={true} name='descricao' onChange={handleInputChange} value={produto.descricao} />
                <TFDefault fullWidth={true} name='preco' onChange={handleInputChange} value={produto.preco} />
                <TFDefault fullWidth={true} name='estoque' onChange={handleInputChange} value={produto.estoque} />
                <StackRight>
                    <BtnSalvar />
                    <BtnCancelar onClick={() => setShowForm(false)} />
                </StackRight>
            </Stack>
        </form>
    }

    return (
        <ContainerPages>
            <ToolBarPages title='Cadastro de Produtos' btnVisible={!showForm} onClickNovo={() => setShowForm(true)} />
            <br />
            <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
                <Box p={1}>
                    {showForm ? <FormProduto /> :
                        <>
                            {produtos ? produtos.map(ListProdutos) : <h1>Aguarde...</h1>}
                        </>
                    }
                </Box>


            </Paper>
        </ContainerPages >
    )
}