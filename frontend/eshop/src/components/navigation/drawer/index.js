import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconCadClientes, IconCadProdutos, IconCadUsuarios, IconHome } from '../../dataDisplay/icons';
import { TGMenuDivider } from '../../dataDisplay/typography';

function ItemMenu(props) {
    function direct() {
        window.location.href = `/${props.text}`;
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
                    <ItemMenu icon={<IconHome />} text='Home' />
                    <Divider textAlign="left"><TGMenuDivider text='Cadastros' /></Divider>
                    <ItemMenu icon={<IconCadClientes />} text='Clientes' />
                    <ItemMenu icon={<IconCadProdutos />} text='Produtos' />
                    <ItemMenu icon={<IconCadUsuarios />} text='Usuários' />
                    <Divider textAlign="left"><TGMenuDivider text='Sessões' /></Divider>
                </List>
            </Box>
        </Drawer>
    );
}