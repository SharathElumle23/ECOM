import React from 'react';
import { SvgIcon } from '@mui/material';

const ElumleLogo = () => (
  <SvgIcon sx={{ height: 50, width: 200 }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
      <circle cx="25" cy="25" r="25" fill="#00D3AB" />
      <text
        x="0"
        y="35"
        fontFamily="'Arial', sans-serif"
        fontSize="28"
        fill="#333"
        fontWeight="bold"
      >
        Elumle World
      </text>
    </svg>
  </SvgIcon>
);

export default ElumleLogo;
