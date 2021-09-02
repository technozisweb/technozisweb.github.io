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
import { Box, Card, Button, Container, Typography, IconButton, Link, CardMedia, CardContent, Divider } from '@material-ui/core';
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
    icon: '/static/services/1csd.png',
    title: 'Software Development Outsourcing',
    description:
      'Reduce cost and efforts. Build scalable, tailor-made software solutions for targeted business functions at fastest time-to-market.',
    // footer: 'meet unique requirem',
    // bgcolor: 'pink',
    path: '/services/custom-software-development'
  },
  {
    icon: '/static/services/4hd.png',
    title: 'Hire Developer',
    description: 'Easy to customize and extend each component, saving you time and money.',
    path: '/services/hire-developer'
  },
  {
    icon: '/static/services/10TC.png',
    title: 'Technology Consultant',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.',
    path: '/services/technology-consultant'
  },
  {
    icon: '/static/services/2ms.png',
    title: 'Management and Support',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.',
    path: '/services/management-and-support'
  },
  {
    icon: '/static/services/3em.png',
    title: 'Enterprise Mobility',
    description:
      'The set is built on the principles of the atomic design system.',
    footer: 'meet unique requirem',
    path: '/services/enterprise-mobility'
  },
  {
    icon: '/static/services/11pe.png',
    title: 'Product Engineering',
    description: 'Easy to customize and extend each component, saving you time and money.',
    path: '/services/product-engineering'
  },

  {
    icon: '/static/services/13dt.png',
    title: 'Digital Transformation',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.',
    path: '/services/digital-transformation'
  },
  {
    icon: '/static/services/12sta.png',
    title: 'Software Testing and Quality Analysis',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.',
    path: '/services/software-testing'
  },
  {
    icon: '/static/services/5ad.png',
    title: 'Application Development',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.',
    path: '/services/application-development'
  },
  {
    icon: '/static/services/9EP.png',
    title: 'Embedded Product',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.',
    path: '/services/embedded-product'
  },
  {
    icon: '/static/services/7si.png',
    title: 'System Integration',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.',
    path: '/services/system-integration'
  },
  {
    icon: '/static/services/6ca.png',
    title: 'Cloud Application',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.',
    path: '/services/cloud-application'
  },
  {
    icon: '/static/services/8bia.png',
    title: 'Business Intelligence Analystics',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.',
    path: '/services/business-intelligence-analytics'
  },
  {
    icon: '/static/services/14SAP.png',
    title: 'SAP',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.',
    path: '/services/sap'
  },
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

// ----------------------------------------------------------------------

const CardStyle = styled(Card)(({ theme }) => ({
  // padding: theme.spacing(3, 3, 0),
  maxWidth: 320,
  height: 380,
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
      <CardContent>
        {/* <Divider /> */}
        <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
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
      </CardContent>
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
