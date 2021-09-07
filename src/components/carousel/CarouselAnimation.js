import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
// material
import { useTheme, styled } from '@material-ui/core/styles';
import { Box, Card, Paper, Button, Typography, CardContent, Container } from '@material-ui/core';
// utils
//
import { varFadeInRight, MotionContainer } from '../animate';
// import { CarouselControlsArrowsIndex } from './controls';
import { CarouselControlsArrowsBasic2 } from './controls';

// ----------------------------------------------------------------------

const MOCK_CAROUSELS = [
  {
    title: 'Digital Transformation',
    description: 'We blend innovation, security, and speed to help you transition your business seamlessly to digital.',
    image: '/blob/wip/build/static/home/1dt-blank.JPG'
  },
  {
    title: 'Custom Software development',
    description: 'Design, Create, Deploy, and manage requirements efficiently for the future.',
    image: '/static/home/2csd-blank.JPG'
  },
  {
    title: 'Business Intelligence and Analytics',
    description: 'Unlock meaningful insights to improve performance, reduce risk, and plan future with data-driven strategy.',
    image: '/static/home/3bia-blank.jpg'
  },
]

const CarouselImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool
};

function CarouselItem({ item, isActive }) {
  // const theme = useTheme();
  const { image, title } = item;

  return (
    <Paper
      sx={{
        position: 'relative',
        paddingTop: { xs: '100%', md: '50%' },
      }}
    >
      <CarouselImgStyle alt={title} src={image} />
      <Box
        sx={{
          top: 0,
          width: '100%',
          height: '100%',
          position: 'absolute',
          // backgroundImage: `linear-gradient(to top, ${theme.palette.grey[900]} 0%,${alpha(
          //   theme.palette.grey[900],
          //   0
          // )} 100%)`
        }}
      />
      <Container>
        <CardContent
          sx={{
            bottom: 0,
            width: '100%',
            maxWidth: 680,
            textAlign: 'left',
            position: 'absolute',
            color: 'black',
            // ml: { xs: 0, md: '5%' },
            // mt: {xs: '30%', md: 0},
          }}
        >
          <MotionContainer open={isActive}>
            <motion.div variants={varFadeInRight}>
              <Typography variant='h1' gutterBottom sx={{ fontSize: { xs: 30, md: 60 }}}>
                {item.title}
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: 'Roboto',
                  fontStyle: "italic",
                  color: 'common.white',
                  fontSize: { xs: 20, md: 30 }
                }}
              >
                {item.description}
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <Button variant="outlined" sx={{ mt: 3, color: 'black' }}>
                Contact us
              </Button>
            </motion.div>
          </MotionContainer>
        </CardContent>
      </Container>
    </Paper>
  );
}

export default function CarouselAnimation() {
  const theme = useTheme();
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(theme.direction === 'rtl' ? MOCK_CAROUSELS.length - 1 : 0);

  const settings = {
    speed: 800,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setCurrentIndex(next)
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <Card>
      <Slider ref={carouselRef} {...settings}>
        {MOCK_CAROUSELS.map((item, index) => (
          <CarouselItem key={item.title} item={item} isActive={index === currentIndex} />
        ))}
      </Slider>

      <CarouselControlsArrowsBasic2
        index={currentIndex}
        total={MOCK_CAROUSELS.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </Card>
  );
}
