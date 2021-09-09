import { useState } from 'react';
// material
import { styled } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
// components
import Page from '../components/Page';
import IndustriesHero from '../components/_external-pages/industries/IndustriesHero';
import IndustriesContent from 'src/components/_external-pages/industries/IndustriesContent';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Industries() {

  return (
    <RootStyle title="About us | Industries">
      <IndustriesHero />
      <IndustriesContent />
      {/* <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} /> */}
      {/* <TechnologiesContent title={title} /> */}
    </RootStyle>
  );
}
