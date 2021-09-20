import { Container, Typography } from '@material-ui/core';
// material
import { styled } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
//
import { TextAnimate, varFadeInRight, varWrapEnter } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/static/overlay.svg), url(/static/industry/industry2.webp)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 480,
    padding: 0
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(12)
  }
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="Industries" sx={{ color: 'primary.main' }} variants={varFadeInRight} />
          <br />
          <motion.div variant={varFadeInRight}>
            <Typography
              variant="h5"
              sx={{
                mt: 5,
                color: 'common.white',
                fontWeight: 'fontWeightLarge',
                fontFamily: 'Roboto',
                fontStyle: 'italic'
              }}
            >
              We have Solutions for All the Industries. Technology that Serves the People.
            </Typography>
          </motion.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
