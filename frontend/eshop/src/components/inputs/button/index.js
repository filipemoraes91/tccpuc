import { Badge, Button, IconButton } from "@mui/material";
import React from "react";
import { IconAddCar, IconCadEditar, IconCadNovo, IconOffFavorito, ShoppingCart, IconDelete } from "../../dataDisplay/icons";
import { Link } from "react-router-dom";



function BtnDefault(props) {
    return <Button onClick={props.onClick} type={props.type} variant="contained"
        color={props.color} style={props.style} fullWidth={props.fullWidth}
        size={props.size} startIcon={props.startIcon} disabled={props.disabled}
    >
        {props.text}
    </Button>
}

export function BtnLogin(props) {
    return <BtnDefault text="Login" onClick={props.onClick} color="success" type="submit" fullWidth={true} />
}

export function BtnVoltar(props) {
    return <BtnDefault text="Sair" onClick={props.onClick} style={{ background: 'red' }} />
}

export function BtnNovo(props) {
    return <BtnDefault text="Novo" startIcon={<IconCadNovo />} size="small" onClick={props.onClick} color="success" />
}

export function BtnCadastrar(props) {
    return <BtnDefault text="Cadastrar-se" onClick={props.onClick} color="info" type="submit" disabled={props.disabled}/>
}

export function BtnSalvar(props) {
    return <BtnDefault text="Salvar" onClick={props.onClick} color="success" type="submit" />
}

export function BtnCancelar(props) {
    return <BtnDefault text="Cancelar" onClick={props.onClick} color='warning' />
}

export function BtnEditar(props) {
    return <Button aria-label="favorito" onClick={props.onClick} color='info' variant="contained" size="small">
        <IconCadEditar />
    </Button>

}

export function BtnAddCart(props) {
    return <Button aria-label="favorito" onClick={props.onClick} color='success' variant="contained" size="small">
        <IconAddCar />
    </Button>
}

export function BtnOnFavotiro(props) {
    return <Button aria-label="favorito" onClick={props.onClick} color='error' variant="contained" size="small">
        <IconOffFavorito />
    </Button>
}

export function BtnDelete(props) {
    return <Button aria-label="delete" onClick={props.onClick} color='error' variant="contained" size="small">
        <IconDelete />
    </Button>
}

export function BtnShopCart(props) {
    return <IconButton aria-label="carrinho" onClick={props.onClick} color='inherit'>
        <Badge badgeContent={props.itens} color="warning">
            <ShoppingCart />
        </Badge>
    </IconButton>
}