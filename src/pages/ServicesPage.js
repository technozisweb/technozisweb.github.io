// material
import { styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import { ServicesHero, ServicesVision, ServicesMenu, ServicesExtended, ServiceProcess } from 'src/components/_external-pages/services';

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
      <ServiceProcess />
      {/* <AboutWhat />
      <AboutVision />
      <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
      <AboutTeam />
      <AboutTestimonials /> */}
    </RootStyle>
  );
}
