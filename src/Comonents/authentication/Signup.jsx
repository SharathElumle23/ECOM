import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Typography, FormControl, TextField, Link } from '@mui/material';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material';
import ElumleLogo from '../../assets/Logo';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../MainPage/Navbar';
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

const Signup = () => {
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
            Sign Up
          </Typography>
          <FormControl>
            <TextField id="standard-basic" label="User Name" variant="standard" />
          </FormControl>
          <FormControl>
            <TextField id="standard-basic" label="Phone no" variant="standard" />
          </FormControl>
          <FormControl>
            <TextField id="standard-basic" label="Email" variant="standard" />
          </FormControl>
          <FormControl>
            <TextField id="standard-basic" label="Password" variant="standard" />
          </FormControl>
          <FormControl>
            <TextField id="standard-basic" label="Confirm Password" variant="standard" />
          </FormControl>
          <Button type="submit" fullWidth variant="contained">
            Sign Up
          </Button>
          <Typography sx={{ textAlign: 'center', margin: '32px 0px' }}>
            Do You have an account?{' '}
            <span>
              <Link
                component={RouterLink}
                to="/signin"
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
                Sign in
              </Link>
            </span>
          </Typography>
        </Card>
      </Grid>
    </>
  );
};

export default Signup;
