import { app } from 'electron';

export const intializeBadgeCountHandler = () => {
  app.on('browser-window-focus', (event, win) => {
    app.setBadgeCount(0);
  });
};

export const incrementBadgeCount = () => {
  app.setBadgeCount(app.getBadgeCount() + 1);
};
