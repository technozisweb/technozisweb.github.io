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
    height: 460,
    padding: 0
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(15)
  }
}));

// ----------------------------------------------------------------------

export default function SoftwareDevHero() {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          {/* <TextAnimate text="Custom" sx={{ mr: 3, color: 'primary.main' }} variants={varFadeInRight} />
          <TextAnimate text="Software" sx={{ mr: 3, color: 'primary.main' }} variants={varFadeInRight} />
          <TextAnimate text="Development" sx={{ mr: 3, color: 'primary.main' }} variants={varFadeInRight} /> */}
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            {/* <TextAnimate text="Custom" sx={{ mr: 2 }} variants={varFadeInRight} />
            <TextAnimate text="Software" sx={{ mr: 2 }} />
            <TextAnimate text="Development" sx={{ mr: 2 }} /> */}
            <motion.div variants={varFadeInRight}>
              <Typography
                variant="h2"
                sx={{
                  // mt: 5,
                  color: 'common.white',
                  // fontWeight: 'fontWeightMedium'
                }}
              >
                SERVICES
              </Typography>
            </motion.div>
          </Box>

          <motion.div variants={varFadeInRight}>
            <Typography
              variant="h4"
              sx={{
                mt: 5,
                color: 'common.white',
                fontWeight: 'fontWeightMedium'
              }}
            >
              Let's work together and Let's work together make awesome site easily
            </Typography>
          </motion.div>
          <motion.div variants={varFadeInRight}>
            <Typography
              variant="p"
              sx={{
                mt: 5,
                color: 'common.white',
                // fontWeight: 'fontWeightMedium'
              }}
            >
              Let's work together and Let's work together and Let's work together and
            </Typography>
          </motion.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
