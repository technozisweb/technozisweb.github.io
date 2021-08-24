// material
import { styled } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
// components
import Page from '../components/Page';
import { ServicesHero, ServicesDescription, ServicesVision, ServicesMenu, ServicesExtended } from 'src/components/_external-pages/services';
// import { LandingDarkMode } from 'src/components/_external-pages/landing';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function About() {
  return (
    <RootStyle title="Software development | Minimal-UI">
      <ServicesHero />
      <ServicesMenu />
      {/* <ServicesDescription /> */}
      <ServicesExtended />
      <ServicesVision />
      {/* <AboutWhat />
      <AboutVision />
      <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
      <AboutTeam />
      <AboutTestimonials /> */}
    </RootStyle>
  );
}
