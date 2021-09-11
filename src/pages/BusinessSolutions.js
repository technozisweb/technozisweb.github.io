// material
import { styled } from '@material-ui/core/styles';
import BusinessSolutionsBody from 'src/components/_external-pages/business-solutions/BusinessSolutionBody';
// components
import Page from '../components/Page';
import BusinessSolutionsHero from '../components/_external-pages/business-solutions/BusinessSolutionsHero';
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
    <RootStyle title="Business Solutions | Technozis">
      <BusinessSolutionsHero />
      <BusinessSolutionsBody />
    </RootStyle>
  );
}
