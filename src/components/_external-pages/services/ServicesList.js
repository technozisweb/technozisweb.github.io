import { useState, useEffect } from 'react';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Paper, Container, Grid } from '@material-ui/core';
// routes
// components
import Page from 'src/components/Page';
import MenuConfig from 'src/layouts/main/MenuConfig.js';
import ServicesDescription from './ServicesDescription';
import services from 'src/utils/servicesInfo';
import ServicesMenuConfig from './ServicesMenu';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  // backgroundImage:
  //   theme.palette.mode === 'light'
  //     ? `linear-gradient(0deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${theme.palette.grey[300]} 100%)`
  //     : 'none'
}));

const ContentStyle = styled(Page)(() => ({
  // backgroundImage: 
  //   theme.palette.mode === 'light'
  //     ? `linear-gradient(0deg, ${alpha(theme.palette.grey[900], 0)} 0%, ${theme.palette.grey[400]} 200%)`
  //     : 'none',
  // backgroundColor: theme.palette.grey[800]
}));

// ----------------------------------------------------------------------

export default function MegaMenu() {
  const [serviceData, setServiceData] = useState({});
  const [path, setPath] = useState();

  useEffect(() => {
    let pathname = window.location.pathname;
    pathname = pathname.replace(/[^a-zA-Z0-9]/g, '');
    pathname = pathname.slice(8,);
    setPath(pathname);
  }, [window.location.pathname]);

  useEffect(async () => {
    services.map((_, index) => {
      // console.log('path', path);
      // console.log('services[index]', services[index].title.replace(/ /g, '').toLowerCase());
      if (path == services[index].title.replace(/ /g, '').toLowerCase()) {
        setServiceData(services[index]);
        console.log('serviceData', serviceData);
      }
    });
    // window.scrollTo(100, 300);
  }, [serviceData, path]);

  return (
    <RootStyle title="Mega Menu | Minimal-UI">

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          component="img"
          alt="image shape"
          src="/static/home/bg2.jpg"
          sx={{
            top: 0,
            right: 24,
            bottom: 0,
            my: 'auto',
            position: 'absolute',
            filter: 'grayscale(1) opacity(100%)',
            display: { xs: 'none', md: 'block' }
          }}
        />
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box sx={{ width: 420, flexShrink: 0, overflow: 'unset' }}>
              <ServicesMenuConfig navConfig={MenuConfig} />
            </Box>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={7}>
            <Paper sx={{ minHeight: 340, maxWidth: 740, overflow: 'hidden' }}>
              <ContentStyle>
                <Box
                  // component="img"
                  // src="/static/mock-images/fhome/rocket.png"
                  sx={{
                    height: '100%',
                    objectFit: 'cover',
                  }}
                >
                  <ServicesDescription serviceData={serviceData} />
                </Box>
              </ContentStyle>
            </Paper>
          </Grid>
        </Grid>
      </Container>

    </RootStyle>
  );
}
