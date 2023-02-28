import { User } from 'firebase/auth';
import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import AuthProvider from './auth-provider';
import Sidebar from './components/shared/sidebar';

interface AuthContextData {
  user: User | null;
  signIn: () => void;
  signOut: () => void;
}

const defaultAuthContext = {
  user: null,
  signIn: () => {},
  signOut: () => {},
};

export const AuthContext = createContext<AuthContextData>(defaultAuthContext);

function Root() {
  return (
    <AuthProvider>
      <div className="h-screen grid grid-cols-6 md:grid-cols-12 md:gap-x-5">
        <div className="text-base py-6 px-2 md:col-span-3 md:py-0 md:px-0">
          <Sidebar />
        </div>

        <div className="">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default Root;
