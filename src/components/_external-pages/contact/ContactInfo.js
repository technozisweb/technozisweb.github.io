import { Box, Card, Container, Grid, Typography } from '@material-ui/core';
import { alpha, styled } from '@material-ui/core/styles';
import DraftsTwoToneIcon from '@material-ui/icons/DraftsTwoTone';
import ExploreTwoToneIcon from '@material-ui/icons/ExploreTwoTone';
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone';
//
import { MotionInView, varFadeIn, varFadeInDown, varFadeInUp } from '../../animate';

const CardStyle = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1),
  height: 140,
  fontFamily: 'Roboto',
  boxShadow: `0px 5px 5px 5px ${alpha(theme.palette.grey[300], 1)}`,
  margin: 1.5,
  '&:hover': {
    boxShadow: `0px 15px 15px 15px ${alpha(theme.palette.grey[300], 1)}`,
  },
}));

// ----------------------------------------------------------------------

export default function ContactUs() {

  return (
    <Container maxWidth="lg" sx={{ pb: 10, textAlign: 'center' }}>
      <MotionInView variants={varFadeInDown}>
        <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
          Good to keep in touch
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Let's Build Great Softwares
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography
          sx={{
            mb: 10,
            mx: 'auto',
            maxWidth: 630,
            color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white')
          }}
          variant="h6"
        >
          Contact Us
        </Typography>
      </MotionInView>

      {/* <Box sx={{ position: 'relative' }}> */}
      {/* <Slider ref={carouselRef} {...settings}> */}
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <MotionInView variants={varFadeIn}>
            <CardStyle sx={{ p: 1, mx: 1.5 }}>
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                <DraftsTwoToneIcon color="error" fontSize="large" />
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 2 }}>
                <a
                  href="mailto:contact@technozis.com"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  contact@technozis.com
                </a>
              </Typography>
              <Box component="img" sx={{ width: '100%', borderRadius: 1.5 }} />
            </CardStyle>
          </MotionInView>
        </Grid>
        <Grid item xs={12} md={4}>
          <MotionInView variants={varFadeIn}>
            <CardStyle sx={{ p: 1, mx: 1.5 }}>
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                <PhoneIphoneTwoToneIcon color="success" fontSize="large" />
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 2 }}>
                <a
                  href="tel:9996600068"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  9996600068
                </a>
              </Typography>
              {/* <Box component="img" sx={{ width: '100%', borderRadius: 1.5 }} /> */}
            </CardStyle>
          </MotionInView>
        </Grid>
        <Grid item xs={12} md={4}>
          <MotionInView variants={varFadeIn}>
            <CardStyle sx={{ p: 1, mx: 1.5 }}>
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                <ExploreTwoToneIcon color="info" fontSize="large" />
              </Typography>
              <Typography variant="subtitle2" sx={{ mt: 2, mb: 2 }}>
                <a href="geo://?q=https://www.google.com/maps/place/DLF+Corporate+Greens/@28.4072995,76.9952951,17z/data=!3m1!4b1!4m5!3m4!1s0x390d3d5ab5c439e1:0xdee55a2c01e31695!8m2!3d28.4072948!4d76.9974838" style={{ textDecoration: 'none', color: 'black' }}>210, Tower 2, DLF Corporate Greens, Sector 74A, Gurugram, 122004</a>
              </Typography>
              <Box component="img" sx={{ width: '100%', borderRadius: 1.5 }} />
            </CardStyle>
          </MotionInView>
        </Grid>
      </Grid>
      {/* </Slider>
        <CarouselControlsArrowsBasic2
          onNext={handleNext}
          onPrevious={handlePrevious}
          sx={{ transform: 'translateY(-64px)' }}
        /> */}
      {/* </Box> */}
      {/* <Button
        variant="outlined"
        color="inherit"
        size="large"
        endIcon={<Icon icon={roundArrowRightAlt} width={24} height={24} />}
        sx={{ mx: 'auto', mt: 10 }}
      >
        View all team members
      </Button> */}
    </Container>
  );
}
