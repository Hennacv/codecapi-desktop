import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './components/shared/loader';
import Sidebar from './components/shared/sidebar';
import AuthProvider, {
  AuthContextData,
  defaultAuthContext,
} from './context/auth-provider';
import { mainContainer } from './root.css';

export const AuthContext = createContext<AuthContextData>(defaultAuthContext);

function Root() {
  return (
    <AuthProvider>
      <div className={mainContainer}>
        <div className="">
          <Sidebar />
        </div>

        <div className="">
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
