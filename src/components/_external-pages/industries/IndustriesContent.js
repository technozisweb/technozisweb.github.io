import { Container, Card, CardMedia, Grid, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

// const styles = () => {
//   card: {
//     width: 100%
//   },
// }

const industryData = [
  {
    title: 'BFSI',
    icon: '/static/icons/technologies/industry/bfsi',
    description: 'Description about bfsi.'
  },
]

const IndustriesContent = () => {
  return (
    <Container>
      <Grid container sx={{ m: 5 }}>
        {industryData.map((industry) => {
          <Grid item xs={12} md={2} sx={{ m: 5, border: '2px solid black' }}>
            {/* <Card sx={{ width: '100%', m: 5 }}>
              <CardHeader
                title={industry.title}
              />
              <CardMedia
                component="img"
                height="194"
                image={industry.icon}
              />
            </Card> */}
          </Grid>
        })}
      </Grid>
    </Container>
  )
}

export default IndustriesContent;
