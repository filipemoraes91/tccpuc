import { Button } from "@mui/material";
import React from "react";

function BtnDefault(props) {
    return <Button onClick={props.onClick} variant="contained" color={props.color} style={props.style}>{props.text}</Button>
}

export function BtnLogin(props) {
    return <BtnDefault text="Login" onClick={props.onClick} color="success"/>
}

export function BtnVoltar(props) {
    return <BtnDefault text="Sair" onClick={props.onClick} style={{background: 'red'}}/>
}

export function BtnNovo(props) {
    return <BtnDefault text="Novo" onClick={props.onClick} color="success"/>
}