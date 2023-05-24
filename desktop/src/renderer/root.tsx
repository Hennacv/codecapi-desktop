import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import AuthProvider, {
  AuthContextData,
  defaultAuthContext,
} from './context/auth-provider';
import { contentContainer, mainContainer } from './root-styles.css';

import Loader from './components/shared/loader';
import Sidebar from './components/sidebar/sidebar/sidebar';
import ServerSideEventHandler from './server-events/server-sent-event-handler';

export const AuthContext = createContext<AuthContextData|undefined>(undefined);

function Root() {
  return (
    <AuthProvider>
      <ServerSideEventHandler />
      <div className={mainContainer}>
        <Sidebar />
        <div className={contentContainer} id='main'>
          <Loader />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default Root;
