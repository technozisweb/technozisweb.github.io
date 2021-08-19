// material
import { styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import {
  LandingHero,
  LandingMinimal,
  LandingDarkMode,
  LandingThemeColor,
  LandingPricingPlans,
  LandingAdvertisement,
  LandingCleanInterfaces,
  LandingHugePackElements
} from '../components/_external-pages/landing';
import { AboutWhat } from '../components/_external-pages/about';
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
    <RootStyle title="The starting point for your next project | Minimal-UI" id="move_top">
      <LandingHero />
      <ContentStyle>
        {/* <LandingServices /> */}
        <LandingMinimal />
        <AboutWhat />
        {/* <LandingDarkMode /> */}
        <LandingHugePackElements />
        {/* <LandingThemeColor /> */}
        <LandingCleanInterfaces />
        {/* <LandingPricingPlans /> */}
        <LandingAdvertisement />
      </ContentStyle>
    </RootStyle>
  );
}
