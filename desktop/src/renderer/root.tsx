import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './components/shared/loader';
import Navbar from './components/shared/navbar';
import Sidebar from './components/shared/sidebar';
import AuthProvider, {
  AuthContextData,
  defaultAuthContext,
} from './context/auth-provider';

export const AuthContext = createContext<AuthContextData>(defaultAuthContext);

function Root() {
  return (
    <AuthProvider>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="w-full mt-20 ml-60">
          <Loader />

          <div className="block p-11">
            <div className="relative m-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default Root;
