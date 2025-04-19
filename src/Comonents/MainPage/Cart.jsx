import React, { useState } from 'react';
import { Box, Typography, IconButton, Button, Divider, Grid, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from './Navbar';
const CartSection = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Cool Shirt',
      price: 49.99,
      quantity: 1,
      image: '/assets/shirt3D.jpg',
    },
    {
      id: 2,
      title: 'Stylish Bag',
      price: 89.99,
      quantity: 2,
      image: '/assets/Bag1.jpg',
    },
  ]);

  const onUpdateQuantity = (id, newQty) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: Math.max(newQty, 1) } : item))
    );
  };

  const handleRemove = id => {
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
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Proceed to Checkout
              </Button>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default CartSection;
