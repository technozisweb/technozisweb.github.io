import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Button, Container, Typography, List, ListItem, ListItemIcon } from '@material-ui/core';
// routes
import { PATH_PAGE } from '../../../routes/paths';
//
import { varFadeInUp, MotionInView } from '../../animate';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  // backgroundImage:
  //   theme.palette.mode === 'light'
  //     ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${theme.palette.grey[300]} 100%)`
  //     : 'none'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}));

const ScreenStyle = styled(MotionInView)(({ theme }) => ({
  paddingRight: 2,
  paddingBottom: 1,
  maxWidth: 160,
  borderRadius: 8,
  // backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
  [theme.breakpoints.up('sm')]: {
    maxWidth: 320,
    paddingRight: 4,
    borderRadius: 12
  },
  '& img': {
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 12
    }
  }
}));

const COMMON = {
  scaleX: 0.86,
  skewY: 8,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  opacity: 0
};

const variantScreenLeft = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 }
};
const variantScreenCenter = {
  initial: COMMON,
  animate: { ...COMMON, opacity: 1 }
};
const variantScreenRight = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 }
};

// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isRTL = theme.direction === 'rtl';

  const screenLeftAnimate = variantScreenLeft;
  const screenCenterAnimate = variantScreenCenter;
  const screenRightAnimate = variantScreenRight;

  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Box component='img' src='/static/home/key-highlights.jpg' />
      </Container>
    </RootStyle>
  );
}
