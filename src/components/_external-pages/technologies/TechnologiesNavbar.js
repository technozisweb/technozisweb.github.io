import { AppBar, Container } from '@material-ui/core';
// material
import { styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { MHidden } from 'src/components/@material-extend';
import { TechnologiesDesktopMenu } from '.';
// routes
// components
import Page from '../../../components/Page';
// import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import MenuConfig from './TechnologiesMenuConfig';
import TechnologiesMobileMenu from './TechnologiesMobileMenu';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  // paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  // display: 'flex',
  // backgroundColor: theme.palette.grey[300],
}));

// ----------------------------------------------------------------------


MegaMenu.propTypes = {
  setTitle: PropTypes.func
};

export default function MegaMenu(props) {
  // const { setTitle } = props;
  // console.log(props.setTitle);
  return (
    <RootStyle title="Mega Menu | Minimal-UI">

      <AppBar
        position="static"
        color="transparent"
        sx={{
          // boxShadow: (theme) => theme.customShadows.z8,
          // alignContent: 'center',
          backgroundColor: (theme) => theme.palette.grey[300],
          paddingTop: 1,
          paddingBottom: 1
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'space-between'
          }}
        >
          <MHidden width="lgDown">
            <Container>
              <TechnologiesDesktopMenu navConfig={MenuConfig} setTitle={props.setTitle} />
            </Container>
          </MHidden>

          <MHidden width="lgUp">
            <Container>
              <TechnologiesMobileMenu navConfig={MenuConfig} />
            </Container>
          </MHidden>
        </Container>
      </AppBar>
    </RootStyle>
  );
}
