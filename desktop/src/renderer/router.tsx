import { createMemoryRouter } from 'react-router-dom';
import Login from './components/auth/login';
import QuestionList from './components/questions/question-list/question-list';
import QuestionDetail from './components/questions/question-details/question-detail';
import NewQuestion from './components/questions/question-new/question-new';
import QuestionEdit from './components/questions/question-edit/question-edit';
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
          {
            path: 'edit/:id',
            element: <QuestionEdit />
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
