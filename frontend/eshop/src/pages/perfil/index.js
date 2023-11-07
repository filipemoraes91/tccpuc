import React, { useState } from "react";
import { ContainerPages } from "../../components/layout/container";
import { Paper } from "@mui/material";
import ToolBarPages from "../../components/surfaces/toolBar";
import usePerfil from "../../hooks/usePerfil";
import { StackJustify, StackRight } from "../../components/layout/stack";
import { TFDefault } from "../../components/inputs/textField";
import { BtnSalvar } from "../../components/inputs/button";
import { getInfUser } from "../../utils";
import SelectUF, { SelectMun } from "../../components/inputs/select";
import { iniEndereco } from "../../inicialization/initial";

export default function Perfil() {
    const { perfil, postPerfil } = usePerfil();
    const [end, setEnd] = useState(iniEndereco);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEnd({ ...end, [name]: value });
    };

    return (
        <ContainerPages >
            <ToolBarPages title='Perfil' />
            <br />
            <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
                <StackJustify>
                    <TFDefault fullWidth={true} label="Nome" value={getInfUser().nome} />
                    <TFDefault fullWidth={true} label="Email" value={getInfUser().email} />
                </StackJustify>
                <br />
                <StackJustify>
                    <SelectUF name='UF' onChange={handleInputChange} value={end.UF} />
                    <SelectMun uf={end.UF} name='Cidade' onChange={handleInputChange} value={end.Cidade} />
                </StackJustify>
                <br />
                <StackJustify>
                    <TFDefault fullWidth={true} label="Número" name='Numero' value={end.Numero} onChange={handleInputChange}/>
                    <TFDefault fullWidth={true} label="Rua" name='Rua' value={end.Rua} onChange={handleInputChange}/>
                    <TFDefault fullWidth={true} label="CEP" name='CEP' value={end.CEP} onChange={handleInputChange}/>
                </StackJustify>
                <br />
                <StackJustify>
                    <TFDefault fullWidth={true} label="Complemento" multiline={true} rows={3} name='Complemento' value={end.Complemento} onChange={handleInputChange}/>
                </StackJustify>
                <br />
                <StackRight>
                    <BtnSalvar onClick={() => postPerfil(end)} />
                </StackRight>
            </Paper>
        </ContainerPages>
    )
}