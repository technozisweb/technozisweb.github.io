import PropTypes from 'prop-types';
import { useState } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import chevronDownFill from '@iconify/icons-eva/chevron-down-fill';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Link, Paper, Typography, List, Stack, ListItemIcon, ListItem, Divider, ListItemText } from '@material-ui/core';
import arrowIosUpwardFill from '@iconify/icons-eva/arrow-ios-upward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
//
import MenuHotProducts from './MenuHotProducts';
import MegaMenuCarousel from './MegaMenuCarousel';

// ----------------------------------------------------------------------

const CONTENT_HEIGHT = 400;
const ITEM_SPACING = 4;
const ITEM_HEIGHT = 64;
const ITEM_ON_ROW4 = {
  width: 'calc((100%/5) - 16px)',
  '&:nth-child(3n+1)': { order: 1 },
  '&:nth-child(3n+2)': { order: 2 },
  '&:nth-child(3n)': { order: 3 }
};
const ITEM_ON_ROW3 = {
  width: 'calc((100%/3) - 16px)',
  '&:nth-child(3n+1)': { order: 1 },
  '&:nth-child(3n+2)': { order: 2 },
  '&:nth-child(3n)': { order: 3 }
};

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
  open: PropTypes.bool,
  hasSub: PropTypes.bool,
  pathname: PropTypes.string,
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
};

function ParentItem({ path, title, open, hasSub, pathname, isHome, isOffset, ...other }) {
  const activeStyle = {
    color: 'primary.main'
  };
  const isActive = pathname === path;

  return (
    <LinkStyle
      to={path}
      component={RouterLink}
      underline="none"
      color="inherit"
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
  pathname: PropTypes.string,
};

function MegaMenuItem({ parent, pathname }) {
  const { title, path, more, products, tags, children, isHome, isOffset } = parent;
  const [open, setOpen] = useState(false);
  const isActive = pathname === path;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (children) {
    return (
      <>
        <ParentItem onMouseEnter={handleOpen} onMouseLeave={handleClose} path={path} title={title} open={open} hasSub />

        {open && (
          <Paper
            elevation="24"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            sx={{
              p: 0.5,
              width: '100%',
              position: 'absolute',
              // borderRadius: 2,
              top: ITEM_HEIGHT,
              left: -ITEM_SPACING * 8,
              zIndex: (theme) => theme.zIndex.modal,
              boxShadow: (theme) => theme.customShadows.z100
            }}
          >
            {title === 'Technologies'
              ?
              <Stack flexWrap="wrap" alignContent="space-between" direction="row">
                {children.map((list) => {
                  const { subheader, items } = list;

                  return (
                    <Stack
                      key={subheader} sx={{ m: 1, ...ITEM_ON_ROW4 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold', mt: 2, ml: 2 }} noWrap>
                        {subheader}
                      </Typography>
                      {items.map((link) => (
                        <Link
                          noWrap
                          key={link.title}
                          component={RouterLink}
                          to={link.path}
                          underline="none"
                          sx={{
                            // typography: 'body2',
                            color: 'text.primary',
                            fontSize: 12,
                            transition: (theme) => theme.transitions.create('all'),
                            '&:hover': { color: 'primary.main' },
                          }}
                        >
                          <List>
                            <ListItem>
                              <ListItemIcon sx={{ width: '15%' }}>{link.icon}</ListItemIcon>
                              <ListItemText sx={{ fontSize: 10 }}>{link.title}</ListItemText>
                            </ListItem>
                          </List>
                        </Link>
                      ))}
                    </Stack>
                  );
                })}
              </Stack>
              :
              <Stack flexWrap="wrap" alignContent="space-between" direction="row">
                {children.map((list) => {
                  const { subheader, items } = list;

                  return (
                    <Stack
                      key={subheader} sx={{ p: 0, ...ITEM_ON_ROW3 }}
                    >
                      <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold', mt: 2, ml: 2 }} noWrap>
                        {subheader}
                      </Typography>
                      {items.map((link) => (
                        <Link
                          noWrap
                          key={link.title}
                          component={RouterLink}
                          to={link.path}
                          underline="none"
                          sx={{
                            typography: 'body2',
                            color: 'text.primary',
                            // fontSize: 18,
                            transition: (theme) => theme.transitions.create('all'),
                            '&:hover': { color: 'primary.main' },
                          }}
                        >
                          <List>
                            <ListItem>
                              <ListItemIcon sx={{ width: '12%' }}>{link.icon}</ListItemIcon>
                              <ListItemText>{link.title}</ListItemText>
                            </ListItem>
                          </List>
                        </Link>
                      ))}
                    </Stack>
                  );
                })}
              </Stack>}

            {/* <Stack spacing={3}>
              <Link
                to={more.path}
                component={RouterLink}
                sx={{ typography: 'body2', display: 'inline-flex', fontSize: 13 }}
              >
                {more.title}
              </Link>

              <Divider />
              <MegaMenuCarousel products={products} numberShow={8} />
              <Divider />

              <MenuHotProducts tags={tags} />
            </Stack> */}
          </Paper>
        )}
      </>
    );
  }

  return <ParentItem path={path} title={title} />;
}

MegaMenuDesktopHorizon.propTypes = {
  navConfig: PropTypes.array
};

export default function MegaMenuDesktopHorizon({ navConfig, ...other }) {
  const { pathname } = useLocation();

  return (
    <Stack direction="row" spacing={ITEM_SPACING} {...other}>
      {navConfig.map((parent) => (
        <MegaMenuItem
          key={parent.title}
          parent={parent}
          pathname={pathname}
        />
      ))}
    </Stack>
  );
}
