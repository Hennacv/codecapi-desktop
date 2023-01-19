import { createMemoryRouter } from 'react-router-dom';
import Login from './components/auth/login';
import NewQuestion from './components/questions/new-question';
import Home from './components/questions/question-list';
import UserList from './components/users/user-list';
import Root from './root';

const router = createMemoryRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'new-question',
        element: <NewQuestion />,
      },
      {
        path: 'users',
        element: <UserList />,
      },
    ],
  },
]);

export default router;
