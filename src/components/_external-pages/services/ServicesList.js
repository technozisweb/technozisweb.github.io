import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import listFill from '@iconify/icons-eva/list-fill';
// material
import { styled, alpha } from '@material-ui/core/styles';
import { Box, Card, Paper, Stack, Container, AppBar, Typography, Grid } from '@material-ui/core';
// routes
import { PATH_PAGE } from 'src/routes/paths';
import { withRouter } from 'react-router-dom';
// components
import Page from 'src/components/Page';
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';
import {
  MegaMenuDesktopVertical,
  MegaMenuDesktopHorizon,
  MegaMenuMobile,
  // MenuConfig
} from 'src/components/mega-menu';
import MenuConfig from 'src/layouts/main/MenuConfig.js';
import ServicesDescription from './ServicesDescription';
import services from 'src/utils/servicesInfo';
import ServicesMenuConfig from './ServicesMenu';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(7),
  paddingBottom: theme.spacing(10),
  // backgroundImage:
  //   theme.palette.mode === 'light'
  //     ? `linear-gradient(0deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${theme.palette.grey[300]} 100%)`
  //     : 'none'
}));

const ContentStyle = styled(Page)(({ theme }) => ({
  backgroundImage:
    theme.palette.mode === 'light'
      ? `linear-gradient(0deg, ${alpha(theme.palette.grey[500], 0)} 0%, ${theme.palette.grey[400]} 100%)`
      : 'none'
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

      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box sx={{ width: 420, flexShrink: 0, overflow: 'unset' }}>
              <ServicesMenuConfig navConfig={MenuConfig} />
            </Box>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={7}>
            <Paper sx={{ minHeight: 380, maxWidth: 740, overflow: 'hidden' }} elevation='5'>
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
