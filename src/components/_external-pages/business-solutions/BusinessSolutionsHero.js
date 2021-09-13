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
  backgroundImage: 'url(/static/overlay.svg), url(/static/home/business-solutions.jpg)',
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
    bottom: theme.spacing(10)
  }
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="Business" sx={{ color: 'primary.main', mr: 3 }} variants={varFadeInRight} />
          <TextAnimate text="Solutions" sx={{ color: 'primary.main' }} variants={varFadeInRight} />
          <motion.div variants={varFadeInRight}>
            <Typography
              variant="h4"
              sx={{
                mt: 5,
                color: 'common.white',
                fontWeight: 'fontWeightLarge',
                // fontFamily: 'Roboto',
                // fontStyle: 'italic'
              }}
            >
              Modern Business Technologies that matter
            </Typography>
          </motion.div>
          <motion.div variants={varFadeInRight}>
            <Typography
              variant="h6"
              sx={{
                // mt: 5,
                color: 'common.white',
                // fontWeight: 'fontWeightLarge',
                fontFamily: 'Roboto',
                fontStyle: 'italic'
              }}
            >
              Uplifting Client Experience with Problem-solving Attitude
            </Typography>
          </motion.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
