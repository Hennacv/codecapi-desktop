import { createMemoryRouter } from 'react-router-dom';
import Login from './components/auth/login';
import QuestionForm from './components/questions/question-form/question-form';
import QuestionDetail from './components/questions/question-details/question-detail';
import QuestionList from './components/questions/question-list/question-list';
import UserList from './components/users/user-list';
import Root from './root';
import QuestionEdit from './components/questions/question-edit/question-edit';

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
            element: <QuestionForm />,
          },
          {
            path: 'edit/:id',
            element: <QuestionEdit />
          }
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
