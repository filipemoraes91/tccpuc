import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export function IconHome() {
    return <HomeIcon />
}

export function IconCadProdutos() {
    return <InventoryIcon />
}

export function IconCadClientes() {
    return <PeopleIcon />
}

export function IconCadUsuarios() {
    return <PersonIcon />
}

export function IconCadNovo() {
    return <AddCircleIcon />
}

export function IconCadEditar() {
    return <ModeEditIcon />
}

export function IconAddCar() {
    return <AddShoppingCartIcon />
}

export function IconDelete() {
    return <DeleteForeverIcon />
}

export function IconOnFavorito() {
    return <FavoriteIcon />
}

export function IconOffFavorito() {
    return <FavoriteBorderIcon />
}