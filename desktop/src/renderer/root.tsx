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
      <div className="h-screen grid grid-cols-12 md:gap-x-5 bg-gray-50">
        <div className="text-base py-0 px-0 col-span-2 min-w-side md:max-w-xxs md:col-span-3">
      {/* <Navbar /> */}

      <div className="">
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
