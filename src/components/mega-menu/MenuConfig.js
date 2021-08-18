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
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: '/'
  },
  {
    title: 'Services',
    path: '#',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    more: { title: 'More Categories', path: '#' },
    products: MOCK_PRODUCTS,
    tags: TAGS,
    children: [
      {
        // subheader: 'Agriculture Machinery',
        items: [
          { title: 'Agriculture Machinery', icon: <AdbIcon size="small" color="error" />, path: '#' },
          // { title: 'Livestock MachineryFeed', path: '#' },
          // { title: 'Feed Processing Machinery', path: '#' },
          // { title: 'Tiller', path: '#' },
          // { title: 'Harvesting Machine', path: '#' }
        ]
      },
      {
        // subheader: 'Machine Tools',
        items: [
          { title: 'CNC Machine Tools', icon: <AdbIcon size="small" color="success" />, path: '#' },
          // { title: 'Lathe', path: '#' },
          // { title: 'Grinding Machine ', path: '#' },
          // { title: 'Drilling Machine ', path: '#' },
          // { title: 'Milling Machine ', path: '#' }
        ]
      },
      {
        // subheader: 'Machine Tools',
        items: [
          { title: 'CNC Machine Tools', icon: <AdbIcon size="small" color="info" />, path: '#' },
          // { title: 'Lathe', path: '#' },
          // { title: 'Grinding Machine ', path: '#' },
          // { title: 'Drilling Machine ', path: '#' },
          // { title: 'Milling Machine ', path: '#' }
        ]
      },
      
      // {
      //   subheader: 'Other Machinery & Parts',
      //   items: [
      //     { title: 'Metallic Processing Machinery', path: '#' },
      //     { title: 'Machinery for Food, Beverage & Cereal', path: '#' },
      //     { title: 'Laser Equipment', path: '#' },
      //     { title: 'Mould', path: '#' },
      //     { title: 'Textile Machinery & Parts', path: '#' },
      //     { title: 'Cutting & Fold-bend Machine', path: '#' },
      //     { title: 'Paper Machinery', path: '#' },
      //     { title: 'Rubber Machinery', path: '#' },
      //     { title: 'Chemical Equipment & Machinery', path: '#' },
      //     { title: 'Mixing Equipment', path: '#' },
      //     { title: 'Machinery for Garment, Shoes & Accessories', path: '#' },
      //     { title: 'Crushing & Culling Machine', path: '#' }
      //   ]
      // },
      // {
      //   subheader: 'Plastic & Woodworking Machinery',
      //   items: [
      //     { title: 'Plastic Machinery', path: '#' },
      //     { title: 'Woodworking Machinery', path: '#' },
      //     { title: 'Blow Molding Machine', path: '#' },
      //     { title: 'Plastic Recycling Machine', path: '#' },
      //     { title: 'Injection Molding Machine', path: '#' }
      //   ]
      // },
      // {
      //   subheader: 'Construction Machinery',
      //   items: [
      //     { title: 'Building Material Making Machinery', path: '#' },
      //     { title: 'Lifting Equipment', path: '#' },
      //     { title: 'Excavator', path: '#' },
      //     { title: 'Concrete Machinery', path: '#' },
      //     { title: 'Stone Processing Machinery', path: '#' }
      //   ]
      // }
    ]
  },
  {
    title: 'Technologies',
    path: '#',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    more: { title: 'More Categories', path: '#' },
    products: MOCK_PRODUCTS,
    tags: TAGS,
    children: [
      {
        subheader: 'Cellphone & Accessories',
        items: [
          { title: 'Mobile Phone Charger', path: '#' },
          { title: 'Power Bank', path: '#' },
          { title: 'Mobile Phone LCD', path: '#' },
          { title: 'Bluetooth Headset', path: '#' },
          { title: 'Mobile Phone', path: '#' }
        ]
      },

      {
        subheader: 'Audio & Video',
        items: [
          { title: 'Display & Accessories', path: '#' },
          { title: 'Audio & Sets', path: '#' },
          { title: 'Professional Audio', path: '#' },
          { title: 'LCD Display', path: '#' },
          { title: 'LCD Module', path: '#' },
          { title: 'Video', path: '#' },
          { title: 'TV & Parts', path: '#' },
          { title: 'Amplifier', path: '#' },
          { title: 'Portable Audio Appliance', path: '#' },
          { title: 'Home Theatre System', path: '#' },
          { title: 'HDMI Cable', path: '#' },
          { title: 'Radio', path: '#' }
        ]
      },
      {
        subheader: 'Household Appliances',
        items: [
          { title: 'Air Conditioner, Purifier & Humidifier', path: '#' },
          { title: 'Refrigerator, Freezer & Parts', path: '#' },
          { title: 'Water Heater & Components', path: '#' },
          { title: 'Electrical Fan & Exhaust Fan', path: '#' },
          { title: 'Household Water Treatment Equipment', path: '#' },
          { title: 'Solar Water Heater', path: '#' },
          { title: 'Photographic Apparatus', path: '#' },
          { title: 'Gas Burner & Gas Stove', path: '#' },
          { title: 'Entertainment Electronics', path: '#' },
          { title: 'Electrical Kettle', path: '#' },
          { title: 'Food Blender', path: '#' },
          { title: 'Dehumidifier', path: '#' }
        ]
      },
      {
        subheader: 'Digital Devices',
        items: [
          { title: 'Battery & Charger', path: '#' },
          { title: 'Wearable Devices', path: '#' },
          { title: 'Digital Photo Frame', path: '#' },
          { title: 'Digital Camera', path: '#' },
          { title: 'Smart Glasses', path: '#' }
        ]
      }
    ]
  },
  {
    title: 'Technologies',
    path: '#',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    more: { title: 'More Categories', path: '#' },
    products: MOCK_PRODUCTS,
    tags: TAGS,
    children: [
      {
        subheader: 'Other',
        items: [
          { title: 'About us', path: PATH_PAGE.about },
          { title: 'Contact us', path: PATH_PAGE.contact },
          { title: 'FAQs', path: PATH_PAGE.faqs },
          { title: 'Pricing', path: PATH_PAGE.pricing },
          { title: 'Payment', path: PATH_PAGE.payment },
          { title: 'Maintenance', path: PATH_PAGE.maintenance },
          { title: 'Coming Soon', path: PATH_PAGE.comingSoon }
        ]
      },
      {
        subheader: 'Authentication',
        items: [
          { title: 'Login', path: PATH_AUTH.loginUnprotected },
          { title: 'Register', path: PATH_AUTH.registerUnprotected },
          { title: 'Reset password', path: PATH_AUTH.resetPassword },
          { title: 'Verify code', path: PATH_AUTH.verify }
        ]
      },
      {
        subheader: 'Error',
        items: [
          { title: 'Page 404', path: PATH_PAGE.page404 },
          { title: 'Page 500', path: PATH_PAGE.page500 }
        ]
      },
      {
        subheader: 'Dashboard',
        items: [{ title: 'Dashboard', path: PATH_DASHBOARD.root }]
      }
    ]
  },
  {
    title: 'About us',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: PATH_PAGE.about
  }
];

export default menuConfig;
