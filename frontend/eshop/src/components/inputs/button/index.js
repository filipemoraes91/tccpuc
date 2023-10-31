import { Button } from "@mui/material";
import React from "react";

function BtnDefault(props) {
    return <Button onClick={props.onClick} type={props.type} variant="contained" color={props.color} style={props.style} fullWidth={props.fullWidth}>{props.text}</Button>
}

export function BtnLogin(props) {
    return <BtnDefault text="Login" onClick={props.onClick} color="success" type="submit" fullWidth={true}/>
}

export function BtnVoltar(props) {
    return <BtnDefault text="Sair" onClick={props.onClick} style={{background: 'red'}}/>
}

export function BtnNovo(props) {
    return <BtnDefault text="Novo" onClick={props.onClick} color="success"/>
}

export function BtnCadastrar(props) {
    return <BtnDefault text="Cadastrar-se" onClick={props.onClick} color="info" type="submit" />
}

export function BtnSalvar(props) {
    return <BtnDefault text="Salvar" onClick={props.onClick} color="success"/>
}