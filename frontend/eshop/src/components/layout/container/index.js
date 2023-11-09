import React from "react";
import { Container } from "@mui/material";
import MenuAppBar from "../../surfaces/appBar";

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
        backgroundColor: '#fff',
        height: '100vh',
        position: 'absolute',
        padding: '0'
    }}>
        {props.children}
    </Container>
    )

}