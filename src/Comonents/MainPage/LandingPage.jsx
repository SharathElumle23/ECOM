import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Box,
} from '@mui/material';
import { fetchProductData } from '../../apis/fetch';
import Navbar from './Navbar';
import HeroSlider from './HeroSection';
import { useSelector } from 'react-redux';
import AddToCartControls from './AddtoCart';
const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const handleData = async () => {
    const data = await fetchProductData();
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    handleData();
  }, []);
  const getStarRating = rating => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push('★'); // Full star
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push('☆'); // Half star for decimals
      } else {
        stars.push('☆'); // Empty star
      }
    }
    return stars.join(' ');
  };
  const fetchdata = useSelector(state => state.cart.cartItems);
  console.log(fetchdata);
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Welcome to Our E-Commerce Store
            </Typography>
            <Typography variant="h6" color="textSecondary" paragraph>
              Discover the best products at unbeatable prices. Shop now and enjoy exclusive deals!
            </Typography>
          </Grid>
        </Grid>

        {/* Featured Products Section */}
        <Typography variant="h4" gutterBottom style={{ marginTop: '3rem' }}>
          Featured Products
        </Typography>
        <Grid container spacing={4}>
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
      </Container>
    </>
  );
};

export default LandingPage;
