import React, { useEffect } from "react";
import { ContainerPages } from "../../components/layout/container";
import { Grid, Paper } from "@mui/material";
import { CardCliente } from "../../components/surfaces/card";
import ToolBarPages from "../../components/surfaces/toolBar";
import usePessoas from "../../hooks/usePessoas";

export default function Pessoas() {
    const { pessoas } = usePessoas();


    function ListPessoas(pessoa, p) {
        
        return <h1>{pessoa.nome}</h1>
    }

    return (
        <ContainerPages >
            <ToolBarPages title='Cadastro de Clientes' />
            <br />
            <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
                <Grid container spacing={2}>
                    {/* <Grid item xs={12} md={6} lg={4}>
                        <CardCliente />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <CardCliente />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <CardCliente />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <CardCliente />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <CardCliente />
                    </Grid> */}
                    {pessoas ? pessoas.map(ListPessoas) : 'Aguarde...'}
                </Grid>
            </Paper>
        </ContainerPages>
    )
}