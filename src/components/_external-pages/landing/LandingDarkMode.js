// material
import { Container, Grid, List, ListItem, ListItemIcon, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import StopTwoToneIcon from '@material-ui/icons/StopTwoTone';
//
import { MotionInView, varFadeInUp } from '../../animate';

const ENPOWER = [
  'Technozis is a team that has passion for developing and delivering solutions that matters.',
  'We combine our in-depth expertise, nimble and creative approach, and time-tested processes to achieve your business goals.',
  'Our vision is to bring ideas to life by simplifying complicated issues and build scalable solutions.'
]

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0),
  // backgroundColor: theme.palette.grey[900]
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'justify',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'justify',
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
        {/* <Box
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
        /> */}

        <Grid container spacing={2} direction="row-reverse" justifyContent="space-between" sx={{ mt: 5 }}>
          <Grid item xs={12} md={5} sx={{ position: 'relative', height: '100%', mt: 5 }}>
            <MotionInView threshold={0.5} variants={varFadeInUp}>
              <img alt="light mode" src="/static/about/whatdowedo.jpg" />
            </MotionInView>
            {/* <MotionInView threshold={0.5} variants={varFadeInDown} sx={{ top: 0, left: 0, position: 'absolute' }}>
              <img alt="dark mode" src="/static/home/darkmode.png" />
            </MotionInView> */}
          </Grid>
          <Grid item xs={12} md={6}>
            <ContentStyle>
              {/* <MotionInView variants={varFadeInUp}>
                <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.disabled', display: 'block' }}>
                  Easy switch between styles.
                </Typography>
              </MotionInView> */}

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  What do we do?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography sx={{ mb: 5 }}>
                  We are a value-driven which commits to design and develop technology products that can streamline your business processes and grow revenue. We build custom software applications that are tailored to meet your specific use case, budget and timeline
                </Typography>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <Typography variant="h5"
                  sx={{
                    mb: 2,
                    color: 'text.main',
                    display: 'block',
                    fontFamily: 'Raleway'
                    // fontStyle: "italic"
                  }}>
                  Empower sustainable business with us
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <List sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                  {ENPOWER.map((item) => (
                    <ListItem>
                      <ListItemIcon><StopTwoToneIcon fontSize="small" /></ListItemIcon>
                      {item}
                    </ListItem>
                  ))}
                </List>
              </MotionInView>
            </ContentStyle>
          </Grid>

        </Grid>
      </Container>
    </RootStyle>
  );
}
