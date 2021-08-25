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
    title: 'Custom Software Development',
    icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
    path: '/services/custom-software-development',
  },
  {
    title: 'Hire developer',
    path: '/services/hire-developer',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
  },
  {
    title: 'Technologies consultant',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: '/services/technologies-consultant',
  },
  {
    title: 'Management and Support',
    icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
    path: '/services/management-and-support',
  },
  {
    title: 'Technologies consultant',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: '/services/technologies-consultant',
  },
  {
    title: 'SAP',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: '/services/sap',
  },
  {
    title: 'Product Engineering',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: '/services/product-engineering',
  },
  {
    title: 'Application Development',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: '/services/application-development',
  },
  {
    title: 'Digital Transformation',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: '/services/digital-transformation',
  },
  {
    title: 'Cloud Application',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: '/services/cloud-application',
  },
  {
    title: 'Business Intelligence and Analytics',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: '/services/business-intelligence-and-analytics',
  },
  {
    title: 'Embedded Product',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: '/services/embedded-product',
  },
  {
    title: 'Enterprise Mobility',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: '/services/enterprise-mobility',
  },
  {
    title: 'System Integration',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: '/services/system-integrtion',
  },
];

export default menuConfig;
