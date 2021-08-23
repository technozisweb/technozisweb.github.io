import PropTypes from 'prop-types';
import { useRef } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import roundArrowRightAlt from '@iconify/icons-ic/round-arrow-right-alt';
import instagramFilled from '@iconify/icons-ant-design/instagram-filled';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box, Card, Button, Container, Typography, IconButton, Grid } from '@material-ui/core';
import DraftsTwoToneIcon from '@material-ui/icons/DraftsTwoTone';
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone';
import ExploreTwoToneIcon from '@material-ui/icons/ExploreTwoTone';
// utils
import mockData from '../../../utils/mock-data';
//
import { varFadeIn, varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

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
            <Card sx={{ p: 1, mx: 1.5 }}>
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                <DraftsTwoToneIcon color="error" fontSize="large" />
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 2 }}>
                Email
              </Typography>
              <Box component="img" sx={{ width: '100%', borderRadius: 1.5 }} />
            </Card>
          </MotionInView>
        </Grid>
        <Grid item xs={12} md={4}>
          <MotionInView variants={varFadeIn}>
            <Card sx={{ p: 1, mx: 1.5 }}>
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                <PhoneIphoneTwoToneIcon color="success" fontSize="large" />
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 2 }}>
                Phone
              </Typography>
              {/* <Box component="img" sx={{ width: '100%', borderRadius: 1.5 }} /> */}
            </Card>
          </MotionInView>
        </Grid>
        <Grid item xs={12} md={4}>
          <MotionInView variants={varFadeIn}>
            <Card sx={{ p: 1, mx: 1.5 }}>
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                <ExploreTwoToneIcon color="info" fontSize="large" />
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 2 }}>
                Location
              </Typography>
              <Box component="img" sx={{ width: '100%', borderRadius: 1.5 }} />
            </Card>
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
