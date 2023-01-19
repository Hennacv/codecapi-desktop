import { createMemoryRouter } from 'react-router-dom';
import Login from './components/auth/login';
import NewQuestion from './components/questions/new-question';
import QuestionDetail from './components/questions/question-detail';
import QuestionList from './components/questions/question-list';
import UserList from './components/users/user-list';
import Root from './root';

const router = createMemoryRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'questions',
        children: [
          {
            path: '',
            element: <QuestionList />,
          },
          {
            path: ':id',
            element: <QuestionDetail />,
          },
          {
            path: 'new',
            element: <NewQuestion />,
          },
        ],
      },
      {
        path: 'auth',
        children: [
          {
            path: 'login',
            element: <Login />,
          },
        ],
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            element: <UserList />,
          },
        ],
      },
    ],
  },
]);

export default router;
