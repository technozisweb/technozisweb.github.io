import { CardContent, Container, Grid, Typography, useMediaQuery } from '@material-ui/core';
// material
import { styled, useTheme } from '@material-ui/core/styles';
//
import { MotionInView, varFadeInLeft } from '../../animate';
// import FontStyle from '../../../../public/fonts'

// ----------------------------------------------------------------------

const TESTIMONIALS = [
  // {
  //   name: 'Team',
  //   rating: 5,
  //   dateCreate: 'April 19, 2021',
  //   content: `We define the limits by going beyond them. Our team comprises of individuals having sound technical background, problem-solving, decision-making, interpersonal skills, effective leadership, and trust.`
  // },
  {
    name: ' One Stop Solution',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `We cater to most of the online services and form your one stop solution.`
  },
  {
    name: 'Partnership',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `We work as your true partners. We develop ownership with the assigned project and work with integrity.`
  },
  {
    name: 'Effectiveness',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `We work with efficiency and bring in more converts and thereby high return on Investment (ROI).`
  },
  {
    name: 'Growth',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `We believe that an individual’s growth leads to the company’s growth and thus encourages opportunities and we grow together.`
  },
  {
    name: 'Care',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `We care for our employees’ own space, freedom, and provide an enthusiastic environment to act.`
  },
  {
    name: 'Excellence',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `Excellence is in the DNA of Orange Mantra. We strive hard to create the best outcome of the projects.`
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  // padding: theme.spacing(20, 0),
  backgroundSize: 'cover',
  backgroundColor: theme.palette.grey[800],
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    padding: 0,
    height: 640,
    overflow: 'hidden'
  }
}));

// ----------------------------------------------------------------------

// TestimonialCard.propTypes = {
//   testimonial: PropTypes.object
// };

// function TestimonialLink() {
//   return (
//     <Link href="#" variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
//       Read more testimonials
//       <Box component={Icon} icon={roundArrowRightAlt} sx={{ ml: 1, width: 20, height: 20 }} />
//     </Link>
//   );
// },

export default function AboutTestimonials() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%', mt: '2%' }}>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
            <Typography
              variant="h3"
              sx={{
                color: 'common.white',
                fontFamily: 'Roboto',
              }}
            >
              How are we different?
            </Typography>
          </Grid>
          {TESTIMONIALS.map((item) => (
            <Grid item xs={12} md={4} sx={{ p: 2 }}>
              <CardContent>
                {/* <MotionInView variants={varFadeInLeft}> */}
                <Typography variant="h5" color='lightpink'>{item.name}</Typography>
                {/* </MotionInView> */}
                <MotionInView variants={varFadeInLeft}>
                  <Typography
                    variant="body1"
                    color='common.white'
                    sx={{
                      mt: 2,
                      pl: 2,
                      // ml: 2,
                      borderLeft: '2px solid lightpink'
                    }}
                  >
                    {item.content}
                  </Typography>
                </MotionInView>
              </CardContent>
            </Grid>
          ))}
        </Grid>
        {/* <MHidden width="mdDown">
          <Box sx={{ bottom: 60, position: 'absolute' }}>
            <MotionInView variants={varFadeInLeft}>
              <TestimonialLink />
            </MotionInView>
          </Box>
        </MHidden> */}
      </Container>
    </RootStyle>
  );
}
