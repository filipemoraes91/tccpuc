import React from "react";
import { ContainerLogin } from "../../components/layout/container";
import { StackCenter } from "../../components/layout/stack";
import { TFPassword, TFUser } from "../../components/inputs/textField";
import { BtnLogin } from "../../components/inputs/button";
import { TGLogin } from "../../components/dataDisplay/typography";
import { useAuth } from "../../hooks/useAuth";
import { Box } from "@mui/material";

export default function Login() {
    const [logar] = useAuth();

    return (
        <ContainerLogin>
            <Box style={{position: 'relative', top: '50%', transform: 'translateY(-50%)' }}>
                <StackCenter>
                    <TGLogin />
                    <TFUser />
                    <TFPassword />
                    <BtnLogin onClick={() => logar({ usuario: 'filipe', senha: '123' })} />
                </StackCenter>
            </Box>
        </ContainerLogin>
    )
}