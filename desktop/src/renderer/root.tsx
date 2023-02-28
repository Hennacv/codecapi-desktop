import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './components/shared/loader';
import Sidebar from './components/shared/sidebar';
import AuthProvider, {
  AuthContextData,
  defaultAuthContext,
} from './context/auth-provider';

export const AuthContext = createContext<AuthContextData>(defaultAuthContext);

function Root() {
  return (
    <AuthProvider>
      <div className="">
        <div className="">
          <Sidebar />
        </div>

        <div className="space-y-6 col-span-9 p-3">
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
