import { Icon } from '@iconify/react';
import bookOpenFill from '@iconify/icons-eva/book-open-fill';
// routes
// import { PATH_AUTH, PATH_DOCS, PATH_PAGE, PATH_DASHBOARD } from '../../routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'FRONTEND',
    path: '/technologies/front',
  },
  {
    title: 'BACKEND',
    path: '/technologies/back',
  },
  {
    title: 'DEVOPS',
    path: '/technologies/devops',
  },
  {
    title: 'MOBILE',
    path: '/technologies/mobile',
  },
  {
    title: 'CLOUD',
    path: '/technologies/cloud',
  },
  {
    title: 'DATABASE',
    path: '/technologies/database',
  },
  {
    title: 'ECOMMERCE',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: '/technologies/ecommerce',
  },
  {
    title: 'FRAMEWORKS',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: '/technologies/frameworks',
  },
  {
    title: 'PLATFORMS',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: '/technologies/platforms',
  },
  {
    title: 'CMS',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: '/technologies/cms',
  },
];

export default menuConfig;
