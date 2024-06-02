import React, { useEffect, useState } from "react";
import { ContainerPages } from "../../../components/layout/container";
import ToolBarPages from "../../../components/surfaces/toolBar";
import { Box, Paper, Stack } from "@mui/material";
import { iniProdutos } from "../../../inicialization/initial";
import { BtnCancelar, BtnSalvar } from "../../../components/inputs/button";
import useProdutos from "../../../hooks/useProdutos";
import { StackRight } from "../../../components/layout/stack";
import { useParams } from "react-router-dom";
import { TFDefault } from "../../../components/inputs/textField";
import { SelectCategorias } from "../../../components/inputs/select";

export default function CadProdutos() {
    const { putProduto, postProduto, getProduto, produto, isLoading } = useProdutos();
    const { id } = useParams();
    const [prod, setProd] = useState(iniProdutos);

    useEffect(() => {
        getProduto(id);
    }, [])


    useEffect(() => {
        if (produto && !isLoading && window.location.pathname !== '/produtos/novo')
            setProd(produto);
    }, [isLoading])


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if ((name === 'Preco') || (name === 'Estoque')) {
            setProd({ ...prod, [name]: parseFloat(value.replace(",", ".")) });
        }
        if (name === 'CategoriaID') {
            setProd({ ...prod, [name]: parseInt(value) });
        } else {
            setProd({ ...prod, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const p = {
            ID: prod.ID,
            Nome: prod.Nome,
            Descricao: prod.Descricao,
            Preco: parseFloat(prod.Preco),
            Estoque: parseFloat(prod.Estoque),
            CategoriaID: parseInt(prod.CategoriaID),
            LinkImg: prod.LinkImg
        }
        if (window.location.pathname.includes('novo'))
            postProduto(p);
        else
            putProduto(p);
    };


    return (
        <ContainerPages>
            <ToolBarPages title='Cadastro de Produtos' />
            <br />
            <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
                <Box p={1}>
                    {(!isLoading && prod.ID > 0) || (window.location.pathname === '/produtos/novo') ?
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={1} >
                                <TFDefault fullWidth={true} id="Nome" name='Nome' onChange={handleInputChange} value={prod.Nome} label="Nome" />
                                <TFDefault fullWidth={true} id="Descricao" name='Descricao' onChange={handleInputChange} value={prod.Descricao} label="Descrição" />
                                <TFDefault fullWidth={true} type='number' id="Preco" name='Preco' onChange={handleInputChange} value={prod.Preco} label="Preço" />
                                <TFDefault fullWidth={true} type='number' id="Estoque" name='Estoque' onChange={handleInputChange} value={prod.Estoque} label="Estoque" />
                                <SelectCategorias  onChange={handleInputChange} value={prod.CategoriaID} />
                                <TFDefault fullWidth={true} id="LinkImg" name='LinkImg' onChange={handleInputChange} value={prod.LinkImg} label="Link da Imagem" />
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