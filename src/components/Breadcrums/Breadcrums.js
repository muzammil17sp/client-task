import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import './Breadcrums.css'
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator(props) {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
      className='breadcrum-titles'
    >
      Ranking
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/getting-started/installation/"
      onClick={handleClick}
      className='breadcrum-titles'
    >
      ETH
    </Link>,
     <Link
     underline="hover"
     key="2"
     color="inherit"
     href="/getting-started/installation/"
     onClick={handleClick}
     className='breadcrum-titles'
   >
      {props.crumsTitle1} 
   </Link>,
    <Typography key="3" className='breadcrum-main-titles'> 
      {props.crumsTitle2} 
    </Typography>,
  ];

  return (
    <Breadcrumbs 
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb">
      {breadcrumbs}   
    </Breadcrumbs>
  );
}
