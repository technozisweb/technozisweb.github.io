import { useState, useEffect } from 'react';
// material
import { styled } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
//
import { MotionInView, varFadeInUp } from '../../animate';
import SERVICES from 'src/utils/servicesInfo';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0),
  textAlign: 'justify',
  fontFamily: 'Roboto'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  borderBottom: '2px solid lightblue',
  borderRight: '2px solid lightblue',
  marginBottom: theme.spacing(20),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
}));

// ----------------------------------------------------------------------

export default function ServicesExtended() {
  const [serviceInfo, setServiceInfo] = useState({});
  const [path, setPath] = useState();

  useEffect(() => {
    let pathname = window.location.pathname;
    pathname = pathname.replace(/[^a-zA-Z0-9]/g, '');
    pathname = pathname.slice(8,);
    setPath(pathname);
  }, [window.location.pathname]);

  useEffect(async () => {
    SERVICES.map((item, index) => {
      console.log('item.info', item.info);
      if (path == item.title.replace(/ /g, '').toLowerCase()) {
        const info = item.info;
        setServiceInfo(info);
        console.log('serviceInfo', serviceInfo);
      }
    });
    // window.scrollTo(100, 300);
  }, [serviceInfo, path]);

  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative', mb: 5 }}>
        {serviceInfo && serviceInfo.length
          ? (
            <Grid container spacing={2} direction="row-reverse" justifyContent="space-between">
              <Grid item xs={12} sx={{ mt: 5, mb: 5 }}>
                <ContentStyle>
                  {serviceInfo.map((item) => (
                    <MotionInView variants={varFadeInUp}>
                      <Typography
                        variant="body1"
                        sx={{
                          // fontFamily: 'Raleway',
                          color: 'gray',
                          // fontSize: 22,
                          // fontStyle: 'italic',
                          m: 1,
                          // fontWeight: 'fontWeightMedium'
                        }}
                      >
                        {item}
                      </Typography>
                    </MotionInView>
                  ))}
                  {/* <MotionInView variants={varFadeInUp}>
                    <Typography component="p" variant="overline" sx={{ mb: 10, color: 'text.disabled', display: 'block' }}>
                      Easy switch between styles.
                    </Typography>
                  </MotionInView> */}

                </ContentStyle>
              </Grid>

            </Grid>
          )
          : null}
      </Container>
    </RootStyle>
  );
}
