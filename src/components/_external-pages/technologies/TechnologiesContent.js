
import { useState, useEffect } from 'react';
import { Grid, Card, Container, CardMedia, Typography, CardContent, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import technologies from 'src/utils/technologies';

const TechnologiesContent = ({ title }) => {
  console.log('technologies', technologies);
  const [imgPaths, setImgPaths] = useState([]);
  const [path, setpath] = useState();
  // console.log('imgPaths', imgPaths);

  useEffect(() => {
    let pathname = window.location.pathname;
    // console.log('pahtname', pathname);
    setpath(pathname.slice(14,));
    console.log('path', path)
  }, [window.location.pathname]);

  useEffect(() => {
    // console.log('path in map useEffect ', path)

    technologies.map((tech) => {
      if (path === tech.title.replace(/ /g, '').toLowerCase()) {
        setImgPaths(tech.path);
        console.log('techimg', imgPaths);
      }
    })
  }, [imgPaths, path]);

  return (
    <Container>
      {/* {imgPaths.length
          ? (
            imgPaths.map((path) => {
              <>
                <Typography>heyaaaaaaaaaaaa</Typography>
                <Grid item xs={12} md={2}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="194"
                      image="/static/technologies/netdevelopment.png"
                      alt="Paella dish"
                    />
                  </Card>
                </Grid>
              </>
            })
          ) : null} */}
      <Grid Container sx={{ mb: 5 }}>
        {imgPaths.map((path) => {
          console.log('inside map function', path);

          <Grid item xs={12} md={2}>
            {console.log('inside grid md 2 function')}
            <Card sx={{ border: '2px solid black'}}>
              <CardMedia
                component="img"
                height="194"
                image={path}
                // alt="Paella dish"
              />
              <CardContent>
                {console.log('inside cardcontent function')}
                LALALALLALA
              </CardContent>
            </Card>
          </Grid>
        })}

      </Grid>
    </Container>
  )
};

TechnologiesContent.propTypes = {
  title: PropTypes.string
}

export default TechnologiesContent;