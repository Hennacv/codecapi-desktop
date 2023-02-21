import { User } from 'firebase/auth';
import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import AuthProvider from './auth-provider';
import Navbar from './components/shared/navbar';
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
      {/* <Navbar /> */}

      <div className="h-screen md:grid md:grid-cols-12 md:gap-x-5">
        <Sidebar />

        <div className="space-y-6 md:col-span-9 md:px-0">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default Root;
