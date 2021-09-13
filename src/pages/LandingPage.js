// material
import { styled } from '@material-ui/core/styles';
import MainFooter from 'src/layouts/main/MainFooter';
// components
import Page from '../components/Page';
import { AboutWhat } from '../components/_external-pages/about';
import { LandingHero, LandingHighlights, LandingMinimal } from '../components/_external-pages/landing';
// import LandingServices from 'src/components/_external-pages/landing/LandingServices';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="Technozis" id="move_top">
      <LandingHero />
      <ContentStyle>
        <LandingMinimal />
        <AboutWhat />
        <LandingHighlights />
        {/* <LandingCleanInterfaces /> */}
      </ContentStyle>
      <MainFooter />  
    </RootStyle>
  );
}
