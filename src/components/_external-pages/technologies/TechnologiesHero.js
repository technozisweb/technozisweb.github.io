import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight, TextAnimate } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/static/overlay.svg), url(/static/about/hero.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 150,
    padding: 0
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    top: theme.spacing(2)
  }
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="Technologies" sx={{ color: 'primary.main' }} variants={varFadeInRight} />
          <br />
          {/* <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate text="we" sx={{ mr: 2 }} />
            <TextAnimate text="deliver" />
          </Box> */}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
