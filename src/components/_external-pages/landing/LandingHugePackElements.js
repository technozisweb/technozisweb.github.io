
// material
import { styled } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';
// routes

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  // backgroundImage:
  //   theme.palette.mode === 'light'
  //     ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${theme.palette.grey[300]} 100%)`
  //     : 'none'
}));

// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  // const theme = useTheme();
  // const isLight = theme.palette.mode === 'light';
  // const isRTL = theme.direction === 'rtl';

  // const screenLeftAnimate = variantScreenLeft;
  // const screenCenterAnimate = variantScreenCenter;
  // const screenRightAnimate = variantScreenRight;

  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Box component='img' src='/static/home/key-highlights.jpg' />
      </Container>
    </RootStyle>
  );
}
