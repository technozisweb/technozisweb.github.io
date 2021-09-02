import { useState, useEffect } from 'react';
// material
import { styled, alpha } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, List, ListItem, ListItemIcon } from '@material-ui/core';
//
import { MotionInView, varFadeInUp, varFadeInDown } from '../../animate';
import StopTwoToneIcon from '@material-ui/icons/StopTwoTone';
import SERVICES from 'src/utils/servicesInfo';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0),
  // backgroundImage: `url(/static/home/bgimg.jpg)`
  // theme.palette.mode === 'light'
  //   ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${theme.palette.grey[300]} 50%)`
  //   : 'none'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
}));

// ----------------------------------------------------------------------

export default function ServicesExtended() {
  const [serviceInfo, setServiceInfo] = useState({});
  const [path, setPath] = useState();

  useEffect(() => {
    let pathname = window.location.pathname;
    pathname = pathname.replace(/[^a-zA-Z0-9]/g, '');
    pathname = pathname.slice(8,);
    setPath(pathname);
  }, [window.location.pathname]);

  useEffect(async () => {
    SERVICES.map((service, index) => {
      // console.log('path', path);
      // console.log('services[index]', services[index].title.replace(/ /g, '').toLowerCase());
      if (path == service.title.replace(/ /g, '').toLowerCase()) {
        setServiceInfo(service.info);
        console.log('serviceInfo', serviceInfo);
      }
    });
    // window.scrollTo(100, 300);
  }, [serviceInfo, path]);
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative', mb: 10 }}>
        {/* <Box
          component="img"
          alt="image shape"
          src="/static/home/shape.svg"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            my: 'auto',
            position: 'absolute',
            filter: 'grayscale(1) opacity(100%)',
            display: { xs: 'none', md: 'block' }
          }}
        /> */}

        <Grid container spacing={2} direction="row-reverse" justifyContent="space-between">
          {/* <Grid item xs={12} md={5} sx={{ position: 'relative', height: '100%' }}>
            <MotionInView threshold={0.5} variants={varFadeInUp}>
              <img alt="light mode" src="/static/home/team.png" />
            </MotionInView>
            <MotionInView threshold={0.5} variants={varFadeInDown} sx={{ top: 0, left: 0, position: 'absolute' }}>
              <img alt="dark mode" src="/static/home/darkmode.png" />
            </MotionInView>
          </Grid> */}
          <Grid item xs={12}>
            <ContentStyle>
              {/* <MotionInView variants={varFadeInUp}>
                <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.disabled', display: 'block' }}>
                  Easy switch between styles.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Some Info
                </Typography>
              </MotionInView> */}

              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Raleway',
                    color: 'gray',
                    fontSize: 22,
                    fontStyle: 'italic'
                    // fontWeight: 'fontWeightMedium'
                  }}
                >
                  {/* {serviceInfo} */}
                </Typography>
              </MotionInView>
              {/* <MotionInView variants={varFadeInUp}>
                <Typography component="p" variant="overline" sx={{ mb: 10, color: 'text.disabled', display: 'block' }}>
                  Easy switch between styles.
                </Typography>
              </MotionInView> */}

            </ContentStyle>
          </Grid>

        </Grid>
      </Container>
    </RootStyle>
  );
}
