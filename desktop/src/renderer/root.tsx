import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import AuthProvider, {
  AuthContextData,
  defaultAuthContext,
} from './context/auth-provider';
import { contentContainer, mainContainer } from './root-styles.css';

import Loader from './components/shared/loader';
import Sidebar from './components/sidebar/sidebar/sidebar';

export const AuthContext = createContext<AuthContextData>(defaultAuthContext);

function Root() {
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
