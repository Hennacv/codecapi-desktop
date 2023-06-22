import { createMemoryRouter } from 'react-router-dom';
import Login from './components/auth/login';
import QuestionList from './components/questions/question-list/question-list';
import QuestionDetail from './components/questions/question-details/question-detail';
import NewQuestion from './components/questions/question-new/question-new';
import QuestionEdit from './components/questions/question-edit/question-edit';
import UserList from './components/users/user-list';
import Root from './root';
import UserProfile from './components/users/user-profile/user-profile';
import UserEdit from './components/users/user-edit/user-edit';
import AnnouncementList from './components/announcements/announcement-list/announcement-list';
import NewAnnouncement from './components/announcements/announcement-new/announcement-new';
import Tricks from './components/tricks/trick-list/trick-list';
import NewTrick from './components/tricks/trick-new/trick-new';
import TrickEdit from './components/tricks/trick-edit/trick-edit';
import AnnouncementDetail from './components/announcements/announcement-details/announcment-detail';
import AnnouncementEdit from './components/announcements/announcement-edit/announcement-edit';

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
            element: <QuestionEdit />,
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
          {
            path: ':id',
            element: <UserProfile />,
          },
          {
            path: 'edit/:id',
            element: <UserEdit />,
          },
        ],
      },
      {
        path: 'announcements',
        children: [
          {
            path: '',
            element: <AnnouncementList />,
          },
          {
            path: 'new',
            element: <NewAnnouncement />,
          },
          {
            path: ':id',
            element: <AnnouncementDetail />,
          },
          {
            path: 'edit/:id',
            element: <AnnouncementEdit />,
          },
        ],
      },
      {
        path: 'tricks',
        children: [
          {
            path: '',
            element: <Tricks />,
          },
          {
            path: 'new',
            element: <NewTrick />,
          },
          {
            path: 'edit/:id',
            element: <TrickEdit />,
          },
        ]
      },
    ],
  },
]);

export default router;
