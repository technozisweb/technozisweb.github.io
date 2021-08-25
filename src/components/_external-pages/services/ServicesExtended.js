// material
import { styled, alpha } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, List, ListItem, ListItemIcon } from '@material-ui/core';
//
import { MotionInView, varFadeInUp, varFadeInDown } from '../../animate';
import StopTwoToneIcon from '@material-ui/icons/StopTwoTone';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0),
  // backgroundImage:
  //   theme.palette.mode === 'light'
  //     ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${theme.palette.grey[300]} 50%)`
  //     : 'none'
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

        <Grid container spacing={2} direction="row-reverse" justifyContent="space-between">
          {/* <Grid item xs={12} md={5} sx={{ position: 'relative', height: '100%' }}>
            <MotionInView threshold={0.5} variants={varFadeInUp}>
              <img alt="light mode" src="/static/home/team.png" />
            </MotionInView>
            <MotionInView threshold={0.5} variants={varFadeInDown} sx={{ top: 0, left: 0, position: 'absolute' }}>
              <img alt="dark mode" src="/static/home/darkmode.png" />
            </MotionInView>
          </Grid> */}
          <Grid item xs={12}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.disabled', display: 'block' }}>
                  Easy switch between styles.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Some Info
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="p" sx={{ mb: 5 }}>
                Custom digital experiences are pivotal to today’s dynamic and new-age businesses to build a better future ahead. We, at SPEC INDIA leverage 3 decade-long experience in creating top-rated, customized, and high-performing enterprise software solutions that help enterprises become future-ready. We are designing, developing, measuring, and improving next-gen solutions across a range of industry verticals. SPEC INDIA’s software development team has been successfully delivering impactful digital transformation with optimum efficiency and agility for over 30 years. Our result-driven custom software development services include a multitude of services including Custom CRM, Custom ERP, Enterprise software development, Digital product development, SaaS development, Cloud-enabled development, Software consulting, and Custom software solutions. We utilize modern technologies and advanced approaches like Agile and DevOps to accelerate the time-to-market of your applications with a focus on delivering powerful, scalable, and cutting-edge software solutions.
                </Typography>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <Typography component="p" variant="overline" sx={{ mb: 10, color: 'text.disabled', display: 'block' }}>
                  Easy switch between styles.
                </Typography>
              </MotionInView>
              
            </ContentStyle>
          </Grid>

        </Grid>
      </Container>
    </RootStyle>
  );
}
