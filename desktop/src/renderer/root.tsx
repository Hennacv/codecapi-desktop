import { createContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AuthProvider, {
  AuthContextData,
  defaultAuthContext,
} from './context/auth-provider';
import { contentContainer, mainContainer } from './root-styles.css';
import { bootstrapServerSentEvents } from './server-events/bootstrap-server-sent-events';

import Loader from './components/shared/loader';
import Sidebar from './components/sidebar/sidebar/sidebar';

export const AuthContext = createContext<AuthContextData>(defaultAuthContext);

function Root() {
  const navigate = useNavigate();
  bootstrapServerSentEvents(navigate);

  return (
    <AuthProvider>
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
