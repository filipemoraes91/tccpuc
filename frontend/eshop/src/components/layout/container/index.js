import React from "react";
import { Box, Button, Container, Divider, Paper } from "@mui/material";
import MenuAppBar from "../../surfaces/appBar";
import { TGPageTitle } from "../../dataDisplay/typography";
import ToolBarPages from "../../surfaces/toolBar";

export function ContainerPages(props) {
    return (<Container maxWidth="xxl" style={{
        backgroundColor: '#e9e9e9',
        
        minHeight: '100vh',
        position: 'absolute',
        padding: '0'
    }}>
        <MenuAppBar />
        <br />
        <Container maxWidth="lg" >
            {props.children}
        </Container>
    </Container>
    )

}

export function ContainerLogin(props) {
    return (<Container maxWidth="xxl" style={{
        backgroundColor: '#0c0c0c',
        backgroundImage: 'linear-gradient(0deg, #0c0c0c 0%, #e8e0f1 100%)',        
        height: '100vh',
        position: 'absolute',
        padding: '0'
    }}>
        {props.children}
    </Container>
    )

}