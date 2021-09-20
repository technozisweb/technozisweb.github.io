import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight, TextAnimate } from '../../animate';
import TECHNOLOGY from 'src/utils/technologies';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // backgroundImage: 'url(/static/technologies/technology-main.jpg)',
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
  const [path, setPath] = useState('');
  const [bgimg, setBgimg] = useState('');

  useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname])

  useEffect(() => {
    if (TECHNOLOGY && TECHNOLOGY.length) {
      TECHNOLOGY.map((tech) => {
        if (tech.title.replace(/ /g, '').toLowerCase() === path.slice(14,)) {
          setBgimg(tech.heroimg);
        }
      })
    }
  }, [path, bgimg])

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter} sx={{ backgroundImage: `url(/static/overlay.svg), url(${bgimg})` }}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="Technologies" sx={{ color: 'primary.main' }} variants={varFadeInRight} />
          <br />
          {TECHNOLOGY.map((tech) => (
            <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
              {tech.title.toLowerCase() === path.slice(14,)
                ? (
                  <motion.div variants={varFadeInRight}>
                    <Typography
                      variant="h3"
                      sx={{
                        mt: 5,
                        // color: 'common.white',
                        fontWeight: 'fontWeightLarge',
                        fontFamily: 'Roboto',
                        fontStyle: 'italic'
                      }}
                    >
                      {tech.header}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'italic'
                      }}
                    >
                      {tech.subheader}
                    </Typography>
                  </motion.div>
                )
                : null}
              {/* <TextAnimate text="deliver" /> */}
            </Box>
          ))}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
