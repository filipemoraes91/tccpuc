import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconCadClientes, IconCadProdutos, IconCadUsuarios, IconHome, IconOnFavorito } from '../../dataDisplay/icons';
import { TGMenuDivider } from '../../dataDisplay/typography';
import { getInfUser } from '../../../utils';

function ItemMenu(props) {
    function direct() {
        window.location.pathname = `${props.link}`;
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={() => direct()}>
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText primary={props.text} />
            </ListItemButton>
        </ListItem>
    )
}

export default function TemporaryDrawer(props) {
    return (
        <Drawer
            anchor='left'
            open={props.open}
            onClose={props.onClose}
        >
            <Box sx={{ minWidth: 200, bgcolor: 'background.paper' }}>
                <List>
                    <ItemMenu icon={<IconHome />} text='Home' link='home' />

                    {/* ADM */}
                    <Divider textAlign="left"><TGMenuDivider text='Administrador' /></Divider>
                    <ItemMenu icon={<IconCadUsuarios />} text='Usuários' link='/usuarios' />
                    <ItemMenu icon={<IconCadProdutos />} text='Produtos' link='/produtos' />
                    <ItemMenu icon={<IconOnFavorito />} text='Favoritos' link='/favoritos' />
                    <ItemMenu icon={<IconOnFavorito />} text='Categorias' link='/categorias' />
                    <ItemMenu icon={<IconOnFavorito />} text='Perfil' link='/perfil' />
                    <ItemMenu icon={<IconOnFavorito />} text='Vendas' link='/vendas' />

                    {/* VENDEDORES */}
                    <Divider textAlign="left"><TGMenuDivider text='Vendedores' /></Divider>
                    <ItemMenu icon={<IconCadProdutos />} text='Produtos' link='/produtos' />
                    <ItemMenu icon={<IconOnFavorito />} text='Categorias' link='/categorias' />

                    {/* CLIENTES */}
                    <Divider textAlign="left"><TGMenuDivider text='Clientes' /></Divider>
                    {getInfUser() ? <ItemMenu icon={<IconOnFavorito />} text='Meu Perfil' link={`/meuperfil/${getInfUser().ID}`} /> : ''}
                    <ItemMenu icon={<IconOnFavorito />} text='Meus Pedidos' link={`/meuspedidos/${getInfUser().ID}`} />
                    <ItemMenu icon={<IconOnFavorito />} text='Favoritos' link='/favoritos' />

                </List>
            </Box>
        </Drawer>
    );
}