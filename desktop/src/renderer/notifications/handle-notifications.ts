import { EventSourcePolyfill } from 'event-source-polyfill';
import { auth } from 'renderer/firebase';
import { MessageEvent } from 'renderer/utils/types';
import { sendNotification } from './send-notification';

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
          sendNotification(
            data.user.userName,
            'Asked a new question.',
            `/questions/${data.questionId}`
          );
          break;
        case 'new-answer':
          sendNotification(
            data.user.userName,
            'Replied to your question.',
            `/questions/${data.questionId}`
          );
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
