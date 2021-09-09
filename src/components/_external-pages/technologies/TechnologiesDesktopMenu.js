import { Link, Stack } from '@material-ui/core';
// material
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';

// ----------------------------------------------------------------------

const ITEM_SPACING = 4;
const ITEM_HEIGHT = 64;

const styles = makeStyles((theme) => ({
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
    color: 'primary.main',
    // transform: "scale3d(1.1, 1.1, 1)"
  };

  return (
    <LinkStyle
      onClick={() => { setTitle(title) }}
      to={path}
      component={RouterLink}
      underline="none"
      color="inherit"
      activeClassName={classes.active}
      variant="subtitle2"
      sx={{
        // display: 'flex',
        cursor: 'pointer',
        // alignItems: 'center',
        // textTransform: 'capitalize',
        // height: ITEM_HEIGHT,
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
  const { title, path } = parent;
  // console.log(setTitle);



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
