import HomePage from '@containers/homePage';
import PeoplePage from '@containers/peoplePage';

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
]

export default routesConfig;