import HomePage from '@containers/homePage';
import PeoplePage from '@containers/peoplePage';
import NotFoundPage from '@containers/notFoundPage';

const routesConfig = [
    {
        path: '/',
        exact : true,
        element: <HomePage />,
    },
    {
        path: '/people',
        exact : true,
        element: <PeoplePage />,
    },
    {
        path: '/not-found',
        exact : true,
        element: <NotFoundPage />,
    },
    {
        path: '/*',
        exact : false,
        element: <NotFoundPage />,
    },
]

export default routesConfig;