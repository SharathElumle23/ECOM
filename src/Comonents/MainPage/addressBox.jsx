import React, { useState } from 'react';
import {
  Card,
  Typography,
  TextField,
  FormControl,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Alert,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cartSlice';
const AddressBox = ({ addressBox, setAddressBox }) => {
  const labels = [
    'Name',
    'Email',
    'Phone Number',
    'Address',
    'City',
    'State',
    'Country',
    'ZipCode',
  ];

  // State to control modal visibility
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleData = (key, value) => {
    setData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleLogin = () => {
    console.log('Form data:', data);
    setOpen(true);
    dispatch(clearCart());
    // eslint-disable-next-line no-undef
    setTimeout(() => {
      navigate('/home');
    }, 1500);
  };

  return (
    <>
      {/* Dialog Modal */}
      <Dialog open={addressBox} onClose={() => setAddressBox(false)} maxWidth="sm" fullWidth>
        <DialogContent>
          <Card variant="outlined" sx={{ p: 4 }}>
            <Typography
              component="h1"
              variant="h4"
              sx={{
                width: '100%',
                fontSize: 'clamp(2rem, 10vw, 2.5rem)',
                textAlign: 'center',
                fontWeight: 'bold',
                mb: 4,
              }}
            >
              Address
            </Typography>

            {labels.map((item, index) => (
              <FormControl key={index} fullWidth sx={{ mb: 2 }}>
                <TextField
                  id={`input-${item}`}
                  label={item}
                  variant="standard"
                  onChange={e => handleData(item, e.target.value)}
                />
              </FormControl>
            ))}
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddressBox(false)}>Cancel</Button>
          <Button onClick={handleLogin} variant="contained">
            Place Order
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => {
          setOpen(false);
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Centered!
      >
        <Alert onClose={() => {}} severity="success" sx={{ width: '100%' }}>
          Order Placed SuccessFully
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddressBox;
