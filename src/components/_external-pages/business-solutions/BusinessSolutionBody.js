import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Button, Container, Typography, List, ListItem, ListItemIcon } from '@material-ui/core';
// routes
import { PATH_PAGE } from '../../../routes/paths';
//
import { varFadeInUp, MotionInView, varZoomIn } from '../../animate';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  //   backgroundImage:
  //     theme.palette.mode === 'light'
  //       ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${theme.palette.grey[300]} 100%)`
  //       : 'none'
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
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
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
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={6} sx={{ alignItems: 'center' }}>
            <ContentStyle>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h3" sx={{ mb: 3, backgroundColor: '#C4CDD5', textAlign: 'center' }}>
                  Custom Mobile ERP
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? 'text.secondary' : 'common.white'
                  }}
                >
                  We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!
                </Typography>
              </MotionInView>

              <MotionInView variants={varZoomIn}>
                <Box
                  component="img"
                  src="/static/home/business-intelligence.jpg"
                />
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? 'text.secondary' : 'common.white'
                  }}>
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={6} dir="ltr">

            <MotionInView variants={varFadeInUp}>
              <Typography variant="h3" sx={{ mb: 3, backgroundColor: '#C4CDD5', textAlign: 'center' }}>
                Enterprise CRM
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInUp}>
              <Typography
                sx={{
                  mb: 5,
                  color: isLight ? 'text.secondary' : 'common.white'
                }}
              >
                We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!
              </Typography>
            </MotionInView>
            <MotionInView variants={varZoomIn}>
              <Box
                component="img"
                src="/static/home/businesspeople.jpg"
              />
            </MotionInView>

            {/* <MotionInView variants={varFadeInUp}>
              <List
                sx={{
                  mb: 5,
                  color: isLight ? 'text.secondary' : 'common.white'
                }}
              >
                <ListItem>
                  <ListItemIcon><ArrowRightIcon color="primary" /></ListItemIcon>
                  Here is some information about the company.
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArrowRightIcon color="primary" /></ListItemIcon>
                  Here is some information about the company.
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArrowRightIcon color="primary" /></ListItemIcon>
                  Here is some information about the company.
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArrowRightIcon color="primary" /></ListItemIcon>
                  Here is some information about the company.
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArrowRightIcon color="primary" /></ListItemIcon>
                  Here is some information about the company.
                </ListItem>
              </List>
            </MotionInView> */}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
