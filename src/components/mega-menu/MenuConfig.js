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
          { title: 'Technologies Consultant', icon: <img src="/static/services/10technology-consulting.png" />, path: '/services/technology-consultant' },
          { title: 'Management and Support', icon: <img src="/static/services/2Management-and-Support.png" />, path: '/services/management-and-support' },
          { title: 'System Integration', icon: <img src="/static/services/7system-integration.png" />, path: '/services/system-integration' },
        ]
      },
      {
        items: [
          { title: 'Enterprise Mobility', icon: <img src="/static/services/3enterprise-mobility.png" />, path: '/services/enterprise-mobility' },
          { title: 'Product Engineering', icon: <img src="/static/services/11product-engineering.png" />, path: '/services/product-engineering' },
          { title: 'Software Testing & QA', icon: <img src="/static/services/12software-testing-and-qa.png" />, path: '/services/software-testing' },
          { title: 'Application Development', icon: <img src="/static/services/5app-development.png" />, path: '/services/application-development' },
          { title: 'Embedded Product', icon: <img src="/static/services/9embedded-product.png" />, path: '/services/embedded-product' },
        ]
      },
      {
        items: [
          { title: 'Cloud Application', icon: <img src="/static/services/6cloud-application.png" />, path: '/services/cloud-application' },
          { title: 'SAP', icon: <img src="/static/services/14sap.png" />, path: '/services/sap' },
          { title: 'Digital Transformation', icon: <img src="/static/services/13digital-transformation.png" />, path: '/services/digital-transformation' },
          { title: 'Business Intelligence and Analytics', icon: <img src="/static/services/8business-intelligence-analytics.png" />, path: '/services/business-intelligence-and-analytics' },
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
          { title: 'Angular JS', icon: <img src="/static/technologies/frontend/angularjs.png" />, path: '/technologies/front' },
          { title: 'React JS', icon: <img src="/static/technologies/frontend/reactjs.png" />, path: '/technologies/front' },
          { title: 'Vue JS', icon: <img src="/static/technologies/frontend/vue-js.png" />, path: '/technologies/front' },
          { title: 'Javascript', icon: <img src="/static/technologies/frontend/javascript.png" />, path: '/technologies/front' },
          { title: 'CSS3', icon: <img src="/static/technologies/frontend/css3.png" />, path: '/technologies/front' },
          { title: 'HTML5', icon: <img src="/static/technologies/frontend/html5.png" />, path: '/technologies/front' },
        ]
      },
      {
        subheader: 'Mobile',
        items: [
          { title: 'IOS', icon: <img src="/static/technologies/mobile/ios.png" />, path: '/technologies/mobile' },
          { title: 'Android', icon: <img src="/static/technologies/mobile/android.png" />, path: '/technologies/mobile' },
          { title: 'React Native', icon: <img src="/static/technologies/frontend/reactjs.png" />, path: '/technologies/mobile' },
          { title: 'Hybrid', icon: <img src="/static/technologies/mobile/hybrid.png" />, path: '/technologies/mobile' },
          { title: 'Flutter', icon: <img src="/static/technologies/mobile/flutter.png" />, path: '/technologies/mobile' },
          { title: 'Swift', icon: <img src="/static/technologies/mobile/swift.png" />, path: '/technologies/mobile' },
        ]
      },
      {
        subheader: 'Cloud',
        items: [
          { title: 'AWS', icon: <img src="/static/technologies/cloud/AWS.png" />, path: '/technologies/cloud' },
          { title: 'Google Cloud', icon: <img src="/static/technologies/cloud/google cloud.png" />, path: '/technologies/cloud' }
        ]
      },
      {
        subheader: 'Backend',
        items: [
          { title: '.NET', icon: <img src="/static/technologies/backend/netdevelopment.png" />, path: '/technologies/back' },
          { title: 'Node JS', icon: <img src="/static/technologies/backend/node-js.png" />, path: '/technologies/back' },
          { title: 'C#', icon: <img src="/static/technologies/backend/csharp.png" />, path: '/technologies/back' },
          { title: 'PHP', icon: <img src="/static/technologies/backend/php.png" />, path: '/technologies/back' },
          { title: 'C++', icon: <img src="/static/technologies/backend/C++.png" />, path: '/technologies/back' },
          { title: '.NETcore', icon: <img src="/static/technologies/backend/netcore.png" />, path: '/technologies/back' },
        ]
      },
      {
        subheader: 'Frameworks',
        items: [
          { title: 'Laravel', icon: <img src="/static/technologies/frameworks/laravel.png" />, path: '/technologies/frameworks' },
          { title: 'MEAN', icon: <img src="/static/technologies/frameworks/mean stack.png" />, path: '/technologies/frameworks' },
          { title: 'Codeigniter', icon: <img src="/static/technologies/frameworks/codeigniter.png" />, path: '/technologies/frameworks' },
          { title: 'RubyOnRails', icon: <img src="/static/technologies/frameworks/Ruby_On_Rails_Logo.png" />, path: '/technologies/frameworks' },
          { title: 'CakePHP', icon: <img src="/static/technologies/frameworks/CakePHP.png" />, path: '/technologies/frameworks' }
        ]
      },
      {
        subheader: 'E-commerce',
        items: [
          { title: 'Magento', icon: <img src="/static/technologies/ecommerce/magento-logo.png" />, path: '/technologies/ecommerce' },
          { title: 'Shopify', icon: <img src="/static/technologies/ecommerce/Shopify-Logo.png" />, path: '/technologies/ecommerce' },
          { title: 'WooCommerce', icon: <img src="/static/technologies/ecommerce/WooCommerce.png" />, path: '/technologies/ecommerce' },
          { title: 'NopCommerce', icon: <img src="/static/technologies/ecommerce/nopcommerce.png" />, path: '/technologies/ecommerce' }
        ]
      },
      {
        subheader: 'Database',
        items: [
          { title: 'SQL Lerver', icon: <img src="/static/technologies/database/sqlserver.png" />, path: '/technologies/database' },
          { title: 'MySQL', icon: <img src="/static/technologies/database/mysql-logo.png" />, path: '/technologies/database' },
          { title: 'PostgreSQL', icon: <img src="/static/technologies/database/PostgreSQL.png" />, path: '/technologies/database' },
          { title: 'MongoDB', icon: <img src="/static/technologies/database/mongodb.png" />, path: '/technologies/database' },
          { title: 'DynamoDB', icon: <img src="/static/technologies/database/DynamoDB.png" />, path: '/technologies/database' },
        ]
      },
      {
        subheader: 'Platforms',
        items: [
          { title: 'Zoho', icon: <img src="/static/technologies/platforms/zoho.png" />, path: '/technologies/platforms' },
          { title: 'MS Dynamics CRM', icon: <img src="/static/technologies/platforms/MS_Dynamics_CRM.png" />, path: '/technologies/platforms' },
          { title: 'PowerBI', icon: <img src="/static/technologies/platforms/PowerBI.png" />, path: '/technologies/platforms' },
        ]
      },
      {
        subheader: 'DevOps',
        items: [
          { title: 'Azure Ops', icon: <img src="/static/technologies/devops/azure-devops.png" />, path: '/technologies/devops' },
        ]
      },
      {
        subheader: 'CMS',
        items: [
          { title: 'WordPress', icon: <img src="/static/technologies/cms/wordpress.png" />, path: '/technologies/cms' },
          { title: 'Kentico', icon: <img src="/static/technologies/cms/kentico.png" />, path: '/technologies/cms' },
          { title: 'Joomla', icon: <img src="/static/technologies/cms/joomla.png" />, path: '/technologies/cms' },
          { title: 'DotNetNuke', icon: <img src="/static/technologies/cms/DotNetNuke.png" />, path: '/technologies/cms' },
          { title: 'Sitefinity', icon: <img src="/static/technologies/cms/Sitefinity.png" />, path: '/technologies/cms' }
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
          { title: 'BFSI', icon: <img src="/static/industry/2bfsi.png" />, path: '/industries' },
          { title: 'Construction', icon: <img src="/static/industry/3construction.png" />, path: '/industries' },
          { title: 'Aviation', icon: <img src="/static/industry/4aviation.png" />, path: '/industries' },
          { title: 'Automobile', icon: <img src="/static/industry/automobile.png" />, path: '/industries' },
          { title: 'Engineering/Heavy Equipment', icon: <img src="/static/industry/bfsi.png" />, path: '/industries' },
        ]
      },
      {
        items: [
          { title: 'Education & Training', icon: <img src="/static/industry/10education.png" />, path: '/industries' },
          { title: 'FMCG', icon: <img src="/static/industry/5retail-and-fmcg.png" />, path: '/industries' },
          { title: 'Media', icon: <img src="/static/industry/9media.png" />, path: '/' },
          { title: 'Information Technology', icon: <img src="/static/industry/12it.png" />, path: '/industries' },
          { title: 'Engineering', icon: <img src="/static/industry/11engineering.png" />, path: '/industries' },
        ]
      },
      {
        items: [
          { title: 'Consultancy', icon: <img src="/static/industry/7consultancy.png" />, path: '/industries' },
          { title: 'Retail', icon: <img src="/static/industry/.png" />, path: '/industries' },
          { title: 'Pharmaceutical', icon: <img src="/static/industry/13-pharma.png" />, path: '/industries' },
          { title: 'Healthcare', icon: <img src="/static/industry/6healthcare.png" />, path: '/industries' },
          { title: 'Telecom', icon: <img src="/static/industry/8telecom.png" />, path: '/industries' },
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
