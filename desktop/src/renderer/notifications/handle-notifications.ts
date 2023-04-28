import { EventSourcePolyfill } from "event-source-polyfill";
import { auth } from "renderer/firebase";
import { MessageEvent } from "renderer/utils/types";
import { sendNotification } from "./send-notification";

auth.onAuthStateChanged(async (user) => {
  if (user) {
    const token = await user.getIdToken();
    const headers = {
      Authorization: `Bearer ${token}`
    };
    const eventSource = new EventSourcePolyfill(API_URL + '/events/stream', { headers });
    eventSource.onmessage = (event) => {
      const data: MessageEvent = JSON.parse(event.data);
      switch (data.type) {
        case 'new-question':
          sendNotification(data.title, data.message); 
          break;
        case 'new-answer':
          sendNotification(data.title, data.message);
          break;
        default:
          break;
      }
    }
    eventSource.onerror = () => {
      eventSource.close();
    }
  }
});

