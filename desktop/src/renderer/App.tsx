import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { queryClient } from './utils/react-query';
import { auth } from './firebase';
import { EventSourcePolyfill } from 'event-source-polyfill';

export default function App() {

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const token = await user.getIdToken();
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const eventSource = new EventSourcePolyfill(API_URL + '/app/events', { headers });
      eventSource.onmessage = ({data}) => {
        data = JSON.parse(data);
        window.electron.ipcRenderer.sendMessage('new-message', [data.user.name, data.question.title]);
      }; 
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
