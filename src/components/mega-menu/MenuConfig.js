import { Icon } from '@iconify/react';
import fileFill from '@iconify/icons-eva/file-fill';
// utils
import mockData from '../../utils/mock-data';
import homeFill from '@iconify/icons-eva/home-fill';
import roundGrain from '@iconify/icons-ic/round-grain';
import bookOpenFill from '@iconify/icons-eva/book-open-fill';
import AdbIcon from '@material-ui/icons/Adb';
// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE, PATH_DASHBOARD } from '../../routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: '100%',
  height: '100%'
};

const MOCK_PRODUCTS = [...Array(10)].map((_, index) => ({
  name: mockData.text.title(index),
  image: mockData.image.feed(index),
  path: '#'
}));

const TAGS = [
  { name: 'Paper Cup', path: '#' },
  { name: 'Lotion Pump', path: '#' },
  { name: 'Brush Cutter', path: '#' },
  { name: 'Display Rack', path: '#' },
  { name: 'Glass Bottle', path: '#' }
];

const menuConfig = [
  {
    title: 'Home',
    // icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: '/'
  },
  {
    title: 'Services',
    path: '/',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    more: { title: 'More Categories', path: '#' },
    products: MOCK_PRODUCTS,
    tags: TAGS,
    children: [
      {
        // subheader: 'Agriculture Machinery',
        items: [
          { title: 'Custom Software Development', icon: <AdbIcon size="small" color="error" />, path: '/services/software-development' },
        ]
      },
      {
        items: [
          { title: 'CNC Machine Tools', icon: <AdbIcon size="small" color="success" />, path: '#' },
        ]
      },
      {
        items: [
          { title: 'CNC Machine Tools', icon: <AdbIcon size="small" color="info" />, path: '#' },
        ]
      },
    ]
  },
  {
    title: 'Technologies',
    path: '/',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    more: { title: 'More Categories', path: '#' },
    products: MOCK_PRODUCTS,
    tags: TAGS,
    children: [
      {
        // subheader: 'Agriculture Machinery',
        items: [
          { title: 'Custom Software Development', icon: <AdbIcon size="small" color="error" />, path: '/services/software-development' },
        ]
      },
      {
        items: [
          { title: 'CNC Machine Tools', icon: <AdbIcon size="small" color="success" />, path: '/services/software-development' },
        ]
      },
      {
        items: [
          { title: 'CNC Machine Tools', icon: <AdbIcon size="small" color="info" />, path: '/services/software-development' },
        ]
      },
    ]
  },
  {
    title: 'Industries',
    path: '/',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    more: { title: 'More Categories', path: '#' },
    products: MOCK_PRODUCTS,
    tags: TAGS,
    children: [
      {
        // subheader: 'Agriculture Machinery',
        items: [
          { title: 'Custom Software Development', icon: <AdbIcon size="small" color="error" />, path: '/services/software-development' },
        ]
      },
      {
        items: [
          { title: 'CNC Machine Tools', icon: <AdbIcon size="small" color="success" />, path: '/services/software-development' },
        ]
      },
      {
        items: [
          { title: 'CNC Machine Tools', icon: <AdbIcon size="small" color="info" />, path: '/services/software-development' },
        ]
      },
    ]
  },
  {
    title: 'Business Solutions',
    path: '/',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    more: { title: 'More Categories', path: '#' },
    products: MOCK_PRODUCTS,
    tags: TAGS,
    children: [
      {
        // subheader: 'Agriculture Machinery',
        items: [
          { title: 'Custom Software Development', icon: <AdbIcon size="small" color="error" />, path: '/services/software-development' },
        ]
      },
      {
        items: [
          { title: 'CNC Machine Tools', icon: <AdbIcon size="small" color="success" />, path: '/services/software-development' },
        ]
      },
      {
        items: [
          { title: 'CNC Machine Tools', icon: <AdbIcon size="small" color="info" />, path: '/services/software-development' },
        ]
      },
    ]
  },
  {
    title: 'About',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: PATH_PAGE.about
  }
];

export default menuConfig;
