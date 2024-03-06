import { Badge, Button, IconButton } from "@mui/material";
import React from "react";
import { IconAddCar, IconCadEditar, IconCadNovo, IconOffFavorito, ShoppingCart, IconDelete } from "../../dataDisplay/icons";
import { Link } from "react-router-dom";



function BtnDefault(props) {
    return <Button onClick={props.onClick} type={props.type} variant="contained"
        color={props.color} style={props.style} fullWidth={props.fullWidth}
        size={props.size} startIcon={props.startIcon}
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
    return <BtnDefault text="Cadastrar-se" onClick={props.onClick} color="info" type="submit" />
}

export function BtnSalvar(props) {
    return <BtnDefault text="Salvar" onClick={props.onClick} color="success" type="submit" />
}

export function BtnCancelar(props) {
    return <BtnDefault text="Cancelar" onClick={props.onClick} color='warning' />
}

export function BtnEditar(props) {
    return <Link to={props.to}><BtnDefault text="Editar" startIcon={<IconCadEditar />} color='info' size="small" /></Link>

}

export function BtnAddCart(props) {
    return <IconButton aria-label="adicionar ao carrinho" onClick={props.onClick} color="success">
        <IconAddCar />
    </IconButton>
}

export function BtnOnFavotiro(props) {
    return <IconButton aria-label="favorito" onClick={props.onClick} color='error'>
        <IconOffFavorito />
    </IconButton>
}

export function BtnDelete(props) {
    return <IconButton aria-label="delete" onClick={props.onClick} color='error'>
        <IconDelete />
    </IconButton>
}

export function BtnShopCart(props) {
    return <IconButton aria-label="carrinho" onClick={props.onClick} color='inherit'>
        <Badge badgeContent={props.itens} color="warning">
            <ShoppingCart />
        </Badge>
    </IconButton>
}