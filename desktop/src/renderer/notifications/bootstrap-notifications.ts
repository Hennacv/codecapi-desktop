import { NavigateFunction } from 'react-router-dom';
import { initializeNotificationsHandler } from './handle-send-notifications';
import { intializeBadgeCountHandler } from './handle-badge-count';

let initialized = false;
export const bootsTrapNotifications = (navigate: NavigateFunction) => {
  if (!initialized) {
    initializeNotificationsHandler(navigate);
    intializeBadgeCountHandler();
    initialized = true;
  }
};
