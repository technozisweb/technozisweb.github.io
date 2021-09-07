import { Grid, Typography, Container, List, ListItem, ListItemIcon } from "@material-ui/core";
import TECHNOLOGY from 'src/utils/technologies';
import { styled } from '@material-ui/core/styles';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const Technology = () => {
  return (
    <>
      <RootStyle>
        <Container maxWidth="lg">
          <Grid container sx={{ alignSelf: 'center' }}>
            {TECHNOLOGY.map((item) => (
              <Grid
                key={item.title}
                item
                xs={12}
                md={4}
                sx={{
                  mt: 10,
                  // borderLeft: '1px solid',
                  // borderTop: '1px solid',
                  // borderImage: 'linear-gradient(transparent 0%, black 10% 10%, transparent 50%) 0 0 0 1 / 2px'
                }}
              >
                <Typography paragraph variant='h6'
                  sx={{
                    fontFamily: 'Roboto',
                    fontStyle: "italic"
                  }}
                >
                  {item.header}
                </Typography>
                {item.expertise.map((list) => (
                  <List key={list.title}>
                    <ListItem>
                      <ListItemIcon sx={{ width: 50, height: 50 }}><img src={list.path} /></ListItemIcon>
                      {list.title}
                    </ListItem>
                  </List>
                ))}
              </Grid>
            ))}
          </Grid>
        </Container>
      </RootStyle>
    </>
  );
}

export default Technology;