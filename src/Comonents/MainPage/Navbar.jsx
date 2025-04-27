import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ElumleLogo from '../../assets/Logo';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { logout } from '../../redux/loginSlice';
const Navbar = () => {
  const fetchdata = useSelector(state => state.cart.cartItems);
  const fetchCount = fetchdata.length;
  const fetchLogin = useSelector(state => state.login.loginData);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const navData = [
    { name: 'Home', to: '/' },
    { name: 'Category', to: '/category', disabled: true },
    { name: fetchCount > 0 ? `Cart (${fetchCount})` : 'Cart', to: '/cart' },
    fetchLogin?.isLoggedIn
      ? { name: 'Logout', onClick: () => setOpen(true) }
      : { name: 'Login', to: '/login' },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleConfirmLogout = () => {
    dispatch(logout());
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <ElumleLogo />
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, ml: 'auto' }}>
            {navData.map((item, index) => (
              <Typography key={index} variant="button" sx={{ ml: 2 }}>
                {item.onClick ? (
                  <Button
                    onClick={item.onClick}
                    color="inherit"
                    style={{ textDecoration: 'none', color: 'inherit', padding: '0px 0px 2px' }}
                  >
                    {item.name}
                  </Button>
                ) : (
                  <Link
                    to={item.to}
                    disabled={true}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      pointerEvents: item.disabled ? 'none' : 'auto',
                      opacity: item.disabled ? 0.5 : 1,
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {navData.map((item, index) => (
          <MenuItem key={index} onClick={handleMenuClose}>
            {item.onClick ? (
              <Button onClick={item.onClick} color="inherit">
                {item.name}
              </Button>
            ) : (
              <Link to={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
                {item.name}
              </Link>
            )}
          </MenuItem>
        ))}
      </Menu>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to log out?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmLogout} color="secondary">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Navbar;
