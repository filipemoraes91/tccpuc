import React, { useEffect, useState } from "react";
import { ContainerPages } from "../../../components/layout/container";
import { Paper } from "@mui/material";
import useCategoria from "../../../hooks/useCategorias";
import { StackRight } from "../../../components/layout/stack";
import { TFDefault } from "../../../components/inputs/textField";
import { BtnCancelar, BtnSalvar } from "../../../components/inputs/button";
import ToolBarPages from "../../../components/surfaces/toolBar";
import { useParams } from "react-router-dom";

const iniCategoria = { ID: 0, Nome: '' }

export default function Categoria() {
    const { id } = useParams();
    const { postCategoria, getCategoria, putCategoria, categoria, isLoading } = useCategoria();
    const [categ, setCateg] = useState(iniCategoria);

    useEffect(() => {
        console.log(id)
        if (id > 0) {
            getCategoria(id);
            setCateg(categoria);
        } else {
            setCateg(categoria);
        }
    }, [isLoading]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCateg({ ...categ, [name]: value });
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (window.location.pathname.includes('novo'))
            postCategoria(categ);
        else
            putCategoria(categ);
    };

    return (
        <ContainerPages >
            <ToolBarPages title='Categoria' />
            <br />
            <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
                <form onSubmit={handleSubmit}>
                    <TFDefault fullWidth={true} name='Nome' label="Nome do Categoria" value={categ.Nome} onChange={handleInputChange} />
                    <StackRight>
                        <BtnSalvar />
                        <BtnCancelar onClick={() => window.location.href = '/categorias'} />
                    </StackRight>
                </form>
            </Paper>
        </ContainerPages>
    )
}