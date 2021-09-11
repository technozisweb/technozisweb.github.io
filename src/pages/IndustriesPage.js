// material
import { styled } from '@material-ui/core/styles';
import IndustriesContent from 'src/components/_external-pages/industries/IndustriesContent';
// components
import Page from '../components/Page';
import IndustriesHero from '../components/_external-pages/industries/IndustriesHero';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Industries() {

  return (
    <RootStyle title="Industries | Technozis">
      <IndustriesHero />
      <IndustriesContent />
      {/* <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} /> */}
      {/* <TechnologiesContent title={title} /> */}
    </RootStyle>
  );
}
