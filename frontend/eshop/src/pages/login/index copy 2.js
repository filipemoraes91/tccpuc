import React from "react";
import { ContainerLogin } from "../../components/layout/container";
import { StackCenter } from "../../components/layout/stack";
import { TFPassword, TFUser } from "../../components/inputs/textField";
import { BtnLogin } from "../../components/inputs/button";
import { TGLogin } from "../../components/dataDisplay/typography";
import { useAuth } from "../../hooks/useAuth";
import { Box } from "@mui/material";
import { LogoM } from "../../images";

export default function Login() {
    const [logar] = useAuth();

    return (
        <ContainerLogin>
            <div style={{ display: 'flex', textAlign: 'center' }}>
                <LogoM />
                <StackCenter>
                    <TGLogin/>
                    <TFUser />
                    <TFPassword />
                    <BtnLogin onClick={() => logar({ usuario: 'filipe', senha: '123' })} />
                </StackCenter>
            </div>
        </ContainerLogin>
    )
}