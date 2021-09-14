import { AppBar, Box, Button, Container, Link, Toolbar } from '@material-ui/core';
// material
import { styled } from '@material-ui/core/styles';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { MHidden } from '../../components/@material-extend';
import Label from '../../components/Label';
// components
import Logo from '../../components/Logo';
import {
  MegaMenuDesktopHorizon,
  MegaMenuMobile,
  MenuConfig
} from '../../components/mega-menu';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
//
// import MenuDesktop from './MenuDesktop';
// import MenuMobile from './MenuMobile';
// import navConfig from './MenuConfig';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'background.default' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 }
          })
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <RouterLink to="/" style={{ width: 60, marginRight: {xs: 10, md: 0} }}>
            <Logo />
          </RouterLink>
          <Label color="info" sx={{ ml: 1 }}>
            Technozis
          </Label>
          <MHidden width="mdDown">
            {/* <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
            <MegaMenuDesktopHorizon navConfig={MenuConfig} /> */}

            <Container sx={{ display: 'flex', alignItems: 'center', position: 'relative', color: 'white' }}>
              <Box sx={{ flexGrow: 1 }} />
              <MegaMenuDesktopHorizon isOffset={isOffset} isHome={isHome} navConfig={MenuConfig} />
              <Box sx={{ flexGrow: 0.5 }} />
              <Button variant="outlined" target="_blank">
                <Link
                  underline="none"
                  href="/contact-us"
                // color="black"
                >
                  Contact us
                </Link>
              </Button>
            </Container>
          </MHidden>

          <MHidden width="mdUp">
            {/* <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
            <MegaMenuDesktopHorizon navConfig={MenuConfig} /> */}
            <Container sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              <Box sx={{ flexGrow: 1 }} />
              <MegaMenuMobile navConfig={MenuConfig} />
              {/* <Box sx={{ flexGrow: 0.5 }} /> */}
            </Container>
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
