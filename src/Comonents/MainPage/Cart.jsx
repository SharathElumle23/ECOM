import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  Grid,
  Paper,
  Alert,
  Tooltip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, loginFromCart } from '../../redux/cartSlice';
import AddressBox from './addressBox';
const CartSection = () => {
  const [addressBox, setAddressBox] = useState(false);
  const fetchdata = useSelector(state => state.cart.cartItems);
  const fetchLogin = useSelector(state => state.login.loginData);
  const [cartItems, setCartItems] = useState(fetchdata);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onUpdateQuantity = (id, newQty) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: Math.max(newQty, 1) } : item))
    );
  };

  const handleRemove = id => {
    dispatch(removeFromCart(id));
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  const getTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  return (
    <>
      <Navbar />
      <Box sx={{ padding: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
          Shopping Cart
        </Typography>

        {cartItems.length === 0 ? (
          <Typography>Your cart is empty.</Typography>
        ) : (
          <>
            {cartItems.map(item => (
              <Paper key={item.id} sx={{ p: 2, mb: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={3}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">${item.price}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                        <RemoveIcon />
                      </IconButton>
                      <Typography>{item.quantity}</Typography>
                      <IconButton onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton color="error" onClick={() => handleRemove(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Paper>
            ))}

            <Divider sx={{ my: 2 }} />
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="h6">Total: ${getTotal()}</Typography>
              {fetchLogin.isLoggedIn ? (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={() => setAddressBox(true)}
                >
                  Proceed to Checkout
                </Button>
              ) : (
                <Tooltip
                  title="Please login to proceed to checkout your order"
                  arrow
                  componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: 'white',
                        color: 'red',
                        border: '1px solid red',
                        fontWeight: 'bold',
                      },
                    },
                    arrow: {
                      sx: {
                        color: 'white', // Arrow color matches tooltip background
                      },
                    },
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={() => {
                      dispatch(loginFromCart(true));
                      navigate('/login');
                    }}
                  >
                    Login
                  </Button>
                </Tooltip>
              )}
            </Box>
          </>
        )}
      </Box>
      <AddressBox setAddressBox={setAddressBox} addressBox={addressBox} />
    </>
  );
};

export default CartSection;
