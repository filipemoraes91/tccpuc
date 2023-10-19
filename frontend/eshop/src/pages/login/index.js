import React from "react";
import { ContainerLogin } from "../../components/layout/container";
import { StackCenter } from "../../components/layout/stack";
import { TFPassword, TFUser } from "../../components/inputs/textField";
import { BtnCadastrar, BtnLogin } from "../../components/inputs/button";
import { TGLogin, TGMedio } from "../../components/dataDisplay/typography";
import { useAuth } from "../../hooks/useAuth";
import { Box } from "@mui/material";
import { LogoM } from "../../images";

export default function Login() {
    const [logar] = useAuth();
    
    function cadClientes() {
        window.location.href = '/cadastrar'
    }

    return (
        <StackCenter>
            <div style={{ background: '#000', width: '100vw', textAlign: 'center' }}>
                <LogoM />
            </div>
            <TGLogin />
            <TFUser />
            <TFPassword />
            <BtnLogin onClick={() => logar({ usuario: 'filipe', senha: '123' })} />
            <TGMedio text='Não é cadastrado?'/>
            <BtnCadastrar onClick={() => cadClientes()} />
        </StackCenter>
    )
}