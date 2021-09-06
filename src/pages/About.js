// material
import { styled } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
// components
import Page from '../components/Page';
import { AboutHero, AboutWhat, AboutTeam, AboutVision, AboutTestimonials } from '../components/_external-pages/about';
import {
  LandingDarkMode,
} from '../components/_external-pages/landing';
import LandingServices from 'src/components/_external-pages/landing/LandingServices';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function About() {
  return (
    <RootStyle title="About us | Minimal-UI">
      <AboutHero />
      <LandingDarkMode />
      <AboutTeam />
      <AboutTestimonials />
      <AboutVision />
      {/* <LandingServices /> */}
      <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
    </RootStyle>
  );
}
