import { Box, Card } from '@material-ui/core';
// material
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
// utils
import mockData from '../../utils/mock-data';

// ----------------------------------------------------------------------

const MOCK_CAROUSELS = [...Array(4)].map((_, index) => ({
  // id: mockData.id(index),
  // title: mockData.text.title(index),
  image: mockData.image.feed(index),
  // description: mockData.text.description(index)
}));

CarouselItem.propTypes = {
  item: PropTypes.object
};

function CarouselItem({ item }) {
  const { image, title } = item;

  return <Box component="img" alt={title} src={image} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
}

export default function CarouselBasic1() {
  const theme = useTheme();
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(theme.direction === 'rtl' ? MOCK_CAROUSELS.length - 1 : 0);

  const settings = {
    speed: 500,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setCurrentIndex(next)
  };

  return (
    <Card>
      <Slider ref={carouselRef} {...settings}>
        {MOCK_CAROUSELS.map((item) => (
          <CarouselItem key={item.title} item={item} />
        ))}
      </Slider>
    </Card>
  );
}
