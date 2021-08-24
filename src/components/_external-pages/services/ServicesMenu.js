import { Icon } from '@iconify/react';
import listFill from '@iconify/icons-eva/list-fill';
// material
import { styled, alpha } from '@material-ui/core/styles';
import { Box, Card, Paper, Stack, Container, AppBar, Typography, Grid } from '@material-ui/core';
// routes
import { PATH_PAGE } from 'src/routes/paths';
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

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(10),
  // backgroundImage:
  //   theme.palette.mode === 'light'
  //     ? `linear-gradient(0deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${theme.palette.grey[300]} 100%)`
  //     : 'none'
}));

const ContentStyle = styled(Page)(({ theme }) => ({
  backgroundImage:
    theme.palette.mode === 'light'
      ? `linear-gradient(0deg, ${alpha(theme.palette.grey[500], 0)} 0%, ${theme.palette.primary.main} 100%)`
      : 'none'
}));

// ----------------------------------------------------------------------

export default function MegaMenu() {
  return (
    <RootStyle title="Mega Menu | Minimal-UI">
      {/* <Box
        sx={{
          pt: 6,
          pb: 1,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
        }}
      >
        <Container maxWidth="lg">
          <HeaderBreadcrumbs
            heading="Mega Menu"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Mega Menu' }]}
          />
        </Container>
      </Box> */}

      {/* <AppBar
        position="static"
        color="transparent"
        sx={{
          boxShadow: (theme) => theme.customShadows.z8
        }}
      >
        <Container sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu Horizon
          </Typography>
          <MegaMenuDesktopHorizon navConfig={MenuConfig} />
        </Container>
      </AppBar> */}

      <Container>
        {/* <MegaMenuMobile navConfig={MenuConfig} /> */}

        {/* <Stack direction="row" spacing={3} mt={5}>
          <Box sx={{ width: 380, flexShrink: 0, overflow: 'unset' }}>
            <Typography variant="h6" sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
              <Box component={Icon} icon={listFill} sx={{ mr: 1, width: 24, height: 24 }} /> SERVICES
            </Typography>
            <MegaMenuDesktopVertical navConfig={MenuConfig} />
          </Box>

          <Paper sx={{ minHeight: 480, minWidth: 480, overflow: 'hidden', borderRadius: 1, backgroundColor: 'red', border: '2px solid black' }}>
            <Box
              // component="img"
              // src="/static/mock-images/fhome/rocket.png"
              sx={{ height: '100%', objectFit: 'cover', backgroundColor: 'red' }}
            />
          </Paper>
        </Stack> */}
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box sx={{ width: 480, flexShrink: 0, overflow: 'unset' }}>
              {/* <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 24, height: 24 }} /> SERVICES
              </Typography> */}
              <MegaMenuDesktopVertical navConfig={MenuConfig} />
            </Box>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={7}>
            <Paper sx={{ minHeight: 380, maxWidth: 740, overflow: 'hidden' }}>
              <ContentStyle>
                <Box
                  // component="img"
                  // src="/static/mock-images/fhome/rocket.png"
                  sx={{
                    height: '100%',
                    objectFit: 'cover',
                  }}
                >
                  <ServicesDescription />
                </Box>
              </ContentStyle>
            </Paper>
          </Grid>
        </Grid>
      </Container>

    </RootStyle>
  );
}
