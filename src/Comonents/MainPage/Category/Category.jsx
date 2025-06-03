import React, { useState, useEffect, CSSProperties } from 'react';
import { Header } from './header';
import Navbar from '../Navbar';
import { getStarRating } from '../../../utils/star';
import {
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Box,
  Skeleton,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import AddToCartControls from '.././AddtoCart';
import { RingLoader } from 'react-spinners';

const Category = () => {
  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };
  const products = useSelector(state => state.category.products);
  return (
    <Grid>
      <Navbar />

      <Grid>
        <Header />
        {products.length > 0 ? (
          <Grid container spacing={4} ml={4}>
            {products.map(product => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{
                      height: 200,
                      width: 200,
                      objectFit: 'contain',
                      padding: 2,
                      backgroundColor: '#f9f9f9',
                    }}
                  />
                  <CardContent
                    spacing={2}
                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',

                        width: '232px',
                        fontSize: '12px',
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: 1, fontWeight: 'bold' }}>
                      ${product.price}
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: 1, fontWeight: 'bold' }}>
                      {getStarRating(product.rating.rate)} ({product.rating.count})
                    </Typography>
                  </CardContent>
                  <AddToCartControls product={product} />
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid sx={{ display: 'flex', justifyContent: 'center' }} container mt={8}>
            <RingLoader
              loading={true}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Category;
