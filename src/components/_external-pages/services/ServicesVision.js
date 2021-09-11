import roundArrowRightAlt from '@iconify/icons-ic/round-arrow-right-alt';
import { Icon } from '@iconify/react';
import { Box, Container, Grid, Link, Paper, Rating, Typography, useMediaQuery } from '@material-ui/core';
// material
import { alpha, styled, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { MHidden } from '../../@material-extend';
//
import { MotionInView, varFadeInLeft, varFadeInUp } from '../../animate';

// ----------------------------------------------------------------------

const POINTS = [
  {
    point: 'Get comprehensive technology roadmaps for end - to - end development of scalable solutions.',
    src: '/static/services/service1.png'
  },
  {
    point: 'Technozis aims to deliver a full - cycle services for software development seamlessly adapting to your project requirements and business needs.',
    src: '/static/services/service2.png'
  },
  {
    point: 'Our software products not only solve the problems for the users, but also create joyful experience and interactions for them.',
    src: '/static/services/service3.png'
  }
]

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

const ButtonStyle = styled('div')(() => ({
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.1, 1.1, 1)" },
}));

// ----------------------------------------------------------------------

TestimonialCard.propTypes = {
  testimonial: PropTypes.object
};

function TestimonialLink() {
  return (
    <ButtonStyle>
      <Link href="/contact-us" variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
        Contact Us
        <Box component={Icon} icon={roundArrowRightAlt} sx={{ ml: 1, width: 20, height: 20 }} />
      </Link>
    </ButtonStyle>
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
              {/* <MotionInView variants={varFadeInUp}>
                <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
                  Testimonials
                </Typography>
              </MotionInView> */}

              <MotionInView variants={varFadeInUp}>
                <Box sx={{ border: '20px solid' }}>
                  <Typography variant="h2" sx={{ m: 3, color: 'common.white' }}>
                    Software <br />
                    Product
                  </Typography>
                </Box>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="subtitle1" sx={{ mt: 5, color: 'common.white' }}>
                  Technozis service portfolio has Everything -  the complete software development life cycle that meets all your business needs.
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
            {POINTS.map((item) => (
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
                  <Box
                    component="img"
                    src={item.src}
                    sx={{
                      height: 50,
                      width: 50
                    }}
                  />
                  <Typography variant="body1">{item.point}</Typography>
                </Paper>
              </Grid>
            ))}
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
