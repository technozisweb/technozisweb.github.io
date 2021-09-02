import { Grid, Card, Stack, Typography } from "@material-ui/core";
import TECHNOLOGY from 'src/utils/technologies';

const Technology = () => {
  return (
    <Grid container>
      <Typography>Heyaaaaaaaaaa</Typography>
      {TECHNOLOGY.map((item) => (
        <Grid item xs={12} md={4}>
          <Typography>{item.header}</Typography>
          <Stack direction="row">

          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

export default Technology;