import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { fetchCategoryData, fetchEachCategoryData } from '../../../apis/fetch';
import { addCategories, setProducts } from '../../../redux/categorySlice';
import { useSelector, useDispatch } from 'react-redux';

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

const AntTab = styled(props => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#40a9ff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#1890ff',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));
export const Header = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  const [category, setCategory] = useState(['Loading...']);
  const handleChange = async (event, newValue) => {
    dispatch(setProducts([]));
    setValue(newValue);
    const catdata = await fetchEachCategoryData(category[newValue]);
    if (catdata.length > 0) {
      dispatch(setProducts(catdata));
    }
  };
  const handleApiCall = async () => {
    dispatch(setProducts([]));
    const data = await fetchCategoryData();
    setCategory(data);
    if (data.length > 0) {
      const catdata = await fetchEachCategoryData(data[0]);
      if (catdata.length > 0) {
        dispatch(setProducts(catdata));
      }
    }
  };
  useEffect(() => {
    handleApiCall();
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: '#fff' }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example" centered>
          {category.map((data, index) => (
            <AntTab
              key={index}
              label={data
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            />
          ))}
        </AntTabs>
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
  );
};
