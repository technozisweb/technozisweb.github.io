import { Box, Card, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
// material
import { styled, useTheme } from '@material-ui/core/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useEffect, useState } from 'react';
import TECHNOLOGY from 'src/utils/technologies';
//
import { MotionInView, varFadeInUp, varZoomIn } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(5),
  textAlign: 'justify',
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
    fontFamily: 'Roboto',
    boxShadow: 'none',
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
  // const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [location, setLocation] = useState();
  const [value, setValue] = useState([]);

  // const listicon = <FiberManualRecordIcon fontSize="small" sx={{ color: "white", filter: `drop-shadow(2px 2px 5px ${alpha(theme.palette.primary.main, 1)})` }} />
  const listicon = <ArrowRightIcon fontSize="large" sx={{ color: "black" }} />

  useEffect(() => {
    let pathname = window.location.pathname;
    setLocation(pathname.slice(14,));
    if (TECHNOLOGY && TECHNOLOGY.length) {
      TECHNOLOGY.map((obj) => {
        if (location === obj.title.replace(/ /g, '').toLowerCase()) {
          const data = obj;
          setValue(data);
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
                <Typography variant="h6">
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
                            // fontWeight: 'fontWeightMedium',
                            // fontSize: 22,
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
                    <Box component="img" src={value.imagesrc} alt={value.title} />
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
                            <ListItem sx={{ textAlign: 'justify' }}>
                              <ListItemIcon sx={{ mr: 3, height: { xs: 40, md: 60}, width: { xs: 40, md: 60} }}>
                                <img src={item.path} alt={item.title} />
                              </ListItemIcon>
                              <ListItemText
                                primary={
                                  <Typography variant="subtitle1">
                                    {item.title}
                                  </Typography>
                                }
                                secondary={
                                  <Typography color="textSecondary">
                                    {item.data}
                                  </Typography>
                                } />
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
