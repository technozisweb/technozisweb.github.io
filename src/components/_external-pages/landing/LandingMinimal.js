import PropTypes from 'prop-types';
import { useRef } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import instagramFilled from '@iconify/icons-ant-design/instagram-filled';
import roundArrowRightAlt from '@iconify/icons-ic/round-arrow-right-alt';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Card, Button, Container, Typography, IconButton, Link } from '@material-ui/core';
// utils
import mockData from '../../../utils/mock-data';
//
import { varFadeIn, varFadeInUp, MotionInView, varFadeInDown, varFadeInLeft } from '../../animate';
import { CarouselControlsArrowsBasic2, CarouselControlsPaging2 } from '../../carousel';

// ----------------------------------------------------------------------

const MOCK_MEMBERS = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  name: mockData.name.fullName(index),
  role: mockData.role(index),
  // avatar: mockData.image.avatar(index),
}));

const CARDS = [
  {
    icon: '/static/services/1custom-software.png',
    title: 'Software Development Outsourcing',
    description:
      'Reduce cost and efforts. Build scalable, tailor-made software solutions for targeted business functions at fastest time-to-market.',
    // footer: 'meet unique requirem',
    // bgcolor: 'pink',
    path: '/services/custom-software-development'
  },
  {
    icon: '/static/services/4hire-developers.png',
    title: '2- Development',
    description: 'Easy to customize and extend each component, saving you time and money.',
    path: '/services/custom-software-development'
  },
  {
    icon: '/static/services/10technology-consulting.png',
    title: '3- Branding',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.',
    path: '/services/custom-software-development'
  },
  {
    icon: '2Management-and-Support.png',
    title: '4- Branding',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.'
  },
  // {
  //   icon: '7system-integration.png',
  //   title: '5- Branding',
  //   description: 'Consistent design in colors, fonts ... makes brand recognition easy.',
  //   path: '/services/custom-software-development'
  // },
  {
    icon: '/static/services/3enterprise-mobility.png',
    title: '1- UI & UX Design',
    description:
      'The set is built on the principles of the atomic design system.',
    footer: 'meet unique requirem',
    path: '/services/custom-software-development'
  },
  {
    icon: '/static/services/11product-engineering.png',
    title: '2- Development',
    description: 'Easy to customize and extend each component, saving you time and money.',
    path: '/services/custom-software-development'
  },
  {
    icon: '/static/services/12software-testing-and-qa.png',
    title: '3- Branding',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.',
    path: '/services/custom-software-development'
  },
  {
    icon: '/static/services/5app-development.png',
    title: '4- Branding',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.',
    path: '/services/custom-software-development'
  },
  {
    icon: '/static/services/9embedded-product.png',
    title: '5- Branding',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.',
    path: '/services/custom-software-development'
  }
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

// ----------------------------------------------------------------------

const CardStyle = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3, 3, 0),
  maxWidth: 300,
  height: 340,
  margin: 'auto',
  '&:hover': {
    boxShadow: `0px 10px 10px 10px ${alpha(theme.palette.grey[300], 1)}`,
  },
}));

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 50,
  height: 50,
  margin: 'auto',
  marginBottom: theme.spacing(2),
  // filter: shadowIcon(theme.palette.primary.main)
}));

function ServiceLink() {
  return (
    <Link href="/services" variant="subtitle2" sx={{ alignItems: 'center', alignContent: 'center' }}>
      Read more
      {/* <Box component={Icon} icon={roundArrowRightAlt} sx={{ ml: 1, width: 20, height: 20 }} /> */}
    </Link>
  );
}

MemberCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string
  })
};

function MemberCard({ member }) {
  const { title, description, icon, bgcolor, path } = member;
  return (
    <CardStyle key={title}>
      <CardIconStyle
        src={icon}
        alt={title}
      />
      {/* <Box sx={{ bgColor: 'red', height: 10 }} /> */}
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
        {description}
      </Typography>
      <Box>
        <MotionInView variants={varFadeInLeft}>
          <Link href={path} variant="subtitle2" sx={{ alignItems: 'center', alignContent: 'center' }}>
            Read more
            {/* <Box component={Icon} icon={roundArrowRightAlt} sx={{ ml: 1, width: 20, height: 20 }} /> */}
          </Link>
        </MotionInView>
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
    autoplay: false,
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
          {CARDS.map((member) => (
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
