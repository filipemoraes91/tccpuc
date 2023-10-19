import React, { useEffect, useState } from "react";
import { ContainerPages } from "../../components/layout/container";
import { Divider, Grid, Paper } from "@mui/material";
import ToolBarPages from "../../components/surfaces/toolBar";
import usePessoas from "../../hooks/usePessoas";
import { TFDefault } from "../../components/inputs/textField";
import { StackCenter, StackJustify } from "../../components/layout/stack";
import { BtnCadastrar, BtnSalvar } from "../../components/inputs/button";
import { TGMenuDivider } from "../../components/dataDisplay/typography";
import useUsuarios from "../../hooks/useUsuarios";
import { iniUsuario } from "../../inicialization/initial";

export default function CadUser() {
    const { postUsuarios } = useUsuarios();
    const [usuario, setUsuario] = useState(iniUsuario);

    const onChange = (event) => {
        setUsuario((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <ContainerPages >
            {/* <ToolBarPages title='Criar Conta' btnVisible='none' /> */}
            <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '15px' }}>
                {/* <br /> */}
                <Divider textAlign="left"><TGMenuDivider text='Dados do Usuário' /></Divider>
                <StackJustify>
                    <TFDefault fullWidth={true} name='login_usu' label='Usuário' onChange={onChange} />
                    <TFDefault fullWidth={true} name='senha_usu' label='Senha' type='password' onChange={onChange}/>
                </StackJustify>
                <br />
                <StackJustify>
                    <TFDefault fullWidth={true} name='nom_pess' label='Nome' onChange={onChange}/>
                    <TFDefault fullWidth={true} name='sobrenome_pess' label='Sobrenome' onChange={onChange}/>
                </StackJustify>
                <br />
                <StackJustify>
                    <TFDefault fullWidth={true} name='email_pess' label='Email' onChange={onChange}/>
                    <TFDefault fullWidth={true} name='cpfcnpj_pess' label='CPF/CNPJ' onChange={onChange}/>
                </StackJustify>
                <br />
                <br />
                <BtnSalvar onClick={() => postUsuarios(usuario)}/>
            </Paper>
        </ContainerPages>
    )
}