import { incrementBadgeCount, setBadgeCount } from './update-badge-count';
import { showNotificationData } from 'renderer/utils/types';
import AppIcon from '../../../../assets/icon.png';

export const showNotification = ({
  title,
  message,
  navigate,
  link,
}: showNotificationData) => {
  new window.Notification(title, {
    body: message,
    icon: AppIcon,
  }).onclick = () => {
    if (link) {
      navigate(link);
      window.electron.ipcRenderer.sendMessage('focus-on-app', []);
      setBadgeCount(0);
    }
  };
  incrementBadgeCount();
};
