
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
// material
import { styled } from '@material-ui/core/styles';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
//
import { MotionInView, varFadeInUp, varZoomIn } from '../../animate';


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  // padding: theme.spacing(10, 0),
  paddingBottom: 0,
  paddingTop: 50
  //   backgroundImage:
  //     theme.palette.mode === 'light'
  //       ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${theme.palette.grey[300]} 100%)`
  //       : 'none'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  // marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'center',
    marginBottom: 0
  }
}));

// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  // const isRTL = theme.direction === 'rtl';

  // const screenLeftAnimate = variantScreenLeft;
  // const screenCenterAnimate = variantScreenCenter;
  // const screenRightAnimate = variantScreenRight;

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={6} sx={{ textAlign: 'justify' }}>
            <ContentStyle>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h3" sx={{ mb: 3, borderBottom: '4px solid lightpink' }}>
                  Custom Mobile ERP
                </Typography>
              </MotionInView>


              <MotionInView variants={varZoomIn}>
                <Box
                  component="img"
                  src="/static/home/crm.jpg"
                  sx={{ p: 5 }}
                />
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <List
                  sx={{
                    mb: 5,
                    // color: isLight ? 'text.secondary' : 'common.white', 
                    textAlign: 'justify'
                  }}
                >
                  <ListItem>
                    <ListItemIcon><RemoveOutlinedIcon fontSize="small" /></ListItemIcon>
                    Cloud-based, scalable, customizable, and integrated Mobile ERP software.
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><RemoveOutlinedIcon fontSize="small" /></ListItemIcon>
                    Enable a 360-degree business view and a single point of real-time data reference.
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><RemoveOutlinedIcon fontSize="small" /></ListItemIcon>
                    Automate, manage, and integrate various business components.
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><RemoveOutlinedIcon fontSize="small" /></ListItemIcon>
                    <ListItemText> Advanced ERP software is accessible on mobile/ desktops/ laptops/ tablets/ smart screens/ wireless display devices, providing data visibility and availability anywhere, anytime.</ListItemText>
                  </ListItem>
                </List>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={6} dir="ltr" sx={{ textAlign: 'justify' }}>

            <MotionInView variants={varFadeInUp}>
              <Typography variant="h3" sx={{ mb: 3, borderBottom: '4px solid lightpink', textAlign: 'center' }}>
                Enterprise CRM
              </Typography>
            </MotionInView>

            {/* <MotionInView variants={varFadeInUp}>
              <Typography
                sx={{
                  mb: 5,
                  color: isLight ? 'text.secondary' : 'common.white'
                }}
              >
                We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!
              </Typography>
            </MotionInView> */}
            <MotionInView variants={varZoomIn}>
              <Box
                component="img"
                src="/static/home/erp2.jpg"
                sx={{ p: 5 }}
              />
            </MotionInView>

            <MotionInView variants={varFadeInUp}>
              <List
                sx={{
                  mb: 5,
                  // color: isLight ? 'text.secondary' : 'common.white',
                  textAlign: 'justify'
                }}
              >
                <ListItem>
                  <ListItemIcon><RemoveOutlinedIcon fontSize="small" /></ListItemIcon>
                  Customer Relationship Management to Enhance Sales, Marketing, Service, and Satisfaction all at Once.
                </ListItem>
                <ListItem>
                  <ListItemIcon><RemoveOutlinedIcon fontSize="small" /></ListItemIcon>
                  Reinvent your business model with a multi-faceted industry-specific approach.
                </ListItem>
                <ListItem>
                  <ListItemIcon><RemoveOutlinedIcon fontSize="small" /></ListItemIcon>
                  Get a mobility solution that can cater to all of your business needs in the field sales teams, area and regional managers.
                </ListItem>
                <ListItem>
                  <ListItemIcon><RemoveOutlinedIcon fontSize="small" /></ListItemIcon>
                  Custom CRM solutions to solve the shortcomings across all industries.
                </ListItem>
              </List>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: 'black', p: 5, mt: 10 }}>
        <Container>
        <Typography
          variant='h5'
          sx={{
            // mt: 15,
            color: 'common.white',
            fontWeight: 'fontWeightLarge',
            fontFamily: 'Roboto',
            fontStyle: 'italic',
            textAlign: 'center'
          }}
        >
          Come, Join us to improve your company’s processes, enhance performance, and ultimately make the company more profitable. Let's work together to scale your Business.
          </Typography>
        </Container>
      </Box>
    </RootStyle>
  );
}
