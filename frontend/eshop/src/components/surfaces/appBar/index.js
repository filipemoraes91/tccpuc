import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import TemporaryDrawer from '../../navigation/drawer';
import { Avatar } from '@mui/material';
import { Logoff, getInfUser } from '../../../utils';
import { StackJustify } from '../../layout/stack';
import { BtnShopCart } from '../../inputs/button';
import useCarrinho from '../../../hooks/useCarrinho';

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState(false);
  const { getQtdeItens, qtdeItens } = useCarrinho();

  React.useEffect(() => {
    getQtdeItens();
  }, [])

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function MenuUser() {
    if (getInfUser()) {
      return <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        style={{ marginTop: '35px' }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem style={{ minWidth: '200px' }}>
          <Link to={`/meuperfil/${getInfUser().ID}`} style={{ textDecoration: 'none', minWidth: '100%', color: 'black' }}>Perfil</Link>
        </MenuItem>
        <MenuItem style={{ minWidth: '200px' }}>
          <Link to="/home" style={{ textDecoration: 'none', minWidth: '100%', color: 'black' }} onClick={() => Logoff()}>Sair</Link>
        </MenuItem>
      </Menu>
    } else {
      return <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        style={{ marginTop: '35px' }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem >
          <Link to="/login" style={{ textDecoration: 'none', minWidth: '100%' }}>Login</Link>
        </MenuItem>
      </Menu>
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/home" style={{ textDecoration: 'none', color: 'white', flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              eShop
            </Typography>
          </Link>

          {getInfUser() ?
            <StackJustify>
              <Link to="/carrinho" style={{ textDecoration: 'none', color: 'inherit' }}>
                <BtnShopCart itens={qtdeItens} />
              </Link>
              <Avatar
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {getInfUser().Nome.slice(0, 1).toUpperCase()}
              </Avatar>
            </StackJustify>
            :
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle fontSize='larger' />
            </IconButton>}
          <MenuUser />
        </Toolbar>
      </AppBar>
      <TemporaryDrawer open={openMenu} onClose={() => setOpenMenu(false)} />
    </Box>
  );
}
