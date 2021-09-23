// material
import { Container, List, ListItem, ListItemIcon, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import PropTypes from 'prop-types';

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

  return (
    <RootStyle>
      <Container maxWidth="lg">
        {serviceData && serviceData.content
          ? (
            <List sx={{ textAlign: 'justify' }}>
              <Typography
                sx={{
                  // fontSize : {xs: 16, md: 20},
                  marginTop: 2,
                  fontFamily: 'Roboto',
                  // fontStyle: "italic",
                  fontWeight: 'fontWeightMedium'
                  // backgroundColor: 'red'
                }}
                variant="subtitle1"
              >
                {serviceData.subheader}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 5 }}>
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
              
              {/* <Typography */}

            </List>
          )
          : null}
      </Container>
    </RootStyle>
  );
}
