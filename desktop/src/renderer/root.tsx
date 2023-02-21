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
      {/* <Navbar /> */}

      <div className="h-screen md:grid md:grid-cols-12 md:gap-x-5">
        <Sidebar />

        <div className="space-y-6 md:col-span-9 md:p-3">
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
