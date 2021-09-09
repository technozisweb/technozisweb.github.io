import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import roundArrowRightAlt from '@iconify/icons-ic/round-arrow-right-alt';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Link, Paper, Rating, Container, Typography, useMediaQuery } from '@material-ui/core';
//
import { varFadeInUp, varFadeInLeft, MotionInView } from '../../animate';
import { MHidden } from '../../@material-extend';
import GitHubIcon from '@material-ui/icons/GitHub';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'justify',
  padding: theme.spacing(10, 0),
  backgroundSize: 'cover',
  backgroundImage: `linear-gradient(to right, ${alpha(theme.palette.grey[900], 0.8)} , ${alpha(
    theme.palette.grey[900],
    0.8
  )}), url(/static/about/testimonials.jpg)`,
  [theme.breakpoints.up('md')]: {
    textAlign: 'justify',
    padding: 0,
    height: 840,
    overflow: 'hidden'
  }
}));

// ----------------------------------------------------------------------

TestimonialCard.propTypes = {
  testimonial: PropTypes.object
};

function TestimonialLink() {
  return (
    <Link href="#" variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
      Read more testimonials
      <Box component={Icon} icon={roundArrowRightAlt} sx={{ ml: 1, width: 20, height: 20 }} />
    </Link>
  );
}

function TestimonialCard({ testimonial }) {
  const { name, rating, dateCreate, content } = testimonial;
  return (
    <Paper
      sx={{
        mt: 3,
        p: 3,
        color: 'common.white',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)', // Fix on Mobile
        bgcolor: (theme) => alpha(theme.palette.common.white, 0.04)
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>
      <Typography gutterBottom component="p" variant="caption" sx={{ color: 'grey.500' }}>
        {dateCreate}
      </Typography>
      <Rating value={rating} readOnly size="small" />
      <Typography variant="body2" sx={{ mt: 1.5 }}>
        {content}
      </Typography>
    </Paper>
  );
}

export default function SoftwareDevVision() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ height: '100%' }}
        >
          <Grid item xs={10} md={4}>
            <Box sx={{ maxWidth: { md: 360 } }}>
              <MotionInView variants={varFadeInUp}>
                <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
                  Testimonials
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Box sx={{ border: '20px solid' }}>
                  <Typography variant="h2" sx={{ m: 3, color: 'common.white' }}>
                    Software <br />
                    Product
                  </Typography>
                </Box>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography sx={{ mt: 5, color: 'common.white' }}>
                  Our goal is to create a product and service that you’re satisfied with and use it every day. This is
                  why we’re constantly working on our services to make it better every day and really listen to what our
                  users has to say.
                </Typography>
              </MotionInView>

              <MHidden width="mdUp">
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                  <MotionInView variants={varFadeInUp}>
                    <TestimonialLink />
                  </MotionInView>
                </Box>
              </MHidden>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            lg={6}
          // sx={{
          //   right: { md: 24 },
          //   position: { md: 'absolute' }
          // }}
          >
            <Grid container spacing={isDesktop ? 3 : 0} alignItems="center">
              <Paper
                sx={{
                  mt: 3,
                  p: 4,
                  flexWrap: 'wrap',
                  // maxWidth: 980,
                  color: 'common.white',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)', // Fix on Mobile
                  bgcolor: (theme) => alpha(theme.palette.common.white, 0.1)
                }}
              >
                <Box><GitHubIcon color="error" fontSize="large" /></Box>
                <Typography>End to end software product development</Typography>
              </Paper>
              {/* <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(0, 3).map((testimonial) => (
                  <MotionInView key={testimonial.name} variants={varFadeInUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </MotionInView>
                ))}
              </Grid>

              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(3, 6).map((testimonial) => (
                  <MotionInView key={testimonial.name} variants={varFadeInUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </MotionInView>
                ))}
              </Grid> */}
            </Grid>
            <Grid container spacing={isDesktop ? 3 : 0} alignItems="center">
              <Paper
                sx={{
                  mt: 5,
                  p: 4,
                  flexWrap: 'wrap',
                  // maxWidth: 980,
                  color: 'common.white',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)', // Fix on Mobile
                  bgcolor: (theme) => alpha(theme.palette.common.white, 0.1)
                }}
              >
                <Box><GitHubIcon color="error" fontSize="large" /></Box>
                <Typography>End to end software product development</Typography>
              </Paper>
              {/* <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(0, 3).map((testimonial) => (
                  <MotionInView key={testimonial.name} variants={varFadeInUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </MotionInView>
                ))}
              </Grid>

              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(3, 6).map((testimonial) => (
                  <MotionInView key={testimonial.name} variants={varFadeInUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </MotionInView>
                ))}
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>

        <MHidden width="mdDown">
          <Box sx={{ bottom: 60, position: 'absolute' }}>
            <MotionInView variants={varFadeInLeft}>
              <TestimonialLink />
            </MotionInView>
          </Box>
        </MHidden>
      </Container>
    </RootStyle>
  );
}
