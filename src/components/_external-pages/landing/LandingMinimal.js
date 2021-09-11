import { Box, Button, Card, CardMedia, Container, Link, Typography } from '@material-ui/core';
// material
import { alpha, styled, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Slider from 'react-slick';
import ServiceData from 'src/utils/servicesInfo';
// utils
//
import { MotionInView, varFadeIn, varFadeInLeft, varFadeInUp } from '../../animate';
import { CarouselControlsArrowsBasic2 } from '../../carousel';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

const CardStyle = styled(Card)(({ theme }) => ({
  // padding: theme.spacing(3, 3, 0),
  maxWidth: 320,
  minHeight: 380,
  fontFamily: 'Roboto',
  '&:hover': {
    boxShadow: `0px 10px 10px 10px ${alpha(theme.palette.grey[300], 1)}`,
  },
}));

const CardButton = styled(Button)(() => ({
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.1, 1.1, 1)", backgroundColor: 'transparent' },
}));

MemberCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string
  })
};

function MemberCard({ member }) {
  const { title, subheader, icon, path } = member;
  return (
    <CardStyle key={title} sx={{ margin: { xs: 2, md: 'auto' } }}>
      <CardMedia
        component='img'
        image={icon}
        height="120"
      />
      <Typography variant="subtitle2" sx={{ mt: 2, textAlign: 'center' }}>
        {title}
      </Typography>
      <Box sx={{ p: 2 }}>
        {/* <Divider /> */}
        <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary', textAlign: 'justify' }}>
          {subheader}
        </Typography>
        <CardButton
          sx={{
            alignSelf: "end",
            textAlign: "center"
          }}
        >
          <MotionInView variants={varFadeInLeft}>
            <Link href={path} variant="subtitle2" sx={{ alignItems: 'center', alignContent: 'center' }}>
              Read more
              {/* <Box component={Icon} icon={roundArrowRightAlt} sx={{ ml: 1, width: 30, height: 30 }} /> */}
            </Link>
          </MotionInView>
        </CardButton>
      </Box>
    </CardStyle>
  );
}

export default function AboutTeam() {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    speed: 500,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: '10px 80px',
    // margin: '30px',
    rtl: Boolean(theme.direction === 'rtl'),
    // ...CarouselControlsPaging2({
    // sx: { mt: 3 }
    // }),
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <Container maxWidth="lg" sx={{ pb: {xs: 0, md: 10}, textAlign: 'center' }}>
      {/* <MotionInView variants={varFadeInDown}>
        <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
          The Header
        </Typography>
      </MotionInView> */}

      {/* <MotionInView variants={varFadeInUp}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Some header
        </Typography>
      </MotionInView> */}

      <MotionInView variants={varFadeInUp}>
        <Typography
          sx={{
            mt: 10,
            mb: 10,
            mx: 'auto',
            maxWidth: 930,
            // textAlign: 'justify',
            color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white')
          }}
          variant="h5"
        >
          One-stop solution provider for comprehensive enterprise business solutions, fundamental service offerings, and enterprise mobile analytics.
        </Typography>
      </MotionInView>

      <Box sx={{ position: 'relative' }}>
        <Slider ref={carouselRef} {...settings}>
          {ServiceData.map((member) => (
            <MotionInView key={member.id} variants={varFadeIn}>
              <MemberCard member={member} />
            </MotionInView>
          ))}
        </Slider>
        <CarouselControlsArrowsBasic2
          onNext={handleNext}
          onPrevious={handlePrevious}
          sx={{ transform: 'translateY(-64px)' }}
        />
      </Box>
      {/* <Button
        variant="outlined"
        color="inherit"
        size="large"
        endIcon={<Icon icon={roundArrowRightAlt} width={24} height={24} />}
        sx={{ mx: 'auto' }}
      >
        View all team members
      </Button> */}
    </Container>
  );
}
