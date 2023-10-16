import React from "react";
import { ContainerLogin } from "../../components/layout/container";
import { StackCenter } from "../../components/layout/stack";
import { TFPassword, TFUser } from "../../components/inputs/textField";
import { BtnLogin } from "../../components/inputs/button";
import { TGLogin } from "../../components/dataDisplay/typography";
import { useAuth } from "../../hooks/useAuth";
import { Box, Grid } from "@mui/material";
import { LogoG } from "../../images";

export default function Login() {
    const [logar] = useAuth();

    return (
        <Box sx={{background: '#000'}} style={{position: 'absolute', textAlign: "center", alignItems: 'center', marginTop: '5%' }}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                color="black"
            >
                <Grid item xs={12} lg={6} >
                    <LogoG />
                </Grid>
                <Grid item xs={12} lg={6} sx={{background: 'white'}}>
                    <StackCenter>
                        <TGLogin />
                        <TFUser />
                        <TFPassword />
                        <BtnLogin onClick={() => logar({ usuario: 'filipe', senha: '123' })} />
                    </StackCenter>
                </Grid>
            </Grid>
        </Box>
    )
}