import roundArrowRightAlt from '@iconify/icons-ic/round-arrow-right-alt';
import { Icon } from '@iconify/react';
import { Box, Button, Container, Grid, LinearProgress, Typography } from '@material-ui/core';
// material
import { styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// utils
import { fPercent } from '../../../utils/formatNumber';
//
import { MHidden } from '../../@material-extend';
import { MotionInView, varFadeInRight, varFadeInUp } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'justify',
  fontFamily: 'Roboto',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'justify'
  }
}));

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number
  })
};

function ProgressItem({ progress }) {
  const { label, value } = progress;
  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {fPercent(value)}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          '& .MuiLinearProgress-bar': { bgcolor: 'grey.700' },
          '&.MuiLinearProgress-determinate': { bgcolor: 'divider' }
        }}
      />
    </Box>
  );
}

export default function AboutWhat() {

  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          component="img"
          alt="image shape"
          src="/static/home/shape.svg"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            my: 'auto',
            position: 'absolute',
            filter: 'grayscale(1) opacity(100%)',
            display: { xs: 'none', md: 'block' }
          }}
        />
        <Grid container spacing={3}>
          <MHidden width="mdDown">
            <Grid item xs={12} md={5} lg={6} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                {/* <Grid item xs={6}>
                  <MotionInView variants={varFadeInUp}>
                    <Box
                      component="img"
                      src="/static/about/what-1.jpg"
                      sx={{
                        borderRadius: 2,
                        boxShadow: shadow
                      }}
                    />
                  </MotionInView>
                </Grid> */}
                <Grid item xs={12}>
                  <MotionInView variants={varFadeInUp}>
                    <Box component="img" src="/static/home/team.png" sx={{ borderRadius: 2 }} />
                  </MotionInView>
                </Grid>
              </Grid>
            </Grid>
          </MHidden>

          <Grid item xs={12} md={7} lg={6}>
            <MotionInView variants={varFadeInRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Why choose us?
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInRight}>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white')
                }}>
                We deliver world-class digital solutions to take on tomorrow's challenges.
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInRight}>
              <Typography variant="subtitle1">
                Consistent Delivery:
              </Typography>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white')
                }}
                variant="body1"
              >
                Using a nimble, creative approach, with in-depth expertise and time-tested processes, we work from start to finish to deliver optimal output.
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInRight}>
              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Minimize Project Risks:
              </Typography>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white')
                }}
                variant="body1"
              >
                We just don't focus on technology but solutions and adapt all the measures to deliver solutions with zero risks
              </Typography>
            </MotionInView>

            {/* <Box sx={{ my: 5 }}>
              {MOCK_SKILLS.map((progress) => (
                <MotionInView key={progress.label} variants={varFadeInRight}>
                  <ProgressItem progress={progress} />
                </MotionInView>
              ))}
            </Box> */}

            <MotionInView variants={varFadeInRight}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Icon icon={roundArrowRightAlt} width={24} height={24} />}
                href="/about-us"
                sx={{ mt: 5 }}
              >
                About us
              </Button>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
