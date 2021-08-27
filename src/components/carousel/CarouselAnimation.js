import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { MHidden } from 'src/components/@material-extend';
import { Box, Card, Paper, Button, Typography, CardContent, Container } from '@material-ui/core';
// utils
import mockData from '../../utils/mock-data';
//
import { varFadeInRight, varSlideInDown, varSlideInUp, MotionContainer, TextAnimate } from '../animate';
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

// const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
//   zIndex: 10,
//   maxWidth: 520,
//   margin: 'auto',
//   textAlign: 'center',
//   position: 'relative',
//   paddingTop: theme.spacing(15),
//   paddingBottom: theme.spacing(15),
//   [theme.breakpoints.up('md')]: {
//     margin: 'unset',
//     textAlign: 'left'
//   }
// }));

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
      {/* <Container> */}
        <CardContent
          sx={{
            // top: '30%',
            // left: '18%',
            mb: 20,
            textAlign: 'center',
            [theme.breakpoints.up('md')]: {
              textAlign: 'left',
              position: 'absolute',
              bottom: theme.spacing(10)
            },
            width: '100%',
            maxWidth: 680,
            // textAlign: 'left',
            // position: 'absolute',
            color: 'common.white'
          }}
        >
          <MotionContainer open={isActive}>
            <motion.div variants={varFadeInRight}>
              {/* <TextAnimate text="Digital Transformation" sx={{ color: 'primary.main' }} variants={varFadeInRight} /> */}
              <Typography variant="h4" gutterBottom>
                {item.title}
              </Typography>
            </motion.div>
            <motion.div variants={varSlideInUp}>
                <Typography variant="body2" noWrap gutterBottom>
                  {item.description}
                </Typography>
              </motion.div>
            <motion.div variants={varFadeInRight}>
              <Button variant="outlined" sx={{ mt: 3 }}>
                Get in Touch
              </Button>
            </motion.div>
          </MotionContainer>
        </CardContent>
      {/* </Container> */}
    </Paper>
  );
}

export default function CarouselAnimation() {
  const theme = useTheme();
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(theme.direction === 'rtl' ? MOCK_CAROUSELS.length - 1 : 0);

  const settings = {
    speed: 1000,
    dots: true,
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
        // index={currentIndex}
        // total={MOCK_CAROUSELS.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </Card>
  );
}
