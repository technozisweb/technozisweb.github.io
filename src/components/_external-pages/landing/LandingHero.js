
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack } from '@material-ui/core';
// routes
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';
import CarouselAnimation from '../../carousel/CarouselAnimation';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  // backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <CarouselAnimation />
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}