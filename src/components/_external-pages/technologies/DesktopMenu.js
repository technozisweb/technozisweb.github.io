import * as React from 'react';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
// import TabPanel from '@material-ui/lab/TabPanel';
import TECHNOLOGY from 'src/utils/technologies';
import { Container } from '@material-ui/core';
// import Container from 'src/theme/overrides/Container';

export default function LabTabs() {
  const [value, setValue] = React.useState('Front');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ width: '100%', typography: 'body1' }}>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {TECHNOLOGY.map((data) => (
              <>
                <Tab label={data.title} value={data.title} />
              </>
            ))}
          </TabList>
          {/* {TEXHNOLOGY} */}
        </Box>
      </TabContext>
      {/* {TECHNOLOGY.map((card, index) => (
        <Card>
          <Typography variant="h6" paragraph>
            {card.title}
          </Typography>
        </Card>
      ))} */}
    </Container>
  );
}