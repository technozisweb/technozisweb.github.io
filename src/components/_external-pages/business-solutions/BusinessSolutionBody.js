// material
import { useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography } from '@material-ui/core';
// routes
//
import { MotionInView, varFadeInUp, varZoomIn } from 'src/components/animate';
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

// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  
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
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
