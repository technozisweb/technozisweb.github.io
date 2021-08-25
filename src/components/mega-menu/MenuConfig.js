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
  width: '7%',
  height: '7%'
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
    path: '/services/custom-software-development',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    more: { title: 'More Categories', path: '#' },
    products: MOCK_PRODUCTS,
    tags: TAGS,
    children: [
      {
        // subheader: 'Agriculture Machinery',
        items: [
          { title: 'Custom Software Development', icon: <img src="/static/icons/custom-software.png"  {...ICON_SIZE} style={{ color: 'blue' }} />, path: '/services/custom-software-development' },
        ]
      },
      {
        items: [
          { title: 'Hire Developer', icon: <img src="/static/icons/custom-software.png"  {...ICON_SIZE} />, path: '/services/hire-developer' },
        ]
      },
      {
        items: [
          { title: 'Technologies Consultant', icon: <AdbIcon size="small" color="info" />, path: '/services/technologies-consultant' },
        ]
      },
      {
        items: [
          { title: 'Management and Support', icon: <AdbIcon size="small" color="info" />, path: '/services/technologies-consultant' },
        ]
      },
      {
        items: [
          { title: 'System Integration', icon: <AdbIcon size="small" color="info" />, path: '/services/technologies-consultant' },
        ]
      },
      {
        items: [
          { title: 'Enterprise Mobility', icon: <AdbIcon size="small" color="info" />, path: '/services/technologies-consultant' },
        ]
      },
      {
        items: [
          { title: 'Product Engineering', icon: <AdbIcon size="small" color="info" />, path: '/services/technologies-consultant' },
        ]
      },
      {
        items: [
          { title: 'Software Testing & QA', icon: <AdbIcon size="small" color="info" />, path: '/services/technologies-consultant' },
        ]
      },
      {
        items: [
          { title: 'Application Development', icon: <AdbIcon size="small" color="info" />, path: '/services/technologies-consultant' },
        ]
      },
      {
        items: [
          { title: 'Embedded Product', icon: <AdbIcon size="small" color="info" />, path: '/services/technologies-consultant' },
        ]
      },
      {
        items: [
          { title: 'Cloud Application', icon: <AdbIcon size="small" color="info" />, path: '/services/technologies-consultant' },
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
          { title: 'Custom Software Development', icon: <AdbIcon size="small" color="error" />, path: '/services' },
        ]
      },
      {
        items: [
          { title: 'CNC Machine Tools', icon: <AdbIcon size="small" color="success" />, path: '/services' },
        ]
      },
      {
        items: [
          { title: 'CNC Machine Tools', icon: <AdbIcon size="small" color="info" />, path: '/services' },
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
          { title: 'Custom Software Development', icon: <AdbIcon size="small" color="error" />, path: '/services' },
        ]
      },
      {
        items: [
          { title: 'CNC Machine Tools', icon: <AdbIcon size="small" color="success" />, path: '/services' },
        ]
      },
      {
        items: [
          { title: 'CNC Machine Tools', icon: <AdbIcon size="small" color="info" />, path: '/services' },
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
          { title: 'Custom Software Development', icon: <AdbIcon size="small" color="error" />, path: '/services' },
        ]
      },
      {
        items: [
          { title: 'CNC Machine Tools', icon: <AdbIcon size="small" color="success" />, path: '/services' },
        ]
      },
      {
        items: [
          { title: 'CNC Machine Tools', icon: <AdbIcon size="small" color="info" />, path: '/services' },
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
