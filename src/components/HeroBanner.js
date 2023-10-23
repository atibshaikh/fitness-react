import React, { useState } from 'react'
import {Box,Button,Stack,Typography} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  
  const [search,setSearch] = useState('');

  const handleSearch = async () => {

  }

  return (
    <Box 
    sx={{
        mt:{lg:'212px', xs:'70px'},
        ml:{sm:'50px'}
    }} position="relative" p="20px">
        <Typography color="#ff2625" fontWeight="600" fontSize="26px"  mb={2}>
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{
            fontSize:{lg:'44px', xs:'40;x'}
        }} mb={2}>
            Sweat, Smile <br /> and repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={3}>
            Check out the mose effection exercises
        </Typography>
        
        <Button 
        variant='contained' 
        color='error' 
        href="#exercises"
        sx={{backgroundColor:'#ff2625', padding:'15px'}}
        onClick={handleSearch}
        >
            Explore Exercises
        </Button>
        <Typography fontWeight={600} color="#ff2625" sx={{
            opacity:0.1,
            display:{lg:'block', xs:'none'}
        }} fontSize="200px">Exercises</Typography>
        <img src={HeroBannerImage} alt="banner image" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner