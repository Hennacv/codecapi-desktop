import { EventSourcePolyfill } from 'event-source-polyfill';
import { NavigateFunction } from 'react-router';
import { MessageEvent } from 'renderer/utils/types';
import { showNotification } from 'renderer/notifications/show-notification';
import { useUserContext } from 'renderer/hooks/use-user-context';

export const initializeServerSentEventsHandler = (navigate: NavigateFunction) => {
  const { user } = useUserContext();
  if (user) {
    const token = user.getIdToken();
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
};
