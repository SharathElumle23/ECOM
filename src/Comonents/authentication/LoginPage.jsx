import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Typography, FormControl, TextField, Link } from '@mui/material';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material';
import ElumleLogo from '../../assets/Logo';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../MainPage/Navbar';
import { Password } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/loginSlice';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const LoginPage = setLogin => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    Email: '',
    Password: '',
  });
  const handleData = (key, value) => {
    console.log(key, value);
    setData({ ...data, [key]: value });
  };
  const handleLogin = () => {
    console.log(data);
    dispatch(login(data));
  };
  return (
    <>
      <Grid sx={{ fontFamily: 'sans-serif' }}>
        <Navbar />
        <Card variant="outlined">
          <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
            <ElumleLogo />
          </Typography>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              width: '100%',
              fontSize: 'clamp(2rem, 10vw, 2.15rem)',
              textAlign: 'center',
              textDecoration: 'bold',
            }}
          >
            Sign in
          </Typography>
          <FormControl>
            <TextField
              id="standard-basic"
              label="Email or UserName"
              variant="standard"
              onChange={e => handleData('Email', e.target.value)}
            />
          </FormControl>
          <FormControl>
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              onChange={e => handleData('Password', e.target.value)}
            />
          </FormControl>
          <Link
            component="button"
            type="button"
            variant="body2"
            sx={{ alignSelf: 'baseline', margin: '32px 0px' }}
          >
            Forgot your password?
          </Link>
          <Button type="submit" fullWidth variant="contained" onClick={handleLogin}>
            Sign in
          </Button>
          <Typography sx={{ textAlign: 'center', margin: '32px 0px' }}>
            Don&apos;t have an account?{' '}
            <span>
              <Link
                component={RouterLink}
                to="/signup"
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
                Sign Up
              </Link>
            </span>
          </Typography>
        </Card>
      </Grid>
    </>
  );
};

export default LoginPage;
