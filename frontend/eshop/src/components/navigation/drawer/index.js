import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconProfile, IconCadProdutos, IconCadUsuarios, IconCategory, IconDocument, IconHome, IconOnFavorito, IconPerf, IconSale } from '../../dataDisplay/icons';
import { getInfUser, permUser } from '../../../utils';

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

                    {permUser('CadUser') ? <ItemMenu icon={<IconCadUsuarios />} text='Usuários' link='/usuarios' /> : ''}
                    {permUser('CadPer') ? <ItemMenu icon={<IconProfile />} text='Perfis' link='/perfil' /> : ''}
                    {getInfUser() ? <ItemMenu icon={<IconPerf />} text='Meu Perfil' link={`/meuperfil/${getInfUser().ID}`} /> : ''}

                    {permUser('CadProd') ? <ItemMenu icon={<IconCadProdutos />} text='Produtos' link='/produtos' /> : ''}
                    {permUser('CadCat') ? <ItemMenu icon={<IconCategory />} text='Categorias' link='/categorias' /> : ''}
                    {getInfUser() ? <ItemMenu icon={<IconOnFavorito />} text='Favoritos' link={`/favoritos/${getInfUser().ID}`} /> : ''}

                    {permUser('Vendas') ? <ItemMenu icon={<IconSale />} text='Vendas' link='/vendas' /> : ''}
                    {getInfUser() ? <ItemMenu icon={<IconDocument />} text='Meus Pedidos' link={`/meuspedidos/${getInfUser().ID}`} /> : ''}
                </List>
            </Box>
        </Drawer>
    );
}