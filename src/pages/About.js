// material
import { Divider } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import { AboutHero, AboutTeam, AboutTestimonials, AboutVision } from '../components/_external-pages/about';
import {
  LandingDarkMode
} from '../components/_external-pages/landing';

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
    <RootStyle title="About us | Technozis">
      <AboutHero />
      <LandingDarkMode />
      <AboutTeam />
      <AboutTestimonials />
      <AboutVision />
      {/* <LandingServices /> */}
      {/* <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} /> */}
    </RootStyle>
  );
}
