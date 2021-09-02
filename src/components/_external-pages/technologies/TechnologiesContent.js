import { useState, useEffect } from 'react';
import { get } from 'lodash';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown, varZoomIn } from '../../animate';
import TECHNOLOGY from 'src/utils/technologies';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

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
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.1, 1.1, 1)" },
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
  const [value, setValue] = useState([]);

  // const listicon = <FiberManualRecordIcon fontSize="small" sx={{ color: "white", filter: `drop-shadow(2px 2px 5px ${alpha(theme.palette.primary.main, 1)})` }} />
  const listicon = <ArrowRightIcon fontSize="large" sx={{ color: "black", filter: `drop-shadow(2px 2px 5px ${alpha(theme.palette.primary.main, 0.9)})` }} />

  useEffect(() => {
    // setTech([]);
    // console.log(TECHNOLOGY);
    let pathname = window.location.pathname;
    setLocation(pathname.slice(14,));
    if (TECHNOLOGY && TECHNOLOGY.length) {
      TECHNOLOGY.map((obj) => {
        if (location === obj.title.replace(/ /g, '').toLowerCase()) {
          // console.log('obj.tech', obj.tech);
          const data = obj;
          setValue(data);
          console.log('value', value);
        }
      })
    }
  }, [window.location.pathname, value, location])

  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ pb: 10, textAlign: 'center' }}>
        {value && value.title
          ? (
            <>
              <MotionInView variants={varFadeInUp}>
                <Typography variant="h5">
                  {value.description}
                </Typography>
              </MotionInView>
              {value.expertise
                ?
                <Grid container sx={{ mt: 15, alignContent: 'center' }}>
                  {value.expertise.map((card, index) => (
                    <Grid key={card.title} item xs={12} md={2}>
                      <MotionInView variants={varZoomIn}>
                        <CardStyle>
                          <CardIconStyle
                            src={card.path}
                          />
                          <Typography variant="subtitle1" paragraph>
                            {card.title}
                          </Typography>
                        </CardStyle>
                      </MotionInView>
                    </Grid>
                  ))}
                </Grid>
                : null}

              {value.points
                ?
                <Grid container spacing={5} sx={{ mt: 10 }}>
                  <Grid item xs={12} md={8}>
                    {value.points.map((item) => (
                      <MotionInView variants={varFadeInUp}>
                        <List
                          sx={{
                            // mb: 5,
                            color: isLight ? 'text.secondary' : 'common.white',
                            fontWeight: 'fontWeightMedium',
                            fontSize: 22
                          }}
                        >
                          <ListItem>
                            <ListItemIcon sx={{ mr: 3 }}>{listicon}</ListItemIcon>
                            {item}
                          </ListItem>
                        </List>
                      </MotionInView>
                    ))}
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box component="img" src="/static/technologies/frontendmain.jpg" />
                  </Grid>
                </Grid>
                : null}

              {value.expertise
                ?
                <Grid container spacing={5} sx={{ mt: 10 }}>
                  <Grid item xs={12}>
                    {value.expertise.map((item) => (
                      <MotionInView variants={varFadeInUp}>
                        <List
                          sx={{
                            // mb: 5,
                            // color: isLight ? 'text.secondary' : 'common.white',
                            // fontWeight: 'fontWeightMedium',
                            fontSize: 20
                          }}
                        >
                          <Box sx={{ borderLeft: '2px solid black', borderLeftColor: theme.palette.grey[300], borderRight: '2px solid black', borderRightColor: theme.palette.grey[300], mt: 5 }}>
                            <ListItem>
                              <ListItemIcon sx={{ mr: 3, height: 60, width: 60 }}><img src={item.path} /></ListItemIcon>
                              <ListItemText
                                primary={
                                  <Typography>
                                    {item.title}
                                  </Typography>
                                }
                                secondary={item.data} />
                            </ListItem>
                          </Box>
                        </List>
                      </MotionInView>
                    ))}
                  </Grid>
                </Grid>
                : null}
            </>
          )
          : <Typography></Typography>}


      </Container>
    </RootStyle>
  );
}
