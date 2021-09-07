import PropTypes from 'prop-types';
import { useRef } from 'react';
import Slider from 'react-slick';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Button, Container, Typography, Link, CardMedia, Card } from '@material-ui/core';
// utils
// import mockData from '../../../utils/mock-data';
//
import { varFadeIn, varFadeInUp, MotionInView, varFadeInDown, varFadeInLeft } from '../../animate';
import { CarouselControlsArrowsBasic2 } from '../../carousel';
import ServiceData from 'src/utils/servicesInfo';

// ----------------------------------------------------------------------

// const MOCK_MEMBERS = [...Array(5)].map((_, index) => ({
//   id: mockData.id(index),
//   name: mockData.name.fullName(index),
//   role: mockData.role(index),
//   // avatar: mockData.image.avatar(index),
// }));

// const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

// ----------------------------------------------------------------------

const CardStyle = styled(Card)(({ theme }) => ({
  // padding: theme.spacing(3, 3, 0),
  maxWidth: 300,
  minHeight: 320,
  margin: 'auto',
  '&:hover': {
    boxShadow: `0px 10px 10px 10px ${alpha(theme.palette.grey[300], 1)}`,
  },
}));

const CardButton = styled(Button)(() => ({
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.1, 1.1, 1)", backgroundColor: 'transparent' },
}));

// function ServiceLink() {
//   return (
//     <Link href="/services" variant="subtitle2" sx={{ alignItems: 'center', alignContent: 'center' }}>
//       Read more
//       <Box component={Icon} icon={roundArrowRightAlt} sx={{ ml: 1, width: 20, height: 20 }} />
//     </Link>
//   );
// }

MemberCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    title: PropTypes.string,
    subheader: PropTypes.string,
    icon: PropTypes.string,
    path: PropTypes.string
  })
};

function MemberCard({ member }) {
  const { title, subheader, icon, path } = member;
  return (
    <CardStyle key={title}>
      {/* <CardIconStyle
        src={icon}
        alt={title}
      /> */}
      <CardMedia
        component='img'
        image={icon}
        height="120"
      />
      <Typography variant="subtitle2" sx={{ mt: 2 }}>
        {title}
      </Typography>
      {/* <CardContent> */}
      {/* <Divider /> */}
      <Typography variant="body2" sx={{ mb: 1, mt: 1, color: 'text.secondary' }}>
        {subheader}
      </Typography>
      <CardButton>
        <MotionInView variants={varFadeInLeft}>
          <Link href={path} variant="subtitle2" sx={{ alignItems: 'center', alignContent: 'center' }}>
            Read more
            {/* <Box component={Icon} icon={roundArrowRightAlt} sx={{ ml: 1, width: 20, height: 20 }} /> */}
          </Link>
        </MotionInView>
      </CardButton>
      {/* </CardContent> */}
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
    centerPadding: '20px 80px',
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
    <Container maxWidth="lg" sx={{ pb: 10, textAlign: 'center' }}>
      <MotionInView variants={varFadeInDown}>
        <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
          Dream team
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Great team is the key
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
        >
          Minimal will provide you support if you have any problems, our support team will reply within a day and we
          also have detailed documentation.
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
