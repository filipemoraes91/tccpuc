import React, { useState, useEffect } from "react";
import ToolBarPages from "../../../components/surfaces/toolBar";
import { Paper } from "@mui/material";
import { ContainerPages } from "../../../components/layout/container";
import { StackJustify, StackRight } from "../../../components/layout/stack";
import { BtnCancelar, BtnSalvar } from "../../../components/inputs/button";
import useUsuarios from "../../../hooks/useUsuarios";
import { iniUser } from "../../../inicialization/initial";
import { useParams } from "react-router-dom";
import { TFDefault } from "../../../components/inputs/textField";
import SelectUF, { SelectMun } from "../../../components/inputs/select";
import useEnderecos from "../../../hooks/useEnderecos";

export default function MeuPerfil() {
    const { getUsuario, putUsuario, usuario, isLoading } = useUsuarios();
    const { getEnderecos } = useEnderecos();
    const [user, setUser] = useState(iniUser);
    const { id } = useParams();

    useEffect(() => {
        if (id > 0) {
            getUsuario(id);
            setUser(usuario);
        } else {
            setUser(iniUser);
        }
    }, [isLoading])

    useEffect(() => {
        if (id > 0) {
            getEnderecos(id);
        }
    }, [])


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        putUsuario({
            ID: id,
            Nome: user.Nome,
            Email: user.Email,
            Senha: user.Senha,
            Rua: user.Rua,
            Numero: parseInt(user.Numero),
            CEP: user.CEP,
            Cidade: user.Cidade,
            Estado: user.Estado,
            Complemento: user.Complemento,
            PerfilID: user.PerfilID
        })
        e.preventDefault();
        window.location.href = `/meuperfil/${id}`
    };

    return (
        <ContainerPages >
            <ToolBarPages title='Meu Perfil' btnVisible={false} />
            <br />
            <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
                <form onSubmit={handleSubmit}>
                    <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
                        <StackJustify>
                            <TFDefault fullWidth={true} label="Nome" value={user.Nome} disabled={true} />
                            <TFDefault fullWidth={true} label="Email" value={user.Email} disabled={true} />
                        </StackJustify>
                        <br />
                        <StackJustify>
                            <SelectUF name='Estado' onChange={handleInputChange} value={user.Estado} />
                            <SelectMun uf={user.Estado} name='Cidade' onChange={handleInputChange} value={user.Cidade} />
                        </StackJustify>
                        <br />
                        <StackJustify>
                            <TFDefault fullWidth={true} label="Número" name='Numero' value={user.Numero} onChange={handleInputChange} />
                            <TFDefault fullWidth={true} label="Rua" name='Rua' value={user.Rua} onChange={handleInputChange} />
                            <TFDefault fullWidth={true} label="CEP" name='CEP' value={user.CEP} onChange={handleInputChange} />
                        </StackJustify>
                        <br />
                        <StackJustify>
                            <TFDefault fullWidth={true} label="Complemento" multiline={true} rows={3} name='Complemento' value={user.Complemento} onChange={handleInputChange} />
                        </StackJustify>
                        <br />
                        <StackRight>
                            <BtnSalvar />
                            <BtnCancelar onClick={() => window.location.href = '/meuperfil'} />
                        </StackRight>
                    </Paper>
                </form>
            </Paper>
        </ContainerPages >
    )
}