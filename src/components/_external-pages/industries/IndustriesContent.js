import { useState, useEffect } from 'react';
import { get } from 'lodash';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, CardMedia, CardContent } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown, varZoomIn } from '../../animate';
import TECHNOLOGY_CARDS from 'src/utils/technologies';

// ----------------------------------------------------------------------
const industryData = [
  {
    title: 'BFSI',
    icon: '/static/technologies/industry/bfsi.png',
    description: 'Description about bfsi.'
  },
  {
    title: 'BFSI',
    icon: '/static/technologies/industry/aviation.png',
    description: 'Description about bfsi.'
  },
  {
    title: 'BFSI',
    icon: '/static/technologies/industry/construction.png',
    description: 'Description about bfsi.'
  },
  {
    title: 'BFSI',
    icon: '/static/technologies/industry/telecom.png',
    description: 'Description about bfsi.'
  },
  {
    title: 'BFSI',
    icon: '/static/technologies/industry/bank.png',
    description: 'Description about bfsi.'
  },
]

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(Card)(({ theme }) => {
  return {
    minWidth: 320,
    height: 280,
    // margin: 'auto',
    textAlign: 'center',
    // padding: theme.spacing(2, 2, 0),
    // boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 100,
  height: 100,
  margin: 'auto',
  marginBottom: theme.spacing(2),
}));

// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container>
          {industryData.map((card, index) => (
            <Grid key={card.title} item xs={12} md={3} sx={{ m: 5 }}>
              <MotionInView variants={varZoomIn}>
                <CardStyle>
                  <CardContent sx={{ backgroundColor: 'primary.main' }}>
                  </CardContent>
                  <Typography variant="h5" paragraph sx={{ mt: 5 }}>
                    {card.title}
                  </Typography>
                  <CardMedia component="image" img={card.icon} />
                  <CardIconStyle
                    src={card.icon}
                  />
                </CardStyle>
              </MotionInView>
            </Grid>
          ))}
        </Grid>


      </Container>
    </RootStyle>
  );
}
