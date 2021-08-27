import PropTypes from 'prop-types';
import { useState } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import chevronDownFill from '@iconify/icons-eva/chevron-down-fill';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Link, Paper, Typography, List, Stack, ListItemIcon, ListItem, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

// ----------------------------------------------------------------------

const CONTENT_HEIGHT = 400;
const ITEM_SPACING = 4;
const ITEM_HEIGHT = 64;
const ITEM_ON_ROW = {
  width: 'calc((100%/3) - 16px)',
  '&:nth-child(3n+1)': { order: 1 },
  '&:nth-child(3n+2)': { order: 2 },
  '&:nth-child(3n)': { order: 3 }
};

const styles = makeStyles(( theme ) => ({
  active: {
    color: theme.palette.primary.main
  },
  notactive: {
    color: theme.palette.text.main
  }
}));

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  // marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none'
  }
}));

// ----------------------------------------------------------------------

ParentItem.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  setTitle: PropTypes.func,
  open: PropTypes.bool,
  hasSub: PropTypes.bool,
  pathname: PropTypes.string,
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
};

function ParentItem({ path, title, setTitle, open, hasSub, pathname, isHome, isOffset, ...other }) {
  const classes = styles();
  const activeStyle = {
    color: 'primary.main'
  };
  const isActive = pathname === path;

  return (
    <LinkStyle
      onClick={() => {setTitle(title)}}
      to={path}
      component={RouterLink}
      underline="none"
      color="inherit"
      activeClassName={classes.active}
      variant="subtitle2"
      sx={{
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        textTransform: 'capitalize',
        height: ITEM_HEIGHT,
        lineHeight: `${ITEM_HEIGHT}px`,
        fontSize: 18,
        transition: (theme) => theme.transitions.create('all'),
        '&:hover': activeStyle,
        ...(open && activeStyle),
      }}
      {...other}
    >
      {title}
      {/* {hasSub && <Box component={Icon} icon={chevronDownFill} sx={{ ml: 1, width: 20, height: 20 }} />} */}
      {/* {hasSub && 
        <Box
          component={Icon}
          icon={open ? arrowIosUpwardFill : arrowIosDownwardFill}
          sx={{ ml: 0.5, width: 20, height: 20 }}
        />
      } */}
    </LinkStyle>
  );
}

MegaMenuItem.propTypes = {
  parent: PropTypes.object,
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
  // pathname: PropTypes.string,
  setTitle: PropTypes.func
};

function MegaMenuItem({ parent, pathname, setTitle }) {
  const { title, path, more, products, tags, children, isHome, isOffset } = parent;
  const [open, setOpen] = useState(false);
  const isActive = pathname === path;
  // console.log(setTitle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return <ParentItem path={path} title={title} setTitle={setTitle} />;
}

MegaMenuDesktopHorizon.propTypes = {
  navConfig: PropTypes.array,
  setTitle: PropTypes.func
};

export default function MegaMenuDesktopHorizon({ navConfig, setTitle, ...other }) {
  const { pathname } = useLocation();
  // const {setTitle} = props;
  // setTitle('blabla');

  return (
    <Stack direction="row" spacing={ITEM_SPACING} {...other}>
      {navConfig.map((parent) => (
        <MegaMenuItem
          key={parent.title}
          parent={parent}
          pathname={pathname}
          setTitle={setTitle}
        />
      ))}
    </Stack>
  );
}
