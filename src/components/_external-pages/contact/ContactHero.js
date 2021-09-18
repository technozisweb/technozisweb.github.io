import youtubeIcon from '@iconify/icons-ci/youtube';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import { Icon } from '@iconify/react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
// material
import { styled } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
//
import { TextAnimate, varFadeIn, varFadeInRight, varWrapEnter } from '../../animate';

// ----------------------------------------------------------------------

const CONTACTS = [
  {
    icon: youtubeIcon,
    address: 'youtube.com',
  },
  {
    icon: linkedinFill,
    address: 'linkedin.com/company/technozis',
  },
  // {
  //   icon: facebookFill,
  //   address: 'facebook.com',
  // },
  // {
  //   icon: instagramFilled,
  //   address: 'instagram.com',
  // }
];

const RootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/static/overlay.svg), url(/static/contact/contacthero.jpg)',
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
              <Grid key={contact.icon} item xs={12} sm={6} md={3} lg={2} sx={{ pr: { md: 15 } }}>
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
