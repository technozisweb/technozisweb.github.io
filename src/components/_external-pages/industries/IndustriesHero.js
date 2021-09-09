import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight, TextAnimate, MotionInView } from '../../animate';
import TECHNOLOGY from 'src/utils/technologies';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: ' url(/static/industry/innovatingindustries.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 480,
    padding: 0
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(12)
  }
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="Industries" sx={{ color: 'primary.main' }} variants={varFadeInRight} />
          <br />
          <motion.div variant={varFadeInRight}>
            <Typography
              variant="h5"
              sx={{
                mt: 5,
                color: 'common.white',
                fontWeight: 'fontWeightLarge',
                fontFamily: 'Roboto',
                fontStyle: 'italic'
              }}
            >
              We have Solutions for All the Industries. Technology that Serves the People.
            </Typography>
          </motion.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
