import { useState, useEffect } from 'react';
import { get } from 'lodash';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown, varZoomIn } from '../../animate';
import TECHNOLOGY from 'src/utils/technologies';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(Card)(({ theme }) => {
  return {
    maxWidth: 300,
    height: 200,
    margin: 'auto',
    textAlign: 'center',
    // padding: theme.spacing(2, 2, 0),
    // boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      // backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
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
  const [location, setLocation] = useState();
  const [tech, setTech] = useState([]);

  useEffect(() => {
    setTech([]);
    console.log(TECHNOLOGY);
    let pathname = window.location.pathname;
    setLocation(pathname.slice(14,));
    if(TECHNOLOGY && TECHNOLOGY.length){
      TECHNOLOGY.map((obj) => {
        if (location === obj.title.replace(/ /g, '').toLowerCase()) {
          console.log('obj.tech', obj.tech);
          const data = obj.tech;
          setTech(data);
          console.log('tech', tech);
        }
      })}
  }, [window.location.pathname, tech, location])

  return (
    <RootStyle>
      <Container maxWidth="lg">
        {tech && tech.length
          ? (
            <Grid container spacing={isDesktop ? 5 : 5}>
              {tech.map((card, index) => (
                <Grid key={card.title} item xs={12} md={3}>
                  <MotionInView variants={varZoomIn}>
                    <CardStyle>
                      <Typography variant="h5" paragraph>
                        {card.title}
                      </Typography>
                      <CardIconStyle
                        src={card.path}
                      />
                    </CardStyle>
                  </MotionInView>
                </Grid>
              ))}
            </Grid>
          )
          : <Typography>LOL!</Typography>}


      </Container>
    </RootStyle>
  );
}
