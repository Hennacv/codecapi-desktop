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
      <Navbar />

      <div className="is-flex">
        <Sidebar />

        <div className="main-content">
          <div className="section">
            <div className="container">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default Root;
