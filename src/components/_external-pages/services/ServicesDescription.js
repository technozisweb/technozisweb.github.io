// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Button, ListItem, ListItemIcon, List } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
  // color: 'white'
  // [theme.breakpoints.up('md')]: {
  //   paddingBottom: theme.spacing(15)
  // },
}));

export default function LandingMinimalHelps() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 2, md: 2 } }}>
          {/* <MotionInView variants={varFadeInUp}> */}
            <Typography component="p" variant="h5" sx={{ mb: 2 }}>
              SOFTWARE SERVICE
            </Typography>
          {/* </MotionInView>
          <MotionInView variants={varFadeInDown}> */}
            <Typography component="p" variant="body1">
              Blending years of experience and power of collaboration to overcome business challenges with industry-wide, advanced, and quality services from consulting to deployments.
            </Typography>
          {/* </MotionInView> */}
          {/* <Box component="img" src="/static/home/service.png" alt="service" /> */}
          <List>
            <ListItem>
              <ListItemIcon><FiberManualRecordIcon fontSize="small" sx={{ color: "white", filter: `drop-shadow(2px 2px 2px ${alpha('#000000', 0.48)})` }} /></ListItemIcon>
              Software Development at best
            </ListItem>
          </List>
        </Box>
      </Container>
    </RootStyle>
  );
}
