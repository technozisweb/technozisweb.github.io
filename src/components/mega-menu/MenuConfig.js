import { Icon } from '@iconify/react';
import fileFill from '@iconify/icons-eva/file-fill';
// utils
import mockData from '../../utils/mock-data';
import homeFill from '@iconify/icons-eva/home-fill';
import roundGrain from '@iconify/icons-ic/round-grain';
import bookOpenFill from '@iconify/icons-eva/book-open-fill';
// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE, PATH_DASHBOARD } from '../../routes/paths';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: '7%',
  height: '7%',
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
          { title: 'Custom Software Development', icon: <img src="/static/icons/services/custom-software.png" />, path: '/services/custom-software-development' },
          { title: 'Hire Developer', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/hire-developer' },
          { title: 'Technologies Consultant', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'Management and Support', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'System Integration', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
        ]
      },
      {
        items: [
          { title: 'Enterprise Mobility', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'Product Engineering', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'Software Testing & QA', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'Application Development', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'Embedded Product', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
        ]
      },
      {
        items: [
          { title: 'Cloud Application', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'Product Engineering', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'Software Testing & QA', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'Application Development', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'Embedded Product', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
        ]
      },
    ]
  },
  {
    title: 'Technologies',
    path: '/technologies',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    more: { title: 'More Categories', path: '#' },
    products: MOCK_PRODUCTS,
    tags: TAGS,
    children: [
      {
        subheader: 'Frontend Development',
        items: [
          { title: 'Angular JS', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: ' React JS', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'Vue JS', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'Javascript', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'CSS3', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'HTML5', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
        ]
      },
      {
        subheader: 'Mobile Development',
        items: [
          { title: 'IOS', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'Android', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'React Native', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'Hybrid', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'Flutter', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'Swift', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
        ]
      },
      {
        subheader: 'Cloud Development',
        items: [
          { title: 'AWS', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'Google Cloud', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' }
        ]
      },
      {
        subheader: 'Backend Development',
        items: [
          { title: '.NET', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'Node JS', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'C#', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'PHP', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'C++', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: '.NETcore', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
        ]
      },
      {
        subheader: 'Frameworks',
        items: [
          { title: 'Laravel', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'MEAN', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'Codeigniter', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'RubyOnRails', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'CakePHP', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' }
        ]
      },
      {
        subheader: 'E-commerce',
        items: [
          { title: 'Magneto', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'Shopify', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'WooCommerce', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'NopCommerce', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' }
        ]
      },
      {
        subheader: 'Database',
        items: [
          { title: 'SQL Lerver', icon: <img src="/static/icons/technologies/database/sqlserver.png" />, path: '/services' },
          { title: 'MySQL', icon: <img src="/static/icons/technologies/database/mysql-logo.png" />, path: '/services' },
          { title: 'PostgreSQL', icon: <img src="/static/icons/technologies/database/PostgreSQL.png" />, path: '/services' },
          { title: 'MongoDB', icon: <img src="/static/icons/technologies/database/mongodb.png" />, path: '/services' },
          { title: 'DynamoDB', icon: <img src="/static/icons/technologies/database/DynamoDB.png" />, path: '/services' },
        ]
      },
      {
        subheader: 'CMS',
        items: [
          { title: 'WordPress', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'Kentico', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'Joomla', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'DotNetNuke', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
          { title: 'Sitefinity', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' }
        ]
      },
    ]
  },
  {
    title: 'Industries',
    path: '/industries',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    more: { title: 'More Categories', path: '#' },
    products: MOCK_PRODUCTS,
    tags: TAGS,
    children: [
      {
        // subheader: 'Agriculture Machinery',
        items: [
          { title: 'BFSI', icon: <img src="/static/icons/technologies/industry/bfsi.png" />, path: '/services/custom-software-development' },
          { title: 'Construction', icon: <img src="/static/icons/technologies/industry/construction.png" />, path: '/services/hire-developer' },
          { title: 'Aviation', icon: <img src="/static/icons/technologies/industry/aviation.png" />, path: '/services/technologies-consultant' },
          { title: 'Automobile', icon: <img src="/static/icons/technologies/industry/automobile.png" />, path: '/services/technologies-consultant' },
          { title: 'Engineering/Heavy Equipment', icon: <img src="/static/icons/technologies/industry/bfsi.png" />, path: '/services/technologies-consultant' },
        ]
      },
      {
        items: [
          { title: 'Education & Training', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'FMCG', icon: <img src="/static/icons/technologies/industry/retail-and-fmcg.png" />, path: '/services/technologies-consultant' },
          { title: 'Travel', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'Information Technology', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'Logistics', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
        ]
      },
      {
        items: [
          { title: 'Consultancy', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'Marine/Shipping', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'Pharmaceutical', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'Oil & Gas', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
          { title: 'Telecom', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services/technologies-consultant' },
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
          { title: 'Custom Software Development', icon: <FiberManualRecordOutlinedIcon size="small" color="error" />, path: '/services' },
        ]
      },
      {
        items: [
          { title: 'CNC Machine Tools', icon: <FiberManualRecordOutlinedIcon size="small" color="success" />, path: '/services' },
        ]
      },
      {
        items: [
          { title: 'CNC Machine Tools', icon: <FiberManualRecordOutlinedIcon size="small" color="info" />, path: '/services' },
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
