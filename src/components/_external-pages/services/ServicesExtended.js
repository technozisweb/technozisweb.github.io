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
  fontFamily: 'Roboto',
  // backgroundColor: '#fce4ec'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  // position: 'relative',
  // display: 'flex',
  border: '2px solid lightpink',
  // marginBottom: theme.spacing(20),
  [theme.breakpoints.up('sm')]: {
    // height: '100%',
    padding: 30,
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
      if (path == item.title.replace(/ /g, '').toLowerCase()) {
        const info = item.info;
        setServiceInfo(info);
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
                    <Grid item={12}>
                      <MotionInView variants={varFadeInUp}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: 'Roboto',
                            // color: 'gray',
                            fontSize: 22,
                            // fontStyle: 'italic',
                            m: 1,
                            // fontWeight: 'fontWeightMedium'
                          }}
                        >
                          {item}
                        </Typography>
                      </MotionInView>
                    </Grid>
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
