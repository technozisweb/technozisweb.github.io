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
  backgroundImage: ' url(/static/home/service-top.jpg)',
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

  useEffect(() => {
    setPath(window.location.pathname);
    console.log(path.replace(/[^a-zA-Z0-9]/g, '').slice(8,));
  }, [window.location.pathname])

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="SERVICES" sx={{ color: 'primary.main' }} variants={varFadeInRight} />
          <br />
          {SERVICES.map((tech) => (
            <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
              {tech.title.replace(/ /g, '').toLowerCase() == path.replace(/[^a-zA-Z0-9]/g, '').slice(8,)
                ? (
                  <motion.div variants={varFadeInRight}>
                    <Typography
                      variant="h3"
                      sx={{
                        mt: 5,
                        color: 'common.white',
                        fontWeight: 'fontWeightLarge'
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
