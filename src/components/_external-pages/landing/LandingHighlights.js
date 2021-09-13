import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
// material
import { alpha, styled } from '@material-ui/core/styles';
import CountUp from 'react-countup';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundImage:
    theme.palette.mode === 'light'
      ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${theme.palette.grey[300]} 100%)`
      : 'none'
}));

// ----------------------------------------------------------------------

const highlights = [
  {
    icon: '/static/home/key-highlights1.png',
    number: 750,
    text: 'Projects'
  },
  {
    icon: '/static/home/key-highlights2.png',
    number: 20,
    text: 'Cients'
  }, {
    icon: '/static/home/key-highlights3.png',
    number: 31,
    text: 'Countries'
  },
  {
    icon: '/static/home/key-highlights4.png',
    number: 85,
    text: 'Client Retention'
  },
]

export default function LandingHugePackElements() {

  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ m: 2 }}>
          Key Highlights
        </Typography>
        <Typography variant="subtitle1">
          We provide digital solutions and services to empower organizations with the right technology at right time.
        </Typography>
        <Grid container sx={{ mt: 5 }}>
          {highlights.map((card) => (
            <Grid item xs={12} md={3} sx={{ p: 3 }}>
              <Card sx={{ border: '2px solid lightblue' }} elevation={10}>
                <CardContent>
                  <CardMedia
                    component="img"
                    image={card.icon}
                    sx={{ height: 80, width: 80, alignSelf: 'center', margin: 'auto' }}
                  />
                  <CountUp
                    start={0}
                    end={card.number}
                    duration={10}
                    useEasing={true}
                    useGrouping={true}
                    style={{
                      fontSize: 30,
                      fontWeight: 'bolder',
                    }}
                    suffix="+"
                  />
                  <Typography>
                    {card.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
