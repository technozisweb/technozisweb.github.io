import chevronRightFill from '@iconify/icons-eva/chevron-right-fill';
import { Icon } from '@iconify/react';
import { Box, List, ListItem } from '@material-ui/core';
// material
import { alpha } from '@material-ui/core/styles';
//
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import SERVICES from 'src/utils/servicesInfo';

// ----------------------------------------------------------------------

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

function ParentItem({ path, title, icon, open, hasSub, ...other }) {
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
        p: 1,
        // mb: 1,
        cursor: 'pointer',
        color: 'text.primary',
        typography: {xs: 'subtitle2', md: 'subtitle1'},
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
