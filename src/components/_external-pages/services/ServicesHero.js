import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight, TextAnimate } from '../../animate';
import SERVICES from 'src/utils/servicesInfo';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/static/overlay.svg), url(/static/services/service-top.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 480,
    padding: 0
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  // width: 900,
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(12)
  }
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  const [path, setPath] = useState('');
  const [bgimg, setBgimg] = useState();

  useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname])

  useEffect(() => {
    if (SERVICES && SERVICES.length) {
      SERVICES.map((service) => {
        if (service.title.replace(/ /g, '').toLowerCase() === path.replace(/[^a-zA-Z0-9]/g, '').slice(8,)) {
          setBgimg(service.heroimg);
        }
      })
    }
  }, [path, bgimg])

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter} sx={{ backgroundImage: `url(/static/overlay.svg), url(${bgimg})`}}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="Services" sx={{ color: 'primary.main', fontSize: {xs: 26, md: 40} }} variants={varFadeInRight} />
          <br />
          {SERVICES.map((tech) => (
            <Box sx={{ display: 'inline-flex' }}>
              {tech.title.replace(/ /g, '').toLowerCase() == path.replace(/[^a-zA-Z0-9]/g, '').slice(8,)
                ? (
                  <motion.div variants={varFadeInRight}>
                    <Typography
                      variant="h3"
                      sx={{
                        mt: 3,
                        color: 'common.white',
                        fontWeight: 'fontWeightLarge',
                        fontFamily: 'Roboto',
                        fontStyle: "italic",
                        fontSize: { xs: 30, md: 40 }
                      }}
                    >
                      {tech.title}
                    </Typography>
                    {/* <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'Roboto',
                        fontStyle: "italic",
                        width: { md: 800 }
                      }}
                    >
                      {tech.subheader}
                    </Typography> */}
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
