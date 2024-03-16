import React, { useState } from "react";
import { ContainerPages } from "../../../components/layout/container";
import { FormControlLabel, FormGroup, Paper, Switch } from "@mui/material";
import usePerfil from "../../../hooks/usePerfil";
import { StackJustify, StackRight } from "../../../components/layout/stack";
import { TFDefault } from "../../../components/inputs/textField";
import { BtnSalvar } from "../../../components/inputs/button";
import ToolBarPages from "../../../components/surfaces/toolBar";

export default function Perfil() {
    const { postPerfil } = usePerfil();
    const [perf, setPerf] = useState({ Nome: '', Perm: [] });
    let listPerm = [];

    const handleCheckChange = (e) => {
        const { name, checked } = e.target;
        const novaPermissao = name;
        if (perf.Perm.includes(novaPermissao)) {
            setPerf(prevPerf => ({
                ...prevPerf,
                Perm: prevPerf.Perm.filter(item => item !== novaPermissao)
            }));
        } else {
            // Se a permissão não existe, adiciona
            setPerf(prevPerf => ({
                ...prevPerf,
                Perm: [...prevPerf.Perm, novaPermissao]
            }));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPerf({ ...perf, [name]: value });
        console.log(perf)
    };

    return (
        <ContainerPages >
            <ToolBarPages title='Perfil' />
            <br />
            <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
                <TFDefault fullWidth={true} name='Nome' label="Nome do Perfil" value={perf.Nome} onChange={handleInputChange} />
                <br />
                <StackJustify>
                    <FormGroup>
                        <FormControlLabel control={<Switch onChange={handleCheckChange} name='CadUser' />} label="Cadastro de Usuarios" />
                        <FormControlLabel control={<Switch onChange={handleCheckChange} name='CadProd' />} label="Cadastro de Produtos" />
                        <FormControlLabel control={<Switch onChange={handleCheckChange} name='CadCat' />} label="Cadastro de Categorias" />
                        <FormControlLabel control={<Switch onChange={handleCheckChange} name='CadPer' />} label="Cadastro de Perfil" />
                        <FormControlLabel control={<Switch onChange={handleCheckChange} name='Vendas' />} label="Vendas" />
                    </FormGroup>
                </StackJustify>

                <StackRight>
                    <BtnSalvar onClick={() => postPerfil(perf)} />
                </StackRight>
            </Paper>
        </ContainerPages>
    )
}