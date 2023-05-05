import { Notification } from 'electron';
import { NavigateFunction } from 'react-router-dom';
import { incrementBadgeCount } from './handle-badge-count';

export const sendNotification = (
  title: string,
  message: string,
  navigate: NavigateFunction,
  link?: string
) => {
  const notification = new Notification({
    title: title,
    body: message,
    icon: 'assets/icon.png',
  });

  notification.addListener('click', () => {
    if (link) {
      navigate(link);
      window.focus();
    }
  });

  notification.show();
  incrementBadgeCount();
};
