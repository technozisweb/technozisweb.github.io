// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { get } from 'lodash';
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

ServicesDescription.propTypes = {
  servicesData: PropTypes.object,
};

export default function ServicesDescription({ serviceData }) {
  console.log('servicesData in points', serviceData.points);
  if (get(serviceData.points)) serviceData.points.map((point) => { console.log({ point }) });
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box>
          {/* <MotionInView variants={varFadeInUp}> */}
          <Typography component="p" variant="h5" sx={{ mb: 2 }}>
            {serviceData.title}
          </Typography>
          {/* </MotionInView>
          <MotionInView variants={varFadeInDown}> */}
          <Typography component="p" variant="body1">
            {serviceData.description}
            {serviceData.description}
            {serviceData.description}
          </Typography>
          {/* </MotionInView> */}
          {/* <Box component="img" src="/static/home/service.png" alt="service" /> */}
        </Box>
      </Container>
      <Box sx={{ mb: 2 }}>
        {get(serviceData.points)
          ? <>
            {serviceData.points.map((point, index) => {
              <List>
                <ListItem>
                  <ListItemIcon><FiberManualRecordIcon fontSize="small" sx={{ color: "white", filter: `drop-shadow(2px 2px 2px ${alpha(theme.palette.primary.main, 0.48)})` }} /></ListItemIcon>
                  {serviceData.points[index]}
                </ListItem>
              </List>
            })}</>
          : null}
        {/* <List>
          <ListItem>
            <ListItemIcon><FiberManualRecordIcon fontSize="small" sx={{ color: "white", filter: `drop-shadow(2px 2px 2px ${alpha(theme.palette.primary.main, 0.48)})` }} /></ListItemIcon>
            {serviceData.points[0]}
          </ListItem>
        </List> */}
      </Box>
    </RootStyle>
  );
}
