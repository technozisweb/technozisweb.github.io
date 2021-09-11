import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// guards
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// components
import LoadingScreen from '../components/LoadingScreen';
// import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// layouts
import MainLayout from '../layouts/main';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { pathname } = useLocation();
  // const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            // ...(!isDashboard && {
            //   top: 0,
            //   left: 0,
            //   width: 1,
            //   zIndex: 9999,
            //   position: 'fixed'
            // })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <Contact /> },
        // { path: 'faqs', element: <Faqs /> },
        { path: 'industries', element: <Industries /> },
        { path: 'business-solutions', element: <BusinessSolutions />},
        {
          path: 'technologies',
          children: [
            // { path: '/', element: <Technology /> },
            { path: '/front', element: <Technologies /> },
            { path: '/back', element: <Technologies /> },
            { path: '/devops', element: <Technologies /> },
            { path: '/cloud', element: <Technologies /> },
            { path: '/database', element: <Technologies /> },
            { path: '/ecommerce', element: <Technologies /> },
            { path: '/mobile', element: <Technologies /> },
            { path: '/frameworks', element: <Technologies /> },
            { path: '/platforms', element: <Technologies /> },
            { path: '/cms', element: <Technologies /> }
          ]
        },
        {
          path: 'services',
          children: [
            { path: '/', element: <Services /> },
            { path: '/custom-software-development', element: <Services /> },
            { path: '/sap', element: <Services /> },
            { path: '/hire-developer', element: <Services /> },
            { path: '/technology-consultant', element: <Services /> },
            { path: '/management-and-support', element: <Services /> },
            { path: '/product-engineering', element: <Services /> },
            { path: '/application-development', element: <Services /> },
            { path: '/enterprise-mobility', element: <Services />},
            { path: '/cloud-application', element: <Services />},
            { path: '/business-intelligence-and-analytics', element: <Services /> },
            { path: '/embedded-product', element: <Services /> },
            { path: '/software-testing', element: <Services /> },
            { path: '/digital-transformation', element: <Services /> },
            { path: '/system-integration', element: <Services /> },
          ]
        },
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Authentication
// Main
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const About = Loadable(lazy(() => import('../pages/About')));
const Services = Loadable(lazy(() => import('../pages/ServicesPage')));
// const Technology = Loadable(lazy(() => import('../pages/Technology')));
const Technologies = Loadable(lazy(() => import('../pages/TechnologiesPage')));
const Industries = Loadable(lazy(() => import('../pages/IndustriesPage')));
const BusinessSolutions = Loadable(lazy(() => import('../pages/BusinessSolutions')));
const Contact = Loadable(lazy(() => import('../pages/Contact')));
// const Faqs = Loadable(lazy(() => import('../pages/Faqs')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
// Components
