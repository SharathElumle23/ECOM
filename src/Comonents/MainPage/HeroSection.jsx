// components/HeroSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import shirt3D from '../../assets/shirt3D.jpg';
import shirt3D1 from '../../assets/shirt3D1.avif';
import Bag1 from '../../assets/Bag1.jpg';
import Bag2 from '../../assets/Bag2.webp';
import Jewellery1 from '../../assets/Jewellery1.jpg';
import Jewellery2 from '../../assets/Jewellery2.jpg';

const images = [shirt3D, shirt3D1, Bag1, Bag2, Jewellery1, Jewellery2];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <Box key={index}>
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            style={{
              width: '100%',
              maxHeight: '400px',
              objectFit: 'cover',
              borderRadius: '10px',
              display: 'block',
            }}
          />
        </Box>
      ))}
    </Slider>
  );
};

export default HeroSlider;
