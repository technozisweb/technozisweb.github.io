// material
import { styled } from '@material-ui/core/styles';
import { useState } from 'react';
// components
import Page from '../components/Page';
import { TechnologiesContent, TechnologiesHero, TechnologiesNavbar } from '../components/_external-pages/technologies';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function About() {
  const [title, setTitle] = useState();

  // const getTitle = (title) => {
  //   setTitle(title)
  // }

  return (
    <RootStyle title="Technologies | Technozis">
      <TechnologiesHero />
      {/* <DesktopMenu /> */}
      <TechnologiesNavbar setTitle={setTitle} />
      {/* <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} /> */}
      <TechnologiesContent title={title} />
    </RootStyle>
  );
}
