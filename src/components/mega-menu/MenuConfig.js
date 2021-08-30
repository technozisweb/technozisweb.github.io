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
import TECHNOLOGY from 'src/utils/technologies';

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
          { title: 'Custom Software', icon: <img src="/static/services/1custom-software.png" />, path: '/services/custom-software-development' },
          { title: 'Hire Developer', icon: <img src="/static/services/4hire-developers.png" />, path: '/services/hire-developer' },
          { title: 'Technologies Consultant', icon: <img src="/static/services/10technology-consulting.png" />, path: '/services/technologies-consultant' },
          { title: 'Management and Support', icon: <img src="/static/services/2Management-and-Support.png" />, path: '/services/technologies-consultant' },
          { title: 'System Integration', icon: <img src="/static/services/7system-integration.png" />, path: '/services/technologies-consultant' },
        ]
      },
      {
        items: [
          { title: 'Enterprise Mobility', icon: <img src="/static/services/3enterprise-mobility.png" />, path: '/services/technologies-consultant' },
          { title: 'Product Engineering', icon: <img src="/static/services/11product-engineering.png" />, path: '/services/technologies-consultant' },
          { title: 'Software Testing & QA', icon: <img src="/static/services/12software-testing-and-qa.png" />, path: '/services/technologies-consultant' },
          { title: 'Application', icon: <img src="/static/services/5app-development.png" />, path: '/services/technologies-consultant' },
          { title: 'Embedded Product', icon: <img src="/static/services/9embedded-product.png" />, path: '/services/technologies-consultant' },
        ]
      },
      {
        items: [
          { title: 'Cloud Application', icon: <img src="/static/services/6cloud-application.png" />, path: '/services/technologies-consultant' },
          { title: 'SAP', icon: <img src="/static/services/14sap.png" />, path: '/services/technologies-consultant' },
          { title: 'Digital Transformation', icon: <img src="/static/services/13digital-transformation.png" />, path: '/services/technologies-consultant' },
          { title: 'Business Intelligence and Analytics', icon: <img src="/static/services/8business-intelligence-analytics.png" />, path: '/services/technologies-consultant' },
        ]
      },
    ]
  },
  {
    title: 'Technologies',
    path: '/technologies/front',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    more: { title: 'More Categories', path: '#' },
    products: MOCK_PRODUCTS,
    tags: TAGS,
    children: [
      {
        subheader: 'Frontend',
        items: [
          { title: 'Angular JS', icon: <img src="/static/technologies/frontend/angularjs.png" />, path: '/services' },
          { title: 'React JS', icon: <img src="/static/technologies/frontend/reactjs.png" />, path: '/services' },
          { title: 'Vue JS', icon: <img src="/static/technologies/frontend/vue-js.png" />, path: '/services' },
          { title: 'Javascript', icon: <img src="/static/technologies/frontend/javascript.png" />, path: '/services' },
          { title: 'CSS3', icon: <img src="/static/technologies/frontend/css3.png" />, path: '/services' },
          { title: 'HTML5', icon: <img src="/static/technologies/frontend/html5.png" />, path: '/services' },
        ]
      },
      {
        subheader: 'Mobile',
        items: [
          { title: 'IOS', icon: <img src="/static/technologies/mobile/ios.png" />, path: '/services' },
          { title: 'Android', icon: <img src="/static/technologies/mobile/android.png" />, path: '/services' },
          { title: 'React Native', icon: <img src="/static/technologies/mobile/anhularjs.png" />, path: '/services' },
          { title: 'Hybrid', icon: <img src="/static/technologies/mobile/anhularjs.png" />, path: '/services' },
          { title: 'Flutter', icon: <img src="/static/technologies/mobile/flutter.png" />, path: '/services' },
          { title: 'Swift', icon: <img src="/static/technologies/mobile/swift.png" />, path: '/services' },
        ]
      },
      {
        subheader: 'Cloud',
        items: [
          { title: 'AWS', icon: <img src="/static/technologies/cloud/AWS.png" />, path: '/services' },
          { title: 'Google Cloud', icon: <img src="/static/technologies/cloud/google cloud.png" />, path: '/services' }
        ]
      },
      {
        subheader: 'Backend',
        items: [
          { title: '.NET', icon: <img src="/static/technologies/backend/netdevelopment.png" />, path: '/services' },
          { title: 'Node JS', icon: <img src="/static/technologies/backend/node-js.png" />, path: '/services' },
          { title: 'C#', icon: <img src="/static/technologies/backend/C#.png" />, path: '/services' },
          { title: 'PHP', icon: <img src="/static/technologies/backend/php.png" />, path: '/services' },
          { title: 'C++', icon: <img src="/static/technologies/backend/C++.png" />, path: '/services' },
          { title: '.NETcore', icon: <img src="/static/technologies/backend/netcore.png" />, path: '/services' },
        ]
      },
      {
        subheader: 'Frameworks',
        items: [
          { title: 'Laravel', icon: <img src="/static/technologies/frameworks/lavarel.png" />, path: '/services' },
          { title: 'MEAN', icon: <img src="/static/technologies/frameworks/mean stack.png" />, path: '/services' },
          { title: 'Codeigniter', icon: <img src="/static/technologies/frameworks/codeigniter.png" />, path: '/services' },
          { title: 'RubyOnRails', icon: <img src="/static/technologies/frameworks/Ruby_On_Rails_Logo.png" />, path: '/services' },
          { title: 'CakePHP', icon: <img src="/static/technologies/frameworks/CakePHP.png" />, path: '/services' }
        ]
      },
      {
        subheader: 'E-commerce',
        items: [
          { title: 'Magneto', icon: <img src="/static/technologies/ecommerce/monento-logo.png" />, path: '/services' },
          { title: 'Shopify', icon: <img src="/static/technologies/ecommerce/Shopify-Logo.png" />, path: '/services' },
          { title: 'WooCommerce', icon: <img src="/static/technologies/ecommerce/WooCommerce.png" />, path: '/services' },
          { title: 'NopCommerce', icon: <img src="/static/technologies/ecommerce/nopcommerce.png" />, path: '/services' }
        ]
      },
      {
        subheader: 'Database',
        items: [
          { title: 'SQL Lerver', icon: <img src="/static/technologies/database/sqlserver.png" />, path: '/services' },
          { title: 'MySQL', icon: <img src="/static/technologies/database/mysql-logo.png" />, path: '/services' },
          { title: 'PostgreSQL', icon: <img src="/static/technologies/database/PostgreSQL.png" />, path: '/services' },
          { title: 'MongoDB', icon: <img src="/static/technologies/database/mongodb.png" />, path: '/services' },
          { title: 'DynamoDB', icon: <img src="/static/technologies/database/DynamoDB.png" />, path: '/services' },
        ]
      },
      {
        subheader: 'CMS',
        items: [
          { title: 'WordPress', icon: <img src="/static/technologies/cms/wordpress.png" />, path: '/services' },
          { title: 'Kentico', icon: <img src="/static/technologies/cms/kentico.png" />, path: '/services' },
          { title: 'Joomla', icon: <img src="/static/technologies/cms/joomla.png" />, path: '/services' },
          { title: 'DotNetNuke', icon: <img src="/static/technologies/cms/DotNetNuke.png" />, path: '/services' },
          { title: 'Sitefinity', icon: <img src="/static/technologies/cms/Sitefinity.png" />, path: '/services' }
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
          { title: 'BFSI', icon: <img src="/static/technologies/industry/bfsi.png" />, path: '/services/custom-software-development' },
          { title: 'Construction', icon: <img src="/static/technologies/industry/construction.png" />, path: '/services/hire-developer' },
          { title: 'Aviation', icon: <img src="/static/technologies/industry/aviation.png" />, path: '/services/technologies-consultant' },
          { title: 'Automobile', icon: <img src="/static/technologies/industry/automobile.png" />, path: '/services/technologies-consultant' },
          { title: 'Engineering/Heavy Equipment', icon: <img src="/static/technologies/industry/bfsi.png" />, path: '/services/technologies-consultant' },
        ]
      },
      {
        items: [
          { title: 'Education & Training', icon: <img src="/static/services" />, path: '/services/technologies-consultant' },
          { title: 'FMCG', icon: <img src="/static/technologies/industry/retail-and-fmcg.png" />, path: '/services/technologies-consultant' },
          { title: 'Travel', icon: <img src="/static/services" />, path: '/services/technologies-consultant' },
          { title: 'Information Technology', icon: <img src="/static/services" />, path: '/services/technologies-consultant' },
          { title: 'Logistics', icon: <img src="/static/services" />, path: '/services/technologies-consultant' },
        ]
      },
      {
        items: [
          { title: 'Consultancy', icon: <img src="/static/services" />, path: '/services/technologies-consultant' },
          { title: 'Marine/Shipping', icon: <img src="/static/services" />, path: '/services/technologies-consultant' },
          { title: 'Pharmaceutical', icon: <img src="/static/services" />, path: '/services/technologies-consultant' },
          { title: 'Oil & Gas', icon: <img src="/static/services" />, path: '/services/technologies-consultant' },
          { title: 'Telecom', icon: <img src="/static/services" />, path: '/services/technologies-consultant' },
        ]
      },
    ]
  },
  {
    title: 'Business Solutions',
    path: '/business-solutions',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    more: { title: 'More Categories', path: '#' },
    products: MOCK_PRODUCTS,
    tags: TAGS,
  },
  {
    title: 'About',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: PATH_PAGE.about
  }
];

export default menuConfig;
