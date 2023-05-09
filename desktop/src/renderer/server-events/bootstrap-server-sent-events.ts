import { NavigateFunction } from 'react-router-dom';
import { initializeServerSentEventsHandler } from './handle-server-sent-events';

let initialized = false;
export const bootstrapServerSentEvents = (navigate: NavigateFunction) => {
  if (!initialized) {
    initializeServerSentEventsHandler(navigate);
    initialized = true;
  }
};