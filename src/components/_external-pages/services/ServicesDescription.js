// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Button, ListItem, ListItemIcon, List } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RemoveIcon from '@material-ui/icons/Remove';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.grey[600],
  // color: 'white'
  // [theme.breakpoints.up('md')]: {
  //   paddingBottom: theme.spacing(15)
  // },
}));

ServicesDescription.propTypes = {
  servicesData: PropTypes.object,
};

export default function ServicesDescription({ serviceData }) {
  console.log('servicesData in points', serviceData.content);
  if (get(serviceData.points)) serviceData.points.map((point) => { console.log({ point }) });
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        {serviceData && serviceData.content
          ? (
            <List>
              {/* <ListItem>
                <ListItemIcon sx={{ height: 60, width: 60 }}><img src={serviceData.path} /></ListItemIcon>
              </ListItem> */}
              {/* {serviceData.info.map((item) => (
                <MotionInView variants={varFadeInUp}>
                  <Typography
                    variant="body1"
                    sx={{ mb: 3, color: 'text.main', fontFamily: 'Roboto', fontSize: 22, }}
                  >
                    {item}
                  </Typography>
                </MotionInView>
              ))} */}
              {/* <ListItemIcon sx={{ height: 60, width: 60 }}><img src={serviceData.icon} /></ListItemIcon> */}
              <Typography variant="subtitle1"
                sx={{
                  fontSize: 20,
                  marginTop: 2,
                  fontFamily: 'sans-serif',
                  fontStyle: "italic",
                  // backgroundColor: 'red'
                }}>
                {serviceData.subheader}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 20, marginTop: 5 }}>
                {serviceData.content}
              </Typography>
              {serviceData.points.map((point) => (
                <List key={point.header}>
                  <ListItem>
                    <ListItemIcon sx={{ color: "lightcoral" }}><RemoveIcon fontSize="large" /></ListItemIcon>
                    <Typography variant="subtitle1">
                      {point.header}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body1">
                      {point.description}
                    </Typography>
                  </ListItem>
                </List>
              ))}

            </List>
          )
          : null}
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
