import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
// material
// import { useTheme, styled } from '@material-ui/core/styles';
// import { Box } from '@material-ui/core';
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { CardContent, Box, Card, Typography } from '@material-ui/core';
// utils
import mockData from '../../utils/mock-data';
//
import { varFadeInRight, MotionContainer } from '../animate';
import { CarouselControlsPaging1, CarouselControlsArrowsBasic1 } from '../carousel';
// utils
//
import { CarouselControlsPaging2, CarouselControlsArrowsBasic2 } from './controls';

// ----------------------------------------------------------------------

const MOCK_CAROUSELS = [...Array(3)].map((_, index) => ({
  id: mockData.id(index),
  title: mockData.text.title(index),
  image: mockData.image.feed(index),
  description: mockData.text.description(index)
}));

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  '& .slick-list': {
    boxShadow: theme.customShadows.z16,
    // borderRadius: theme.shape.borderRadiusMd
  }
}));

const CarouselImgStyle = styled('img')(({ theme }) => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  [theme.breakpoints.up('xl')]: {
    // height: 320
  }
}));

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool
};

function CarouselItem({ item, isActive }) {
  const { image, title } = item;

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          top: 0,
          width: 1,
          height: 1,
          position: 'absolute',
          bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
        }}
      />
      <CarouselImgStyle alt={title} src={image} />
      <CardContent
        sx={{
          bottom: 0,
          width: 1,
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white'
        }}
      >
        <MotionContainer open={isActive}>
          <motion.div variants={varFadeInRight}>
            <Typography
              variant="overline"
              sx={{
                mb: 1,
                opacity: 0.48,
                display: 'block'
              }}
            >
              Featured App
            </Typography>
          </motion.div>
          <motion.div variants={varFadeInRight}>
            <Typography variant="h5" gutterBottom noWrap>
              {title}
            </Typography>
          </motion.div>
          <motion.div variants={varFadeInRight}>
            <Typography variant="body2" noWrap>
              description
            </Typography>
          </motion.div>
        </MotionContainer>
      </CardContent>
    </Box>
  );
}

export default function CarouselBasic3() {
  const theme = useTheme();
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(theme.direction === 'rtl' ? MOCK_CAROUSELS.length - 1 : 0);

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselControlsPaging2({
      sx: { mt: 3 }
    })
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <RootStyle>
      <Slider ref={carouselRef} {...settings}>
        {MOCK_CAROUSELS.map((item, index) => (
          <CarouselItem key={item.title} item={item} isActive={index === currentIndex} />
        ))}
      </Slider>
      <CarouselControlsArrowsBasic2 onNext={handleNext} onPrevious={handlePrevious} />
    </RootStyle>
  );
}
