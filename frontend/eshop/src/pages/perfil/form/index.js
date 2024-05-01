import React, { useState, useEffect } from "react";
import { ContainerPages } from "../../../components/layout/container";
import { Checkbox, FormControlLabel, FormGroup, Paper, Switch } from "@mui/material";
import usePerfil from "../../../hooks/usePerfil";
import { StackJustify, StackRight } from "../../../components/layout/stack";
import { TFDefault } from "../../../components/inputs/textField";
import { BtnCancelar, BtnSalvar } from "../../../components/inputs/button";
import ToolBarPages from "../../../components/surfaces/toolBar";
import { useParams } from "react-router-dom";

const iniPerfil = { Nome: '', Perm: [] };

export default function Perfil() {
    const { postPerfil, putPerfil, getPerfil, perfil, isLoading } = usePerfil();
    const { id } = useParams();
    const [perf, setPerf] = useState(iniPerfil);
    let perms = [];

    useEffect(() => {
        if (id > 0) {
            getPerfil(id);
            if (perfil !== undefined)
                setPerf(perfil);
        } else {
            setPerf(iniPerfil);
        }
        perms = perf.Perm;
    }, [isLoading])

    const handleCheckChange = (e) => {
        const { name, checked } = e.target;
        let perm = perf.Perm;
        if (!checked)
            perm = perm.replace(name, '');
        if (checked)
            perm = perm + name;

        setPerf({ ...perf, Perm: perm });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPerf({ ...perf, [name]: value });
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (perf.ID)
            putPerfil({ ID: perf.ID, Nome: perf.Nome, Perm: perf.Perm });
        else
            postPerfil({ Nome: perf.Nome, Perm: perf.Perm });
        window.location.href = '/perfil'
    };

    return (
        <ContainerPages >
            <ToolBarPages title='Perfil' />
            <br />
            <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
                <TFDefault fullWidth={true} name='Nome' label="Nome do Perfil" value={perf.Nome} onChange={handleInputChange} />
                <br />
                {perf ? <form onSubmit={handleSubmit}>
                    <StackJustify>
                        <FormGroup>
                            <FormControlLabel control={<Switch onChange={handleCheckChange} checked={perf.Perm.includes('CadUser')} name='CadUser' />} label="Cadastro de Usuarios" />
                            <FormControlLabel control={<Switch onChange={handleCheckChange} checked={perf.Perm.includes('CadProd')} name='CadProd' />} label="Cadastro de Produtos" />
                            <FormControlLabel control={<Switch onChange={handleCheckChange} checked={perf.Perm.includes('CadCat')} name='CadCat' />} label="Cadastro de Categorias" />
                            <FormControlLabel control={<Switch onChange={handleCheckChange} checked={perf.Perm.includes('CadPer')} name='CadPer' />} label="Cadastro de Perfil" />
                            <FormControlLabel control={<Switch onChange={handleCheckChange} checked={perf.Perm.includes('Vendas')} name='Vendas' />} label="Vendas" />
                        </FormGroup>
                    </StackJustify>

                    <StackRight>
                        <BtnSalvar />
                        <BtnCancelar onClick={() => window.location.href = '/perfil'} />
                    </StackRight>
                </form> : ''}
            </Paper>
        </ContainerPages>
    )
}