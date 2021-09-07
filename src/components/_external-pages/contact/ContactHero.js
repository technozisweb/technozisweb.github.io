import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Container, Typography, Grid } from '@material-ui/core';
//
import { varFadeIn, varWrapEnter, varFadeInRight, TextAnimate } from '../../animate';
import { Icon } from '@iconify/react';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import instagramFilled from '@iconify/icons-ant-design/instagram-filled';

// ----------------------------------------------------------------------

const CONTACTS = [
  {
    icon: twitterFill,
    address: 'twitter.com',
  },
  {
    icon: linkedinFill,
    address: 'linkedin.com',
  },
  {
    icon: facebookFill,
    address: 'facebook.com',
  },
  {
    icon: instagramFilled,
    address: 'instagram.com',
  }
];

const RootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/static/overlay.svg), url(/static/contact/hero.jpg)',
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

export default function ContactHero() {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="Where" sx={{ color: 'primary.main' }} variants={varFadeInRight} />
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate text="to" sx={{ mr: 2 }} />
            <TextAnimate text="find" sx={{ mr: 2 }} />
            <TextAnimate text="us?" />
          </Box>

          <Grid container spacing={5} sx={{ mt: 5, color: 'common.white' }}>
            {CONTACTS.map((contact) => (
              <Grid key={contact.icon} item xs={12} sm={6} md={3} lg={2} sx={{ pr: { md: 5 } }}>
                <motion.div variants={varFadeIn}>
                  <Typography variant="h6" paragraph>
                    <Icon icon={contact.icon} />
                  </Typography>
                </motion.div>
                <motion.div variants={varFadeInRight}>
                  <Typography variant="body2">
                    {contact.address}
                    <br /> {contact.phoneNumber}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
