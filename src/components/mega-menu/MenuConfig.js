import bookOpenFill from '@iconify/icons-eva/book-open-fill';
import fileFill from '@iconify/icons-eva/file-fill';
import { Icon } from '@iconify/react';
// routes
import { PATH_PAGE } from '../../routes/paths';
// utils
import mockData from '../../utils/mock-data';

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
          { title: 'Custom Software', icon: <img src="/static/services/1custom-software.png" alt="" />, path: '/services/custom-software-development' },
          { title: 'Enterprise Mobility', icon: <img src="/static/services/3enterprise-mobility.png" alt="" />, path: '/services/enterprise-mobility' },
          { title: 'Cloud Application', icon: <img src="/static/services/6cloud-application.png" alt="" />, path: '/services/cloud-application' },
          { title: 'Management and Support', icon: <img src="/static/services/2Management-and-Support.png" alt="" />, path: '/services/management-and-support' },
          { title: 'System Integration', icon: <img src="/static/services/7system-integration.png" alt="" />, path: '/services/system-integration' },
        ]
      },
      {
        items: [
          { title: 'Hire Developer', icon: <img src="/static/services/4hire-developers.png" alt="" />, path: '/services/hire-developer' },
          { title: 'Product Engineering', icon: <img src="/static/services/11product-engineering.png" alt="" />, path: '/services/product-engineering' },
          { title: 'Software Testing & QA', icon: <img src="/static/services/12software-testing-and-qa.png" alt="" />, path: '/services/software-testing' },
          { title: 'Application Development', icon: <img src="/static/services/5app-development.png" alt="" />, path: '/services/application-development' },
          { title: 'Embedded Product', icon: <img src="/static/services/9embedded-product.png" alt="" />, path: '/services/embedded-product' },
        ]
      },
      {
        items: [
          {title: 'Technologies Consultant', icon: <img src="/static/services/10technology-consulting.png" alt="" />, path: '/services/technology-consultant'},
          { title: 'SAP', icon: <img src="/static/services/14sap.png" alt="" />, path: '/services/sap' },
          { title: 'Digital Transformation', icon: <img src="/static/services/13digital-transformation.png" alt="" />, path: '/services/digital-transformation' },
          { title: 'Business Intelligence and Analytics', icon: <img src="/static/services/8business-intelligence-analytics.png" alt="" />, path: '/services/business-intelligence-and-analytics' },
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
          { title: 'Angular JS', icon: <img src="/static/technologies/frontend/angularjs.webp" alt="" />, path: '/technologies/front' },
          { title: 'React JS', icon: <img src="/static/technologies/frontend/reactjs.webp" alt="" />, path: '/technologies/front' },
          { title: 'Vue JS', icon: <img src="/static/technologies/frontend/vue-js.webp" alt="" />, path: '/technologies/front' },
          { title: 'Javascript', icon: <img src="/static/technologies/frontend/javascript.webp" alt="" />, path: '/technologies/front' },
          { title: 'CSS3', icon: <img src="/static/technologies/frontend/css3.webp" alt="" />, path: '/technologies/front' },
          { title: 'HTML5', icon: <img src="/static/technologies/frontend/html5.webp" alt="" />, path: '/technologies/front' },
        ]
      },
      {
        subheader: 'Mobile',
        items: [
          { title: 'IOS', icon: <img src="/static/technologies/mobile/ios.webp" alt="" />, path: '/technologies/mobile' },
          { title: 'Android', icon: <img src="/static/technologies/mobile/android.webp" alt="" />, path: '/technologies/mobile' },
          { title: 'React Native', icon: <img src="/static/technologies/frontend/reactjs.webp" alt="" />, path: '/technologies/mobile' },
          { title: 'Hybrid', icon: <img src="/static/technologies/mobile/hybrid.webp" alt="" />, path: '/technologies/mobile' },
          { title: 'Flutter', icon: <img src="/static/technologies/mobile/flutter.webp" alt="" />, path: '/technologies/mobile' },
          { title: 'Swift', icon: <img src="/static/technologies/mobile/swift.webp" alt="" />, path: '/technologies/mobile' },
        ]
      },
      {
        subheader: 'Cloud',
        items: [
          { title: 'AWS', icon: <img src="/static/technologies/cloud/AWS.webp" alt="" />, path: '/technologies/cloud' },
          { title: 'Google Cloud', icon: <img src="/static/technologies/cloud/google cloud.webp" alt="" />, path: '/technologies/cloud' }
        ]
      },
      {
        subheader: 'Backend',
        items: [
          { title: '.NET', icon: <img src="/static/technologies/backend/netdevelopment.webp" alt="" />, path: '/technologies/back' },
          { title: 'Node JS', icon: <img src="/static/technologies/backend/node-js.webp" alt="" />, path: '/technologies/back' },
          { title: 'C#', icon: <img src="/static/technologies/backend/csharp.webp" alt="" />, path: '/technologies/back' },
          { title: 'PHP', icon: <img src="/static/technologies/backend/php.webp" alt="" />, path: '/technologies/back' },
          { title: 'C++', icon: <img src="/static/technologies/backend/C++.webp" alt="" />, path: '/technologies/back' },
          { title: '.NETcore', icon: <img src="/static/technologies/backend/netcore.webp" alt="" />, path: '/technologies/back' },
        ]
      },
      {
        subheader: 'Frameworks',
        items: [
          { title: 'Laravel', icon: <img src="/static/technologies/frameworks/laravel.webp" alt="" />, path: '/technologies/frameworks' },
          { title: 'MEAN', icon: <img src="/static/technologies/frameworks/mean stack.webp" alt="" />, path: '/technologies/frameworks' },
          { title: 'Codeigniter', icon: <img src="/static/technologies/frameworks/codeigniter.webp" alt="" />, path: '/technologies/frameworks' },
          { title: 'RubyOnRails', icon: <img src="/static/technologies/frameworks/Ruby_On_Rails_Logo.webp" alt="" />, path: '/technologies/frameworks' },
          { title: 'CakePHP', icon: <img src="/static/technologies/frameworks/CakePHP.webp" alt="" />, path: '/technologies/frameworks' }
        ]
      },
      {
        subheader: 'E-commerce',
        items: [
          { title: 'Magento', icon: <img src="/static/technologies/ecommerce/magento-logo.webp" alt="" />, path: '/technologies/ecommerce' },
          { title: 'Shopify', icon: <img src="/static/technologies/ecommerce/Shopify-Logo.webp" alt="" />, path: '/technologies/ecommerce' },
          { title: 'WooCommerce', icon: <img src="/static/technologies/ecommerce/WooCommerce.webp" alt="" />, path: '/technologies/ecommerce' },
          { title: 'NopCommerce', icon: <img src="/static/technologies/ecommerce/nopcommerce.webp" alt="" />, path: '/technologies/ecommerce' }
        ]
      },
      {
        subheader: 'Database',
        items: [
          { title: 'SQL Lerver', icon: <img src="/static/technologies/database/sqlserver.webp" alt="" />, path: '/technologies/database' },
          { title: 'MySQL', icon: <img src="/static/technologies/database/mysql-logo.webp" alt="" />, path: '/technologies/database' },
          { title: 'PostgreSQL', icon: <img src="/static/technologies/database/PostgreSQL.webp" alt="" />, path: '/technologies/database' },
          { title: 'MongoDB', icon: <img src="/static/technologies/database/mongodb.webp" alt="" />, path: '/technologies/database' },
          { title: 'DynamoDB', icon: <img src="/static/technologies/database/DynamoDB.webp" alt="" />, path: '/technologies/database' },
        ]
      },
      {
        subheader: 'Platforms',
        items: [
          { title: 'Zoho', icon: <img src="/static/technologies/platforms/zoho.webp" alt="" />, path: '/technologies/platforms' },
          { title: 'MS Dynamics CRM', icon: <img src="/static/technologies/platforms/MS_Dynamics_CRM.webp" alt="" />, path: '/technologies/platforms' },
          { title: 'PowerBI', icon: <img src="/static/technologies/platforms/PowerBI.webp" alt="" />, path: '/technologies/platforms' },
        ]
      },
      {
        subheader: 'DevOps',
        items: [
          { title: 'Azure Ops', icon: <img src="/static/technologies/devops/azure-devops.webp" alt="" />, path: '/technologies/devops' },
        ]
      },
      {
        subheader: 'CMS',
        items: [
          { title: 'WordPress', icon: <img src="/static/technologies/cms/wordpress.webp" alt="" />, path: '/technologies/cms' },
          { title: 'Kentico', icon: <img src="/static/technologies/cms/kentico.webp" alt="" />, path: '/technologies/cms' },
          { title: 'Joomla', icon: <img src="/static/technologies/cms/joomla.webp" alt="" />, path: '/technologies/cms' },
          { title: 'DotNetNuke', icon: <img src="/static/technologies/cms/DotNetNuke.webp" alt="" />, path: '/technologies/cms' },
          { title: 'Sitefinity', icon: <img src="/static/technologies/cms/Sitefinity.webp" alt="" />, path: '/technologies/cms' }
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
          { title: 'BFSI', icon: <img src="/static/industry/2bfsi.png" alt="" />, path: '/industries' },
          { title: 'Construction', icon: <img src="/static/industry/3construction.png" alt="" />, path: '/industries' },
          { title: 'Aviation', icon: <img src="/static/industry/4aviation.png" alt="" />, path: '/industries' },
          { title: 'Automobile', icon: <img src="/static/industry/14-automobile.png" alt="" />, path: '/industries' },
          { title: 'Engineering/Heavy Equipment', icon: <img src="/static/industry/11engineering.png" alt="" />, path: '/industries' },
        ]
      },
      {
        items: [
          { title: 'Education & Training', icon: <img src="/static/industry/10education.png" alt="" />, path: '/industries' },
          { title: 'Retail and FMCG', icon: <img src="/static/industry/5retail-and-fmcg.png" alt="" />, path: '/industries' },
          { title: 'Media', icon: <img src="/static/industry/9media.png" alt="" />, path: '/' },
          { title: 'Information Technology', icon: <img src="/static/industry/12it.png" alt="" />, path: '/industries' },
          { title: 'Banking', icon: <img src="/static/industry/1bank.png" alt="" />, path: '/industries' },
        ]
      },
      {
        items: [
          { title: 'Consultancy', icon: <img src="/static/industry/7consultancy.png" alt="" />, path: '/industries' },
          // { title: 'Retail', icon: <img src="/static/industry/.png" alt="" />, path: '/industries' },
          { title: 'Pharmaceutical', icon: <img src="/static/industry/13-pharma.png" alt="" />, path: '/industries' },
          { title: 'Healthcare', icon: <img src="/static/industry/6healthcare.png" alt="" />, path: '/industries' },
          { title: 'Telecom', icon: <img src="/static/industry/8telecom.png" alt="" />, path: '/industries' },
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
  },
  {
    title: 'Contact',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: PATH_PAGE.contact
  }
];

export default menuConfig;
