import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQuantity } from '../../redux/cartSlice';
import { Button, Box, Typography } from '@mui/material';

const AddToCartControls = ({ product }) => {
  const dispatch = useDispatch();

  // Get the cart item for this product
  const cartItem = useSelector(state => state.cart.cartItems.find(item => item.id === product.id));

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  const handleRemove = () => {
    dispatch(decreaseQuantity(product.id));
  };

  return (
    <>
      {cartItem && cartItem.quantity > 0 ? (
        <Box display="flex" alignItems="center" m={2} justifyContent={'space-between'}>
          <Button variant="outlined" color="primary" onClick={handleRemove}>
            –
          </Button>
          <Typography sx={{ mx: 2 }}>{cartItem.quantity}</Typography>
          <Button variant="outlined" color="primary" onClick={handleAdd}>
            +
          </Button>
        </Box>
      ) : (
        <Button variant="outlined" color="primary" sx={{ margin: '1rem' }} onClick={handleAdd}>
          Add to Cart
        </Button>
      )}
    </>
  );
};

export default AddToCartControls;
