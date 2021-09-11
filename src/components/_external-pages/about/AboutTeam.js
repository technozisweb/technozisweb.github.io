import { CardContent, CardMedia, Container, Grid, Paper, Typography } from "@material-ui/core";
//
import { MotionInView, varFadeInUp } from '../../animate';

const TEAM = [
  {
    title: 'Agressively Agile',
    description: 'We are higly agile and  adaptive to meet our consumer demands. Our team is innovative, goal-centric and steadfast to carve a niche in digital transformation',
    image: '/static/cover.jpg'
  },
  {
    title: 'Code of Conduct',
    description: 'We belive in complete transparency and high level of integrity and deliver projects and implement projects which meets your quality, time, and security expectations. We are ready to go that extra mile to help you meet your goals',
    image: '/static/cover.jpg'
  },
  {
    title: 'Continuous Innovation',
    description: 'We aim to offer cutting-edge solution which requires us to continuously upgrade and expand our processes, expertise, and resources. Our aim is to become a strategic partner of your to help you thrive in this digital journey',
    image: '/static/cover.jpg'
  }
]

const AboutTeam = () => {
  return (
    <>
      <Grid container justifyContent="center" sx={{ backgroundColor: 'lightblue', mt: 10 }}>
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h3" sx={{
              textAlign: 'center',
              fontFamily: 'cursive'
            }}>
              Our Team
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
      <Container sx={{ mb: 15, mt: 10 }}>
        <Grid container>
          <Grid item xs={12} md={0.2} />

          <Grid item xs={12} md={1} sx={{
            backgroundColor: 'lightblue',
            border: '2px solid',
            mr: { xs: 0, md: 2 },
            // borderBottom: 0
          }} />
          <Grid item xs={12} md={5} sx={{ border: '2px solid' }}>
            <Paper>
              <CardContent sx={{ textAlign: 'justify' }} >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Raleway',
                    borderBottom: '4px solid lightblue'
                  }}
                >
                  {TEAM[2].title}
                </Typography>
                <Typography sx={{ mt: 2 }}>{TEAM[2].description}</Typography>
              </CardContent>
            </Paper>
          </Grid>
          <Grid item xs={12} md={5} sx={{ border: '2px solid', ml: { xs: 0, md: 2 } }}>
            <Paper>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Raleway',
                    borderBottom: '4px solid lightblue'
                  }}
                >
                  {TEAM[1].title}
                </Typography>
                <Typography sx={{ mt: 2 }}>{TEAM[1].description}</Typography>
              </CardContent>
            </Paper>
          </Grid>

          <Grid item xs={12} md={0.3} />
          <Grid item xs={12} md={0.2} />

          <Grid item xs={12} md={5} sx={{ border: '2px solid', mt: { xs: 0, md: 2 } }}>
            <Paper>
              <CardMedia
                component='img'
                image='/static/home/aboutteam.jpg'
                height='280'
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5} sx={{ border: '2px solid', ml: { xs: 0, md: 2 }, mt: { xs: 0, md: 2 } }}>
            <Paper>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Raleway',
                    borderBottom: '4px solid lightblue'
                  }}
                >
                  {TEAM[0].title}
                </Typography>
                <Typography sx={{ mt: 2 }}>{TEAM[0].description}</Typography>
              </CardContent>
            </Paper>
          </Grid>
          <Grid item xs={12} md={1} sx={{
            backgroundColor: 'lightblue',
            border: '2px solid',
            ml: { xs: 0, md: 2 },
            mt: { xs: 0, md: 2 },
          }} />
        </Grid>
      </Container>
    </>
  );
}

export default AboutTeam;