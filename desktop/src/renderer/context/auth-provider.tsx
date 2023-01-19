import { User } from 'firebase/auth';
import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from 'renderer/firebase';
import { AuthContext } from 'renderer/root';
import api from 'renderer/utils/api';

interface Props {
  children: ReactNode;
}

export interface AuthContextData {
  user: User | null;
  signIn: () => void;
  signOut: () => void;
}

export const defaultAuthContext = {
  user: null,
  signIn: () => {},
  signOut: () => {},
};

function AuthProvider(props: Props) {
  const [user, setUser] = useState(auth.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        navigate('/questions');
      } else {
        navigate('/auth/login');
      }
    });
  }, []);

  async function signIn() {
    const res = await api.get('/auth');
    const { url } = res.data;
    window.open(url, '_blank');
  }

  async function signOut() {
    await auth.signOut();
  }

  const value = {
    user,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export default AuthProvider;
