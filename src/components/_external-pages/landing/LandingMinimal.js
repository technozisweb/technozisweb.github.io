// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Button } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/static/icons/ic_design.svg',
    title: 'UI & UX Design',
    description:
      'The set is built on the principles of the atomic design system.',
    footer: 'meet unique requirem'
  },
  {
    icon: '/static/icons/ic_code.svg',
    title: 'Development',
    description: 'Easy to customize and extend each component, saving you time and money.'
  },
  {
    icon: '/static/brand/logo_single.svg',
    title: 'Branding',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.'
  }
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  },
  backgroundImage:
    theme.palette.mode === 'light'
      ? `linear-gradient(0deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${theme.palette.grey[300]} 100%)`
      : 'none'
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 300,
    minHeight: 380,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 5, 0),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    '&.cardLeft': {
      [theme.breakpoints.up('md')]: {
        marginTop: -40,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.1)}`
      },
      '&:hover': {
        boxShadow: `-0px 40px 80px 0 ${shadowCard(1)}`,
      },
    },
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        marginTop: -40,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.1)}`,
        '&:hover': {
          boxShadow: `-0px 40px 80px 0 ${shadowCard(1)}`,
        },
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          // borderRadius: theme.shape.borderRadiusMd,
          // backgroundColor: theme.palette.background.paper,
          // boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    }
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 40,
  height: 40,
  margin: 'auto',
  marginBottom: theme.spacing(5),
  filter: shadowIcon(theme.palette.primary.main)
}));

// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 5, md: 15 } }}>
          <MotionInView variants={varFadeInUp}>
            <Typography component="p" variant="overline" sx={{ mb: 2, textAlign: 'center', fontSize: 26 }}>
              Top-Notch Software Development and Digital Transformation
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography component="p" variant="body1" sx={{ textAlign: 'center' }}>
              Blending years of experience and power of collaboration to overcome business challenges with industry-wide, advanced, and quality services from consulting to deployments.
            </Typography>
          </MotionInView>
        </Box>

        <Grid container spacing={isDesktop ? 5 : 5}>
          {CARDS.map((card, index) => (
            <Grid key={card.title} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <CardStyle className={(index === 0 && 'cardLeft') || (index === 1 && 'cardCenter') || (index === 2 && 'cardLeft')}>
                  {/* <Box component="img" src="/static/home/cover.jpg" sx={{ width: '100%', backgroundColor: 'pink' }} /> */}
                  <CardIconStyle
                    src={card.icon}
                    alt={card.title}
                    sx={{
                      ...(index === 0 && {
                        filter: (theme) => shadowIcon(theme.palette.info.main)
                      }),
                      ...(index === 1 && {
                        filter: (theme) => shadowIcon(theme.palette.error.main)
                      }),
                    }}
                  />
                  <Typography variant="h5" paragraph>
                    {card.title}
                  </Typography>
                  <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>
                    {card.description}
                  </Typography>
                  <Button variant="text" >Read more</Button>
                </CardStyle>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
