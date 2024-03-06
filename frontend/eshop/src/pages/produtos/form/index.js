import React, { useEffect, useState } from "react";
import { ContainerPages } from "../../../components/layout/container";
import ToolBarPages from "../../../components/surfaces/toolBar";
import { Box, Paper, Stack, TextField } from "@mui/material";
import { iniProdutos } from "../../../inicialization/initial";
import { BtnCancelar, BtnSalvar } from "../../../components/inputs/button";
import useProdutos from "../../../hooks/useProdutos";
import { StackRight } from "../../../components/layout/stack";
import { useParams } from "react-router-dom";
import { TFDefault } from "../../../components/inputs/textField";

export default function CadProdutos() {
    const { putProduto, postProduto, getProduto, produto, isLoading } = useProdutos();
    const { id } = useParams();
    const [prod, setProd] = useState(iniProdutos);

    useEffect(() => {
        getProduto(id);
    }, [])


    useEffect(() => {
        if (produto && !isLoading && prod.ID === 0)
            setProd(produto);
    }, [isLoading])


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'preco') {
            setProd({ ...prod, [name]: value.replace(",", ".") });
        } else {
            setProd({ ...prod, [name]: value });
        }
    };

    const handleSubmit = () => {
        if (window.location.pathname === '/novo')
            postProduto(prod);
        else
            putProduto(prod);
    };

    return (
        <ContainerPages>
            <ToolBarPages title='Cadastro de Produtos' />
            <br />
            <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
                <Box p={1}>
                    {!isLoading && prod.ID > 0 || window.location.pathname === '/novo' ?
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={1} >
                                <TFDefault fullWidth={true} id="Nome" name='Nome' onChange={handleInputChange} value={prod.Nome} label="Nome" />
                                <TFDefault fullWidth={true} id="Descricao" name='Descricao' onChange={handleInputChange} value={prod.Descricao} label="Descrição" />
                                <TFDefault fullWidth={true} id="Preco" name='Preco' onChange={handleInputChange} value={prod.Preco.replace(".", ",")} label="Preço" />
                                <TFDefault fullWidth={true} id="Estoque" name='Estoque' onChange={handleInputChange} value={prod.Estoque} label="Estoque" />
                                <StackRight>
                                    <BtnSalvar />
                                    <BtnCancelar onClick={() => window.location.href = '/produtos'} />
                                </StackRight>
                            </Stack>
                        </form>
                        : 'Aguarde'}
                </Box>
            </Paper>
        </ContainerPages >
    )
}