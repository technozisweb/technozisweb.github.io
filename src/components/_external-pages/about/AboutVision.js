// material
import { Container, Grid, Typography } from '@material-ui/core';
import { CarouselBasic1 } from 'src/components/carousel';
//
import { MotionInView, varFadeInUp } from '../../animate';

// ----------------------------------------------------------------------

export default function AboutVision() {
  return (
    <Container maxWidth="lg" sx={{ mt: 15 }}>
      <CarouselBasic1 />
      {/* <Box
        sx={{
          mb: 10,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden'
        }}
      >
        <img src="/static/about/interior1.jpg" alt="about-vision" />
      </Box> */}

      <Grid container justifyContent="center" sx={{ mt: 15 }}>
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
              Our vision is offering the best product and servicesO.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
    </Container>
  );
}
