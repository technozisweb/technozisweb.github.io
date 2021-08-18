import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import fileFill from '@iconify/icons-eva/file-fill';
import roundGrain from '@iconify/icons-ic/round-grain';
import bookOpenFill from '@iconify/icons-eva/book-open-fill';
import AdbIcon from '@material-ui/icons/Adb';
// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE, PATH_DASHBOARD } from '../../routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: '/'
  },
  {
    title: 'Sevices',
    path: '/pages',
    // icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    children: [
      {
        items: [
          { title: 'Custom Software Development', icon: <AdbIcon color="error" />, path: '#' },
          { title: 'Business Intelligence and Analytics', icon: <AdbIcon color="error" />, path: '#' },
        ]
      },
      // {
      //   subheader: 'Authentication',
      //   items: [
      //     { title: 'Login', path: PATH_AUTH.loginUnprotected },
      //     { title: 'Register', path: PATH_AUTH.registerUnprotected },
      //     { title: 'Reset password', path: PATH_AUTH.resetPassword },
      //     { title: 'Verify code', path: PATH_AUTH.verify }
      //   ]
      // },
      // {
      //   subheader: 'Error',
      //   items: [
      //     { title: 'Page 404', path: PATH_PAGE.page404 },
      //     { title: 'Page 500', path: PATH_PAGE.page500 }
      //   ]
      // },
      // {
      //   subheader: 'Dashboard',
      //   items: [{ title: 'Dashboard', path: PATH_DASHBOARD.root }]
      // }
    ]
  },
  {
    title: 'Technologies',
    icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
    path: PATH_PAGE.components
  },
  {
    title: 'About',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: PATH_PAGE.about
  }
];

export default menuConfig;
