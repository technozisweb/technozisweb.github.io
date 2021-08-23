import { useState } from 'react';
import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Grid, Link, Divider, Container, Typography, IconButton, Stack, Popover } from '@material-ui/core';
// routes
import { PATH_PAGE } from '../../routes/paths';
//
import Logo from '../../components/Logo';

// ----------------------------------------------------------------------

const SOCIALS = [
  { name: 'FaceBook', icon: facebookFill, link: 'facebook.com' },
  { name: 'Google', icon: googleFill, link: 'google.com' },
  { name: 'Linkedin', icon: linkedinFill, link: 'linkedin.com' },
  { name: 'Twitter', icon: twitterFill, link: 'twitter.com' }
];

const LINKS = [
  {
    headline: 'Technozisz',
    children: [
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Contact us', href: PATH_PAGE.contact },
      { name: 'FAQs', href: PATH_PAGE.faqs }
    ]
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  },
  {
    headline: 'Contact',
    children: [
      { name: 'support@minimals.cc', href: '#' },
      { name: 'Los Angeles, 359  Hidden Valley Road', href: '#' }
    ]
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
            </ScrollLink>
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI
              ©, ready to be customized to your style.
            </Typography>

            <Stack
              spacing={1.5}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              {SOCIALS.map((social) => (
                <>
                  <IconButton key={social.name} color="primary" sx={{ p: 1 }} onClick={handleClick}>
                    <Icon icon={social.icon} width={16} height={16} />
                  </IconButton>
                  <Popover
                    id={social.name}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <Typography variant="caption">{social.link}</Typography>
                  </Popover>
                </>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => {
                const { headline, children } = list;
                return (
                  <Stack key={headline} spacing={2}>
                    <Typography component="p" variant="overline">
                      {headline}
                    </Typography>
                    {children.map((link) => (
                      <Link
                        to={link.href}
                        key={link.name}
                        color="inherit"
                        variant="body2"
                        component={RouterLink}
                        sx={{ display: 'block' }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          © 2021. All rights reserved
        </Typography>
      </Container>
    </RootStyle>
  );
}
