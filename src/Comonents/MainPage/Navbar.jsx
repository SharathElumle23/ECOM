import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ElumleLogo from '../../assets/Logo';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const fetchdata = useSelector(state => state.cart.cartItems);
  const fetchCount = fetchdata.length;

  const navData = [
    { name: 'Home', to: '/' },
    { name: 'Category', to: '/category' },
    { name: fetchCount > 0 ? `Cart (${fetchCount})` : 'Cart', to: '/cart' },
    { name: 'Login', to: '/login' },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          {navData.map((item, index) => (
            <MenuItem key={index} onClick={handleMenuClose}>
              <Link to={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
                {item.name}
              </Link>
            </MenuItem>
          ))}
        </Menu>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <ElumleLogo />
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, ml: 'auto' }}>
          {navData.map((item, index) => (
            <Typography key={index} variant="button" sx={{ ml: 2 }}>
              <Link to={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
                {item.name}
              </Link>
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
