import { Navigate } from 'react-router-dom';

import SimpleLayout from './common/components/layouts/simple/Layout';

import Dashboard from './pages/Dashboard';
import Launches from './pages/Launches';

const routes = [
  {
    path: 'app',
    element: <SimpleLayout />,
    children: [
      { path: '', exact: true, element: <Navigate to="/app/dashboard" /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'launches', element: <Launches /> },
      { path: '*', element: <Navigate to="/app/dashboard" /> }
    ]
  },
  {
    path: '',
    children: [
      { path: '', exact: true, element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/app/dashboard" /> }
    ]
  },
];

export default routes;
