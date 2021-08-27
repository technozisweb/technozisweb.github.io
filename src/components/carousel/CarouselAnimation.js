import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Card, Paper, Button, Typography, CardContent, Container } from '@material-ui/core';
// utils
import mockData from '../../utils/mock-data';
//
import { varFadeInRight, MotionContainer } from '../animate';
// import { CarouselControlsArrowsIndex } from './controls';
import { CarouselControlsArrowsBasic2 } from './controls';

// ----------------------------------------------------------------------

const MOCK_CAROUSELS = [...Array(3)].map((_, index) => ({
  id: mockData.id(index),
  title: mockData.text.title(index),
  image: mockData.image.feed(index),
  description: mockData.text.description(index)
}));

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
  const theme = useTheme();
  const { image, title } = item;

  return (
    <Paper
      sx={{
        position: 'relative',
        paddingTop: { xs: '100%', md: '50%' }
      }}
    >
      <CarouselImgStyle alt={title} src={image} />
      <Box
        sx={{
          top: 0,
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundImage: `linear-gradient(to top, ${theme.palette.grey[900]} 0%,${alpha(
            theme.palette.grey[900],
            0
          )} 100%)`
        }}
      />
      <Container>
        <CardContent
          sx={{
            bottom: 0,
            width: '100%',
            maxWidth: 480,
            textAlign: 'left',
            position: 'absolute',
            color: 'common.white',
            mb: {xs: 0, md: '10%'}
          }}
        >
          <MotionContainer open={isActive}>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h3" gutterBottom>
                {item.title}
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <Typography variant="body2" gutterBottom>
                {item.description}
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <Button variant="outlined" sx={{ mt: 3 }}>
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
