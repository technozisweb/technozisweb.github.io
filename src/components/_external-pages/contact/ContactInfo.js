import { Box, Card, Container, Grid, Typography } from '@material-ui/core';
// material
import { useTheme } from '@material-ui/core/styles';
import DraftsTwoToneIcon from '@material-ui/icons/DraftsTwoTone';
import ExploreTwoToneIcon from '@material-ui/icons/ExploreTwoTone';
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone';
import { styled, alpha } from '@material-ui/core/styles';
//
import { MotionInView, varFadeIn, varFadeInDown, varFadeInUp } from '../../animate';

const CardStyle = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1),
  height: 140,
  fontFamily: 'Roboto', 
  margin: 1.5,
  '&:hover': {
    boxShadow: `0px 10px 10px 10px ${alpha(theme.palette.grey[300], 1)}`,
  },
}));

// ----------------------------------------------------------------------

export default function ContactUs() {
  const theme = useTheme();

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
              <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
                contact@technozis.com
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
              <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
                9996600068
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
              <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
                210, Tower 2, DLF Corporate Greens, Sector 74A, Gurugram, 122004  
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
