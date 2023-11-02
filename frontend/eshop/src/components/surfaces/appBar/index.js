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
import { Avatar, Button } from '@mui/material';
import { getInfUser } from '../../../utils';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState(false);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            eShop
          </Typography>
          {auth && (
            <div>
              {getInfUser() ?
                <Avatar
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  {getInfUser().nome.slice(0, 1).toUpperCase()}
                </Avatar> :
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
              <Menu
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
                  <Link to="/perfil" style={{ textDecoration: 'none', minWidth: '100%' }}>Perfil</Link>
                </MenuItem>
                <MenuItem >
                  <Link to="/login" style={{ textDecoration: 'none', minWidth: '100%' }}>Login</Link>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <TemporaryDrawer open={openMenu} onClose={() => setOpenMenu(false)} />
    </Box>
  );
}
