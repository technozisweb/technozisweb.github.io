import PropTypes from 'prop-types';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Card, Paper, Stack, Container, AppBar, Typography } from '@material-ui/core';
// routes
// components
import Page from '../../../components/Page';
import { MHidden } from 'src/components/@material-extend';
// import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import MenuConfig from './TechnologiesMenuConfig';
import { TechnologiesDesktopMenu } from '.';
import TechnologiesMobileMenu from './TechnologiesMobileMenu';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(7),
  paddingBottom: theme.spacing(5),
  display: 'flex',
}));

// ----------------------------------------------------------------------


MegaMenu.propTypes = {
  setTitle: PropTypes.func
};

export default function MegaMenu(props) {
  // const { setTitle } = props;
  console.log(props.setTitle);
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

      <AppBar
        position="static"
        color="transparent"
        sx={{
          boxShadow: (theme) => theme.customShadows.z8,
          alignContent: 'center'
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            // alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <MHidden width="lgDown">
            {/* <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
            <MegaMenuDesktopHorizon navConfig={MenuConfig} /> */}

            <Container>
              <TechnologiesDesktopMenu navConfig={MenuConfig} setTitle={props.setTitle} />
            </Container>
          </MHidden>

          <MHidden width="lgUp">
            {/* <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
            <MegaMenuDesktopHorizon navConfig={MenuConfig} /> */}
            <Container sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              <TechnologiesMobileMenu navConfig={MenuConfig} />
            </Container>
          </MHidden>
        </Container>
      </AppBar>
    </RootStyle>
  );
}
