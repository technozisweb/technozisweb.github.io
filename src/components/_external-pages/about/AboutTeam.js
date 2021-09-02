import { Card, CardContent, CardMedia, Container, Grid, Typography, Paper } from "@material-ui/core";

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
    <Container>
      <Grid container sx={{ mb: 15 }}>
        <Card>
          {TEAM.map((item) => (
            <Grid item xs={12} md={12} sx={{ m: 1 }}>
              <Paper sx={{ mt: 1 }}>
                {/* <CardMedia
                component="img"
                image={item.image}
                sx={{ borderLeft: '3px solid' }}
              /> */}
                <CardContent sx={{ borderLeft: '3px solid', backgroundColor: '' }}>
                  <Typography variant="h6" sx={{ backgroundColor: '#DFE3E8' }}>
                    {item.title}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography>
                    {item.description}
                  </Typography>
                </CardContent>
              </Paper>
            </Grid>
          ))}
        </Card>
      </Grid>
    </Container>
  );
}

export default AboutTeam;