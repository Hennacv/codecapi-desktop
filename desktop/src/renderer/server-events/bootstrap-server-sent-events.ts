import { NavigateFunction } from 'react-router-dom';
import { initializeServerSentEventsHandler } from './handle-server-sent-events';

let initialized = false;
export const bootstrapServerSentEvents = (navigate: NavigateFunction, token: string) => {
  if (!initialized) {
    initializeServerSentEventsHandler(navigate, token);
    initialized = true;
  }
};