// material
import { styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, List, ListItem, ListItemIcon } from '@material-ui/core';
//
import { MotionInView, varFadeInUp, varFadeInDown } from '../../animate';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.grey[900]
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
}));

// ----------------------------------------------------------------------

export default function LandingDarkMode() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          component="img"
          alt="image shape"
          src="/static/home/shape.svg"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            my: 'auto',
            position: 'absolute',
            filter: 'grayscale(1) opacity(100%)',
            display: { xs: 'none', md: 'block' }
          }}
        />

        <Grid container spacing={2} direction="row-reverse" justifyContent="space-between">
          <Grid item xs={12} md={5}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.disabled', display: 'block' }}>
                  Easy switch between styles.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3, color: 'common.white' }}>
                  Dark mode
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography sx={{ color: 'common.white', mb: 5 }}>
                  A dark theme that feels easier on the eyes.
                  A dark theme that feels easier on the eyes.
                </Typography>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.disabled', display: 'block' }}>
                  Easy switch between styles.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <List sx={{ color: 'common.white' }}>
                  <ListItem>
                    <ListItemIcon><ArrowForwardIosIcon /></ListItemIcon>
                    A dark theme that feels easier on the eyes.
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><ArrowForwardIosIcon /></ListItemIcon>
                    A dark theme that feels easier on the eyes.
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><ArrowForwardIosIcon /></ListItemIcon>
                    A dark theme that feels easier on the eyes.
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><ArrowForwardIosIcon /></ListItemIcon>
                    A dark theme that feels easier on the eyes.
                  </ListItem>
                </List>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={6} sx={{ position: 'relative', height: '100%' }}>
            <MotionInView threshold={0.5} variants={varFadeInUp}>
              <img alt="light mode" src="/static/home/cover.jpg" />
            </MotionInView>
            {/* <MotionInView threshold={0.5} variants={varFadeInDown} sx={{ top: 0, left: 0, position: 'absolute' }}>
              <img alt="dark mode" src="/static/home/darkmode.png" />
            </MotionInView> */}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
