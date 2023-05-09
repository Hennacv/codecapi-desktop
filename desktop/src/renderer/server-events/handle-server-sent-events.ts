import { EventSourcePolyfill } from 'event-source-polyfill';
import { auth } from 'renderer/firebase';
import { NavigateFunction } from 'react-router';
import { MessageEvent } from 'renderer/utils/types';
import { showNotification } from 'renderer/notifications/show-notification';

export const initializeServerSentEventsHandler = (navigate: NavigateFunction) => {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const token = await user.getIdToken();
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const eventSource = new EventSourcePolyfill(API_URL + '/events/stream', {
        headers,
      });

      eventSource.onmessage = (event) => {
        const data: MessageEvent = JSON.parse(event.data);
        switch (data.type) {
          case 'new-question':
            showNotification({
              title: data.user.userName,
              message: 'Asked a new question.',
              navigate: navigate,
              link: `/questions/${data.questionId}`,
            });
            break;
          case 'new-answer':
            showNotification({
              title: data.user.userName,
              message: 'Replied to your question.',
              navigate: navigate,
              link: `/questions/${data.questionId}`
            });
            break;
          default:
            break;
        }
      };
      eventSource.onerror = () => {
        eventSource.close();
      };
    }
  });
};
