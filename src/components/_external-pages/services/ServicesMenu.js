// import { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { NavLink as RouterLink } from 'react-router-dom';
import chevronRightFill from '@iconify/icons-eva/chevron-right-fill';
// material
import { alpha } from '@material-ui/core/styles';
import { Box, List, ListItem } from '@material-ui/core';
//
import { makeStyles } from '@material-ui/styles';
import SERVICES from 'src/utils/servicesInfo';

// ----------------------------------------------------------------------

// const MENU_WIDTH = 280;
// const MENU_PAPER_WIDTH = 800;
// const CONTENT_HEIGHT = 400;
const ITEM_HEIGHT = 40;
// const ITEM_ON_ROW = {
//   width: 'calc((100%/3) - 16px)',
//   '&:nth-child(3n+1)': { order: 1 },
//   '&:nth-child(3n+2)': { order: 2 },
//   '&:nth-child(3n)': { order: 3 }
// };

// ----------------------------------------------------------------------

const styles = makeStyles(( theme ) => ({
  active: {
    color: theme.palette.primary.main,
    // backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
  },
}));

ParentItem.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool,
  hasSub: PropTypes.bool
};

function ParentItem({ path, title, open, hasSub, ...other }) {
  const classes = styles();
  const activeStyle = {
    color: 'primary.main',
    bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
  };

  return (
    <ListItem
      disableGutters
      to={path}
      component={RouterLink}
      activeClassName={classes.active}
      // onClick={window.scrollTo(0, 200)}
      sx={{
        p: 2,
        // mb: 1,
        height: ITEM_HEIGHT,
        cursor: 'pointer',
        color: 'text.primary',
        typography: 'subtitle1',
        textTransform: 'capitalize',
        borderLeft: '4px solid',
        marginBottom: 1,
        // justifyContent: 'space-between',
        transition: (theme) => theme.transitions.create('all'),
        '&:hover': activeStyle,
        ...(open && activeStyle),
        '&:active': { color: 'primary.main' },
      }}
      {...other}
    >
      {/* <RemoveIcon
        sx={{
          mr: 2,
          // color: 'black',
          '&:hover': activeStyle,
        }} /> */}
      {/* <ListItemIcon sx={{ height: 30, width: 30 }}><img src={icon} /></ListItemIcon> */}
      {title}
      {hasSub && <Box component={Icon} icon={chevronRightFill} sx={{ ml: 1, width: 20, height: 20 }} />}
    </ListItem>
  );
}

MegaMenuItem.propTypes = {
  parent: PropTypes.object
};

function MegaMenuItem({ parent }) {
  const { title, path, icon } = parent;

  return (
    <ParentItem path={path} title={title} icon={icon}>
      {title}
    </ParentItem>
  );
}

export default function ServicesMenuConfig() {
  return (
    <List disablePadding>
      {SERVICES.map((parent) => (
        <MegaMenuItem key={parent.title} parent={parent} />
      ))}
    </List>
  );
}
