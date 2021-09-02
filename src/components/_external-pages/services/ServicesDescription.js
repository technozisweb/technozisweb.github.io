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
  padding: theme.spacing(3),
  // color: 'white'
  // [theme.breakpoints.up('md')]: {
  //   paddingBottom: theme.spacing(15)
  // },
}));

ServicesDescription.propTypes = {
  servicesData: PropTypes.object,
};

export default function ServicesDescription({ serviceData }) {
  console.log('servicesData in points', serviceData.path);
  if (get(serviceData.points)) serviceData.points.map((point) => { console.log({ point }) });
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <List>
          {/* <ListItem>
            <ListItemIcon sx={{ height: 60, width: 60 }}><img src={serviceData.path} /></ListItemIcon>

          </ListItem> */}
          <MotionInView variants={varFadeInUp}>
            <Typography variant="body1" sx={{ mt: 2, color: 'common.white' }}>
              {serviceData.info}
            </Typography>
          </MotionInView>
        </List>
      </Container>
      <Box sx={{ mb: 2 }}>
        {/* {get(serviceData.points)
          ? <>
            {serviceData.points.map((point, index) => {
              <List>
                <ListItem>
                  <ListItemIcon><FiberManualRecordIcon fontSize="small" sx={{ color: "white", filter: `drop-shadow(2px 2px 2px ${alpha(theme.palette.primary.main, 0.48)})` }} /></ListItemIcon>
                  {serviceData.points[index]}
                </ListItem>
              </List>
            })}</>
          : null} */}
        {/* <List>
          <ListItem>
            <ListItemIcon><FiberManualRecordIcon fontSize="small" sx={{ color: "white", filter: `drop-shadow(2px 2px 2px ${alpha(theme.palette.primary.main, 0.48)})` }} /></ListItemIcon>
            Data about service.
          </ListItem>
        </List> */}
      </Box>
    </RootStyle>
  );
}
